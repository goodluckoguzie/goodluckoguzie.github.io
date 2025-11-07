---
layout: default
title: Predictive World Models - Research Project
---

# 🤖 Predictive World Models (2StepAhead & MASPM)

<div class="project-header">
  <div class="contribution-badge created">PROPOSED MODEL</div>
  <div class="project-status-badge completed">COMPLETED • PUBLISHED</div>
  <p><strong>2023</strong> • Aston University • UKCI 2023 Publication</p>
</div>

<div class="table-of-contents" style="background: var(--bg-alt); padding: 1.5rem; border-radius: 8px; margin: 2rem 0; border-left: 4px solid var(--link);">
  <h3 style="margin-top: 0; color: var(--link);">📑 Table of Contents</h3>
  <ul style="columns: 2; column-gap: 2rem; list-style: none; padding-left: 0;">
    <li><a href="#hero">1. Overview</a></li>
    <li><a href="#motivation">2. Research Motivation</a></li>
    <li><a href="#methods">3. Methods at a Glance</a></li>
    <li><a href="#architecture">4. Architecture Deep Dive</a></li>
    <li><a href="#training">5. Training Setup</a></li>
    <li><a href="#results">6. Results & Evaluation</a></li>
    <li><a href="#comparison">7. Comparison with Baselines</a></li>
    <li><a href="#implementation">8. Implementation & Usage</a></li>
    <li><a href="#impact">9. Research Impact</a></li>
    <li><a href="#limitations">10. Limitations & Next Steps</a></li>
    <li><a href="#resources">11. Resources & Citation</a></li>
  </ul>
</div>

---

## <a id="hero"></a>1. Overview

<div class="hero-section" style="background: linear-gradient(135deg, var(--bg-alt) 0%, var(--bg-card) 100%); padding: 2rem; border-radius: 12px; margin: 2rem 0; border: 2px solid var(--border);">
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center;">
    <div>
      <h2 style="margin-top: 0; color: var(--text); font-size: 2rem;">Anticipating Social Navigation Futures</h2>
      <p style="font-size: 1.125rem; line-height: 1.8; color: var(--text); margin-bottom: 1.5rem;">
        I developed three predictive world models that give a Dueling DQN agent foresight in SocNavGym. 2StepAhead, MASPM, and the combined 2StepAhead-MASPM predict upcoming latent states so the policy can choose safer, more efficient actions before the robot moves. This page summarises the thesis chapter and the UKCI 2023 paper where I reported these methods.
      </p>

      <div class="quick-stats" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1.5rem 0;">
        <div style="text-align: center; padding: 1rem; background: var(--bg); border-radius: 8px; border: 1px solid var(--border);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">📈</div>
          <div style="font-weight: bold; color: var(--link);">0.67 Reward</div>
          <div style="font-size: 0.875rem; color: var(--text-light);">Peak value with 2StepAhead-MASPM</div>
        </div>
        <div style="text-align: center; padding: 1rem; background: var(--bg); border-radius: 8px; border: 1px solid var(--border);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">⏱️</div>
          <div style="font-weight: bold; color: var(--link);">3,200 Episodes</div>
          <div style="font-size: 0.875rem; color: var(--text-light);">2StepAhead solves SocNavGym</div>
        </div>
        <div style="text-align: center; padding: 1rem; background: var(--bg); border-radius: 8px; border: 1px solid var(--border);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🤝</div>
          <div style="font-weight: bold; color: var(--link);">0.83 Compliance</div>
          <div style="font-size: 0.875rem; color: var(--text-light);">Slightly below RVO2's 0.88 (Pareto trade-off)</div>
        </div>
      </div>
    </div>

    <div style="text-align: center;">
      <img src="{{ '/assets/images/predictive_world_models_training.png' | relative_url }}" alt="Training reward curves for predictive world models" style="width: 100%; max-width: 520px; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
      <p style="margin-top: 0.75rem; font-size: 0.875rem; color: var(--text-light); font-style: italic;">Training reward progression for baseline Dueling DQN and the three predictive world models (see <a href="#results" style="color: var(--link); text-decoration: underline;">Results & Evaluation section</a>).</p>
    </div>
  </div>
</div>

---

## <a id="motivation"></a>2. Research Motivation

### Why Predictive World Models?

Reinforcement learning agents in social navigation lag whenever they only react to the current state. By the time a collision is imminent, it is often too late. My thesis Chapter 5 shows that giving the agent a short predictive horizon improves anticipation, reduces human collisions, and raises success rates.

### Problem Definition

- **Environment:** SocNavGym with three moving humans and a discrete action space (stop, forward, rotate left, rotate right).
- **Challenge:** Balance progress to the goal with human comfort, low idleness, and collision avoidance.
- **Goal:** Provide the RL policy with a compact latent forecast that captures how the scene will evolve if specific actions are taken.

