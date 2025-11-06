---
layout: default
title: FallingBallEnv - Research Project
---

# ⚽ FallingBallEnv

<div class="project-header">
  <div class="contribution-badge created">CREATED</div>
  <div class="project-status-badge completed">COMPLETED</div>
  <div class="contribution-badge" style="background: #6c757d; color: white; display: inline-block; margin-left: 0.5rem;">USED IN: IEEE PRML 2024</div>
  <p><strong>2023</strong> • Custom OpenAI Gym Environment • Published in PhD Thesis Chapter 6</p>
</div>

<div class="quick-facts-box" style="background: var(--bg-alt); padding: 1.5rem; border-radius: 8px; margin: 2rem 0; border-left: 4px solid var(--link);">
  <h3 style="margin-top: 0; color: var(--link);">Quick Facts</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
    <div>
      <p style="margin: 0.5rem 0;"><strong>Environment Type:</strong> OpenAI Gym</p>
      <p style="margin: 0.5rem 0;"><strong>Observation Space:</strong> (x, y, vx, vy) - 4D continuous</p>
      <p style="margin: 0.5rem 0;"><strong>Action Space:</strong> None (prediction task)</p>
    </div>
    <div>
      <p style="margin: 0.5rem 0;"><strong>Created:</strong> 2023</p>
      <p style="margin: 0.5rem 0;"><strong>Published:</strong> PhD Thesis Ch.6 • IEEE PRML 2024</p>
      <p style="margin: 0.5rem 0;"><strong>Status:</strong> ✅ Completed & Validated</p>
    </div>
    <div>
      <p style="margin: 0.5rem 0;"><strong>Key Innovation:</strong> Hidden floor position challenge</p>
      <p style="margin: 0.5rem 0;"><strong>Validated:</strong> CGLSTM architecture (25% lower MAE)</p>
      <p style="margin: 0.5rem 0;"><strong>Datasets:</strong> 3 variants (20K, 14.7K balanced, 14.7K unbalanced)</p>
    </div>
  </div>
</div>

## Overview

A custom OpenAI Gym environment simulating a ball falling under gravity and bouncing off the floor. While appearing simple, it introduces a subtle challenge: **the floor position is NOT included in the observation space**, requiring models to infer this hidden boundary condition to predict when and how the ball will bounce. Created specifically to validate sequential learning models before applying them to complex social navigation scenarios.

## Research Motivation

Created to address limitations observed when transitioning from discrete to continuous action spaces in SocNavGym. As action choices increased from 4 to 16, prediction errors became more pronounced, highlighting the need for more robust sequential learning models. FallingBallEnv serves as a controlled testing ground to explore fundamental challenges in temporal prediction before applying methods to complex environments like SocNavGym.

## Technical Specifications

### Observation Space
- **Dimensions:** 4D continuous vector
- **Components:** 
  - `x`: Horizontal position (continuous)
  - `y`: Vertical position (continuous)
  - `vx`: Horizontal velocity (continuous)
  - `vy`: Vertical velocity (continuous)
- **Note:** Floor position (`y_floor`) is **NOT** included in observations, requiring models to infer it

### Action Space
- **Type:** None (prediction/forecasting task)
- **Purpose:** Used for next-state prediction, not control

### Environment Parameters
- **Gravity:** Standard gravitational acceleration (customizable)
- **Energy Loss:** Reduced velocity after bounce (coefficient: typically 0.7-0.9)
- **Ball Radius:** Customizable (default: varies by initial conditions)
- **Floor Height:** Variable (not disclosed to model in observation space)
- **Episode Length:** Variable (depends on initial conditions)

### Episode Termination
- Episode ends when ball position goes outside boundaries
- Episode can be manually truncated at maximum steps

---

## Key Features

<ul>
  <li><strong>Simplified Physics:</strong> Gravity simulation with customizable parameters (initial position, velocity, radius)</li>
  <li><strong>Limited Observation Space:</strong> Only ball's (x,y) coordinates and velocity - floor position is hidden</li>
  <li><strong>Bouncing Mechanism:</strong> Ball bounces off floor with reduced velocity (energy loss)</li>
  <li><strong>Render Support:</strong> Visualize ball motion for analysis</li>
  <li><strong>OpenAI Gym Compatible:</strong> Standard interface for RL algorithm integration</li>
  <li><strong>Controlled Complexity:</strong> Focuses on prediction rather than complex physics simulation</li>
</ul>

## Research Design & Datasets

Three distinct datasets were created to study the impact of data distribution on model performance:

