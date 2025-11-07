---
layout: default
title: Adaptive Prediction Horizons - Research Project
---

# 🔄 Adaptive Predictive Reinforcement Learning: Entropy-Driven Adaptive Prediction Horizons

<div class="project-header">
  <div class="contribution-badge created">PROPOSED MODEL</div>
  <div class="project-status-badge ongoing">ONGOING</div>
  <p><strong>2024 - Present</strong> • Aston University</p>
</div>

<div class="table-of-contents">
  <h3>📑 Table of Contents</h3>
  <ul>
    <li><a href="#hero">1. Overview</a></li>
    <li><a href="#motivation">2. Research Motivation</a></li>
    <li><a href="#architecture">3. Adaptive Architecture</a></li>
    <li><a href="#implementation">4. Implementation Notes</a></li>
    <li><a href="#lunar">5. LunarLander Experiments</a></li>
    <li><a href="#lite">6. LiteSocNavGym Experiments</a></li>
    <li><a href="#status">7. Current Status & Next Steps</a></li>
    <li><a href="#resources">8. Resources & Links</a></li>
  </ul>
</div>

---

## <a id="hero"></a>1. Overview

<div class="hero-section">
  <div class="hero-section-grid">
    <div class="hero-section-content">
      <h2>Entropy-guided horizons for faster, safer RL</h2>
      <p>
        Fixed prediction horizons lead to wasted computation in easy scenes and brittle planning in complex ones. This project uses policy entropy to adapt the depth of world-model rollouts on the fly. Early results show faster convergence in <strong>LunarLander-v2</strong> and stronger success/return trade-offs in <strong>LiteSocNavGym</strong>, while keeping inference latency suitable for robotics.
      </p>

      <div class="quick-stats">
        <div class="quick-stats-item">
          <div class="quick-stats-item-icon">⏱️</div>
          <div class="quick-stats-item-value">53.48 h to 500k steps</div>
          <div class="quick-stats-item-label">Entropy horizon vs 59.54 h fixed (LunarLander)</div>
        </div>
        <div class="quick-stats-item">
          <div class="quick-stats-item-icon">100%</div>
          <div class="quick-stats-item-value">Success rate</div>
          <div class="quick-stats-item-label">SAC + CGLSTM (adaptive) in LiteSocNavGym</div>
        </div>
        <div class="quick-stats-item">
          <div class="quick-stats-item-icon">5.62 days</div>
          <div class="quick-stats-item-value">Full training</div>
          <div class="quick-stats-item-label">LiteSocNavGym vs 28.41 days for DreamerV3 + CGLSTM</div>
        </div>
      </div>
    </div>

    <div class="hero-section-media">
      <img src="{{ '/assets/images/SAC_CGLSTM_Adaptive.jpg' | relative_url }}" alt="Adaptive prediction horizon pipeline" loading="lazy" />
      <p>Adaptive horizon pipeline: policy entropy controls how many CGLSTM rollouts are generated before the SAC update.</p>
    </div>
  </div>
</div>

---

## <a id="motivation"></a>2. Research Motivation

- Fixed horizons in world-model RL either over-plan (wasting compute when the scene is simple) or under-plan (failing when dynamics are chaotic).
- Policy entropy provides a continuous indicator of decision uncertainty; high entropy → longer lookahead, low entropy → shorter horizon.
- Target applications include social navigation and aerial robotics, where scene complexity changes rapidly and latency budgets are strict.

---

## <a id="architecture"></a>3. Adaptive Architecture

<p>The adaptive controller sits between the CGLSTM world model and the reinforcement learner. At each step it samples multiple horizon candidates, evaluates expected entropy reduction, and commits to the smallest depth that meets a confidence threshold.</p>

<img src="{{ '/assets/images/output.png' | relative_url }}" alt="Flow diagram comparing DreamerV3 GRU and DreamerV3 CGLSTM" loading="lazy" style="width: 100%; max-width: 660px; height: auto; border-radius: 8px; border: 1px solid var(--border); margin: 1.5rem 0;">
<p style="margin-top: -1rem; font-size: 0.85rem; color: var(--text-light); font-style: italic; text-align: center;">Replacing the LayerNorm GRU in DreamerV3 with CGLSTM gives higher fidelity latent rollouts before the adaptive controller is applied.</p>

