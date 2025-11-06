---
layout: default
title: Research Portfolio
---

# Research Portfolio

My research focuses on **Social Robot Navigation**, **Reinforcement Learning**, and **Action Recognition**. Below are the environments I've created or contributed to, the models I've proposed, and applications I've developed.

<div class="research-overview-stats">
  <div class="stat-box">
    <div class="stat-number">3</div>
    <div class="stat-label">Proposed Models</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">3</div>
    <div class="stat-label">Environments</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">2</div>
    <div class="stat-label">Papers Published</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">1</div>
    <div class="stat-label">PhD Thesis</div>
  </div>
</div>

<p><strong>Filter by Research Area:</strong></p>

<div class="portfolio-filters">
  <button class="portfolio-filter-btn active" data-filter="all">All Research</button>
  <button class="portfolio-filter-btn" data-filter="social-nav">Social Navigation</button>
  <button class="portfolio-filter-btn" data-filter="rl-models">RL Models</button>
  <button class="portfolio-filter-btn" data-filter="action-rec">Action Recognition</button>
  <button class="portfolio-filter-btn" data-filter="environments">Environments</button>
  <button class="portfolio-filter-btn" data-filter="ongoing">Ongoing</button>
  <button class="portfolio-filter-btn" data-filter="completed">Completed</button>
</div>

---

## 🎯 Research Environments

These are the environments I've created or contributed to for evaluating reinforcement learning algorithms and social navigation models.

