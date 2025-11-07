---
layout: default
title: FallingBallEnv - Research Project
---

# ⚽ FallingBallEnv

<div class="project-header">
  <div class="contribution-badge created">DEVELOPED</div>
  <div class="project-status-badge completed">COMPLETED</div>
  <div class="contribution-badge publication badge-spacing">USED IN: IEEE PRML 2024</div>
  <p><strong>2023</strong> • Custom OpenAI Gym Environment • Published in PhD Thesis Chapter 6</p>
</div>

<div class="table-of-contents">
  <h3>📑 Table of Contents</h3>
  <ul>
    <li><a href="#hero">1. Overview</a></li>
    <li><a href="#motivation">2. Research Motivation</a></li>
    <li><a href="#challenge">3. The Challenge</a></li>
    <li><a href="#innovation">4. Key Innovation</a></li>
    <li><a href="#results">5. Results & Performance</a></li>
    <li><a href="#visual-demo">6. Visual Demo</a></li>
    <li><a href="#setup">7. Experimental Setup</a></li>
    <li><a href="#specs">8. Technical Specifications</a></li>
    <li><a href="#usage">9. Installation & Usage</a></li>
    <li><a href="#impact">10. Research Impact</a></li>
    <li><a href="#limitations">11. Limitations & Future Work</a></li>
    <li><a href="#related">12. Related Work</a></li>
    <li><a href="#faq">13. FAQ</a></li>
    <li><a href="#citation">14. Citation & Resources</a></li>
  </ul>
</div>

---

## <a id="hero"></a>1. Overview

<div class="hero-section">
  <div class="hero-section-grid">
    <div class="hero-section-content">
      <h2>A Simple Challenge</h2>
      <p>
        I developed this simple environment where a ball falls and bounces, obeying the free fall of gravity. The floor position is not included in the observation space. Can the model learn to predict the next state of this environment, for example, the bouncing of the ball when it hits the ground?
      </p>
      
      <div class="quick-stats">
        <div class="quick-stats-item">
          <div class="quick-stats-item-icon">🎯</div>
          <div class="quick-stats-item-value">25% Lower MAE</div>
          <div class="quick-stats-item-label">with balanced datasets</div>
        </div>
        <div class="quick-stats-item">
          <div class="quick-stats-item-icon">📊</div>
          <div class="quick-stats-item-value">3 Datasets</div>
          <div class="quick-stats-item-label">20K, 14.7K balanced, 14.7K unbalanced</div>
        </div>
        <div class="quick-stats-item">
          <div class="quick-stats-item-icon">✅</div>
          <div class="quick-stats-item-value">Validated CGLSTM</div>
          <div class="quick-stats-item-label">IEEE PRML 2024</div>
        </div>
      </div>
    </div>
    
    <div class="hero-section-media">
      <video autoplay muted loop playsinline preload="metadata" poster="{{ '/assets/images/FallingBall.png' | relative_url }}">
        <source src="{{ '/video/FallingBallEnv.webm' | relative_url }}" type="video/webm">
        Your browser does not support the video tag.
      </video>
      <p>Watch the environment in action: hidden floor challenge demonstrated</p>
    </div>
  </div>
</div>

---

## <a id="motivation"></a>2. Research Motivation

### Why This Was Needed

When transitioning from discrete to continuous action spaces in SocNavGym, I observed that as action choices increased from 4 to 16, prediction errors became more pronounced. This highlighted the need for more robust sequential learning models that could handle incomplete state information.

I developed FallingBallEnv as a controlled testing ground to explore fundamental challenges in temporal prediction before applying methods to complex environments like SocNavGym. It isolates the core challenge of learning from incomplete observations, allowing for focused investigation of sequential learning capabilities without the complexity of social navigation dynamics.

### Research Design

To study the impact of data distribution on model performance, I created three distinct datasets:

- **Full Dataset:** 20,000 episodes (unbalanced, with bounce events underrepresented)
- **Balanced Dataset:** 14,700 episodes with equal representation of bounce and free-fall windows
- **Unbalanced Subset:** 14,700 episodes randomly sampled without balancing (control group)

The balanced dataset ensured models were exposed to bounce events more frequently, improving their ability to learn bounce dynamics effectively.

---

## <a id="challenge"></a>3. The Challenge

### What Makes This Hard?

In FallingBallEnv, the floor position is deliberately hidden from the observation space (<a href="#innovation" class="internal-link">see Key Innovation section</a>). Models only receive:
- Ball's position (x, y)
- Ball's velocity (vx, vy)

