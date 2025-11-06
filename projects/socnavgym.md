---
layout: default
title: SocNavGym - Research Project
---

# 👥 SocNavGym

<div class="project-header">
  <div class="contribution-badge team">TEAM CONTRIBUTION</div>
  <div class="project-status-badge completed">COMPLETED</div>
  <p><strong>2020-2024</strong> • Team Project • Supervisor: Dr. Luis J. Manso</p>
</div>

<div class="table-of-contents" style="background: var(--bg-alt); padding: 1.5rem; border-radius: 8px; margin: 2rem 0; border-left: 4px solid var(--link);">
  <h3 style="margin-top: 0; color: var(--link);">📑 Table of Contents</h3>
  <ul style="columns: 2; column-gap: 2rem; list-style: none; padding-left: 0;">
    <li><a href="#hero">1. Overview</a></li>
    <li><a href="#motivation">2. Research Motivation</a></li>
    <li><a href="#challenge">3. The Challenge</a></li>
    <li><a href="#innovation">4. Key Innovation</a></li>
    <li><a href="#results">5. Results & Performance</a></li>
    <li><a href="#visual-demo">6. Visual Demo</a></li>
    <li><a href="#contribution">7. My Contribution</a></li>
    <li><a href="#specs">8. Technical Specifications</a></li>
    <li><a href="#usage">9. Installation & Usage</a></li>
    <li><a href="#impact">10. Research Impact</a></li>
    <li><a href="#setup">11. Experimental Setup</a></li>
    <li><a href="#comparison">12. Comparison with LiteSocNavGym</a></li>
    <li><a href="#limitations">13. Limitations & Future Work</a></li>
    <li><a href="#related">14. Related Work</a></li>
    <li><a href="#faq">15. FAQ</a></li>
    <li><a href="#citation">16. Citation & Resources</a></li>
  </ul>
</div>

---

## <a id="hero"></a>1. Overview

<div class="hero-section" style="background: linear-gradient(135deg, var(--bg-alt) 0%, var(--bg-card) 100%); padding: 2rem; border-radius: 12px; margin: 2rem 0; border: 2px solid var(--border);">
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center;">
    <div>
      <h2 style="margin-top: 0; color: var(--text); font-size: 2rem;">Comprehensive Social Navigation</h2>
      <p style="font-size: 1.125rem; line-height: 1.8; color: var(--text); margin-bottom: 1.5rem;">
        SocNavGym is a comprehensive social navigation gymnasium environment for evaluating social robot navigation algorithms. As part of the development team, I focused on reinforcement learning aspects and integration with predictive models. This was the primary environment for testing Predictive World Models and validating Adaptive Prediction Horizons, with results published in UKCI 2023 and my PhD thesis.
      </p>
      
      <div class="quick-stats" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1.5rem 0;">
        <div style="text-align: center; padding: 1rem; background: var(--bg); border-radius: 8px; border: 1px solid var(--border);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎯</div>
          <div style="font-weight: bold; color: var(--link);">Primary Environment</div>
          <div style="font-size: 0.875rem; color: var(--text-light);">For predictive models</div>
        </div>
        <div style="text-align: center; padding: 1rem; background: var(--bg); border-radius: 8px; border: 1px solid var(--border);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">📚</div>
          <div style="font-weight: bold; color: var(--link);">UKCI 2023</div>
          <div style="font-size: 0.875rem; color: var(--text-light);">Published results</div>
        </div>
        <div style="text-align: center; padding: 1rem; background: var(--bg); border-radius: 8px; border: 1px solid var(--border);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">✅</div>
          <div style="font-weight: bold; color: var(--link);">Team Project</div>
          <div style="font-size: 0.875rem; color: var(--text-light);">2020-2024</div>
        </div>
      </div>
    </div>
    
    <div style="text-align: center;">
      <video autoplay muted loop playsinline style="width: 100%; max-width: 500px; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" poster="{{ '/video/SocNavGym.mp4' | relative_url }}">
        <source src="{{ '/video/SocNavGym.mp4' | relative_url }}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p style="margin-top: 0.75rem; font-size: 0.875rem; color: var(--text-light); font-style: italic;">Watch SocNavGym in action: comprehensive social navigation environment with dynamic obstacles</p>
    </div>
  </div>
</div>

---