<div class="environment-grid">
  
  <div class="portfolio-case-study" data-category="environments social-nav completed">
    <div class="contribution-badge created">CREATED</div>
    <h3>⚽ FallingBallEnv</h3>
    <div class="project-status-badge completed">COMPLETED</div>
    <p><strong>2023</strong> • Custom OpenAI Gym Environment • Published in PhD Thesis Chapter 6</p>
    
    <div class="project-preview">
      <p>A custom OpenAI Gym environment simulating a ball falling under gravity and bouncing off the floor. The key challenge: <strong>the floor position is NOT included in the observation space</strong>, requiring models to infer this hidden boundary condition to predict when and how the ball will bounce. Created to evaluate sequential learning models like the Cosine-Gated LSTM (CGLSTM) in a controlled setting before applying methods to complex social navigation scenarios.</p>
      
      <div class="project-media">
        <div class="project-video-placeholder">
          <video controls style="max-width: 100%; height: auto; border-radius: 6px; margin-bottom: 1rem;">
            <source src="{{ '/assets/images/FallingBallEnv.webm' | relative_url }}" type="video/webm">
            Your browser does not support the video tag. <a href="{{ '/assets/images/FallingBallEnv.webm' | relative_url }}">Download the video</a>
          </video>
          <p><strong>Demo Video:</strong> Real-time demonstration of FallingBallEnv showing ball physics, bouncing mechanics, and model predictions in action</p>
        </div>
      </div>
      
      <button class="see-more-btn" onclick="toggleDetails(this)" data-target="fallingball-details">
        <span class="btn-text">See More Details</span>
        <span class="btn-icon">▼</span>
      </button>
    </div>
    
    <div id="fallingball-details" class="project-details-collapsed">
      <h4>Research Motivation</h4>
      <p>Created to address limitations observed when transitioning from discrete to continuous action spaces in SocNavGym. As action choices increased from 4 to 16, prediction errors became more pronounced, highlighting the need for more robust sequential learning models. FallingBallEnv serves as a controlled testing ground to explore fundamental challenges in temporal prediction before applying methods to complex environments like SocNavGym.</p>
      
      <h4>Key Features</h4>
      <ul>
        <li><strong>Simplified Physics:</strong> Gravity simulation with customizable parameters (initial position, velocity, radius)</li>
        <li><strong>Limited Observation Space:</strong> Only ball's (x,y) coordinates and velocity - floor position is hidden</li>
        <li><strong>Bouncing Mechanism:</strong> Ball bounces off floor with reduced velocity (energy loss)</li>
        <li><strong>Render Support:</strong> Visualize ball motion for analysis</li>
        <li><strong>OpenAI Gym Compatible:</strong> Standard interface for RL algorithm integration</li>
        <li><strong>Controlled Complexity:</strong> Focuses on prediction rather than complex physics simulation</li>
      </ul>
      
      <h4>Research Design & Datasets</h4>
      <p>Three distinct datasets were created to study the impact of data distribution on model performance:</p>
      <ul>
        <li><strong>Full Dataset:</strong> 20,000 episodes capturing complete ball motion from start to finish (unbalanced - bounce events underrepresented)</li>
        <li><strong>Balanced Dataset:</strong> 14,700 episodes with equal representation of bounce and free-fall windows (17-step windows categorized by initial velocity)</li>
        <li><strong>Unbalanced Subset:</strong> 14,700 episodes randomly sampled without balancing (control group)</li>
      </ul>
      <p>The balanced dataset ensured models were exposed to bounce events more frequently, improving their ability to learn bounce dynamics effectively.</p>
      
      <h4>Usage in Research</h4>
      <p>FallingBallEnv was central to evaluating and validating the Cosine-Gated LSTM (CGLSTM) architecture. The environment enabled:</p>
      <ul>
        <li>Testing fundamental temporal dependency learning</li>
        <li>Analyzing transition event prediction (bounces)</li>
        <li>Comparing CGLSTM against Vanilla LSTM, GRU, RAU, and Transformer models</li>
        <li>Demonstrating the importance of balanced training data</li>
        <li>Validating model performance before complex SocNavGym applications</li>
      </ul>
      
      <h4>Key Research Results</h4>
      <p>CGLSTM demonstrated superior performance in FallingBallEnv:</p>
      <ul>
        <li><strong>Lower MAE:</strong> Achieved MAE values of 3.558×10⁻⁵ (k=1), 4.302×10⁻⁵ (k=3), 2.341×10⁻⁵ (k=5), and 1.360×10⁻³ (k=10) - consistently best across all prediction horizons</li>
        <li><strong>Lower MSE:</strong> Achieved MSE values consistently lower than all baseline models</li>
        <li><strong>Balanced Dataset Impact:</strong> Balanced dataset showed 25% lower MAE compared to unbalanced dataset</li>
        <li><strong>Prediction Time:</strong> 0.00325s (faster than Transformer's 0.01417s, though slower than GRU/LSTM)</li>
        <li><strong>Visual Validation:</strong> Accurate predictions demonstrated through visual comparison of predicted vs actual ball positions</li>
      </ul>
      
      <h4>Visual Results</h4>
      <div class="project-media">
        <div class="project-image-placeholder">
          <img src="{{ '/assets/images/FallingBall.png' | relative_url }}" alt="FallingBall Environment Visualization" style="max-width: 100%; height: auto; border-radius: 6px; margin-bottom: 1rem;">
          <p><strong>Environment Visualization:</strong> Ball falling and bouncing in FallingBallEnv environment</p>
        </div>
        <div class="project-image-placeholder">
          <img src="{{ '/assets/images/FallingBallwithprediction.png' | relative_url }}" alt="FallingBall Prediction Results" style="max-width: 100%; height: auto; border-radius: 6px; margin-bottom: 1rem;">
          <p><strong>Prediction Results:</strong> Visual comparison showing predicted vs actual ball trajectories demonstrating CGLSTM's accuracy</p>
        </div>
      </div>
      
      <h4>Research Impact</h4>
      <p>The FallingBallEnv provided crucial insights into sequential learning that informed the development and validation of CGLSTM. Results demonstrated that CGLSTM's cosine similarity gating mechanism significantly improves prediction accuracy in temporal tasks, establishing a foundation for applying the model to more complex social navigation scenarios.</p>
      
      <p><strong>Technologies:</strong> Python • OpenAI Gym • NumPy • OpenCV • Machine Learning</p>
      
      <p><strong>Links:</strong></p>
      <ul>
        <li><a href="https://github.com/goodluckoguzie/falling_ball_env" target="_blank">GitHub Repository: falling_ball_env</a></li>
        <li><a href="https://github.com/goodluckoguzie/falling_ball_env/tree/main/Images" target="_blank">View Images on GitHub</a></li>
        <li><a href="{{ '/portfolio' | relative_url }}#cosine-gated-lstm">Used in: Cosine-Gated LSTM Research</a></li>
        <li><a href="{{ '/publications' | relative_url }}">Publication: IEEE PRML 2024</a></li>
        <li><a href="https://goodluckoguzie.github.io/Viva/" target="_blank">Viva Presentation (FallingBallEnv slides)</a></li>
      </ul>
    </div>
  </div>

  <div class="portfolio-case-study" data-category="environments social-nav completed">
    <div class="contribution-badge created">CREATED</div>
    <h3>🤖 LiteSocNavGym</h3>
    <div class="project-status-badge completed">COMPLETED</div>
    <p><strong>2024</strong> • Lightweight Social Navigation Environment</p>
    
    <h4>Overview</h4>
    <p>A lightweight social navigation environment I created for faster simulation and evaluation of social navigation algorithms. Designed for efficient testing of predictive models and reinforcement learning approaches.</p>
    
    <h4>Key Features</h4>
    <ul>
      <li>Lightweight implementation for rapid iteration</li>
      <li>Social navigation scenarios</li>
      <li>Compatible with standard RL frameworks</li>
      <li>Optimized for performance evaluation</li>
    </ul>
    
    <h4>Usage</h4>
    <p>Used in developing and testing Predictive World Models and Adaptive Prediction Horizons for social robot navigation.</p>
    
    <p><strong>Technologies:</strong> Python • Gymnasium • Reinforcement Learning</p>
    
    <p><strong>Links:</strong></p>
    <ul>
      <li><a href="{{ '/portfolio' | relative_url }}#predictive-world-models">Used in: Predictive World Models Research</a></li>
      <li><a href="{{ '/portfolio' | relative_url }}#adaptive-prediction-horizons">Used in: Adaptive Prediction Horizons</a></li>
    </ul>
  </div>

  <div class="portfolio-case-study" data-category="environments social-nav completed">
    <div class="contribution-badge team">TEAM CONTRIBUTION</div>
    <h3>👥 SocNavGym</h3>
    <div class="project-status-badge completed">COMPLETED</div>
    <p><strong>2020-2024</strong> • Team Project • Supervisor: Dr. Luis J. Manso</p>
    
    <h4>Overview</h4>
    <p>Comprehensive social navigation gymnasium environment for evaluating social robot navigation algorithms. I was part of the development team, focusing specifically on reinforcement learning aspects and integration with predictive models.</p>
    
    <h4>My Contribution</h4>
    <ul>
      <li>RL algorithm integration and testing</li>
      <li>Predictive model evaluation framework</li>
      <li>Performance benchmarking systems</li>
      <li>Integration with proposed models (Predictive World Models, Adaptive Prediction Horizons)</li>
    </ul>
    
    <h4>Usage</h4>
    <p>Primary environment for testing Predictive World Models (2StepAhead, MASPM) and validating Adaptive Prediction Horizons. Results published in UKCI 2023 and PhD thesis.</p>
    
    <p><strong>Technologies:</strong> Python • Gymnasium • Reinforcement Learning • Social Navigation</p>
    
    <p><strong>Links:</strong></p>
    <ul>
      <li><a href="https://github.com/gnns4hri/SocNavGym" target="_blank">GitHub Repository: gnns4hri/SocNavGym</a></li>
      <li><a href="{{ '/portfolio' | relative_url }}#predictive-world-models">Used in: Predictive World Models</a></li>
      <li><a href="{{ '/publications' | relative_url }}">Publication: UKCI 2023</a></li>
    </ul>
  </div>

</div>

---

## 🧠 Proposed Models & Algorithms

### 1. Predictive World Models for Social Navigation

<div class="portfolio-case-study" id="predictive-world-models" data-category="rl-models social-nav completed">
  <div class="contribution-badge created">PROPOSED MODEL</div>
  <h3>🤖 Predictive World Models (2StepAhead & MASPM)</h3>
  <div class="project-status-badge completed">COMPLETED • PUBLISHED</div>
  <p><strong>2023</strong> • Aston University • Published at UKCI 2023</p>
  
  <h4>Model Overview</h4>
  <p>Proposed reinforcement learning models enabling autonomous systems to navigate safely in social environments. Introduced two complementary approaches:</p>
  <ul>
    <li><strong>2StepAhead:</strong> Multi-step ahead prediction system</li>
    <li><strong>MASPM:</strong> Multi-Action State Predictive Model for comprehensive action evaluation</li>
    <li><strong>Hybrid Model:</strong> Combining both approaches for optimal performance</li>
  </ul>
  
  <h4>Key Innovations</h4>
  <ul>
    <li>Multi-step ahead predictions for better navigation planning</li>
    <li>Comprehensive action evaluation framework</li>
    <li>Dynamic social environment handling</li>
    <li>Superior performance compared to baseline methods</li>
  </ul>
  
  <h4>Validation Environments</h4>
  <p>Tested and validated in: <strong>SocNavGym</strong>, <strong>LunarLander-v2</strong></p>
  
  <h4>Results & Impact</h4>
  <ul>
    <li>Published at UKCI 2023 - UK Conference on Intelligent Systems</li>
    <li>Demonstrated superior navigation performance</li>
    <li>Higher success rates than baseline methods</li>
    <li>Foundation for PhD thesis research</li>
  </ul>
  
  <p><strong>Technologies:</strong> Python • PyTorch • Reinforcement Learning • Social Navigation</p>
  
  <p><strong>Links:</strong></p>
  <ul>
    <li><a href="{{ '/_UKCI_2023__Predictive_World_Models_for_Social_Navigation.pdf' | relative_url }}">Paper PDF</a></li>
    <li><a href="https://github.com/gnns4hri/SocNavGym" target="_blank">Environment: SocNavGym</a></li>
    <li><a href="{{ '/publications' | relative_url }}">Publication Details</a></li>
  </ul>
</div>

---

### 2. Cosine-Gated LSTM (CGLSTM)

<div class="portfolio-case-study" id="cosine-gated-lstm" data-category="rl-models completed">
  <div class="contribution-badge created">PROPOSED MODEL</div>
  <h3>🧠 Cosine-Gated LSTM for Sequential Learning</h3>
  <div class="project-status-badge completed">COMPLETED • PUBLISHED</div>
  <p><strong>2024</strong> • Aston University • Published at IEEE PRML 2024 (pp. 8-15)</p>
  
  <h4>Model Overview</h4>
  <p>Novel neural network architecture using cosine gating mechanisms for improved sequential learning. The CGLSTM dynamically weighs inputs versus hidden states based on cosine similarities, outperforming LSTM, GRU, and Transformer models.</p>
  
  <h4>Key Innovations</h4>
  <ul>
    <li>Cosine gating mechanism replacing traditional sigmoid gates</li>
    <li>Dynamic input weighting based on similarity measures</li>
    <li>Improved long-term dependency handling</li>
    <li>Efficient parameter usage</li>
  </ul>
  
  <h4>Validation Environments</h4>
  <p>Tested in: <strong>FallingBallEnv</strong> (custom), <strong>SocNavGym</strong>, standard sequential learning benchmarks</p>
  
  <h4>Results & Impact</h4>
  <ul>
    <li>Published at IEEE PRML 2024 with superior benchmark results</li>
    <li>Outperformed LSTM, GRU, and Transformer in FallingBallEnv and SocNavGym</li>
    <li>Achieved better sequential learning performance</li>
    <li>Used as component in Predictive World Models framework</li>
  </ul>
  
  <p><strong>Technologies:</strong> Python • PyTorch • TensorFlow • Neural Networks • Sequential Learning</p>
  
  <p><strong>Links:</strong></p>
  <ul>
    <li><a href="{{ '/Cosine_Gated_LSTM_main.pdf' | relative_url }}">Paper PDF</a></li>
    <li><a href="https://github.com/goodluckoguzie/CosineGatedLSTM" target="_blank">GitHub Repository: CosineGatedLSTM</a></li>
    <li><a href="https://github.com/goodluckoguzie/falling_ball_env" target="_blank">Environment: FallingBallEnv</a></li>
    <li><a href="{{ '/publications' | relative_url }}">Publication Details</a></li>
  </ul>
</div>

---

### 3. Adaptive Prediction Horizons

<div class="portfolio-case-study" id="adaptive-prediction-horizons" data-category="rl-models social-nav ongoing">
  <div class="contribution-badge created">PROPOSED MODEL</div>
  <h3>🔄 Adaptive Predictive Reinforcement Learning: Entropy-Driven Adaptive Prediction Horizons</h3>
  <div class="project-status-badge ongoing">ONGOING</div>
  <p><strong>2024 - Present</strong> • Aston University</p>
  
  <h4>Model Overview</h4>
  <p>Developing entropy-driven adaptive prediction horizon systems for reinforcement learning applications. This research enables dynamic adjustment of prediction horizons based on environmental complexity, improving performance in autonomous systems and robotics.</p>
  
  <h4>Key Innovations</h4>
  <ul>
    <li>Entropy-based environmental complexity measurement</li>
    <li>Dynamic prediction horizon adjustment</li>
    <li>Adaptive mechanism balancing accuracy and efficiency</li>
    <li>Integration with existing Predictive World Models</li>
  </ul>
  
  <h4>Validation Environments</h4>
  <p>Testing in: <strong>SocNavGym</strong>, <strong>LiteSocNavGym</strong>, <strong>LunarLander-v2</strong></p>
  
  <h4>Current Progress</h4>
  <ul>
    <li>Framework development for adaptive prediction horizons</li>
    <li>Entropy measurement and environmental complexity analysis</li>
    <li>Initial experiments in simulation environments</li>
    <li>Performance evaluation against fixed-horizon baselines</li>
  </ul>
  
  <h4>Collaboration Opportunities</h4>
  <p>👥 <strong>Seeking Collaborators in:</strong></p>
  <ul>
    <li>RL algorithm development and optimization</li>
    <li>Performance evaluation and benchmarking</li>
    <li>Real-world deployment and validation</li>
    <li>Multi-agent systems integration</li>
  </ul>
  
  <p><strong>Technologies:</strong> Python • PyTorch • Gymnasium • Reinforcement Learning</p>
  
  <p><strong>Links:</strong></p>
  <ul>
    <li><a href="{{ '/collaborations' | relative_url }}">Interested in Collaborating?</a></li>
    <li><a href="https://github.com/gnns4hri/SocNavGym" target="_blank">Environment: SocNavGym</a></li>
  </ul>
</div>

---

## 📡 Action Recognition Research

<div class="portfolio-case-study" data-category="action-rec ongoing">
  <div class="contribution-badge created">PROPOSED PROJECT</div>
  <h3>📡 Wi-Fi CSI Action Recognition with ESP32</h3>
  <div class="project-status-badge ongoing">ONGOING</div>
  <p><strong>2024 - Present</strong> • Hardware-based Action Recognition</p>
  
  <h4>Project Overview</h4>
  <p>Developing action recognition systems using Wi-Fi Channel State Information (CSI) with ESP32 microcontrollers. This research explores contactless human activity recognition through wireless signals, combining hardware design with machine learning.</p>
  
  <h4>Key Features</h4>
  <ul>
    <li>ESP32-based Wi-Fi CSI data collection</li>
    <li>Contactless action recognition</li>
    <li>Hardware-software integration</li>
    <li>Machine learning for signal processing</li>
  </ul>
  
  <h4>Research Focus</h4>
  <p>Exploring novel approaches to human activity recognition without cameras or wearables, using wireless signal analysis and embedded systems.</p>
  
  <p><strong>Technologies:</strong> ESP32 • Wi-Fi CSI • Python • Machine Learning • Embedded Systems</p>
  
  <p><strong>Links:</strong></p>
  <ul>
    <li><a href="https://github.com/goodluckoguzie/ActionRecognitionUsingWiFi" target="_blank">GitHub Repository: ActionRecognitionUsingWiFi</a></li>
  </ul>
</div>

---

## 🔧 Other Projects & Tools

<div class="portfolio-case-study" data-category="completed">
  <h3>🎢 Disneyland Project</h3>
  <div class="project-status-badge completed">COMPLETED</div>
  <p><strong>Projects related to Disneyland simulation or analysis</strong></p>
  
  <p><strong>Links:</strong></p>
  <ul>
    <li><a href="https://github.com/goodluckoguzie/disneyland_Project" target="_blank">GitHub Repository: disneyland_Project</a></li>
  </ul>
</div>

<div class="portfolio-case-study" data-category="completed">
  <h3>🌍 WorldModels</h3>
  <div class="project-status-badge completed">COMPLETED</div>
  <p><strong>World models implementation or research</strong></p>
  
  <p><strong>Links:</strong></p>
  <ul>
    <li><a href="https://github.com/goodluckoguzie/WorldModels" target="_blank">GitHub Repository: WorldModels</a></li>
  </ul>
</div>

---

## 🎓 PhD Thesis Integration

<div class="portfolio-case-study" data-category="completed">
  <h3>📚 PhD Thesis: Enhancing Robot Social Navigation</h3>
  <div class="project-status-badge completed">COMPLETED</div>
  <p><strong>2020 - 2024</strong> • Aston University • Supervisors: Dr. Luis J. Manso, Prof. Dr. Aniko Ekart</p>
  
  <h4>Thesis Overview</h4>
  <p>Completed PhD thesis integrating all three proposed models into a comprehensive framework for social robot navigation:</p>
  <ul>
    <li><strong>Predictive World Models</strong> (2StepAhead, MASPM)</li>
    <li><strong>Cosine-Gated LSTM</strong> architecture</li>
    <li><strong>Adaptive Prediction Horizons</strong> (entropy-driven)</li>
  </ul>
  
  <h4>Environments Used</h4>
  <ul>
    <li>SocNavGym (team contribution)</li>
    <li>FallingBallEnv (created)</li>
    <li>LiteSocNavGym (created)</li>
    <li>LunarLander-v2 (benchmark)</li>
  </ul>
  
  <h4>Results</h4>
  <ul>
    <li>Successfully defended PhD thesis</li>
    <li>2 conference papers published (UKCI 2023, IEEE PRML 2024)</li>
    <li>Superior performance in all tested environments</li>
    <li>Comprehensive research framework established</li>
  </ul>
  
  <p><strong>Links:</strong></p>
  <ul>
    <li><a href="{{ '/Goodluck_s_thesis.zip' | relative_url }}">Thesis PDF (ZIP)</a></li>
    <li><a href="{{ '/OGUZIE DIRICHUKWU GOODLUCK  190212683 2024.pdf' | relative_url }}">Thesis Document (PDF)</a></li>
    <li><a href="https://goodluckoguzie.github.io/Viva/" target="_blank">Viva Presentation</a></li>
  </ul>
</div>

---

## Research Methodologies

### Algorithm Development
Expert in developing novel algorithms and architectures for machine learning and robotics.

### Experimental Design
Rigorous experimental design ensuring reproducible and valid research results.

### Performance Evaluation
Comprehensive evaluation frameworks achieving superior performance metrics.

### Research Integration
Integrating multiple research contributions into coherent frameworks.

---

**Note:** For complete work experience and previous positions, please visit the [About](/about) or [CV](/cv) page.
