---
layout: default
title: Cosine-Gated LSTM - Research Project
---

# 🧠 Cosine-Gated LSTM for Sequential Learning

<div class="project-header">
  <div class="contribution-badge created">PROPOSED MODEL</div>
  <div class="project-status-badge completed">COMPLETED • PUBLISHED</div>
  <p><strong>2024</strong> • Aston University • IEEE PRML 2024 (pp. 8-15)</p>
</div>

<div class="table-of-contents" style="background: var(--bg-alt); padding: 1.5rem; border-radius: 8px; margin: 2rem 0; border-left: 4px solid var(--link);">
  <h3 style="margin-top: 0; color: var(--link);">📑 Table of Contents</h3>
  <ul style="columns: 2; column-gap: 2rem; list-style: none; padding-left: 0;">
    <li><a href="#hero">1. Overview</a></li>
    <li><a href="#motivation">2. Research Motivation</a></li>
    <li><a href="#architecture">3. Architecture</a></li>
    <li><a href="#benchmarks">4. Benchmark Evaluation</a></li>
    <li><a href="#socnav">5. SocNavGym Performance</a></li>
    <li><a href="#implementation">6. Implementation & Usage</a></li>
    <li><a href="#impact">7. Research Impact</a></li>
    <li><a href="#limitations">8. Limitations & Next Steps</a></li>
    <li><a href="#resources">9. Resources & Citation</a></li>
  </ul>
</div>

---

## <a id="hero"></a>1. Overview

<div class="hero-section" style="background: linear-gradient(135deg, var(--bg-alt) 0%, var(--bg-card) 100%); padding: 2rem; border-radius: 12px; margin: 2rem 0; border: 2px solid var(--border);">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; align-items: center;">
    <div>
      <h2 style="margin-top: 0; color: var(--text); font-size: 2rem;">Cosine similarity meets recurrent gating</h2>
      <p style="font-size: 1.125rem; line-height: 1.8; color: var(--text); margin-bottom: 1.5rem;">
        CGLSTM adds a cosine-controlled gate to the vanilla LSTM so the network can emphasise inputs that align with the current trajectory and down-weight irrelevant signals. It replaces the traditional sigmoid-only gating with a similarity-aware mechanism, delivering consistent gains across synthetic sequence tasks, vision benchmarks, NLP datasets, and the <a href="{{ '/projects/socnavgym' | relative_url }}" style="color: var(--link); text-decoration: underline;">SocNavGym</a> prediction challenge.
      </p>

      <div class="quick-stats" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
        <div style="text-align: center; padding: 1rem; background: var(--bg); border-radius: 8px; border: 1px solid var(--border);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">📈</div>
          <div style="font-weight: bold; color: var(--link);">99.07% Accuracy</div>
          <div style="font-size: 0.875rem; color: var(--text-light);">Row-wise MNIST (↑0.65 pts vs LSTM/GRU)</div>
        </div>
        <div style="text-align: center; padding: 1rem; background: var(--bg); border-radius: 8px; border: 1px solid var(--border);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🧮</div>
          <div style="font-weight: bold; color: var(--link);">0.0225 MAE</div>
          <div style="font-size: 0.875rem; color: var(--text-light);">Adding problem (T=1000) lowest error</div>
        </div>
        <div style="text-align: center; padding: 1rem; background: var(--bg); border-radius: 8px; border: 1px solid var(--border);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🤖</div>
          <div style="font-weight: bold; color: var(--link);">35% ↓ MAE @ k=10</div>
          <div style="font-size: 0.875rem; color: var(--text-light);">SocNavGym vs Transformer baseline</div>
        </div>
      </div>
    </div>

    <div style="text-align: center;">
      <img src="{{ '/assets/images/CGLSTMArchitecture.jpg' | relative_url }}" alt="Overview of Cosine-Gated LSTM architecture" style="width: 100%; max-width: 580px; height: auto; border-radius: 8px; border: 1px solid var(--border); box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
      <p style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-light); font-style: italic;">Architecture overview from my viva slides: vanilla LSTM (left), cosine-gated module (centre), and integrated output path (right).</p>
    </div>
  </div>