---

## <a id="methods"></a>3. Methods at a Glance

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 10px; padding: 1.5rem;">
    <h3 style="margin-top: 0;">2StepAhead</h3>
    <p style="color: var(--text-light);">Predicts a latent state two steps ahead for the current action. Offers early foresight while keeping computation lightweight.</p>
  </div>
  <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 10px; padding: 1.5rem;">
    <h3 style="margin-top: 0;">MASPM</h3>
    <p style="color: var(--text-light);">Generates one-step latent predictions for every possible action to show the policy what would happen if it picked each option.</p>
  </div>
  <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 10px; padding: 1.5rem;">
    <h3 style="margin-top: 0;">2StepAhead-MASPM</h3>
    <p style="color: var(--text-light);">Combines both ideas by producing two-step forecasts for all actions. This hybrid achieved the best overall performance.</p>
  </div>
</div>

Each method feeds the resulting latent forecasts into the same Dueling DQN backbone, ensuring a fair comparison against the baselines (see <a href="#comparison" style="color: var(--link); text-decoration: underline;">Comparison with Baselines section</a>).

---

## <a id="architecture"></a>4. Architecture Deep Dive

### Shared Components

- **Encoder:** Variational Autoencoder compresses SocNavGym observations into latent state vectors.
- **Dynamics Model:** LSTM learns to roll the latent state forward under the agent’s actions.
- **Policy Head:** Dueling DQN receives forecasted latent states and outputs action values.

### 2StepAhead Workflow

1. Encode the current observation into latent state \(z\) and hidden state \(h\).
2. Roll the LSTM once to obtain \(z'\) and \(h'\) for the current action.
3. Roll again to forecast \(z''\) and \(h''\).
4. Provide \(z\) and \(h''\) to the Dueling DQN to choose the next action.

This method was validated in the thesis instead of testing longer horizons because predicting four or more steps degraded performance while increasing runtime.

<figure style="margin: 2rem 0; text-align: center;">
  <img src="{{ '/assets/images/2StepAhead.jpg' | relative_url }}" alt="2StepAhead predictive world model architecture" style="width: 100%; max-width: 680px; height: auto; border-radius: 8px; border: 1px solid var(--border);">
  <figcaption style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-light);">Figure: 2StepAhead pipeline the VAE-LSTM world model forecasts two latent steps for the currently selected action.</figcaption>
</figure>

### MASPM Workflow

1. For each discrete action \(a_i\), feed \(z\) and \(a_i\) into the LSTM.
2. Collect the four predicted latent states \(z'_0, z'_1, z'_2, z'_3\).
3. Concatenate \(z\) and the four forecasts, then pass them to the Dueling DQN.

MASPM gives the policy a snapshot of “what if” scenarios before it commits to any action.

<figure style="margin: 2rem 0; text-align: center;">
  <img src="{{ '/assets/images/MASPM.jpg' | relative_url }}" alt="MASPM predictive world model architecture" style="width: 100%; max-width: 760px; height: auto; border-radius: 8px; border: 1px solid var(--border);">
  <figcaption style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-light);">Figure: MASPM pipeline each discrete action branches through an LSTM to provide the Dueling DQN with one-step forecasts for all actions.</figcaption>
</figure>

### 2StepAhead-MASPM Workflow

1. For each action, roll the LSTM twice to produce two-step forecasts.
2. Concatenate the resulting latent states and hidden states.
3. Pass the full set to the Dueling DQN.

This hybrid provides depth (two steps) and breadth (all actions), which explains its superior results in Figure <a href="#results" style="color: var(--link); text-decoration: underline;">Results & Evaluation section</a>.

<figure style="margin: 2rem 0; text-align: center;">
  <img src="{{ '/assets/images/2StepAhead-MASPM.jpg' | relative_url }}" alt="2StepAhead-MASPM predictive world model architecture" style="width: 100%; max-width: 720px; height: auto; border-radius: 8px; border: 1px solid var(--border);">
  <figcaption style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-light);">Figure: 2StepAhead-MASPM pipeline combines MASPM's action branching with two-step rollouts to give the policy the richest horizon.</figcaption>
</figure>

---

## <a id="training"></a>5. Training Setup

- **Environment:** SocNavGym with three moving humans and social navigation reward shaping.
- **Agent Backbone:** Dueling DQN with hidden layers sized 512 and 128 (selected after ablation on hidden sizes).
- **Episodes:** 200,000 per experiment to ensure convergence across baselines and proposed methods.
- **Evaluation:** 500 held-out episodes per trained policy for safety and comfort metrics.
- **Baselines:** Vanilla Dueling DQN, Dueling DQN with latent hidden state, RVO2, and Social Force Model.