<img src="{{ '/assets/images/output_lite.png' | relative_url }}" alt="LiteSocNavGym rollout diagram with adaptive prediction horizon" loading="lazy" style="width: 100%; max-width: 720px; height: auto; border-radius: 8px; border: 1px solid var(--border); margin: 1.5rem 0;">
<p style="margin-top: -1rem; font-size: 0.85rem; color: var(--text-light); font-style: italic; text-align: center;">Adaptive horizon inside LiteSocNavGym: when policy entropy spikes, additional CGLSTM rollouts are appended before the SAC update.</p>

---

## <a id="implementation"></a>4. Implementation Notes

- Horizon candidates: {1,2,4,6,8} with entropy thresholds at 0.2, 0.35, 0.5.
- Entropy is computed from the SAC policy logits; if entropy > threshold<sub>k</sub>, expand horizon to next candidate.
- CGLSTM hidden state is reused across horizon branches to avoid recomputing encodings.

```python
def choose_horizon(entropy, candidates=(1, 2, 4, 6, 8), thresholds=(0.2, 0.35, 0.5, 0.65)):
    horizon = candidates[0]
    for h, t in zip(candidates[1:], thresholds):
        if entropy > t:
            horizon = h
        else:
            break
    return horizon

entropy = policy_entropy(obs)
steps_ahead = choose_horizon(entropy)
rollout = world_model.rollout(obs, steps=steps_ahead)
value, action = sac.update(rollout)
```

---

## <a id="lunar"></a>5. LunarLander Experiments (500k steps)

### 5.1 Window-slide selection for CGLSTM
<img src="{{ '/assets/images/WindowSlide_TrainLoss-1.jpg' | relative_url }}" alt="Training loss over steps for window slides 16, 32, 64" loading="lazy" style="width: 100%; max-width: 680px; height: auto; border-radius: 8px; border: 1px solid var(--border); margin: 1.5rem 0;">
<p style="margin-top: -1rem; font-size: 0.85rem; color: var(--text-light); text-align: center;">Entropy controller uses a 32-step window (middle curve) – fastest loss decay without the instability seen for 16.</p>

### 5.2 Horizon candidate comparison
<img src="{{ '/assets/images/Lunarlander_Horizon_Comparison-1.jpg' | relative_url }}" alt="Reward curves comparing two horizon sets" loading="lazy" style="width: 100%; max-width: 760px; height: auto; border-radius: 8px; border: 1px solid var(--border); margin: 1.5rem 0;">
<p style="margin-top: -1rem; font-size: 0.85rem; color: var(--text-light); text-align: center;">Candidate set {1,2,3,4,5} converges quickly; {1,2,4,6,8} overtakes after 200k steps. Set B selected for final runs.</p>

### 5.3 Training performance
<img src="{{ '/assets/images/TrainingReturn_LunderLander-1.jpg' | relative_url }}" alt="Training results for LunarLander" loading="lazy" style="width: 100%; max-width: 780px; height: auto; border-radius: 8px; border: 1px solid var(--border); margin: 1.5rem 0;">
<p style="margin-top: -1rem; font-size: 0.85rem; color: var(--text-light); text-align: center;">Entropy-driven horizon (cyan) matches DreamerV3 + CGLSTM convergence while remaining stable after 350k steps.</p>

### 5.4 Wall-time savings
<img src="{{ '/assets/images/Lunarlander_Fixed_vs_Entropy.jpg' | relative_url }}" alt="Wall-time comparison fixed vs entropy horizon" loading="lazy" style="width: 100%; max-width: 760px; height: auto; border-radius: 8px; border: 1px solid var(--border); margin: 1.5rem 0;">
<p style="margin-top: -1rem; font-size: 0.85rem; color: var(--text-light); text-align: center;">Entropy controller reaches 500k steps in <strong>53.48</strong> hours (blue) vs <strong>59.54</strong> hours for the fixed horizon baseline (orange).</p>

---

## <a id="lite"></a>6. LiteSocNavGym Experiments (4M steps)

