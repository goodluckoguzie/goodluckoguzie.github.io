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

<div class="table-of-contents" style="background: var(--bg-alt); padding: 1.5rem; border-radius: 8px; margin: 2rem 0; border-left: 4px solid var(--link);">
  <h3 style="margin-top: 0; color: var(--link);">📑 Table of Contents</h3>
  <ul style="columns: 2; column-gap: 2rem; list-style: none; padding-left: 0;">
    <li><a href="#hero">1. Overview</a></li>
    <li><a href="#challenge">2. The Challenge</a></li>
    <li><a href="#visual-demo">3. Visual Demo</a></li>
    <li><a href="#innovation">4. Key Innovation</a></li>
    <li><a href="#motivation">5. Research Motivation</a></li>
    <li><a href="#results">6. Visual Results</a></li>
    <li><a href="#performance">7. Model Performance</a></li>
    <li><a href="#setup">8. Experimental Setup</a></li>
    <li><a href="#specs">9. Technical Specifications</a></li>
    <li><a href="#usage">10. Installation & Usage</a></li>
    <li><a href="#impact">11. Research Impact</a></li>
    <li><a href="#limitations">12. Limitations & Future Work</a></li>
    <li><a href="#related">13. Related Work</a></li>
    <li><a href="#faq">14. FAQ</a></li>
    <li><a href="#citation">15. Citation & Resources</a></li>
  </ul>
</div>

---

## <a id="hero"></a>1. Overview

<div class="hero-section" style="background: linear-gradient(135deg, var(--bg-alt) 0%, var(--bg-card) 100%); padding: 2rem; border-radius: 12px; margin: 2rem 0; border: 2px solid var(--border);">
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center;">
    <div>
      <h2 style="margin-top: 0; color: var(--text); font-size: 2rem;">A Deceptively Simple Challenge</h2>
      <p style="font-size: 1.125rem; line-height: 1.8; color: var(--text); margin-bottom: 1.5rem;">
        FallingBallEnv is a custom OpenAI Gym environment that simulates a ball falling under gravity and bouncing off the floor. While appearing simple, it introduces a subtle challenge: <strong>the floor position is NOT included in the observation space</strong>, requiring models to infer this hidden boundary condition to predict when and how the ball will bounce.
      </p>
      
      <div class="quick-stats" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1.5rem 0;">
        <div style="text-align: center; padding: 1rem; background: var(--bg); border-radius: 8px; border: 1px solid var(--border);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎯</div>
          <div style="font-weight: bold; color: var(--link);">25% Lower MAE</div>
          <div style="font-size: 0.875rem; color: var(--text-light);">with balanced datasets</div>
        </div>
        <div style="text-align: center; padding: 1rem; background: var(--bg); border-radius: 8px; border: 1px solid var(--border);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">📊</div>
          <div style="font-weight: bold; color: var(--link);">3 Datasets</div>
          <div style="font-size: 0.875rem; color: var(--text-light);">20K, 14.7K balanced, 14.7K unbalanced</div>
        </div>
        <div style="text-align: center; padding: 1rem; background: var(--bg); border-radius: 8px; border: 1px solid var(--border);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">✅</div>
          <div style="font-weight: bold; color: var(--link);">Validated CGLSTM</div>
          <div style="font-size: 0.875rem; color: var(--text-light);">IEEE PRML 2024</div>
        </div>
      </div>
    </div>
    
    <div style="text-align: center;">
      <video autoplay muted loop playsinline style="width: 100%; max-width: 500px; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" poster="{{ '/assets/images/FallingBall.png' | relative_url }}">
        <source src="{{ '/video/FallingBallEnv.webm' | relative_url }}" type="video/webm">
        Your browser does not support the video tag.
      </video>
      <p style="margin-top: 0.75rem; font-size: 0.875rem; color: var(--text-light); font-style: italic;">Watch the environment in action: hidden floor challenge demonstrated</p>
    </div>
  </div>
</div>

---

## <a id="challenge"></a>2. The Challenge

### What Makes This Hard?

Most Gym environments reveal all state information. In FallingBallEnv, the **floor position is deliberately hidden** from the observation space. Models only receive:
- Ball's position (x, y)
- Ball's velocity (vx, vy)

**The challenge:** Can your model learn to infer where the floor is from the ball's trajectory alone?

### Why This Matters

This tests whether models can:
1. **Learn implicit physics** - Infer boundary conditions from observations
2. **Handle incomplete information** - Make predictions with missing state data
3. **Generalize patterns** - Learn bounce dynamics without explicit floor coordinates

### Visual Concept

<div style="background: var(--bg-alt); padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0; border-left: 4px solid var(--link);">
  <p><strong>Key Insight:</strong> The environment forces models to learn the hidden floor position through repeated observations of the ball's trajectory. This tests sequential learning capabilities in a controlled setting.</p>
</div>

---

## <a id="visual-demo"></a>3. Visual Demo