## <a id="motivation"></a>2. Research Motivation

### Why This Was Needed

Social robot navigation requires algorithms that can handle complex interactions with humans and dynamic environments. Traditional navigation environments lacked the social dynamics necessary to evaluate algorithms designed for real-world social scenarios.

SocNavGym was developed to provide a comprehensive testing ground for social navigation algorithms, enabling researchers to:
- **Evaluate Social Navigation Algorithms** - Test algorithms in realistic social scenarios
- **Benchmark Performance** - Compare different approaches systematically
- **Validate Predictive Models** - Test predictive world models in complex environments
- **Study Social Dynamics** - Understand how robots interact with humans

### Research Design

As part of the development team, I focused on reinforcement learning aspects and integration with predictive models (see My Contribution section). SocNavGym became the primary environment for testing Predictive World Models (2StepAhead, MASPM) and validating Adaptive Prediction Horizons (see Research Impact section), enabling comprehensive evaluation of sequential learning approaches in complex social navigation scenarios.

---

## <a id="challenge"></a>3. The Challenge

### What Makes This Hard?

Social navigation presents unique challenges:
- **Dynamic Environments** - Obstacles and humans move unpredictably
- **Social Rules** - Algorithms must respect social norms and conventions
- **Complex Interactions** - Multiple agents interact simultaneously
- **Real-time Performance** - Algorithms must respond quickly to changes

### The Solution

SocNavGym addresses these challenges by providing:
- **Comprehensive Social Scenarios** - Realistic social navigation situations
- **Dynamic Obstacles** - Moving agents and obstacles
- **Social Rules Engine** - Built-in social navigation conventions
- **Flexible Evaluation** - Customizable metrics and scenarios

---

## <a id="innovation"></a>4. Key Innovation

### What Makes SocNavGym Unique?

SocNavGym provides a comprehensive social navigation environment with:

1. **Full Social Dynamics**
   - Realistic human-robot interactions
   - Social navigation rules and conventions
   - Multi-agent scenarios

2. **Comprehensive Features**
   - Detailed visual rendering
   - Full physics simulation
   - Complete state representation

3. **Research Integration**
   - Compatible with standard RL frameworks
   - Supports predictive model evaluation
   - Enables comprehensive benchmarking

4. **Extensibility**
   - Customizable scenarios
   - Flexible evaluation metrics
   - Easy integration with new algorithms

---

## <a id="results"></a>5. Results & Performance

### Research Outcomes

SocNavGym has been used successfully for testing Predictive World Models (2StepAhead, MASPM) and validating Adaptive Prediction Horizons, with results published in UKCI 2023 and used in my PhD thesis (see Research Impact section for details).

### Key Achievements

- **Primary Testing Environment** - Used for all predictive model evaluations
- **Published Results** - UKCI 2023 publication
- **PhD Thesis Validation** - Core environment for thesis research
- **Comprehensive Evaluation** - Full-featured testing platform (see Key Innovation section)

---

## <a id="visual-demo"></a>6. Visual Demo

<div class="project-media">
  <div class="project-video-placeholder" style="grid-column: 1 / -1;">
    <video autoplay muted loop playsinline style="max-width: 100%; height: auto; border-radius: 6px; margin-bottom: 1rem;">
      <source src="{{ '/video/SocNavGym.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <p><strong>Demo Video: SocNavGym Environment</strong></p>
    <p>Watch the environment in action: comprehensive social navigation scenarios with dynamic obstacles and multi-agent interactions (see Key Innovation section).</p>
  </div>
</div>

---

## <a id="contribution"></a>7. My Contribution

### Team Role

As part of the development team, I focused on:

1. **RL Algorithm Integration**
   - Integration with reinforcement learning frameworks
   - Testing RL algorithms in social navigation scenarios
   - Performance benchmarking systems

2. **Predictive Model Evaluation**
   - Framework for evaluating predictive world models
   - Integration with 2StepAhead and MASPM models
   - Validation of Adaptive Prediction Horizons

3. **Performance Benchmarking**
   - Development of evaluation metrics
   - Systematic performance comparison
   - Results analysis and reporting

4. **Research Integration**
   - Integration with proposed models
   - Publication support (UKCI 2023)
   - PhD thesis research support

---

## <a id="specs"></a>8. Technical Specifications

