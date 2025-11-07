---
layout: default
title: LiteSocNavGym - Research Project
---

# 🤖 LiteSocNavGym

<div class="project-header">
  <div class="contribution-badge created">DEVELOPED</div>
  <div class="project-status-badge completed">COMPLETED</div>
  <p><strong>2024</strong> • Lightweight Social Navigation Environment • Optimized for Rapid Iteration</p>
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
    <li><a href="#simplified">7. What Was Simplified</a></li>
    <li><a href="#preserved">8. What Was Preserved</a></li>
    <li><a href="#specs">9. Technical Specifications</a></li>
    <li><a href="#usage">10. Installation & Usage</a></li>
    <li><a href="#impact">11. Research Impact</a></li>
    <li><a href="#comparison">12. Comparison with SocNavGym</a></li>
    <li><a href="#faq">13. FAQ</a></li>
    <li><a href="#resources">14. Resources & Links</a></li>
  </ul>
</div>

---

## <a id="hero"></a>1. Overview

<div class="hero-section">
  <div class="hero-section-grid">
    <div class="hero-section-content">
      <h2>Lite for Speed</h2>
      <p>
        I developed this lightweight version of SocNavGym optimized for rapid iteration and faster simulation. Designed for efficient testing of predictive models and reinforcement learning approaches, it maintains core social interaction dynamics while dramatically reducing simulation time.
      </p>
      
      <div class="quick-stats">
        <div class="quick-stats-item">
          <div class="quick-stats-item-icon">⚡</div>
          <div class="quick-stats-item-value">3-5x Faster</div>
          <div class="quick-stats-item-label">than SocNavGym</div>
        </div>
        <div class="quick-stats-item">
          <div class="quick-stats-item-icon">🎯</div>
          <div class="quick-stats-item-value">Predictive Models</div>
          <div class="quick-stats-item-label">Testing & validation</div>
        </div>
        <div class="quick-stats-item">
          <div class="quick-stats-item-icon">✅</div>
          <div class="quick-stats-item-value">Core Dynamics</div>
          <div class="quick-stats-item-label">Preserved</div>
        </div>
      </div>
    </div>
    
    <div class="hero-section-media">
      <video autoplay muted loop playsinline poster="{{ '/video/LITESOCNAVGYM.webm' | relative_url }}">
        <source src="{{ '/video/LITESOCNAVGYM.webm' | relative_url }}" type="video/webm">
        Your browser does not support the video tag.
      </video>
      <p>Watch LiteSocNavGym in action: faster simulations with core social navigation features</p>
    </div>
  </div>
</div>

---

## <a id="motivation"></a>2. Research Motivation

### Why This Was Needed

While SocNavGym provides a comprehensive social navigation environment, I observed that it could be computationally expensive for rapid iteration during algorithm development. When testing predictive models and reinforcement learning approaches, I needed faster feedback loops to iterate quickly on ideas.

LiteSocNavGym was developed as a lite testing environment to enable rapid iteration during algorithm development. This environment allows for quick testing of predictive models and reinforcement learning approaches before applying methods to the full SocNavGym environment.

### Research Design

I created LiteSocNavGym by simplifying complex features while preserving core social navigation dynamics. The environment achieves 3-5x faster simulation speeds by optimizing rendering, physics calculations, and state management (<a href="#innovation" class="internal-link">see Key Innovation section</a> for details).

---

## <a id="challenge"></a>3. The Challenge

### What Makes This Hard?

Creating a lightweight version of SocNavGym required careful balance:
- **Speed vs. Fidelity** - How to make it faster without losing essential dynamics
- **Simplicity vs. Compatibility** - Maintain API compatibility while simplifying internals
- **Core Features** - Identify which features are essential vs. optional

### The Solution

I addressed these challenges by:
- **Simplifying complex features** - Removing non-essential components
- **Optimizing performance** - Faster simulation while preserving core dynamics
- **Maintaining compatibility** - Works with same RL frameworks
- **Preserving key features** - Core social navigation dynamics intact

---

## <a id="innovation"></a>4. Key Innovation

### What Makes It "Lightweight"?

LiteSocNavGym achieves 3-5x faster simulation speeds by:

1. **Simplified Rendering** - Reduced visual complexity
2. **Optimized Physics** - Streamlined collision detection
3. **Efficient State Management** - Reduced memory overhead
4. **Focused Feature Set** - Core social navigation features only

