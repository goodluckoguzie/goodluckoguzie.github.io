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

<div class="environments-carousel-container">
  <div class="environments-carousel-wrapper">
    <!-- Carousel Navigation -->
    <button class="carousel-nav carousel-prev" aria-label="Previous project" onclick="moveCarousel('environments', -1)">←</button>
    <button class="carousel-nav carousel-next" aria-label="Next project" onclick="moveCarousel('environments', 1)">→</button>
    
    <!-- Carousel Content -->
    <div class="environments-carousel-content">
      <div class="carousel-left">
        <div class="environments-carousel" id="environments-carousel">
          
          <div class="carousel-slide active" data-slide="0" data-video="{{ '/assets/images/FallingBallEnv.webm' | relative_url }}" data-caption="Real-time demonstration of FallingBallEnv showing ball physics, bouncing mechanics, and model predictions in action">
            <div class="carousel-card">
              <div class="contribution-badge created">CREATED</div>
              <h3>⚽ FallingBallEnv</h3>
              <div class="project-status-badge completed">COMPLETED</div>
              <p class="project-meta"><strong>2023</strong> • Custom OpenAI Gym Environment • Published in PhD Thesis Chapter 6</p>
              <p class="project-description">A custom OpenAI Gym environment simulating a ball falling under gravity and bouncing off the floor. The key challenge: <strong>the floor position is NOT included in the observation space</strong>, requiring models to infer this hidden boundary condition to predict when and how the ball will bounce. Created to evaluate sequential learning models like the Cosine-Gated LSTM (CGLSTM) in a controlled setting before applying methods to complex social navigation scenarios.</p>
              <a href="{{ '/projects/fallingballenv' | relative_url }}" class="see-more-btn">
                <span class="btn-text">View Full Details</span>
                <span class="btn-icon">→</span>
              </a>
            </div>
          </div>
          
          <div class="carousel-slide" data-slide="1" data-video="" data-caption="LiteSocNavGym environment demonstration">
            <div class="carousel-card">
              <div class="contribution-badge created">CREATED</div>
              <h3>🤖 LiteSocNavGym</h3>
              <div class="project-status-badge completed">COMPLETED</div>
              <p class="project-meta"><strong>2024</strong> • Lightweight Social Navigation Environment</p>
              <p class="project-description">A lightweight social navigation environment created for faster simulation and evaluation of social navigation algorithms. Designed for efficient testing of predictive models and reinforcement learning approaches, optimizing for rapid iteration while maintaining core social interaction dynamics.</p>
              <a href="{{ '/projects/litesocnavgym' | relative_url }}" class="see-more-btn">
                <span class="btn-text">View Full Details</span>
                <span class="btn-icon">→</span>
              </a>
            </div>
          </div>
          
          <div class="carousel-slide" data-slide="2" data-video="" data-caption="SocNavGym environment demonstration with dynamic obstacles and social navigation scenarios">
            <div class="carousel-card">
              <div class="contribution-badge team">TEAM CONTRIBUTION</div>
              <h3>👥 SocNavGym</h3>
              <div class="project-status-badge completed">COMPLETED</div>
              <p class="project-meta"><strong>2020-2024</strong> • Team Project • Supervisor: Dr. Luis J. Manso</p>
              <p class="project-description">Comprehensive social navigation gymnasium environment for evaluating social robot navigation algorithms. As part of the development team, I focused on reinforcement learning aspects and integration with predictive models. This was the primary environment for testing Predictive World Models and validating Adaptive Prediction Horizons, with results published in UKCI 2023 and my PhD thesis.</p>
              <a href="{{ '/projects/socnavgym' | relative_url }}" class="see-more-btn">
                <span class="btn-text">View Full Details</span>
                <span class="btn-icon">→</span>
              </a>
            </div>
          </div>
          
        </div>
        
        <!-- Carousel Indicators -->
        <div class="carousel-indicators">
          <button class="carousel-dot active" onclick="goToSlide('environments', 0)" aria-label="Go to slide 1"></button>
          <button class="carousel-dot" onclick="goToSlide('environments', 1)" aria-label="Go to slide 2"></button>
          <button class="carousel-dot" onclick="goToSlide('environments', 2)" aria-label="Go to slide 3"></button>
        </div>
      </div>
      
      <!-- Video Section on Right -->
      <div class="carousel-right">
        <div class="carousel-video-container">
          <video id="environments-video" controls class="carousel-video">
            <source src="{{ '/assets/images/FallingBallEnv.webm' | relative_url }}" type="video/webm">
            Your browser does not support the video tag.
          </video>
          <p class="video-caption"><strong>Demo Video:</strong> <span id="video-caption-text">Real-time demonstration of FallingBallEnv showing ball physics, bouncing mechanics, and model predictions in action</span></p>
        </div>
      </div>
    </div>
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
  
  <div class="project-preview">
    <p>Proposed reinforcement learning models enabling autonomous systems to navigate safely in social environments. Introduced two complementary approaches: <strong>2StepAhead</strong> (multi-step ahead prediction system) and <strong>MASPM</strong> (Multi-Action State Predictive Model for comprehensive action evaluation). Published at UKCI 2023 with superior navigation performance compared to baseline methods.</p>
    
    <a href="{{ '/projects/predictive-world-models' | relative_url }}" class="see-more-btn">
      <span class="btn-text">View Full Details</span>
      <span class="btn-icon">→</span>
    </a>
  </div>
</div>