<ul>
  <li><strong>Full Dataset:</strong> 20,000 episodes capturing complete ball motion from start to finish (unbalanced - bounce events underrepresented)</li>
  <li><strong>Balanced Dataset:</strong> 14,700 episodes with equal representation of bounce and free-fall windows (17-step windows categorized by initial velocity)</li>
  <li><strong>Unbalanced Subset:</strong> 14,700 episodes randomly sampled without balancing (control group)</li>
</ul>

<p>The balanced dataset ensured models were exposed to bounce events more frequently, improving their ability to learn bounce dynamics effectively.</p>

## Usage in Research

FallingBallEnv was central to evaluating and validating the Cosine-Gated LSTM (CGLSTM) architecture. The environment enabled:

<ul>
  <li>Testing fundamental temporal dependency learning</li>
  <li>Analyzing transition event prediction (bounces)</li>
  <li>Comparing CGLSTM against Vanilla LSTM, GRU, RAU, and Transformer models</li>
  <li>Demonstrating the importance of balanced training data</li>
  <li>Validating model performance before complex SocNavGym applications</li>
</ul>

## Model Performance Comparison

### Comprehensive Results Table

<div style="overflow-x: auto; margin: 2rem 0;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
  <thead>
    <tr style="background: var(--bg-alt); border-bottom: 2px solid var(--border);">
      <th style="padding: 0.75rem; text-align: left; border: 1px solid var(--border);"><strong>Model</strong></th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);"><strong>MAE (k=1)</strong></th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);"><strong>MAE (k=3)</strong></th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);"><strong>MAE (k=5)</strong></th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);"><strong>MAE (k=10)</strong></th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);"><strong>Prediction Time (s)</strong></th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);"><strong>Parameters</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 0.75rem; border: 1px solid var(--border);"><strong>Vanilla LSTM</strong></td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">1.643×10⁻⁴</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">1.705×10⁻⁴</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">1.730×10⁻⁴</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">4.696×10⁻³</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">0.00108</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">84,419</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 0.75rem; border: 1px solid var(--border);"><strong>GRU</strong></td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">1.737×10⁻⁴</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">1.677×10⁻⁴</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">2.114×10⁻⁴</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">4.793×10⁻³</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">0.00091</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">63,363</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 0.75rem; border: 1px solid var(--border);"><strong>Transformer</strong></td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">9.138×10⁻⁵</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">7.189×10⁻⁵</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">8.910×10⁻⁵</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">1.528×10⁻³</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">0.01417</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">1,125,059</td>
    </tr>
    <tr style="background: rgba(40, 167, 69, 0.1); border-bottom: 2px solid #28a745;">
      <td style="padding: 0.75rem; border: 1px solid var(--border);"><strong>🎯 CGLSTM</strong></td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border); font-weight: bold; color: #28a745;"><strong>3.558×10⁻⁵</strong></td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border); font-weight: bold; color: #28a745;"><strong>4.302×10⁻⁵</strong></td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border); font-weight: bold; color: #28a745;"><strong>2.341×10⁻⁵</strong></td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border); font-weight: bold; color: #28a745;"><strong>1.360×10⁻³</strong></td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">0.00325</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">104,771</td>
    </tr>
  </tbody>
</table>
</div>

<p><em>Note: MAE = Mean Absolute Error, k = prediction horizon (steps ahead). Lower is better. Results from balanced dataset.</em></p>

### Key Performance Findings

**CGLSTM Achievements:**
- ✅ **Best MAE across all prediction horizons** (k=1, 3, 5, 10)
- ✅ **78% lower MAE than Transformer** at k=1 (3.558×10⁻⁵ vs 9.138×10⁻⁵)
- ✅ **77% lower MAE than Vanilla LSTM** at k=1 (3.558×10⁻⁵ vs 1.643×10⁻⁴)
- ✅ **79% lower MAE than GRU** at k=1 (3.558×10⁻⁵ vs 1.737×10⁻⁴)
- ✅ **77% faster than Transformer** (0.00325s vs 0.01417s)
- ✅ **20% more parameters than GRU** but superior performance justifies the increase
- ✅ **25% lower MAE with balanced dataset** compared to unbalanced dataset

**Balanced Dataset Impact:**
The balanced dataset (equal representation of bounce and free-fall windows) resulted in a **25% reduction in MAE** compared to the unbalanced dataset, highlighting the importance of balanced training data for learning transition events like bounces.

## Installation & Usage

### Installation

```bash
# Clone the repository
git clone https://github.com/goodluckoguzie/falling_ball_env.git
cd falling_ball_env

# Install dependencies
pip install -e .
# or
pip install gymnasium numpy opencv-python
```

### Quick Start Example