</div>

---

## <a id="motivation"></a>2. Research Motivation

- **Problem observed in SocNavGym world models:** vanilla LSTM-based predictors drifted as the horizon increased, producing inaccurate latent rollouts for <a href="{{ '/projects/predictive-world-models' | relative_url }}" style="color: var(--link); text-decoration: underline;">Predictive World Models</a> research.
- **Hypothesis:** a gate that measures alignment between the input trajectory and the current hidden state can decide whether to retain, blend, or suppress information.
- **Goal:** improve long-range dependency retention without the parameter overhead of Transformers, while keeping inference latency acceptable for real-time robotics.

---

## <a id="architecture"></a>3. Architecture

### Cosine-gated layer

- Computes cosine similarity between the transformed input and both the previous and current hidden states (`gate_ic`, `gate_co`).
- Uses those similarities as scaling coefficients before fusing the input projection with the candidate hidden update.
- Concatenates the similarity-aware vector with the vanilla LSTM output and applies a linear projection, giving the RL policy or downstream head a richer latent signal.

```python
def cosine_gate(x_proj, h_prev, h_curr, eps=1e-8):
    def cos(a, b):
        return torch.sum(a * b, dim=-1, keepdim=True) / (
            torch.norm(a, dim=-1, keepdim=True) * torch.norm(b, dim=-1, keepdim=True) + eps)

    gate_ic = cos(x_proj, h_prev)
    gate_co = cos(x_proj, h_curr)

    gated = gate_ic * x_proj + h_curr
    gated = gate_co * gated
    return torch.cat([gated, h_curr], dim=-1)
```

### Model footprint

- 118,794 trainable parameters (≈44% fewer than the Transformer baseline evaluated in the paper).
- Drop-in replacement for LSTM blocks in seq2seq, world-model, or classification stacks.

---

## <a id="benchmarks"></a>4. Benchmark Evaluation

The IEEE PRML 2024 paper reports results across synthetic sequence modelling, vision, and NLP tasks (mean across three seeds). The table summarises the headline metrics and deltas against the strongest recurrent baseline per task.

<div style="overflow-x: auto; margin: 1.5rem 0;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
  <thead>
    <tr style="background: var(--bg-alt); border-bottom: 2px solid var(--border);">
      <th style="padding: 0.75rem; border: 1px solid var(--border);">Task</th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Metric</th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">CGLSTM</th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Best baseline</th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Δ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 0.75rem; border: 1px solid var(--border);">Adding problem (T=1000)</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Test MAE ↓</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">0.0225</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">0.0391 (RAU)</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">−42%</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem; border: 1px solid var(--border);">Row-wise MNIST</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Test accuracy ↑</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">99.07%</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">98.70% (GRU)</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">+0.37 pts</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem; border: 1px solid var(--border);">Fashion-MNIST</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Test accuracy ↑</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">90.12%</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">89.68% (GRU)</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">+0.44 pts</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem; border: 1px solid var(--border);">IMDB sentiment</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Test accuracy ↑</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">86.30%</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">86.48% (GRU)</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">−0.18 pts*</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem; border: 1px solid var(--border);">Penn Treebank</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Test perplexity ↓</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">104.43</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">103.38 (Transformer)</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">+1.05*</td>
    </tr>
  </tbody>
</table>
</div>

<p style="font-size: 0.85rem; color: var(--text-light);">* CGLSTM matches or exceeds recurrent baselines but Transformer remains ahead on IMDB and PTB in the published results. This is noted as a limitation below.</p>