---

### 2. Cosine-Gated LSTM (CGLSTM)

<div class="portfolio-case-study" id="cosine-gated-lstm" data-category="rl-models completed">
  <div class="contribution-badge created">PROPOSED MODEL</div>
  <h3>🧠 Cosine-Gated LSTM for Sequential Learning</h3>
  <div class="project-status-badge completed">COMPLETED • PUBLISHED</div>
  <p><strong>2024</strong> • Aston University • Published at IEEE PRML 2024 (pp. 8-15)</p>
  
  <div class="project-preview">
    <p>Novel neural network architecture using cosine gating mechanisms for improved sequential learning. The CGLSTM dynamically weighs inputs versus hidden states based on cosine similarities, outperforming LSTM, GRU, and Transformer models. Published at IEEE PRML 2024 with superior benchmark results and used as a component in the Predictive World Models framework.</p>
    
    <a href="{{ '/projects/cosine-gated-lstm' | relative_url }}" class="see-more-btn">
      <span class="btn-text">View Full Details</span>
      <span class="btn-icon">→</span>
    </a>
  </div>
</div>

---

### 3. Adaptive Prediction Horizons

<div class="portfolio-case-study" id="adaptive-prediction-horizons" data-category="rl-models social-nav ongoing">
  <div class="contribution-badge created">PROPOSED MODEL</div>
  <h3>🔄 Adaptive Predictive Reinforcement Learning: Entropy-Driven Adaptive Prediction Horizons</h3>
  <div class="project-status-badge ongoing">ONGOING</div>
  <p><strong>2024 - Present</strong> • Aston University</p>
  
  <div class="project-preview">
    <p>Developing entropy-driven adaptive prediction horizon systems for reinforcement learning applications. This research enables dynamic adjustment of prediction horizons based on environmental complexity, improving performance in autonomous systems and robotics. Currently in active development with framework completion and initial experimental validation in progress.</p>
    
    <a href="{{ '/projects/adaptive-prediction-horizons' | relative_url }}" class="see-more-btn">
      <span class="btn-text">View Full Details</span>
      <span class="btn-icon">→</span>
    </a>
  </div>
</div>

---

## 📡 Action Recognition Research

<div class="portfolio-case-study" data-category="action-rec ongoing">
  <div class="contribution-badge created">PROPOSED PROJECT</div>
  <h3>📡 Wi-Fi CSI Action Recognition with ESP32</h3>
  <div class="project-status-badge ongoing">ONGOING</div>
  <p><strong>2024 - Present</strong> • Hardware-based Action Recognition</p>
  
  <div class="project-preview">
    <p>Developing action recognition systems using Wi-Fi Channel State Information (CSI) with ESP32 microcontrollers. This research explores contactless human activity recognition through wireless signals, combining hardware design with machine learning. Exploring novel approaches to human activity recognition without cameras or wearables.</p>
    
    <a href="{{ '/projects/action-recognition' | relative_url }}" class="see-more-btn">
      <span class="btn-text">View Full Details</span>
      <span class="btn-icon">→</span>
    </a>
  </div>
</div>

---

## 🔧 Other Projects & Tools

<div class="portfolio-case-study" data-category="completed">
  <h3>🎢 Disneyland Project</h3>
  <div class="project-status-badge completed">COMPLETED</div>
  <p><strong>Data Analysis & Visualization Project</strong></p>
  
  <div class="project-preview">
    <p>Data analysis project exploring Disneyland visitor data, including demographics, ride popularity, and operational insights using data science techniques.</p>
    
    <a href="{{ '/projects/disneyland' | relative_url }}" class="see-more-btn">
      <span class="btn-text">View Full Details</span>
      <span class="btn-icon">→</span>
    </a>
  </div>
</div>

<div class="portfolio-case-study" data-category="completed">
  <h3>🌍 WorldModels</h3>
  <div class="project-status-badge completed">COMPLETED</div>
  <p><strong>Predictive Modeling Research</strong></p>
  
  <div class="project-preview">
    <p>Exploration and implementation of World Models concept in reinforcement learning, where an agent learns a compressed, predictive model of its environment for efficient policy learning.</p>
    
    <a href="{{ '/projects/worldmodels' | relative_url }}" class="see-more-btn">
      <span class="btn-text">View Full Details</span>
      <span class="btn-icon">→</span>
    </a>
  </div>
</div>

---

## 🎓 PhD Thesis Integration

<div class="portfolio-case-study" data-category="completed">
  <h3>📚 PhD Thesis: Enhancing Robot Social Navigation</h3>
  <div class="project-status-badge completed">COMPLETED</div>
  <p><strong>2020 - 2024</strong> • Aston University • Supervisors: Dr. Luis J. Manso, Prof. Dr. Aniko Ekart</p>
  
  <div class="project-preview">
    <p>Completed PhD thesis integrating all three proposed models into a comprehensive framework for social robot navigation: <strong>Predictive World Models</strong> (2StepAhead, MASPM), <strong>Cosine-Gated LSTM</strong> architecture, and <strong>Adaptive Prediction Horizons</strong> (entropy-driven). Successfully defended with 2 conference papers published (UKCI 2023, IEEE PRML 2024) and superior performance in all tested environments.</p>
    
    <a href="{{ '/projects/phd-thesis' | relative_url }}" class="see-more-btn">
      <span class="btn-text">View Full Details</span>
      <span class="btn-icon">→</span>
    </a>
  </div>
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