### Core Principles

- **Speed First** - Optimized for rapid iteration
- **Essentials Only** - Core social navigation dynamics preserved
- **Compatibility Maintained** - Same API as SocNavGym
- **Easy Migration** - Code can run in both environments (<a href="#usage" class="internal-link">see Installation & Usage section</a>)

---

## <a id="results"></a>5. Results & Performance

### Speed Improvements

LiteSocNavGym achieves **3-5x faster simulation speeds** compared to SocNavGym while maintaining essential social navigation dynamics (<a href="#preserved" class="internal-link">see What Was Preserved section</a>). This performance gain makes it ideal for rapid algorithm development, quick iteration during model training, efficient benchmarking, and prototyping.

### Key Performance Metrics

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 8px; border: 2px solid #28a745; text-align: center;">
    <div style="font-size: 2.5rem; font-weight: bold; color: #28a745; margin-bottom: 0.5rem;">3-5x</div>
    <div style="font-size: 0.875rem; color: var(--text-light);">Faster Simulation</div>
  </div>
  <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 8px; border: 2px solid #28a745; text-align: center;">
    <div style="font-size: 2.5rem; font-weight: bold; color: #28a745; margin-bottom: 0.5rem;">✅</div>
    <div style="font-size: 0.875rem; color: var(--text-light);">Core Dynamics Preserved</div>
  </div>
  <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 8px; border: 2px solid #28a745; text-align: center;">
    <div style="font-size: 2.5rem; font-weight: bold; color: #28a745; margin-bottom: 0.5rem;">🎯</div>
    <div style="font-size: 0.875rem; color: var(--text-light);">Optimized for Rapid Iteration</div>
  </div>
</div>

### Performance Benefits

- **Rapid Algorithm Development** - Quick feedback loops during development
- **Efficient Testing** - Test multiple algorithms quickly
- **Fast Benchmarking** - Evaluate models without long waits
- **Rapid Prototyping** - Validate ideas quickly before applying methods to the full SocNavGym environment

---

## <a id="visual-demo"></a>6. Visual Demo

<div class="project-media">
  <div class="project-video-placeholder" style="grid-column: 1 / -1;">
    <video autoplay muted loop playsinline style="max-width: 100%; height: auto; border-radius: 6px; margin-bottom: 1rem;">
      <source src="{{ '/video/LITESOCNAVGYM.webm' | relative_url }}" type="video/webm">
      Your browser does not support the video tag.
    </video>
    <p><strong>Demo Video: LiteSocNavGym Environment</strong></p>
    <p>Watch the environment in action: faster simulations with core social navigation features preserved (<a href="#preserved" class="internal-link">see What Was Preserved section</a>).</p>
  </div>
</div>

---

## <a id="simplified"></a>7. What Was Simplified

### Optimizations Made

To achieve faster simulation speeds, LiteSocNavGym:

1. **Simplified Rendering**
   - Reduced visual complexity
   - Lite graphics pipeline
   - Optimized rendering calls

2. **Optimized Physics**
   - Efficient collision detection
   - Simplified physics calculations
   - Reduced computational overhead

3. **Lite State Management**
   - Reduced memory footprint
   - Efficient state updates
   - Optimized data structures

4. **Focused Feature Set**
   - Core social navigation features only
   - Removed non-essential components
   - Essential dynamics preserved

### Trade-offs

- **Reduced Visual Fidelity** - Less detailed rendering for speed
- **Simplified Physics** - Lite calculations
- **Focused Features** - Core functionality only

---

## <a id="preserved"></a>8. What Was Preserved

### Core Social Navigation Dynamics

Despite optimizations, LiteSocNavGym maintains:

1. **Social Interaction Models**
   - Core social navigation behaviors
   - Essential interaction dynamics
   - Key social rules preserved

2. **Navigation Algorithms**
   - Same navigation logic
   - Compatible with same RL frameworks
   - Same observation/action spaces (core)

3. **Evaluation Metrics**
   - Same evaluation criteria
   - Compatible with existing benchmarks
   - Results comparable to SocNavGym

4. **API Compatibility**
   - Same interface as SocNavGym
   - Easy code migration
   - Compatible with existing code

---

## <a id="specs"></a>9. Technical Specifications