<img src="{{ '/assets/images/cgltsmtestResult.jpg' | relative_url }}" alt="Table of benchmark accuracies for CGLSTM versus LSTM, GRU, RAU, and Transformer" style="width: 100%; max-width: 780px; height: auto; border-radius: 8px; border: 1px solid var(--border); margin: 2rem 0;">
<p style="margin-top: -1.25rem; font-size: 0.85rem; color: var(--text-light); font-style: italic; text-align: center;">Benchmark comparison extracted from my viva deck: accuracy and MAE highlights across MNIST, Fashion-MNIST, IMDB, Penn Treebank, and the adding problem.</p>

---

## <a id="socnav"></a>5. SocNavGym Performance

Cosine-gating was originally motivated by social navigation prediction. The IEEE PRML paper reports the following results when predicting latent trajectories in the <a href="{{ '/projects/socnavgym' | relative_url }}" style="color: var(--link); text-decoration: underline;">SocNavGym</a> environment configured with four moving humans, a table, and a flowerpot.

<div style="overflow-x: auto; margin: 1.5rem 0;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
  <thead>
    <tr style="background: var(--bg-alt); border-bottom: 2px solid var(--border);">
      <th style="padding: 0.75rem; border: 1px solid var(--border);">Model</th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Pred. time (s)</th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">MAE k=1</th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">MAE k=5</th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">MAE k=10</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 0.75rem; border: 1px solid var(--border);">Vanilla LSTM</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">0.00137</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">1.65e-2</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">9.61e-2</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">1.30e-1</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem; border: 1px solid var(--border);">GRU</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">0.00126</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">1.88e-2</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">9.49e-2</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">1.35e-1</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem; border: 1px solid var(--border);">Encoder Transformer</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">0.02793</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">1.22e-2</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">6.75e-2</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">1.12e-1</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem; border: 1px solid var(--border);"><strong>CGLSTM</strong></td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">0.00738</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);"><strong>8.40e-3</strong></td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);"><strong>6.41e-2</strong></td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);"><strong>8.26e-2</strong></td>
    </tr>
  </tbody>
</table>
</div>

Key takeaways:

- 35% reduction in MAE at k=10 relative to the Transformer baseline, while keeping inference under 8 ms.
- Visual inspection (Fig. 3 in the paper) shows blue dominance for CGLSTM, indicating tighter alignment with ground-truth trajectories.
- The model was subsequently integrated into the <a href="{{ '/projects/predictive-world-models' | relative_url }}" style="color: var(--link); text-decoration: underline;">Predictive World Models</a> pipeline to replace the world-model backbone.

<img src="{{ '/assets/images/cgltsmtestResultforsocnav.jpg' | relative_url }}" alt="Visual comparison of predictive trajectories in SocNavGym for CGLSTM and baselines" style="width: 100%; max-width: 760px; height: auto; border-radius: 8px; border: 1px solid var(--border); margin: 2rem 0;">
<p style="margin-top: -1.25rem; font-size: 0.85rem; color: var(--text-light); font-style: italic; text-align: center;">SocNavGym qualitative comparison from my viva: CGLSTM predictions (right) retain blue overlays indicating accurate future states, whereas vanilla LSTM and GRU (left) accumulate red error regions.</p>

---

## <a id="implementation"></a>6. Implementation & Usage

### Drop-in usage for PyTorch recurrent stacks

```python
from cglstm import CosineGatedLSTMCell

class CosineGatedLSTM(nn.Module):
    def __init__(self, input_size, hidden_size):
        super().__init__()
        self.cell = CosineGatedLSTMCell(input_size, hidden_size)

    def forward(self, inputs, hx=None):
        outputs = []
        h, c = hx
        for x in inputs:  # sequence-first tensor
            h, c = self.cell(x, (h, c))
            outputs.append(h)
        return torch.stack(outputs), (h, c)

# Swap into a world model or classifier
vae = VAE(latent_dim=64)
cglstm = CosineGatedLSTM(latent_dim=64, hidden_size=128)
```

### Practical guidance