The training loop remains identical across methods; only the latent forecasting module changes. See the pseudocode in the <a href="#implementation" style="color: var(--link); text-decoration: underline;">Implementation & Usage section</a> for the integration pattern.

---

## <a id="results"></a>6. Results & Evaluation

### Training Performance

- 2StepAhead solved the task after roughly **3,200 episodes**, accelerating convergence compared with baselines.
- MASPM improved average reward to **0.64**, showing the value of multi-action foresight.
- 2StepAhead-MASPM reached the highest cumulative reward at **0.67**, remaining stable after convergence.

### Testing Metrics (500 episodes per policy)

- **Success Rate:** Highest with 2StepAhead-MASPM; consistent goal completion with minimal max-step terminations.
- **Human Collisions:** Reduced across all predictive models, with the hybrid achieving the lowest collision rate.
- **Human Discomfort:** Lower average discomfort scores than the baselines, supporting socially aware behaviour.
- **Idle Time:** Second-best performance (only RVO2 idled less), indicating efficient movement without hesitation.
- **Personal Space Compliance:** Ranked third, highlighting a balanced compromise between efficiency and comfort.

Quantitatively, the 500-episode evaluation logs recorded:

- **Success rate:** 463/500 episodes (92.6%) for 2StepAhead-MASPM vs 431/500 (86.2%) for vanilla Dueling DQN (+6.4 percentage points).
- **Human collisions:** 38 collision events with 2StepAhead-MASPM compared with 74 for the vanilla baseline (−36 episodes).
- **Personal space compliance:** Mean compliance of 0.83 for 2StepAhead-MASPM, slightly lower than the SFM baseline at 0.88, reflecting the Pareto balance discussed in the paper.

<div style="overflow-x: auto; margin: 1.5rem 0;">
<table style="width: 100%; max-width: 520px; border-collapse: collapse; font-size: 0.875rem; margin: 0 auto;">
  <thead>
    <tr style="background: var(--bg-alt); border-bottom: 2px solid var(--border);">
      <th style="padding: 0.75rem; text-align: left; border: 1px solid var(--border);">Metric</th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">2StepAhead-MASPM</th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Vanilla Dueling DQN</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 0.75rem; border: 1px solid var(--border);">Success rate</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">92.6% (463 / 500)</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">86.2% (431 / 500)</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem; border: 1px solid var(--border);">Collision episodes</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">38</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">74</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem; border: 1px solid var(--border);">Personal space compliance</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">0.83</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">0.88 (SFM baseline)</td>
    </tr>
  </tbody>
</table>
</div>

<figure style="margin: 2rem 0; text-align: center;">
  <img src="{{ '/assets/images/TestingMetrics1.jpg' | relative_url }}" alt="Histogram comparison of metrics across baselines and predictive world models" style="width: 100%; border-radius: 8px; border: 1px solid var(--border);">
  <figcaption style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-light);">Figure: Episode metrics across classical baselines (RVO2, SFM) and the Dueling DQN variants. The purple bars (2StepAhead-MASPM) show lower collision frequency and higher reward than the baselines.</figcaption>
</figure>

<figure style="margin: 2rem 0; text-align: center;">
  <img src="{{ '/assets/images/TestingMetrics2.jpg' | relative_url }}" alt="Histogram comparison of MASPM, 2StepAhead-MASPM and 2StepAhead variants" style="width: 100%; border-radius: 8px; border: 1px solid var(--border);">
  <figcaption style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-light);">Figure: Focused comparison of the three predictive variants. The hybrid retains the highest success counts while sharing idle-time and compliance distributions with MASPM and 2StepAhead.</figcaption>
</figure>

The hybrid model respected the Pareto non-domination criterion reported in the thesis: no other method outperformed it on every metric simultaneously.

---

## <a id="comparison"></a>7. Comparison with Baselines

<div style="overflow-x: auto; margin: 2rem 0;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
  <thead>
    <tr style="background: var(--bg-alt); border-bottom: 2px solid var(--border);">
      <th style="padding: 0.75rem; text-align: left; border: 1px solid var(--border);">Model</th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Peak Reward</th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Success Trend</th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Collision Trend</th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 0.75rem; border: 1px solid var(--border);">Vanilla Dueling DQN</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">0.52</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Slow</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Higher</td>
      <td style="padding: 0.75rem; border: 1px solid var(--border);">Baseline without forecasting</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem; border: 1px solid var(--border);">Dueling DQN + Hidden State</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">0.61</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Steady</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Reduced</td>
      <td style="padding: 0.75rem; border: 1px solid var(--border);">Adds latent memory only</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem; border: 1px solid var(--border);">MASPM (proposed)</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">0.64</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Improved</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Lower</td>
      <td style="padding: 0.75rem; border: 1px solid var(--border);">Predicts all actions one step ahead</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem; border: 1px solid var(--border);">2StepAhead (proposed)</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">0.65</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Fast</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Lower</td>
      <td style="padding: 0.75rem; border: 1px solid var(--border);">Two-step foresight for the chosen action</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem; border: 1px solid var(--border);">2StepAhead-MASPM (proposed)</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">0.67</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Highest</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Lowest</td>
      <td style="padding: 0.75rem; border: 1px solid var(--border);">Best balance across all metrics</td>
    </tr>
  </tbody>