### Environment Type
- **Base:** Gymnasium-compatible environment
- **Purpose:** Social navigation simulation
- **Features:** Comprehensive social dynamics

### Observation Space
- **Type:** Social navigation state information
- **Format:** Comprehensive state representation
- **Features:** Full environment state

### Action Space
- **Type:** Navigation actions
- **Format:** Continuous and discrete actions
- **Features:** Full action space support

### Key Features
- **Comprehensive Social Scenarios** - Realistic social navigation situations (see Key Innovation section)
- **Dynamic Obstacles** - Moving agents and obstacles
- **Social Rules Engine** - Built-in social navigation conventions
- **Full Visual Rendering** - Detailed graphics and visualization
- **RL Framework Compatible** - Works with standard frameworks
- **Extensible Design** - Customizable scenarios and metrics

---

## <a id="usage"></a>9. Installation & Usage

### Installation

```bash
# Clone the repository
git clone https://github.com/gnns4hri/SocNavGym.git
cd SocNavGym

# Install dependencies
pip install -e .
# or
pip install gymnasium numpy pygame
```

### When to Use SocNavGym

**Use SocNavGym when:**
- ✅ Need comprehensive social navigation features
- ✅ Require detailed visual rendering
- ✅ Final evaluation and validation
- ✅ Full-featured environment testing
- ✅ Research publication validation

**Use LiteSocNavGym when:**
- ✅ Rapid development and testing
- ✅ Quick iteration during prototyping
- ✅ Fast algorithm benchmarking

### Basic Usage

```python
import gymnasium as gym
from socnavgym import SocNavGym

# Create environment
env = SocNavGym()

# Reset environment
obs, info = env.reset()
print(f"Observation: {obs}")
print(f"Info: {info}")

# Run episode
for step in range(1000):
    # Get action from your model
    action = your_model.predict(obs)
    
    # Step environment
    obs, reward, terminated, truncated, info = env.step(action)
    
    # Render (optional)
    env.render()
    
    if terminated or truncated:
        obs, info = env.reset()

env.close()
```

### Integration with Predictive Models

```python
# Example: Using with 2StepAhead model
from socnavgym import SocNavGym
from your_models import TwoStepAhead

env = SocNavGym()
model = TwoStepAhead()

obs, info = env.reset()
for step in range(1000):
    action = model.predict(obs)
    obs, reward, terminated, truncated, info = env.step(action)
    if terminated or truncated:
        obs, info = env.reset()
```

### API Documentation

**Main Methods:**
- `reset()` - Reset environment, returns (observation, info)
- `step(action)` - Execute action, returns (observation, reward, terminated, truncated, info)
- `render()` - Render visualization
- `close()` - Close environment

**Observation Format:**
- Returns: Social navigation state information
- Format: Comprehensive state representation
- Features: Full environment state (see Technical Specifications section)

**Action Format:**
- Type: Navigation actions
- Format: Continuous and discrete actions
- Features: Full action space support (see Technical Specifications section)

---

## <a id="impact"></a>10. Research Impact

SocNavGym was the primary environment for testing Predictive World Models (2StepAhead, MASPM) and validating Adaptive Prediction Horizons, with results published in UKCI 2023 and used in my PhD thesis. The environment enabled comprehensive evaluation of sequential learning approaches in complex social navigation scenarios, establishing a foundation for applying predictive models to real-world social robot navigation.

**Key Contributions:**
1. **Primary Testing Environment** - Used for all predictive model evaluations (see Results & Performance section)
2. **Published Results** - UKCI 2023 publication
3. **PhD Thesis Support** - Core environment for thesis research
4. **Comprehensive Evaluation** - Full-featured testing platform (see Key Innovation section)

### Usage in Research

SocNavGym was important for evaluating and validating Predictive World Models and Adaptive Prediction Horizons. The environment enabled:

- Testing Predictive World Models (2StepAhead, MASPM) with comprehensive evaluation
- Validating Adaptive Prediction Horizons systems in complex social scenarios
- Benchmarking navigation algorithms and evaluating RL approaches
- Systematic performance analysis and research validation
- Validating model performance in realistic social navigation scenarios before real-world deployment

---

## <a id="setup"></a>11. Experimental Setup

### Research Context

