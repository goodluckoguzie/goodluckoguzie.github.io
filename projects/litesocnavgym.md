---
layout: default
title: LiteSocNavGym - Research Project
---

# 🤖 LiteSocNavGym

<div class="project-header">
  <div class="contribution-badge created">CREATED</div>
  <div class="project-status-badge completed">COMPLETED</div>
  <p><strong>2024</strong> • Lightweight Social Navigation Environment • Optimized for Rapid Iteration</p>
</div>

<div class="table-of-contents" style="background: var(--bg-alt); padding: 1.5rem; border-radius: 8px; margin: 2rem 0; border-left: 4px solid var(--link);">
  <h3 style="margin-top: 0; color: var(--link);">📑 Table of Contents</h3>
  <ul style="columns: 2; column-gap: 2rem; list-style: none; padding-left: 0;">
    <li><a href="#hero">1. Overview</a></li>
    <li><a href="#problem">2. The Problem</a></li>
    <li><a href="#innovation">3. Key Innovation</a></li>
    <li><a href="#visual-demo">4. Visual Demo</a></li>
    <li><a href="#performance">5. Performance Comparison</a></li>
    <li><a href="#simplified">6. What Was Simplified</a></li>
    <li><a href="#preserved">7. What Was Preserved</a></li>
    <li><a href="#specs">8. Technical Specifications</a></li>
    <li><a href="#usage">9. Usage & Examples</a></li>
    <li><a href="#applications">10. Research Applications</a></li>
    <li><a href="#comparison">11. Comparison with SocNavGym</a></li>
    <li><a href="#faq">12. FAQ</a></li>
    <li><a href="#resources">13. Resources & Links</a></li>
  </ul>
</div>

---

## <a id="hero"></a>1. Overview

<div class="hero-section" style="background: linear-gradient(135deg, var(--bg-alt) 0%, var(--bg-card) 100%); padding: 2rem; border-radius: 12px; margin: 2rem 0; border: 2px solid var(--border);">
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center;">
    <div>
      <h2 style="margin-top: 0; color: var(--text); font-size: 2rem;">Streamlined for Speed</h2>
      <p style="font-size: 1.125rem; line-height: 1.8; color: var(--text); margin-bottom: 1.5rem;">
        LiteSocNavGym is a lightweight version of SocNavGym optimized for rapid iteration and faster simulation. Designed for efficient testing of predictive models and reinforcement learning approaches, it maintains core social interaction dynamics while dramatically reducing simulation time.
      </p>
      
      <div class="quick-stats" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1.5rem 0;">
        <div style="text-align: center; padding: 1rem; background: var(--bg); border-radius: 8px; border: 1px solid var(--border);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">⚡</div>
          <div style="font-weight: bold; color: var(--link);">3-5x Faster</div>
          <div style="font-size: 0.875rem; color: var(--text-light);">than SocNavGym</div>
        </div>
        <div style="text-align: center; padding: 1rem; background: var(--bg); border-radius: 8px; border: 1px solid var(--border);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎯</div>
          <div style="font-weight: bold; color: var(--link);">Predictive Models</div>
          <div style="font-size: 0.875rem; color: var(--text-light);">Testing & validation</div>
        </div>
        <div style="text-align: center; padding: 1rem; background: var(--bg); border-radius: 8px; border: 1px solid var(--border);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">✅</div>
          <div style="font-weight: bold; color: var(--link);">Core Dynamics</div>
          <div style="font-size: 0.875rem; color: var(--text-light);">Preserved</div>
        </div>
      </div>
    </div>
    
    <div style="text-align: center;">
      <video autoplay muted loop playsinline style="width: 100%; max-width: 500px; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" poster="{{ '/video/LITESOCNAVGYM.webm' | relative_url }}">
        <source src="{{ '/video/LITESOCNAVGYM.webm' | relative_url }}" type="video/webm">
        Your browser does not support the video tag.
      </video>
      <p style="margin-top: 0.75rem; font-size: 0.875rem; color: var(--text-light); font-style: italic;">Watch LiteSocNavGym in action: faster simulations with core social navigation features</p>
    </div>
  </div>