### 6.1 Training reward progression
<img src="{{ '/assets/images/TrainingReturn_SocNavGym-1.jpg' | relative_url }}" alt="Training results for LiteSocNavGym" loading="lazy" style="width: 100%; max-width: 780px; height: auto; border-radius: 8px; border: 1px solid var(--border); margin: 1.5rem 0;">
<p style="margin-top: -1rem; font-size: 0.85rem; color: var(--text-light); text-align: center;">Adaptive horizon (cyan) and DreamerV3 + CGLSTM (brown) are the only agents sustaining positive reward after 3M steps.</p>

### 6.2 Success rate vs average return
<img src="{{ '/assets/images/AverageReturnvsInferenceTime.png' | relative_url }}" alt="Success rate vs average return" loading="lazy" style="width: 100%; max-width: 780px; height: auto; border-radius: 8px; border: 1px solid var(--border); margin: 1.5rem 0;">
<p style="margin-top: -1rem; font-size: 0.85rem; color: var(--text-light); text-align: center;">Adaptive horizon with CGLSTM achieves ~0.48 average return at ~1.6 ms inference, outperforming PPO/TD3 in both axes.</p>

### 6.3 Training cost profile
<img src="{{ '/assets/images/TrainTimeLite.png' | relative_url }}" alt="Training time comparison" loading="lazy" style="width: 100%; max-width: 780px; height: auto; border-radius: 8px; border: 1px solid var(--border); margin: 1.5rem 0;">
<p style="margin-top: -1rem; font-size: 0.85rem; color: var(--text-light); text-align: center;">Adaptive horizon needs <strong>5.62</strong> days to train (hidden size 256), versus <strong>28.41</strong> days for DreamerV3 + CGLSTM.</p>

### 6.4 Success vs return scatter (aggregate)
<img src="{{ '/assets/images/2StepAhead-MASPM (Fixed Horizon).jpg' | relative_url }}" alt="Success vs average return for adaptive variants" loading="lazy" style="width: 100%; max-width: 760px; height: auto; border-radius: 8px; border: 1px solid var(--border); margin: 1.5rem 0;">
<p style="margin-top: -1rem; font-size: 0.85rem; color: var(--text-light); text-align: center;">Scatter from viva slides: adaptive SAC variants dominate the top-right corner (high success, high return).</p>

### 6.5 Dreamer comparison
<img src="{{ '/assets/images/DreamerV3_CGLSTM.jfif' | relative_url }}" alt="DreamerV3 and DreamerV3 + CGLSTM comparison" loading="lazy" style="width: 100%; max-width: 640px; height: auto; border-radius: 8px; border: 1px solid var(--border); margin: 1.5rem 0;">
<p style="margin-top: -1rem; font-size: 0.85rem; color: var(--text-light); text-align: center;">DreamerV3 + CGLSTM (orange marker) obtains the best success/return compromise, justifying its role as a teacher for adaptive SAC.</p>

---

## <a id="status"></a>7. Current Status & Next Steps

<strong>Completed so far:</strong>
- Integrated entropy-driven controller with SAC + CGLSTM on LunarLander-v2 and LiteSocNavGym.
- Benchmarked wall-time, training-time, and inference-time trade-offs versus DreamerV3 and classical baselines.
- Selected stable hyperparameters (CGLSTM window = 32, horizon set {1,2,4,6,8}).

<strong>Next steps:</strong>
- Extend to full SocNavGym with richer social scenarios and compare against predictive-world-model agent.
- Evaluate robustness under sensor noise and partial observability.
- Port adaptive horizon logic into DreamerV3 for end-to-end latent adaptation.
- Prepare submission for journal special issue on Adaptive RL in Robotics.

---

## <a id="resources"></a>8. Resources & Links

<p><strong>Technologies:</strong> Python • PyTorch • Gymnasium • SAC • DreamerV3 • CGLSTM</p>

- <a href="https://github.com/gnns4hri/SocNavGym" target="_blank">SocNavGym Environment</a>
- <a href="{{ '/projects/cosine-gated-lstm' | relative_url }}">Cosine-Gated LSTM</a>
- <a href="{{ '/projects/predictive-world-models' | relative_url }}">Predictive World Models</a>
- <a href="{{ '/collaborations' | relative_url }}">Collaboration Interest Form</a>

<div style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid var(--border);">
  <a href="{{ '/portfolio' | relative_url }}" class="btn">← Back to Research Portfolio</a>
</div>