SocNavGym was used as the primary environment for testing Predictive World Models (2StepAhead, MASPM) and validating Adaptive Prediction Horizons. The environment enabled comprehensive evaluation of sequential learning approaches in complex social navigation scenarios.

### Evaluation Framework

As part of the development team, I developed the evaluation framework for:
- **Predictive Model Testing** - Testing 2StepAhead and MASPM models
- **Adaptive Prediction Validation** - Validating Adaptive Prediction Horizons systems
- **Performance Benchmarking** - Comparing different navigation approaches
- **RL Algorithm Evaluation** - Evaluating reinforcement learning approaches

### Research Integration

SocNavGym was integrated with:
- **Predictive World Models** - 2StepAhead and MASPM models
- **Adaptive Prediction Horizons** - Dynamic prediction horizon systems
- **Standard RL Frameworks** - Gymnasium-compatible interfaces
- **Evaluation Metrics** - Customizable performance metrics

---

## <a id="comparison"></a>12. Comparison with LiteSocNavGym

### When to Use Which

<div style="overflow-x: auto; margin: 2rem 0;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
  <thead>
    <tr style="background: var(--bg-alt); border-bottom: 2px solid var(--border);">
      <th style="padding: 0.75rem; text-align: left; border: 1px solid var(--border);"><strong>Feature</strong></th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);"><strong>SocNavGym</strong></th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);"><strong>LiteSocNavGym</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 0.75rem; border: 1px solid var(--border);"><strong>Simulation Speed</strong></td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Baseline</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border); color: #28a745; font-weight: bold;">3-5x Faster</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 0.75rem; border: 1px solid var(--border);"><strong>Visual Rendering</strong></td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Full Detail</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Lite</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 0.75rem; border: 1px solid var(--border);"><strong>Core Dynamics</strong></td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border); color: #28a745;">✅ Full</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border); color: #28a745;">✅ Preserved</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 0.75rem; border: 1px solid var(--border);"><strong>Use Case</strong></td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Final Evaluation</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Rapid Development</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 0.75rem; border: 1px solid var(--border);"><strong>API Compatibility</strong></td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border); color: #28a745;">✅ Full</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border); color: #28a745;">✅ Compatible</td>
    </tr>
  </tbody>
</table>
</div>

### Key Differences

**SocNavGym:**
- 🎨 Full visual rendering (see Key Innovation section)
- 📋 Comprehensive features (see Key Innovation section)
- 🔬 Full evaluation environment
- 🎯 Complete social navigation dynamics

**LiteSocNavGym:**
- ⚡ 3-5x faster simulation
- 🎯 Optimized for rapid iteration
- ✅ Core dynamics preserved
- 📊 Lite for speed

---

## <a id="limitations"></a>13. Limitations & Future Work

### Current Limitations

- **Computational Cost:** Full-featured environment can be computationally expensive for rapid iteration
- **Complexity:** Comprehensive features may be overkill for simple testing scenarios
- **Visual Rendering:** Detailed rendering requires more resources than lite versions
- **Setup Time:** Full environment setup may take longer than streamlined versions

### Potential Extensions

- **Performance Optimization:** Further optimization for faster simulation
- **Additional Scenarios:** More diverse social navigation situations
- **Enhanced Visualization:** Improved visual rendering and analysis tools
- **Extended Evaluation Metrics:** More comprehensive performance metrics
- **Integration with More Models:** Support for additional predictive models

### Future Work

- **Hybrid Approaches:** Combining SocNavGym with LiteSocNavGym for optimal workflow
- **Real-world Validation:** Testing algorithms in real-world social navigation scenarios
- **Extended Social Dynamics:** More complex social interaction models
- **Multi-robot Scenarios:** Support for multiple robots in social environments

---

## <a id="related"></a>14. Related Work

**Used In:**
- <a href="{{ '/projects/predictive-world-models' | relative_url }}">Predictive World Models</a> - Primary testing environment for 2StepAhead and MASPM models
- <a href="{{ '/projects/adaptive-prediction-horizons' | relative_url }}">Adaptive Prediction Horizons</a> - Validation environment for adaptive prediction systems
- <a href="{{ '/portfolio' | relative_url }}#predictive-world-models">UKCI 2023 Publication</a> - Results published in UKCI 2023