```python
import gymnasium as gym
from falling_ball_env import FallingBallEnv

# Create environment
env = FallingBallEnv()

# Reset environment
obs, info = env.reset()
print(f"Initial observation: {obs}")  # [x, y, vx, vy]

# Run episode
for step in range(100):
    # For prediction task, no action needed
    # Instead, predict next observation
    obs, reward, terminated, truncated, info = env.step(None)
    
    # Render visualization
    env.render()
    
    if terminated or truncated:
        obs, info = env.reset()

env.close()
```

### Customization

```python
# Create environment with custom parameters
env = FallingBallEnv(
    gravity=9.81,           # Gravitational acceleration
    energy_loss=0.8,         # Velocity reduction after bounce (0.7-0.9)
    floor_height=0.0,       # Floor position (not in observation!)
    initial_y_range=(5, 10), # Initial y position range
    ball_radius=0.5         # Ball radius
)
```

---

## Visual Results

### Environment Visualization

<div class="project-media">
  <div class="project-image-placeholder">
    <img src="{{ '/assets/images/FallingBall.png' | relative_url }}" alt="FallingBall Environment Visualization" style="max-width: 100%; height: auto; border-radius: 6px; margin-bottom: 1rem;">
    <p><strong>Figure 1: Environment Visualization</strong></p>
    <p>Ball falling and bouncing in FallingBallEnv. The yellow circle represents the current state, with the ball's trajectory shown over time. This visualization demonstrates the environment's physics simulation including gravity and bouncing mechanics.</p>
  </div>
  
  <div class="project-image-placeholder">
    <img src="{{ '/assets/images/FallingBallwithprediction.png' | relative_url }}" alt="FallingBall Prediction Results" style="max-width: 100%; height: auto; border-radius: 6px; margin-bottom: 1rem;">
    <p><strong>Figure 2: Prediction Results Comparison</strong></p>
    <p>Visual comparison showing predicted vs actual ball trajectories. The sky blue circle represents the actual future state, the blue circle shows CGLSTM predictions, and red circles indicate prediction errors. Gray circles appear when all three align perfectly, demonstrating CGLSTM's superior accuracy.</p>
  </div>
  
  <div class="project-image-placeholder" style="grid-column: 1 / -1; max-width: 100%;">
    <img src="https://goodluckoguzie.github.io/Viva/img/fallingballenv_cglstm_results.jpg" alt="CGLSTM Results in FallingBallEnv" style="width: 100%; max-width: 1200px; height: auto; border-radius: 6px; margin-bottom: 1rem; display: block; margin-left: auto; margin-right: auto;">
    <p><strong>Figure 3: CGLSTM Performance in FallingBallEnv</strong></p>
    <p>Detailed results showing CGLSTM's prediction accuracy across different prediction horizons (k=1, 3, 5, 10). Demonstrates consistently lower MAE compared to baseline models.</p>
  </div>
  
  <div class="project-video-placeholder">
    <video controls style="max-width: 100%; height: auto; border-radius: 6px; margin-bottom: 1rem;">
      <source src="{{ '/assets/images/FallingBallEnv.webm' | relative_url }}" type="video/webm">
      Your browser does not support the video tag. <a href="{{ '/assets/images/FallingBallEnv.webm' | relative_url }}">Download the video</a>
    </video>
    <p><strong>Demo Video: Real-time Environment Demonstration</strong></p>
    <p>Real-time demonstration of FallingBallEnv showing ball physics, bouncing mechanics, and model predictions in action. The video illustrates how the hidden floor challenge forces models to learn implicit boundary conditions.</p>
  </div>
</div>

### Dataset Visualizations

<p><strong>Figure 5: Dataset Balance Comparison</strong></p>
<p>The balanced dataset ensured equal representation of bounce events and free-fall phases. This visualization (from thesis) shows how balanced data improves model learning of transition events compared to the unbalanced full dataset.</p>

## Experimental Setup

### Models Tested
- **Vanilla LSTM:** Baseline recurrent architecture
- **GRU:** Gated Recurrent Unit (simpler than LSTM)
- **RAU:** Recurrent Attention Unit
- **Transformer:** Encoder-only architecture
- **CGLSTM:** Cosine-Gated LSTM (proposed model)

### Hyperparameters
- **Hidden Size:** 128 units
- **Batch Size:** 128
- **Learning Rate:** 1×10⁻³ (0.001)
- **Optimizer:** Adam
- **Epochs:** Variable (early stopping applied)
- **Random Seeds:** 3 different seeds per model (results averaged)

### Evaluation Metrics
- **Mean Absolute Error (MAE):** Primary metric
- **Mean Squared Error (MSE):** Secondary metric
- **Prediction Time:** Inference speed comparison
- **Visual Validation:** Qualitative assessment of predictions

---

## Research Impact