**The challenge:** Can your model learn to infer where the floor is from the ball's trajectory alone?

### Why This Matters

This tests whether models can:
1. **Learn implicit physics** - Infer boundary conditions from observations
2. **Handle incomplete information** - Make predictions with missing state data
3. **Generalize patterns** - Learn bounce dynamics without explicit floor coordinates

---

## <a id="innovation"></a>4. Key Innovation

### What Makes This Unique

Unlike most Gym environments that reveal all state information, FallingBallEnv deliberately omits the floor position from the observation space. This creates a controlled test of sequential learning where models must infer boundary conditions from trajectory patterns alone.

**Key Design Elements:**
- **Observation Space:** (x, y, vx, vy) - 4D continuous vector (<a href="#specs" class="internal-link">see Technical Specifications section</a>)
- **Hidden State:** Floor position (y_floor) - deliberately excluded
- **Learning Challenge:** Infer floor position from trajectory observations
- **Controlled Complexity:** Simple physics simulation with complex learning requirement

---

## <a id="results"></a>5. Results & Performance

### Balanced Dataset Impact

<div class="info-box">
  <h4>Key Finding: Balanced Dataset Impact</h4>
  <p>The balanced dataset (equal representation of bounce and free-fall windows) resulted in a <strong>25% reduction in MAE</strong> compared to the unbalanced dataset, highlighting the importance of balanced training data for learning transition events like bounces.</p>
</div>

### Model Performance Comparison

<div class="table-wrapper">
<table>
  <thead>
    <tr>
      <th class="text-left"><strong>Model</strong></th>
      <th class="text-center"><strong>MAE (k=1)</strong></th>
      <th class="text-center"><strong>MAE (k=3)</strong></th>
      <th class="text-center"><strong>MAE (k=5)</strong></th>
      <th class="text-center"><strong>MAE (k=10)</strong></th>
      <th class="text-center"><strong>Time (s)</strong></th>
      <th class="text-center"><strong>Params</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Vanilla LSTM</strong></td>
      <td class="text-center">1.643×10⁻⁴</td>
      <td class="text-center">1.705×10⁻⁴</td>
      <td class="text-center">1.730×10⁻⁴</td>
      <td class="text-center">4.696×10⁻³</td>
      <td class="text-center">0.00108</td>
      <td class="text-center">84,419</td>
    </tr>
    <tr>
      <td><strong>GRU</strong></td>
      <td class="text-center">1.737×10⁻⁴</td>
      <td class="text-center">1.677×10⁻⁴</td>
      <td class="text-center">2.114×10⁻⁴</td>
      <td class="text-center">4.793×10⁻³</td>
      <td class="text-center">0.00091</td>
      <td class="text-center">63,363</td>
    </tr>
    <tr>
      <td><strong>Transformer</strong></td>
      <td class="text-center">9.138×10⁻⁵</td>
      <td class="text-center">7.189×10⁻⁵</td>
      <td class="text-center">8.910×10⁻⁵</td>
      <td class="text-center">1.528×10⁻³</td>
      <td class="text-center">0.01417</td>
      <td class="text-center">1,125,059</td>
    </tr>
    <tr class="highlight-row">
      <td><strong>🎯 CGLSTM</strong></td>
      <td class="text-center"><strong>3.558×10⁻⁵</strong></td>
      <td class="text-center"><strong>4.302×10⁻⁵</strong></td>
      <td class="text-center"><strong>2.341×10⁻⁵</strong></td>
      <td class="text-center"><strong>1.360×10⁻³</strong></td>
      <td class="text-center">0.00325</td>
      <td class="text-center">104,771</td>
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

## <a id="visual-demo"></a>6. Visual Demo

<div class="project-media">
  <div class="project-image-placeholder">
    <img src="{{ '/assets/images/FallingBall.png' | relative_url }}" alt="FallingBall Environment Visualization" loading="lazy">
    <p><strong>Figure 1: Environment Visualization</strong></p>
    <p>Ball falling and bouncing in FallingBallEnv. Yellow circle = current state. The floor position is not included in the observation space.</p>
  </div>
  
  <div class="project-image-placeholder">
    <img src="{{ '/assets/images/FallingBallwithprediction.png' | relative_url }}" alt="FallingBall Prediction Results" loading="lazy">
    <p><strong>Figure 2: Prediction Comparison</strong></p>
    <p>Sky blue = actual future, blue = CGLSTM prediction, red = errors, gray = perfect alignment.</p>
  </div>
  
  <div class="project-image-placeholder project-image-full-width">
    <img src="{{ '/assets/images/fallingballenv_cglstm_results.jpg' | relative_url }}" alt="CGLSTM performance results in FallingBallEnv showing prediction accuracy across multiple horizons (k=1, 3, 5, 10) with comparison to baseline models" class="project-image-large" loading="lazy">
    <p><strong>Figure 3: CGLSTM Performance</strong></p>
    <p>Detailed results showing CGLSTM's superior accuracy across prediction horizons (k=1, 3, 5, 10).</p>
  </div>