**Related Environments:**
- <a href="{{ '/projects/litesocnavgym' | relative_url }}">LiteSocNavGym</a> - Lightweight version for faster iteration (see Comparison section)
- <a href="{{ '/projects/fallingballenv' | relative_url }}">FallingBallEnv</a> - Controlled testing environment before applying methods to SocNavGym

**Comparison with Other Environments:**
- **vs. LiteSocNavGym:** Full-featured vs. lite version (see Comparison section)
- **vs. FallingBallEnv:** Complex social navigation vs. simple physics simulation
- **vs. Standard Gym Environments:** Social dynamics vs. basic navigation

---

## <a id="faq"></a>15. FAQ

### Q: What is SocNavGym?
**A:** SocNavGym is a comprehensive social navigation gymnasium environment for evaluating social robot navigation algorithms. It provides full-featured social navigation scenarios with dynamic obstacles and multi-agent interactions.

### Q: How was SocNavGym used in your research?
**A:** SocNavGym was the primary environment for testing Predictive World Models (2StepAhead, MASPM) and validating Adaptive Prediction Horizons (see Research Impact section). Results were published in UKCI 2023 and used in my PhD thesis.

### Q: What was your contribution to SocNavGym?
**A:** As part of the development team, I focused on reinforcement learning aspects, predictive model evaluation framework, performance benchmarking systems, and integration with proposed models (see My Contribution section).

### Q: When should I use SocNavGym vs LiteSocNavGym?
**A:** Use SocNavGym for final evaluation, comprehensive testing, and when you need full visual rendering. Use LiteSocNavGym for rapid development, testing, and prototyping (see Comparison section).

### Q: Is SocNavGym compatible with standard RL frameworks?
**A:** Yes, SocNavGym is compatible with standard reinforcement learning frameworks and works with Gymnasium.

### Q: Where can I find the code?
**A:** The code is available on GitHub at: <a href="https://github.com/gnns4hri/SocNavGym" target="_blank">gnns4hri/SocNavGym</a>

---

## <a id="citation"></a>16. Citation & Resources

### Citation

If you use SocNavGym in your research, please cite:

**BibTeX:**
```bibtex
@inproceedings{oguzie2023predictive,
  title={Predictive World Models for Social Navigation},
  author={Oguzie, Goodluck},
  booktitle={UK Conference on Intelligent Systems (UKCI 2023)},
  year={2023},
  organization={Aston University}
}
```

**APA:**
```
Oguzie, G. (2023). Predictive World Models for Social Navigation. 
In UK Conference on Intelligent Systems (UKCI 2023). Aston University.
```

### Resources & Links

<p><strong>Technologies:</strong> Python • Gymnasium • Reinforcement Learning • Social Navigation</p>

**GitHub Repository:**
- <a href="https://github.com/gnns4hri/SocNavGym" target="_blank" class="btn" style="display: inline-block; margin: 0.25rem;">SocNavGym on GitHub</a>

**Related Projects:**
- <a href="{{ '/projects/litesocnavgym' | relative_url }}" class="btn btn-secondary" style="display: inline-block; margin: 0.25rem;">LiteSocNavGym Environment</a> - Lightweight version
- <a href="{{ '/projects/predictive-world-models' | relative_url }}" class="btn btn-secondary" style="display: inline-block; margin: 0.25rem;">Predictive World Models</a> - Tested in SocNavGym
- <a href="{{ '/projects/adaptive-prediction-horizons' | relative_url }}" class="btn btn-secondary" style="display: inline-block; margin: 0.25rem;">Adaptive Prediction Horizons</a> - Validated in SocNavGym
- <a href="{{ '/projects/fallingballenv' | relative_url }}" class="btn btn-secondary" style="display: inline-block; margin: 0.25rem;">FallingBallEnv</a> - Controlled testing before SocNavGym

**Publications:**
- <a href="{{ '/publications' | relative_url }}" class="btn btn-secondary" style="display: inline-block; margin: 0.25rem;">UKCI 2023 Publication</a> - Predictive World Models for Social Navigation

**Research Applications:**
- Primary environment for testing Predictive World Models (see Research Impact section)
- Used for validating Adaptive Prediction Horizons (see Research Impact section)
- Core environment for PhD thesis research (see Research Impact section)

<div style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid var(--border);">
  <a href="{{ '/portfolio' | relative_url }}" class="btn">← Back to Research Portfolio</a>
</div>