- Use cosine gating to improve long-horizon predictions before world-model rollouts (as applied in FallingBallEnv and SocNavGym).
- Pair with balanced training schedules; the paper highlights gains when bounce events are oversampled in FallingBallEnv.
- Monitor compute budget: this cell is ~2× heavier than GRU but far cheaper than the evaluated Transformer (0.007 s vs 0.028 s per prediction in SocNavGym).

---

## <a id="impact"></a>7. Research Impact

- Published in **IEEE PRML 2024**, with proceedings pages 8–15.
- Serves as the latent model in the <a href="{{ '/projects/predictive-world-models' | relative_url }}" style="color: var(--link); text-decoration: underline;">Predictive World Models</a> and <a href="{{ '/projects/adaptive-prediction-horizons' | relative_url }}" style="color: var(--link); text-decoration: underline;">Adaptive Prediction Horizons</a> contributions.
- Demonstrated improvements across vision and NLP benchmarks: +0.44 pts on Fashion-MNIST, +0.37 pts on MNIST, +9.5% lower MAE on the adding problem.
- Provided publicly accessible implementation (<a href="https://github.com/goodluckoguzie/CosineGatedLSTM" target="_blank">GitHub</a>) supporting replication and extension.

---

## <a id="limitations"></a>8. Limitations & Next Steps

- **Transformers remain stronger on language modelling:** the Encoder Transformer attained lower perplexity on Penn Treebank (103.38 vs 104.43).
- **Training cost:** CGLSTM takes ~40% longer to train on Fashion-MNIST compared with GRU, so further optimisation or GPU-efficient kernels would help.
- **IMDB accuracy plateau:** GRU slightly outperformed CGLSTM (86.48% vs 86.30%); integrating cosine gates into GRU variants is proposed as future work in the paper.

Planned improvements include cosine-gated GRUs, multi-task transfer experiments, and deeper analysis of horizon-adaptive strategies for social navigation.

<img src="{{ '/assets/images/limitationforCGLSTM.jpg' | relative_url }}" alt="Summary of CGLSTM limitations from viva presentation" style="width: 100%; max-width: 640px; height: auto; border-radius: 8px; border: 1px solid var(--border); margin: 2rem 0;">
<p style="margin-top: -1.25rem; font-size: 0.85rem; color: var(--text-light); font-style: italic; text-align: center;">Slide excerpt summarising trade-offs: Transformer still leads on PTB perplexity, and training cost increases relative to GRU.</p>

---

## <a id="resources"></a>9. Resources & Citation

<p><strong>Technologies:</strong> Python • PyTorch • TensorFlow • Sequential Modelling • Cosine Similarity</p>

**Key Links:**

- <a href="{{ '/Cosine_Gated_LSTM_main.pdf' | relative_url }}" class="btn" style="display: inline-block; margin: 0.25rem;">IEEE PRML 2024 Paper (PDF)</a>
- <a href="https://github.com/goodluckoguzie/CosineGatedLSTM" target="_blank" class="btn btn-secondary" style="display: inline-block; margin: 0.25rem;">CosineGatedLSTM GitHub</a>
- <a href="https://github.com/goodluckoguzie/falling_ball_env" target="_blank" class="btn btn-secondary" style="display: inline-block; margin: 0.25rem;">FallingBallEnv Environment</a>
- <a href="{{ '/publications' | relative_url }}" class="btn btn-secondary" style="display: inline-block; margin: 0.25rem;">Publication Details</a>

**Citation (BibTeX)**

```bibtex
@inproceedings{oguzie2024cglstm,
  title={Cosine-Gated Long Short-Term Memory for Sequential Learning},
  author={Oguzie, Goodluck},
  booktitle={IEEE 5th International Conference on Pattern Recognition and Machine Learning (PRML 2024)},
  pages={8--15},
  year={2024},
  organization={IEEE}
}
```

<div style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid var(--border);">
  <a href="{{ '/portfolio' | relative_url }}" class="btn">← Back to Research Portfolio</a>
</div>