</div>

---

## <a id="setup"></a>7. Experimental Setup

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

## <a id="specs"></a>8. Technical Specifications

### Observation Space
- **Dimensions:** 4D continuous vector `[x, y, vx, vy]`
- **Components:** 
  - `x`: Horizontal position (continuous)
  - `y`: Vertical position (continuous)
  - `vx`: Horizontal velocity (continuous)
  - `vy`: Vertical velocity (continuous)
- **Important:** Floor position (`y_floor`) is deliberately excluded from observations (<a href="#innovation" class="internal-link">see Key Innovation section</a>)

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
- **Limited Observation Space:** Only ball's (x,y) coordinates and velocity (floor position excluded)
- **Bouncing Mechanism:** Ball bounces off floor with reduced velocity (energy loss)
- **Render Support:** Visualize ball motion for analysis
- **OpenAI Gym Compatible:** Standard interface for RL algorithm integration
- **Controlled Complexity:** Focuses on prediction rather than complex physics simulation

---

## <a id="usage"></a>9. Installation & Usage

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

## <a id="impact"></a>10. Research Impact

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

## <a id="limitations"></a>11. Limitations & Future Work

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

## <a id="related"></a>12. Related Work

**Used In:**
- <a href="{{ '/projects/cosine-gated-lstm' | relative_url }}">Cosine-Gated LSTM (CGLSTM)</a> - Validated CGLSTM architecture
- <a href="{{ '/portfolio' | relative_url }}#predictive-world-models">Predictive World Models</a> - Part of comprehensive RL research framework

**Related Environments:**
- <a href="{{ '/projects/socnavgym' | relative_url }}">SocNavGym</a> - Complex social navigation environment
- <a href="{{ '/projects/litesocnavgym' | relative_url }}">LiteSocNavGym</a> - Lightweight version for faster iteration

**Comparison with Other Environments:**
Unlike standard Gym environments (CartPole, MountainCar, etc.), FallingBallEnv deliberately omits state information to test implicit physics learning (<a href="#innovation" class="internal-link">see Key Innovation section</a>). This makes it unique for evaluating sequential learning models that must infer hidden dynamics.

---

## <a id="faq"></a>13. FAQ

### Q: Why is the floor position hidden?
**A:** This design tests whether models can learn implicit physics from observations alone. Unlike most Gym environments that reveal all state information, FallingBallEnv requires models to infer hidden boundary conditions from trajectory patterns (<a href="#innovation" class="internal-link">see Key Innovation section</a>).

### Q: How does this compare to other Gym environments?
**A:** Most Gym environments (CartPole, MountainCar, etc.) reveal all state information. FallingBallEnv uniquely tests learning of implicit physics by hiding the floor position, creating a controlled test of sequential learning capabilities (<a href="#innovation" class="internal-link">see Key Innovation section</a>).

### Q: Can I use this for my research?
**A:** Yes! The environment is open-source and available on GitHub. It's particularly useful for:
- Testing sequential learning models
- Evaluating physics-informed learning approaches
- Benchmarking model architectures
- Teaching sequential learning concepts

### Q: What makes this environment challenging?
**A:** The hidden floor position forces models to learn implicit physics from trajectory observations alone. This tests whether models can infer boundary conditions without explicit state information.

### Q: How do I get started?
**A:** Clone the repository, install dependencies, and check out the Quick Start example in the <a href="#usage" class="internal-link">Installation & Usage section</a> above.

### Q: What datasets were used?
**A:** Three datasets were created:
- **Full Dataset:** 20,000 episodes (unbalanced)
- **Balanced Dataset:** 14,700 episodes with equal bounce/free-fall representation
- **Unbalanced Subset:** 14,700 episodes randomly sampled (control group)

### Q: What models were tested?
**A:** Vanilla LSTM, GRU, RAU, Transformer, and CGLSTM (proposed model). CGLSTM achieved the best performance across all metrics.

---

## <a id="citation"></a>14. Citation & Resources

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