<div class="project-media">
  <div class="project-image-placeholder">
    <img src="{{ '/assets/images/FallingBall.png' | relative_url }}" alt="FallingBall Environment Visualization" style="max-width: 100%; height: auto; border-radius: 6px; margin-bottom: 1rem;">
    <p><strong>Figure 1: Environment Visualization</strong></p>
    <p>Ball falling and bouncing in FallingBallEnv. Yellow circle = current state. The floor position is hidden from observations.</p>
  </div>
  
  <div class="project-image-placeholder">
    <img src="{{ '/assets/images/FallingBallwithprediction.png' | relative_url }}" alt="FallingBall Prediction Results" style="max-width: 100%; height: auto; border-radius: 6px; margin-bottom: 1rem;">
    <p><strong>Figure 2: Prediction Comparison</strong></p>
    <p>Sky blue = actual future, blue = CGLSTM prediction, red = errors, gray = perfect alignment.</p>
  </div>
  
  <div class="project-image-placeholder" style="grid-column: 1 / -1; max-width: 100%;">
    <img src="https://goodluckoguzie.github.io/Viva/img/fallingballenv_cglstm_results.jpg" alt="CGLSTM Results in FallingBallEnv" style="width: 100%; max-width: 1200px; height: auto; border-radius: 6px; margin-bottom: 1rem; display: block; margin-left: auto; margin-right: auto;">
    <p><strong>Figure 3: CGLSTM Performance</strong></p>
    <p>Detailed results showing CGLSTM's superior accuracy across prediction horizons (k=1, 3, 5, 10).</p>
  </div>
</div>

---

## <a id="innovation"></a>4. Key Innovation

### The Hidden Floor Challenge

The core innovation is **deliberately omitting the floor position** from observations. This creates a controlled test of sequential learning:

- **Observation Space:** (x, y, vx, vy) - 4D continuous
- **Hidden:** Floor position (y_floor)
- **Challenge:** Infer floor position from trajectory patterns

### Why This Is Unique

Unlike most Gym environments:
- ❌ **Most environments:** Reveal all state information
- ✅ **FallingBallEnv:** Tests learning of implicit physics
- ✅ **Controlled complexity:** Simple physics, complex learning challenge
- ✅ **Reproducible:** Exact same conditions for fair comparison

---

## <a id="motivation"></a>5. Research Motivation

Created to address limitations observed when transitioning from discrete to continuous action spaces in SocNavGym. As action choices increased from 4 to 16, prediction errors became more pronounced, highlighting the need for more robust sequential learning models.

FallingBallEnv serves as a controlled testing ground to explore fundamental challenges in temporal prediction before applying methods to complex environments like SocNavGym.

### Research Design

Three distinct datasets were created to study the impact of data distribution on model performance:

- **Full Dataset:** 20,000 episodes (unbalanced - bounce events underrepresented)
- **Balanced Dataset:** 14,700 episodes with equal representation of bounce and free-fall windows
- **Unbalanced Subset:** 14,700 episodes randomly sampled without balancing (control group)

The balanced dataset ensured models were exposed to bounce events more frequently, improving their ability to learn bounce dynamics effectively.

---

## <a id="results"></a>6. Visual Results

### Performance Summary

<div style="background: var(--bg-alt); padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;">
  <h4>Key Finding: Balanced Dataset Impact</h4>
  <p>The balanced dataset (equal representation of bounce and free-fall windows) resulted in a <strong>25% reduction in MAE</strong> compared to the unbalanced dataset, highlighting the importance of balanced training data for learning transition events like bounces.</p>
</div>

### Performance Visualization

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 8px; border: 2px solid #28a745; text-align: center;">
    <div style="font-size: 2.5rem; font-weight: bold; color: #28a745; margin-bottom: 0.5rem;">78%</div>
    <div style="font-size: 0.875rem; color: var(--text-light);">Lower MAE than Transformer</div>
  </div>
  <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 8px; border: 2px solid #28a745; text-align: center;">
    <div style="font-size: 2.5rem; font-weight: bold; color: #28a745; margin-bottom: 0.5rem;">77%</div>
    <div style="font-size: 0.875rem; color: var(--text-light);">Faster than Transformer</div>
  </div>
  <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 8px; border: 2px solid #28a745; text-align: center;">
    <div style="font-size: 2.5rem; font-weight: bold; color: #28a745; margin-bottom: 0.5rem;">25%</div>
    <div style="font-size: 0.875rem; color: var(--text-light);">Lower MAE with balanced data</div>
  </div>
</div>

---

## <a id="performance"></a>7. Model Performance Comparison

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
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);"><strong>Time (s)</strong></th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);"><strong>Params</strong></th>
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
- ✅ **78% lower MAE than Transformer** at k=1
- ✅ **77% lower MAE than Vanilla LSTM** at k=1
- ✅ **79% lower MAE than GRU** at k=1
- ✅ **77% faster than Transformer** in prediction time
- ✅ **25% lower MAE with balanced dataset** compared to unbalanced

---

## <a id="setup"></a>8. Experimental Setup

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

## <a id="specs"></a>9. Technical Specifications

### Observation Space
- **Dimensions:** 4D continuous vector
- **Components:** 
  - `x`: Horizontal position (continuous)
  - `y`: Vertical position (continuous)
  - `vx`: Horizontal velocity (continuous)
  - `vy`: Vertical velocity (continuous)