### Environment Type
- **Base:** Gymnasium-compatible environment
- **Purpose:** Social navigation simulation
- **Optimization:** Lightweight for rapid iteration

### Observation Space
- **Type:** Compatible with SocNavGym core observations
- **Format:** Social navigation state information
- **Note:** Lite for faster processing

### Action Space
- **Type:** Compatible with SocNavGym action space
- **Format:** Navigation actions
- **Note:** Core actions preserved

### Performance Characteristics
- **Simulation Speed:** 3-5x faster than SocNavGym (<a href="#results" class="internal-link">see Results & Performance section</a>)
- **Memory Usage:** Reduced compared to SocNavGym
- **CPU Requirements:** Lower than SocNavGym
- **Visual Quality:** Lite for speed (<a href="#simplified" class="internal-link">see What Was Simplified section</a>)

### Key Features
- **Lightweight Implementation** - Optimized for speed (<a href="#results" class="internal-link">see Results & Performance section</a>)
- **Social Navigation Scenarios** - Essential dynamics preserved (<a href="#preserved" class="internal-link">see What Was Preserved section</a>)
- **RL Framework Compatible** - Works with standard frameworks
- **Performance Optimized** - Fast evaluation and testing

---

## <a id="usage"></a>10. Installation & Usage

### When to Use LiteSocNavGym

**Use LiteSocNavGym when:**
- ✅ Developing and testing algorithms rapidly
- ✅ Iterating on model architectures quickly
- ✅ Benchmarking multiple approaches efficiently
- ✅ Prototyping new ideas
- ✅ Training models that need fast feedback

**Use SocNavGym when:**
- ✅ Need comprehensive social navigation features
- ✅ Require detailed visual rendering
- ✅ Final evaluation and validation
- ✅ Full-featured environment testing

### Basic Usage

```python
import gymnasium as gym
from litesocnavgym import LiteSocNavGym

# Create environment
env = LiteSocNavGym()

# Reset environment
obs, info = env.reset()

# Run episode
for step in range(1000):
    # Get action from your model
    action = your_model.predict(obs)
    
    # Step environment
    obs, reward, terminated, truncated, info = env.step(action)
    
    # Render (optional, faster than SocNavGym)
    env.render()
    
    if terminated or truncated:
        obs, info = env.reset()

env.close()
```

### Migration from SocNavGym

Code written for SocNavGym can typically run in LiteSocNavGym with minimal changes:

```python
# SocNavGym code
from socnavgym import SocNavGym
env = SocNavGym()

# LiteSocNavGym code (same structure)
from litesocnavgym import LiteSocNavGym
env = LiteSocNavGym()

# Same API, faster execution
```

---

## <a id="impact"></a>11. Research Impact

LiteSocNavGym enabled rapid iteration during algorithm development, allowing for quick testing of predictive models and reinforcement learning approaches before applying methods to the full SocNavGym environment.

**Key Contributions:**
1. **Enabled Rapid Prototyping:** 3-5x faster simulation speeds accelerated algorithm development
2. **Facilitated Model Testing:** Quick feedback loops for testing 2StepAhead and MASPM models
3. **Supported Adaptive Prediction Research:** Efficient testing of adaptive prediction systems
4. **Maintained Core Dynamics:** Preserved essential social navigation features while optimizing performance (<a href="#preserved" class="internal-link">see What Was Preserved section</a>)

### Usage in Research

LiteSocNavGym was used for:

- Testing Predictive World Models (2StepAhead, MASPM) during development
- Rapid iteration on adaptive prediction horizon systems
- Quick algorithm comparison and benchmarking
- Prototyping new approaches before full SocNavGym evaluation (<a href="#comparison" class="internal-link">see Comparison with SocNavGym section</a>)

---

## <a id="comparison"></a>12. Comparison with SocNavGym

### When to Use Which