</div>

---

## <a id="problem"></a>2. The Problem

### Why Was LiteSocNavGym Needed?

While SocNavGym provides a comprehensive social navigation environment, it can be computationally expensive for rapid iteration during algorithm development. Researchers need:

1. **Faster Simulation** - Quick feedback loops during development
2. **Rapid Testing** - Test multiple algorithms quickly
3. **Efficient Evaluation** - Benchmark models without long waits
4. **Core Dynamics Preserved** - Maintain essential social navigation features

### The Solution

LiteSocNavGym was created to address these needs by:
- **Simplifying complex features** - Removing non-essential components
- **Optimizing performance** - Faster simulation while preserving core dynamics
- **Maintaining compatibility** - Works with same RL frameworks
- **Preserving key features** - Core social navigation dynamics intact

---

## <a id="innovation"></a>3. Key Innovation

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
- **Easy Migration** - Code can run in both environments

---

## <a id="visual-demo"></a>4. Visual Demo

<div class="project-media">
  <div class="project-video-placeholder" style="grid-column: 1 / -1;">
    <video autoplay muted loop playsinline style="max-width: 100%; height: auto; border-radius: 6px; margin-bottom: 1rem;">
      <source src="{{ '/video/LITESOCNAVGYM.webm' | relative_url }}" type="video/webm">
      Your browser does not support the video tag.
    </video>
    <p><strong>Demo Video: LiteSocNavGym Environment</strong></p>
    <p>Watch the environment in action: faster simulations with core social navigation features preserved. Notice the streamlined rendering and optimized performance.</p>
  </div>
</div>

---

## <a id="performance"></a>5. Performance Comparison

### Speed Improvements

<div style="background: var(--bg-alt); padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;">
  <h4>Key Performance Metrics</h4>
  <p>LiteSocNavGym achieves <strong>3-5x faster simulation speeds</strong> compared to SocNavGym while maintaining essential social navigation dynamics. This performance gain makes it ideal for:</p>
  <ul>
    <li>Rapid algorithm development and testing</li>
    <li>Quick iteration during model training</li>
    <li>Efficient benchmarking of multiple approaches</li>
    <li>Prototyping and proof-of-concept work</li>
  </ul>
</div>

### Performance Visualization

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

---

## <a id="simplified"></a>6. What Was Simplified

### Optimizations Made

To achieve faster simulation speeds, LiteSocNavGym:

1. **Simplified Rendering**
   - Reduced visual complexity
   - Streamlined graphics pipeline
   - Optimized rendering calls

2. **Optimized Physics**
   - Efficient collision detection
   - Simplified physics calculations
   - Reduced computational overhead

3. **Streamlined State Management**
   - Reduced memory footprint
   - Efficient state updates
   - Optimized data structures

4. **Focused Feature Set**
   - Core social navigation features only
   - Removed non-essential components
   - Essential dynamics preserved

### Trade-offs

- **Reduced Visual Fidelity** - Less detailed rendering for speed
- **Simplified Physics** - Streamlined calculations
- **Focused Features** - Core functionality only

---

## <a id="preserved"></a>7. What Was Preserved

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

## <a id="specs"></a>8. Technical Specifications

### Environment Type
- **Base:** Gymnasium-compatible environment
- **Purpose:** Social navigation simulation
- **Optimization:** Lightweight for rapid iteration

### Observation Space
- **Type:** Compatible with SocNavGym core observations
- **Format:** Social navigation state information
- **Note:** Streamlined for faster processing

### Action Space
- **Type:** Compatible with SocNavGym action space
- **Format:** Navigation actions
- **Note:** Core actions preserved

### Performance Characteristics
- **Simulation Speed:** 3-5x faster than SocNavGym (see Performance Comparison section)
- **Memory Usage:** Reduced compared to SocNavGym
- **CPU Requirements:** Lower than SocNavGym
- **Visual Quality:** Streamlined for speed

### Key Features
- **Lightweight Implementation** - Optimized for speed (3-5x faster than SocNavGym)
- **Social Navigation Scenarios** - Essential dynamics preserved
- **RL Framework Compatible** - Works with standard frameworks
- **Performance Optimized** - Fast evaluation and testing