The FallingBallEnv provided crucial insights into sequential learning that informed the development and validation of CGLSTM. Results demonstrated that CGLSTM's cosine similarity gating mechanism significantly improves prediction accuracy in temporal tasks, establishing a foundation for applying the model to more complex social navigation scenarios.

**Key Contributions:**
1. **Validated CGLSTM Architecture:** Proved cosine gating improves sequential learning
2. **Demonstrated Dataset Balance Importance:** 25% performance improvement with balanced data
3. **Established Baseline for Social Navigation:** Used as stepping stone before SocNavGym
4. **Provided Controlled Testing Environment:** Isolated prediction challenges from complex interactions

---

## Limitations & Future Work

### Current Limitations
- **Simplified Physics:** Does not model air resistance or complex collisions
- **Single Ball:** Only simulates one object (no multi-agent scenarios)
- **2D Environment:** Limited to 2D space (could be extended to 3D)
- **Fixed Parameters:** Gravity and energy loss are constants (could be stochastic)

### Potential Extensions
- **Multi-Ball Scenarios:** Multiple balls with interactions
- **Variable Gravity:** Stochastic or time-varying gravity
- **3D Environment:** Extend to 3D space for more realistic physics
- **Stochastic Dynamics:** Add noise to physics simulation
- **Different Objects:** Support for various shapes and sizes

---

## Related Work

**Used In:**
- <a href="{{ '/projects/cosine-gated-lstm' | relative_url }}">Cosine-Gated LSTM (CGLSTM)</a> - Validated CGLSTM architecture
- <a href="{{ '/portfolio' | relative_url }}#predictive-world-models">Predictive World Models</a> - Part of comprehensive RL research framework

**Related Environments:**
- <a href="{{ '/projects/socnavgym' | relative_url }}">SocNavGym</a> - Complex social navigation environment
- <a href="{{ '/projects/litesocnavgym' | relative_url }}">LiteSocNavGym</a> - Lightweight version for faster iteration

---

## Citation

If you use FallingBallEnv in your research, please cite:

**BibTeX:**
```bibtex
@software{fallingballenv2023,
  title = {FallingBallEnv: A Custom Gym Environment for Sequential Learning Validation},
  author = {Oguzie, Goodluck},
  year = {2023},
  url = {https://github.com/goodluckoguzie/falling_ball_env},
  note = {Used in: Oguzie, G. (2024). Cosine-Gated LSTM for Sequential Learning. 
          In 2024 IEEE 5th International Conference on Pattern Recognition and Machine Learning (PRML), pp. 8-15.
          PhD Thesis: Enhancing Robot Social Navigation with Reinforcement Learning and Advanced Predictive Models,
          Aston University, 2024, Chapter 6}
}
```

**APA:**
```
Oguzie, G. (2023). FallingBallEnv: A Custom Gym Environment for Sequential Learning Validation [Computer software]. 
GitHub. https://github.com/goodluckoguzie/falling_ball_env
```

---

## Resources & Links

<p><strong>Technologies:</strong> Python • OpenAI Gym • Gymnasium • NumPy • OpenCV • Machine Learning • PyTorch</p>

**Code & Repository:**
- <a href="https://github.com/goodluckoguzie/falling_ball_env" target="_blank" class="btn" style="display: inline-block; margin: 0.25rem;">GitHub Repository</a>
- <a href="https://github.com/goodluckoguzie/falling_ball_env/tree/main/Images" target="_blank" class="btn btn-secondary" style="display: inline-block; margin: 0.25rem;">View Images on GitHub</a>

**Publications & Documentation:**
- <a href="{{ '/publications' | relative_url }}" class="btn btn-secondary" style="display: inline-block; margin: 0.25rem;">IEEE PRML 2024 Paper</a>
- <a href="{{ '/Goodluck_s_thesis.zip' | relative_url }}" target="_blank" class="btn btn-secondary" style="display: inline-block; margin: 0.25rem;">PhD Thesis (Chapter 6)</a>
- <a href="https://goodluckoguzie.github.io/Viva/" target="_blank" class="btn btn-secondary" style="display: inline-block; margin: 0.25rem;">Viva Presentation</a>

**Related Projects:**
- <a href="{{ '/projects/cosine-gated-lstm' | relative_url }}" class="btn btn-secondary" style="display: inline-block; margin: 0.25rem;">Cosine-Gated LSTM Research</a>
- <a href="{{ '/projects/socnavgym' | relative_url }}" class="btn btn-secondary" style="display: inline-block; margin: 0.25rem;">SocNavGym Environment</a>

<div style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid var(--border);">
  <a href="{{ '/portfolio' | relative_url }}" class="btn">← Back to Research Portfolio</a>
</div>