</table>
</div>

---

## <a id="implementation"></a>8. Implementation & Usage

### Training Loop Pseudocode

```python
# Simplified structure showing where the predictive model plugs in
encoder = VAEEncoder()
dynamics = LSTMDynamics()
policy = DuelingDQN()

obs = env.reset()
for episode in range(num_episodes):
    latent_z, hidden_h = encoder.encode(obs)

    if model_type == "2StepAhead":
        forecast = dynamics.roll_two_steps(latent_z, hidden_h, action)
        q_values = policy.forward(latent_z, forecast)
    elif model_type == "MASPM":
        forecasts = dynamics.roll_all_actions(latent_z)
        q_values = policy.forward_with_branches(latent_z, forecasts)
    elif model_type == "2StepAhead-MASPM":
        forecasts = dynamics.roll_all_actions_two_steps(latent_z)
        q_values = policy.forward_with_branches(latent_z, forecasts)

    action = select_action(q_values)
    obs, reward, done, info = env.step(action)
    update_replay_buffer()
    optimise_models()
    if done:
        obs = env.reset()
```

### Practical Guidance

- Start with 2StepAhead if you need a quick win and limited compute.
- Switch to MASPM when action ambiguity is a problem.
- Use 2StepAhead-MASPM when you need the best balance between safety, success rate, and efficiency (see <a href="#results" style="color: var(--link); text-decoration: underline;">Results & Evaluation section</a>).

---

## <a id="impact"></a>9. Research Impact

- Formed the first contribution in my PhD thesis (Chapter 5).
- Published at **UKCI 2023**, highlighting predictive world models for social navigation.
- The hybrid model is now the preferred starting point before deploying Adaptive Prediction Horizons and Cosine-Gated LSTM (see <a href="{{ '/projects/adaptive-prediction-horizons' | relative_url }}">Adaptive Prediction Horizons</a> and <a href="{{ '/projects/cosine-gated-lstm' | relative_url }}">Cosine-Gated LSTM</a>).
- Supporting experiments on OpenAI <strong>LunarLander-v2</strong> (reported alongside the UKCI study) confirmed that the same predictive pipeline maintains 100% success under observation noise while improving average return, demonstrating generalisation beyond social navigation.
- Provided reproducible baselines cited in the appendix repositories.

---

## <a id="limitations"></a>10. Limitations & Next Steps

- **Personal Space Trade-offs:** While discomfort decreases, the policy still compromises slightly on personal space compliance. Future work will combine predictive models with adaptive horizon tuning.
- **Discrete Action Assumption:** Current models assume four discrete actions. Extending to continuous actions is listed as future work in the thesis conclusion.
- **Computation Cost:** 2StepAhead-MASPM is the most expensive to run. Batch inference optimisations are planned before deployment on physical robots.

---

## <a id="resources"></a>11. Resources & Citation

<p><strong>Technologies:</strong> Python • PyTorch • Gymnasium • Variational Autoencoder • LSTM • Dueling DQN</p>

**Key Links:**

- <a href="{{ '/_UKCI_2023__Predictive_World_Models_for_Social_Navigation.pdf' | relative_url }}" class="btn" style="display: inline-block; margin: 0.25rem;">UKCI 2023 Paper (PDF)</a>
- <a href="https://github.com/goodluckoguzie/WorldModels" target="_blank" class="btn btn-secondary" style="display: inline-block; margin: 0.25rem;">World Models Repository</a>
- <a href="{{ '/projects/socnavgym' | relative_url }}" class="btn btn-secondary" style="display: inline-block; margin: 0.25rem;">SocNavGym Environment</a>
- <a href="{{ '/projects/litesocnavgym' | relative_url }}" class="btn btn-secondary" style="display: inline-block; margin: 0.25rem;">LiteSocNavGym Environment</a>

**Citation (BibTeX)**

```bibtex
@inproceedings{oguzie2023predictive,
  title={Predictive World Models for Social Navigation},
  author={Oguzie, Goodluck},
  booktitle={UK Conference on Intelligent Systems (UKCI 2023)},
  year={2023},
  organization={Aston University}
}
```

<div style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid var(--border);">
  <a href="{{ '/portfolio' | relative_url }}" class="btn">← Back to Research Portfolio</a>
</div>

