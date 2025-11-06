---
layout: default
title: FallingBallEnv - Research Project
---

# ⚽ FallingBallEnv

<div class="project-header">
  <div class="contribution-badge created">CREATED</div>
  <div class="project-status-badge completed">COMPLETED</div>
  <p><strong>2023</strong> • Custom OpenAI Gym Environment • Published in PhD Thesis Chapter 6</p>
</div>

## Overview

A custom OpenAI Gym environment simulating a ball falling under gravity and bouncing off the floor. While appearing simple, it introduces a subtle challenge: **the floor position is NOT included in the observation space**, requiring models to infer this hidden boundary condition to predict when and how the ball will bounce.

## Research Motivation

Created to address limitations observed when transitioning from discrete to continuous action spaces in SocNavGym. As action choices increased from 4 to 16, prediction errors became more pronounced, highlighting the need for more robust sequential learning models. FallingBallEnv serves as a controlled testing ground to explore fundamental challenges in temporal prediction before applying methods to complex environments like SocNavGym.

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

## Key Research Results

CGLSTM demonstrated superior performance in FallingBallEnv:

<ul>
  <li><strong>Lower MAE:</strong> Achieved MAE values of 3.558×10⁻⁵ (k=1), 4.302×10⁻⁵ (k=3), 2.341×10⁻⁵ (k=5), and 1.360×10⁻³ (k=10) - consistently best across all prediction horizons</li>
  <li><strong>Lower MSE:</strong> Achieved MSE values consistently lower than all baseline models</li>
  <li><strong>Balanced Dataset Impact:</strong> Balanced dataset showed 25% lower MAE compared to unbalanced dataset</li>
  <li><strong>Prediction Time:</strong> 0.00325s (faster than Transformer's 0.01417s, though slower than GRU/LSTM)</li>
  <li><strong>Visual Validation:</strong> Accurate predictions demonstrated through visual comparison of predicted vs actual ball positions</li>
</ul>

## Visual Results

<div class="project-media">
  <div class="project-image-placeholder">
    <img src="{{ '/assets/images/FallingBall.png' | relative_url }}" alt="FallingBall Environment Visualization" style="max-width: 100%; height: auto; border-radius: 6px; margin-bottom: 1rem;">
    <p><strong>Environment Visualization:</strong> Ball falling and bouncing in FallingBallEnv environment</p>
  </div>
  <div class="project-image-placeholder">
    <img src="{{ '/assets/images/FallingBallwithprediction.png' | relative_url }}" alt="FallingBall Prediction Results" style="max-width: 100%; height: auto; border-radius: 6px; margin-bottom: 1rem;">
    <p><strong>Prediction Results:</strong> Visual comparison showing predicted vs actual ball trajectories demonstrating CGLSTM's accuracy</p>
  </div>
  <div class="project-video-placeholder">
    <video controls style="max-width: 100%; height: auto; border-radius: 6px; margin-bottom: 1rem;">
      <source src="{{ '/assets/images/FallingBallEnv.webm' | relative_url }}" type="video/webm">
      Your browser does not support the video tag. <a href="{{ '/assets/images/FallingBallEnv.webm' | relative_url }}">Download the video</a>
    </video>
    <p><strong>Demo Video:</strong> Real-time demonstration of FallingBallEnv showing ball physics, bouncing mechanics, and model predictions in action</p>
  </div>
</div>

## Research Impact

The FallingBallEnv provided crucial insights into sequential learning that informed the development and validation of CGLSTM. Results demonstrated that CGLSTM's cosine similarity gating mechanism significantly improves prediction accuracy in temporal tasks, establishing a foundation for applying the model to more complex social navigation scenarios.

---

<p><strong>Technologies:</strong> Python • OpenAI Gym • NumPy • OpenCV • Machine Learning</p>

<p><strong>Links:</strong></p>
<ul>
  <li><a href="https://github.com/goodluckoguzie/falling_ball_env" target="_blank">GitHub Repository: falling_ball_env</a></li>
  <li><a href="https://github.com/goodluckoguzie/falling_ball_env/tree/main/Images" target="_blank">View Images on GitHub</a></li>
  <li><a href="{{ '/portfolio' | relative_url }}#cosine-gated-lstm">Used in: Cosine-Gated LSTM Research</a></li>
  <li><a href="{{ '/publications' | relative_url }}">Publication: IEEE PRML 2024</a></li>
  <li><a href="https://goodluckoguzie.github.io/Viva/" target="_blank">Viva Presentation (FallingBallEnv slides)</a></li>
</ul>

<div style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid var(--border);">
  <a href="{{ '/portfolio' | relative_url }}" class="btn">← Back to Research Portfolio</a>
</div>