---

## <a id="usage"></a>9. Usage & Examples

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

## <a id="applications"></a>10. Research Applications

### Used In Research

LiteSocNavGym has been used for:

1. **Predictive World Models**
   - Testing 2StepAhead and MASPM models
   - Rapid iteration during development
   - Efficient evaluation of predictive approaches

2. **Adaptive Prediction Horizons**
   - Testing adaptive prediction systems
   - Quick feedback during development
   - Efficient benchmarking

3. **Algorithm Development**
   - Rapid prototyping of new approaches
   - Quick testing of ideas
   - Efficient algorithm comparison

### Research Benefits

- **Faster Development** - Quick iteration cycles
- **Efficient Testing** - Test more algorithms in less time
- **Rapid Prototyping** - Validate ideas quickly
- **Performance Benchmarking** - Compare approaches efficiently

---

## <a id="comparison"></a>11. Comparison with SocNavGym

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
      <td style="padding: 0.75rem; text-align: center; border: 1px solid var(--border);">Streamlined</td>
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
- ⚡ 3-5x faster simulation
- 🎯 Optimized for rapid iteration
- ✅ Core dynamics preserved
- 📊 Streamlined for speed

**SocNavGym:**
- 🎨 Full visual rendering
- 📋 Comprehensive features
- 🔬 Full evaluation environment
- 🎯 Complete social navigation dynamics

---

## <a id="faq"></a>12. FAQ

### Q: How much faster is LiteSocNavGym than SocNavGym?
**A:** LiteSocNavGym achieves 3-5x faster simulation speeds compared to SocNavGym (see Performance Comparison section), making it ideal for rapid algorithm development and testing.

### Q: What features were removed or simplified?
**A:** Visual rendering was streamlined, physics calculations were optimized, and non-essential features were removed. However, essential social navigation dynamics are preserved (see What Was Preserved section for details).

### Q: Can I use the same code for both environments?
**A:** Yes! LiteSocNavGym maintains API compatibility with SocNavGym, so code written for one can typically run in the other with minimal changes.

### Q: When should I use LiteSocNavGym vs SocNavGym?
**A:** Use LiteSocNavGym for rapid development, testing, and prototyping. Use SocNavGym for final evaluation, comprehensive testing, and when you need full visual rendering.

### Q: Are the results comparable between environments?
**A:** Yes, essential dynamics are preserved, so results should be comparable. However, always validate final results in the full SocNavGym environment.

### Q: What research has used LiteSocNavGym?
**A:** LiteSocNavGym has been used for testing Predictive World Models (2StepAhead, MASPM) and Adaptive Prediction Horizons (see Research Applications section), enabling rapid iteration during development.

### Q: How do I get started?
**A:** Install the environment, check the Usage & Examples section above, and start with the basic usage example. The API is compatible with SocNavGym, so existing code should work.

---

## <a id="resources"></a>13. Resources & Links

<p><strong>Technologies:</strong> Python • Gymnasium • Reinforcement Learning • Social Navigation</p>

**Related Projects:**
- <a href="{{ '/projects/socnavgym' | relative_url }}" class="btn" style="display: inline-block; margin: 0.25rem;">SocNavGym Environment</a> - Full-featured version
- <a href="{{ '/projects/predictive-world-models' | relative_url }}" class="btn btn-secondary" style="display: inline-block; margin: 0.25rem;">Predictive World Models</a> - Used with LiteSocNavGym
- <a href="{{ '/projects/adaptive-prediction-horizons' | relative_url }}" class="btn btn-secondary" style="display: inline-block; margin: 0.25rem;">Adaptive Prediction Horizons</a> - Tested in LiteSocNavGym

**Research Applications:**
- Used in developing and testing Predictive World Models
- Used for Adaptive Prediction Horizons research
- Enables rapid iteration during algorithm development

<div style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid var(--border);">
  <a href="{{ '/portfolio' | relative_url }}" class="btn">← Back to Research Portfolio</a>
</div>