<div style="overflow-x: auto; margin: 2rem 0;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
  <thead>
    <tr style="background: var(--bg-alt); border-bottom: 2px solid var(--border);">
      <th style="padding: 0.75rem; text-align: left; border: 1px solid var(--border);"><strong>Feature</strong></th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);"><strong>LiteSocNavGym</strong></th>
      <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);"><strong>SocNavGym</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 0.75rem; border: 1px solid var(--border);"><strong>Simulation Speed</strong></td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border); color: #28a745; font-weight: bold;">3-5x Faster</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Baseline</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 0.75rem; border: 1px solid var(--border);"><strong>Visual Rendering</strong></td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Lite</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Full Detail</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 0.75rem; border: 1px solid var(--border);"><strong>Core Dynamics</strong></td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border); color: #28a745;">✅ Preserved</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border); color: #28a745;">✅ Full</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 0.75rem; border: 1px solid var(--border);"><strong>Use Case</strong></td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Rapid Development</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Final Evaluation</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 0.75rem; border: 1px solid var(--border);"><strong>API Compatibility</strong></td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border); color: #28a745;">✅ Compatible</td>
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border); color: #28a745;">✅ Full</td>
    </tr>
  </tbody>
</table>
</div>

### Key Differences

**LiteSocNavGym:**
- ⚡ 3-5x faster simulation (<a href="#results" class="internal-link">see Results & Performance section</a>)
- 🎯 Optimized for rapid iteration
- ✅ Core dynamics preserved (<a href="#preserved" class="internal-link">see What Was Preserved section</a>)
- 📊 Lite for speed (<a href="#simplified" class="internal-link">see What Was Simplified section</a>)

**SocNavGym:**
- 🎨 Full visual rendering
- 📋 Comprehensive features
- 🔬 Full evaluation environment
- 🎯 Complete social navigation dynamics

---

## <a id="faq"></a>13. FAQ

### Q: How much faster is LiteSocNavGym than SocNavGym?
**A:** LiteSocNavGym achieves 3-5x faster simulation speeds compared to SocNavGym (<a href="#results" class="internal-link">see Results & Performance section</a>), making it ideal for rapid algorithm development and testing.

### Q: What features were removed or simplified?
**A:** Visual rendering was made lite, physics calculations were optimized, and non-essential features were removed (<a href="#simplified" class="internal-link">see What Was Simplified section</a>). However, essential social navigation dynamics are preserved (<a href="#preserved" class="internal-link">see What Was Preserved section</a>).

### Q: Can I use the same code for both environments?
**A:** Yes! LiteSocNavGym maintains API compatibility with SocNavGym, so code written for one can typically run in the other with minimal changes.

### Q: When should I use LiteSocNavGym vs SocNavGym?
**A:** Use LiteSocNavGym for rapid development, testing, and prototyping. Use SocNavGym for final evaluation, comprehensive testing, and when you need full visual rendering.

### Q: Are the results comparable between environments?
**A:** Yes, essential dynamics are preserved, so results should be comparable. However, always validate final results in the full SocNavGym environment.

### Q: What research has used LiteSocNavGym?
**A:** LiteSocNavGym has been used for testing Predictive World Models (2StepAhead, MASPM) and Adaptive Prediction Horizons (<a href="#impact" class="internal-link">see Research Impact section</a> for details).

### Q: How do I get started?
**A:** Install the environment, check the <a href="#usage" class="internal-link">Installation & Usage section</a> above, and start with the basic usage example. The API is compatible with SocNavGym, so existing code should work.

---

## <a id="resources"></a>14. Resources & Links

<p><strong>Technologies:</strong> Python • Gymnasium • Reinforcement Learning • Social Navigation</p>

**Related Projects:**
- <a href="{{ '/projects/socnavgym' | relative_url }}" class="btn" style="display: inline-block; margin: 0.25rem;">SocNavGym Environment</a> - Full-featured version
- <a href="{{ '/projects/predictive-world-models' | relative_url }}" class="btn btn-secondary" style="display: inline-block; margin: 0.25rem;">Predictive World Models</a> - Used with LiteSocNavGym
- <a href="{{ '/projects/adaptive-prediction-horizons' | relative_url }}" class="btn btn-secondary" style="display: inline-block; margin: 0.25rem;">Adaptive Prediction Horizons</a> - Tested in LiteSocNavGym

**Research Applications:**
- Used in developing and testing Predictive World Models (<a href="#impact" class="internal-link">see Research Impact section</a>)
- Used for Adaptive Prediction Horizons research (<a href="#impact" class="internal-link">see Research Impact section</a>)

<div style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid var(--border);">
  <a href="{{ '/portfolio' | relative_url }}" class="btn">← Back to Research Portfolio</a>
</div>