- **Note:** Floor position (`y_floor`) is **NOT** included in observations

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

### Key Features
- **Simplified Physics:** Gravity simulation with customizable parameters
- **Limited Observation Space:** Only ball's (x,y) coordinates and velocity - floor position is hidden
- **Bouncing Mechanism:** Ball bounces off floor with reduced velocity (energy loss)
- **Render Support:** Visualize ball motion for analysis
- **OpenAI Gym Compatible:** Standard interface for RL algorithm integration
- **Controlled Complexity:** Focuses on prediction rather than complex physics simulation

---

## <a id="usage"></a>10. Installation & Usage

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
print(f"Observation: {obs}")  # [x, y, vx, vy]
print(f"Notice: Floor position is NOT in observations!")
print(f"Challenge: Can your model infer where the ball will bounce?")

# The model must learn the hidden floor position
# from the ball's trajectory alone

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

### API Documentation

**Main Methods:**
- `reset()` - Reset environment, returns (observation, info)
- `step(action)` - Execute action, returns (observation, reward, terminated, truncated, info)
- `render()` - Render visualization
- `close()` - Close environment

**Observation Format:**
- Returns: `[x, y, vx, vy]` - 4D continuous vector
- Note: Floor position is deliberately excluded

---

## <a id="impact"></a>11. Research Impact

FallingBallEnv provided crucial insights into sequential learning that informed the development and validation of CGLSTM. Results demonstrated that CGLSTM's cosine similarity gating mechanism significantly improves prediction accuracy in temporal tasks, establishing a foundation for applying the model to more complex social navigation scenarios.

**Key Contributions:**
1. **Validated CGLSTM Architecture:** Proved cosine gating improves sequential learning
2. **Demonstrated Dataset Balance Importance:** 25% performance improvement with balanced data
3. **Established Baseline for Social Navigation:** Used as stepping stone before SocNavGym
4. **Provided Controlled Testing Environment:** Isolated prediction challenges from complex interactions

### Usage in Research

FallingBallEnv was important for evaluating and validating the Cosine-Gated LSTM (CGLSTM) architecture. The environment enabled:

- Testing fundamental temporal dependency learning
- Analyzing transition event prediction (bounces)
- Comparing CGLSTM against Vanilla LSTM, GRU, RAU, and Transformer models
- Demonstrating the importance of balanced training data
- Validating model performance before applying methods to complex SocNavGym scenarios

---

## <a id="limitations"></a>12. Limitations & Future Work

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

## <a id="related"></a>13. Related Work

**Used In:**
- <a href="{{ '/projects/cosine-gated-lstm' | relative_url }}">Cosine-Gated LSTM (CGLSTM)</a> - Validated CGLSTM architecture
- <a href="{{ '/portfolio' | relative_url }}#predictive-world-models">Predictive World Models</a> - Part of comprehensive RL research framework

**Related Environments:**
- <a href="{{ '/projects/socnavgym' | relative_url }}">SocNavGym</a> - Complex social navigation environment
- <a href="{{ '/projects/litesocnavgym' | relative_url }}">LiteSocNavGym</a> - Lightweight version for faster iteration

**Comparison with Other Environments:**
Unlike standard Gym environments (CartPole, MountainCar, etc.), FallingBallEnv deliberately omits state information to test implicit physics learning. This makes it unique for evaluating sequential learning models that must infer hidden dynamics.

---

## <a id="faq"></a>14. FAQ

### Q: Why is the floor position hidden?
**A:** To test whether models can learn implicit physics from observations alone. Most Gym environments reveal all state information. FallingBallEnv tests whether models can infer hidden boundary conditions from trajectory patterns.

### Q: How does this compare to other Gym environments?
**A:** Most Gym environments (CartPole, MountainCar, etc.) reveal all state information. FallingBallEnv uniquely tests learning of implicit physics by hiding the floor position, creating a controlled test of sequential learning capabilities.

### Q: Can I use this for my research?
**A:** Yes! The environment is open-source and available on GitHub. It's particularly useful for:
- Testing sequential learning models
- Evaluating physics-informed learning approaches
- Benchmarking model architectures
- Teaching sequential learning concepts

### Q: What makes this environment challenging?
**A:** The hidden floor position forces models to learn implicit physics from trajectory observations alone. This tests whether models can infer boundary conditions without explicit state information.

### Q: How do I get started?
**A:** Clone the repository, install dependencies, and check out the Quick Start example in the Installation & Usage section above.

### Q: What datasets were used?
**A:** Three datasets were created:
- **Full Dataset:** 20,000 episodes (unbalanced)
- **Balanced Dataset:** 14,700 episodes with equal bounce/free-fall representation
- **Unbalanced Subset:** 14,700 episodes randomly sampled (control group)

### Q: What models were tested?
**A:** Vanilla LSTM, GRU, RAU, Transformer, and CGLSTM (proposed model). CGLSTM achieved the best performance across all metrics.

---

## <a id="citation"></a>15. Citation & Resources

### Citation

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

### Resources & Links

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
