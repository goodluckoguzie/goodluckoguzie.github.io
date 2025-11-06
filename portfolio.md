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
    <div class="environments-carousel" id="environments-carousel">
      
      <div class="carousel-slide active" data-slide="0">
        <div class="carousel-card">
          <div class="card-header">
            <div class="card-badges">
              <div class="contribution-badge created">DEVELOPED</div>
              <div class="project-status-badge completed">COMPLETED</div>
              <div class="contribution-badge" style="background: #6c757d; color: white;">USED IN: IEEE PRML 2024</div>
            </div>
            <h3>⚽ FallingBallEnv</h3>
            <p class="project-meta"><strong>2023</strong> • Custom OpenAI Gym Environment • PhD Thesis Chapter 6</p>
          </div>
          
          <div class="card-content">
            <div class="card-text">
              <p class="project-description">I developed this simple environment where a ball falls and bounces, obeying the free fall of gravity. The floor position is not included in the observation space. Can the model learn to predict the next state of this environment, for example, the bouncing of the ball when it hits the ground?</p>
              
              <div class="project-stats" style="margin: 1rem 0; padding: 0.75rem; background: var(--bg-alt); border-radius: 6px; font-size: 0.875rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0;">
                  <span style="font-size: 1.2rem;">🎯</span>
                  <span><strong>25% lower MAE</strong> with balanced datasets</span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0;">
                  <span style="font-size: 1.2rem;">📚</span>
                  <span>Published in <strong>IEEE PRML 2024</strong></span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0;">
                  <span style="font-size: 1.2rem;">✅</span>
                  <span>Validated <strong>CGLSTM</strong> architecture</span>
                </div>
              </div>
              
              <a href="{{ '/projects/fallingballenv' | relative_url }}" class="see-more-btn">
                <span class="btn-text">Explore Details</span>
                <span class="btn-icon">→</span>
              </a>
            </div>
            
            <div class="card-video">
              <video 
                autoplay
                muted
                loop
                playsinline
                class="carousel-video"
                preload="auto"
                poster="{{ '/assets/images/FallingBall.png' | relative_url }}"
                style="width: 100%; height: auto; border-radius: 6px; cursor: pointer;">
                <source src="{{ '/video/FallingBallEnv.webm' | relative_url }}" type="video/webm">
                Your browser does not support the video tag.
              </video>
              <p class="video-caption">Watch how CGLSTM predicts bounces when the floor position is hidden. This is the challenge that makes this environment unique.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="carousel-slide" data-slide="1">
        <div class="carousel-card">
          <div class="card-header">
            <div class="card-badges">
              <div class="contribution-badge created">DEVELOPED</div>
              <div class="project-status-badge completed">COMPLETED</div>
            </div>
            <h3>🤖 LiteSocNavGym</h3>
            <p class="project-meta"><strong>2024</strong> • Lightweight Social Navigation Environment</p>
          </div>
          
          <div class="card-content">
            <div class="card-text">
              <p class="project-description">I developed this lite version of SocNavGym optimized for rapid iteration. 3-5x faster simulations while preserving core social navigation dynamics, making it perfect for algorithm development and testing.</p>
              
              <div class="project-stats" style="margin: 1rem 0; padding: 0.75rem; background: var(--bg-alt); border-radius: 6px; font-size: 0.875rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0;">
                  <span style="font-size: 1.2rem;">⚡</span>
                  <span><strong>3-5x faster</strong> than SocNavGym</span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0;">
                  <span style="font-size: 1.2rem;">🎯</span>
                  <span>Used for <strong>Predictive World Models</strong></span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0;">
                  <span style="font-size: 1.2rem;">✅</span>
                  <span>Core social dynamics <strong>preserved</strong></span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0;">
                  <span style="font-size: 1.2rem;">🧪</span>
                  <span>For testing <strong>RL models</strong></span>
                </div>
              </div>
              
              <a href="{{ '/projects/litesocnavgym' | relative_url }}" class="see-more-btn">
                <span class="btn-text">Explore Details</span>
                <span class="btn-icon">→</span>
              </a>
            </div>
            
            <div class="card-video">
              <video 
                autoplay
                muted
                loop
                playsinline
                class="carousel-video"
                preload="auto"
                poster="{{ '/video/LITESOCNAVGYM.webm' | relative_url }}"
                style="width: 100%; height: auto; border-radius: 6px; cursor: pointer;">
                <source src="{{ '/video/LITESOCNAVGYM.webm' | relative_url }}" type="video/webm">
                Your browser does not support the video tag.
              </video>
              <p class="video-caption">Watch LiteSocNavGym in action: faster simulations with core social navigation features preserved</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="carousel-slide" data-slide="2">
        <div class="carousel-card">
          <div class="card-header">
            <div class="card-badges">
              <div class="contribution-badge team">TEAM CONTRIBUTION</div>
              <div class="project-status-badge completed">COMPLETED</div>
            </div>
            <h3>👥 SocNavGym</h3>
            <p class="project-meta"><strong>2020-2024</strong> • Team Project • Supervisor: Dr. Luis J. Manso</p>
          </div>
          
          <div class="card-content">
            <div class="card-text">
              <p class="project-description">Comprehensive social navigation gymnasium environment for evaluating social robot navigation algorithms. As part of the development team, I focused on reinforcement learning aspects and integration with predictive models. This was the primary environment for testing Predictive World Models and validating Adaptive Prediction Horizons.</p>
              <a href="{{ '/projects/socnavgym' | relative_url }}" class="see-more-btn">
                <span class="btn-text">View Full Details</span>
                <span class="btn-icon">→</span>
              </a>
            </div>
            
            <div class="card-video">
              <video autoplay muted loop playsinline class="carousel-video" preload="auto" style="width: 100%; height: auto; border-radius: 6px; cursor: pointer;">
                <source src="{{ '/video/SocNavGym.mp4' | relative_url }}" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <p class="video-caption">SocNavGym environment demonstration with dynamic obstacles and social navigation scenarios</p>
            </div>
          </div>
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
</div>

---

## 🧠 Proposed Models & Algorithms

<div class="environments-carousel-container">
  <div class="environments-carousel-wrapper">
    <!-- Carousel Navigation -->
    <button class="carousel-nav carousel-prev" aria-label="Previous model" onclick="moveCarousel('models', -1)">←</button>
    <button class="carousel-nav carousel-next" aria-label="Next model" onclick="moveCarousel('models', 1)">→</button>
    
    <!-- Carousel Content -->
    <div class="environments-carousel" id="models-carousel">
      
      <div class="carousel-slide active" data-slide="0">
        <div class="carousel-card">
          <div class="card-header">
            <div class="card-badges">
              <div class="contribution-badge created">PROPOSED MODEL</div>
              <div class="project-status-badge completed">COMPLETED • PUBLISHED</div>
            </div>
            <h3>🤖 Predictive World Models (2StepAhead & MASPM)</h3>
            <p class="project-meta"><strong>2023</strong> • Aston University • Published at UKCI 2023</p>
          </div>
          
          <div class="card-content">
            <div class="card-text">
              <p class="project-description">Proposed reinforcement learning models enabling autonomous systems to navigate safely in social environments. Introduced two complementary approaches: <strong>2StepAhead</strong> (multi-step ahead prediction system) and <strong>MASPM</strong> (Multi-Action State Predictive Model for comprehensive action evaluation). Published at UKCI 2023 with superior navigation performance compared to baseline methods.</p>
              <a href="{{ '/projects/predictive-world-models' | relative_url }}" class="see-more-btn">
                <span class="btn-text">View Full Details</span>
                <span class="btn-icon">→</span>
              </a>
            </div>
            
            <div class="card-video">
              <video controls class="carousel-video">
                <source src="https://goodluckoguzie.github.io/Viva/img/problem.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <p class="video-caption">Predictive World Models demonstration showing navigation performance</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="carousel-slide" data-slide="1">
        <div class="carousel-card">
          <div class="card-header">
            <div class="card-badges">
              <div class="contribution-badge created">PROPOSED MODEL</div>
              <div class="project-status-badge completed">COMPLETED • PUBLISHED</div>
            </div>
            <h3>🧠 Cosine-Gated LSTM for Sequential Learning</h3>
            <p class="project-meta"><strong>2024</strong> • Aston University • Published at IEEE PRML 2024</p>
          </div>
          
          <div class="card-content">
            <div class="card-text">
              <p class="project-description">Novel neural network architecture using cosine gating mechanisms for improved sequential learning. The CGLSTM dynamically weighs inputs versus hidden states based on cosine similarities, outperforming LSTM, GRU, and Transformer models. Published at IEEE PRML 2024 with superior benchmark results and used as a component in the Predictive World Models framework.</p>
              <a href="{{ '/projects/cosine-gated-lstm' | relative_url }}" class="see-more-btn">
                <span class="btn-text">View Full Details</span>
                <span class="btn-icon">→</span>
              </a>
            </div>
            
            <div class="card-video">
              <video controls class="carousel-video">
                <source src="https://goodluckoguzie.github.io/Viva/img/whypredictivemodellimitation.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <p class="video-caption">Cosine-Gated LSTM architecture and performance demonstration</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="carousel-slide" data-slide="2">
        <div class="carousel-card">
          <div class="card-header">
            <div class="card-badges">
              <div class="contribution-badge created">PROPOSED MODEL</div>
              <div class="project-status-badge ongoing">ONGOING</div>
            </div>
            <h3>🔄 Adaptive Predictive Reinforcement Learning</h3>
            <p class="project-meta"><strong>2024 - Present</strong> • Aston University</p>
          </div>
          
          <div class="card-content">
            <div class="card-text">
              <p class="project-description">Developing entropy-driven adaptive prediction horizon systems for reinforcement learning applications. This research enables dynamic adjustment of prediction horizons based on environmental complexity, improving performance in autonomous systems and robotics. Currently in active development with framework completion and initial experimental validation in progress.</p>
              <a href="{{ '/projects/adaptive-prediction-horizons' | relative_url }}" class="see-more-btn">
                <span class="btn-text">View Full Details</span>
                <span class="btn-icon">→</span>
              </a>
            </div>
            
            <div class="card-video">
              <video autoplay muted loop playsinline class="carousel-video" preload="auto" style="width: 100%; height: auto; border-radius: 6px; cursor: pointer;">
                <source src="{{ '/video/LunarLander.webm' | relative_url }}" type="video/webm">
                Your browser does not support the video tag.
              </video>
              <p class="video-caption">Adaptive Prediction Horizons in LunarLander environment</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
    <!-- Carousel Indicators -->
    <div class="carousel-indicators">
      <button class="carousel-dot active" onclick="goToSlide('models', 0)" aria-label="Go to slide 1"></button>
      <button class="carousel-dot" onclick="goToSlide('models', 1)" aria-label="Go to slide 2"></button>
      <button class="carousel-dot" onclick="goToSlide('models', 2)" aria-label="Go to slide 3"></button>
    </div>
  </div>
</div>

---

## 📡 Action Recognition Research

<div class="environments-carousel-container">
  <div class="environments-carousel-wrapper">
    <!-- Carousel Navigation -->
    <button class="carousel-nav carousel-prev" aria-label="Previous project" onclick="moveCarousel('action-rec', -1)">←</button>
    <button class="carousel-nav carousel-next" aria-label="Next project" onclick="moveCarousel('action-rec', 1)">→</button>
    
    <!-- Carousel Content -->
    <div class="environments-carousel" id="action-rec-carousel">
      
      <div class="carousel-slide active" data-slide="0">
        <div class="carousel-card">
          <div class="card-header">
            <div class="card-badges">
              <div class="contribution-badge created">PROPOSED PROJECT</div>
              <div class="project-status-badge ongoing">ONGOING</div>
            </div>
            <h3>📡 Wi-Fi CSI Action Recognition with ESP32</h3>
            <p class="project-meta"><strong>2024 - Present</strong> • Hardware-based Action Recognition</p>
          </div>
          
          <div class="card-content">
            <div class="card-text">
              <p class="project-description">Developing action recognition systems using Wi-Fi Channel State Information (CSI) with ESP32 microcontrollers. This research explores contactless human activity recognition through wireless signals, combining hardware design with machine learning. Exploring novel approaches to human activity recognition without cameras or wearables.</p>
              <a href="{{ '/projects/action-recognition' | relative_url }}" class="see-more-btn">
                <span class="btn-text">View Full Details</span>
                <span class="btn-icon">→</span>
              </a>
            </div>
            
            <div class="card-video">
              <div class="image-placeholder">
                <img src="https://goodluckoguzie.github.io/Viva/img/output.png" alt="Wi-Fi CSI Action Recognition" class="carousel-image">
              </div>
              <p class="video-caption">Wi-Fi CSI Action Recognition system with ESP32 microcontroller</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
    <!-- Carousel Indicators -->
    <div class="carousel-indicators">
      <button class="carousel-dot active" onclick="goToSlide('action-rec', 0)" aria-label="Go to slide 1"></button>
    </div>
  </div>
</div>

---

## 🔧 Other Projects & Tools

<div class="environments-carousel-container">
  <div class="environments-carousel-wrapper">
    <!-- Carousel Navigation -->
    <button class="carousel-nav carousel-prev" aria-label="Previous project" onclick="moveCarousel('other-projects', -1)">←</button>
    <button class="carousel-nav carousel-next" aria-label="Next project" onclick="moveCarousel('other-projects', 1)">→</button>
    
    <!-- Carousel Content -->
    <div class="environments-carousel" id="other-projects-carousel">
      
      <div class="carousel-slide active" data-slide="0">
        <div class="carousel-card">
          <div class="card-header">
            <div class="card-badges">
              <div class="project-status-badge completed">COMPLETED</div>
            </div>
            <h3>🎢 Disneyland Project</h3>
            <p class="project-meta"><strong>Data Analysis & Visualization Project</strong></p>
          </div>
          
          <div class="card-content">
            <div class="card-text">
              <p class="project-description">Data analysis project exploring Disneyland visitor data, including demographics, ride popularity, and operational insights using data science techniques.</p>
              <a href="{{ '/projects/disneyland' | relative_url }}" class="see-more-btn">
                <span class="btn-text">View Full Details</span>
                <span class="btn-icon">→</span>
              </a>
            </div>
            
            <div class="card-video">
              <div class="image-placeholder">
                <img src="https://via.placeholder.com/400x225?text=Disneyland+Project" alt="Disneyland Project Visualization" class="carousel-image">
              </div>
              <p class="video-caption">Data visualization and analysis of Disneyland visitor patterns</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="carousel-slide" data-slide="1">
        <div class="carousel-card">
          <div class="card-header">
            <div class="card-badges">
              <div class="project-status-badge completed">COMPLETED</div>
            </div>
            <h3>🌍 WorldModels</h3>
            <p class="project-meta"><strong>Predictive Modeling Research</strong></p>
          </div>
          
          <div class="card-content">
            <div class="card-text">
              <p class="project-description">Exploration and implementation of World Models concept in reinforcement learning, where an agent learns a compressed, predictive model of its environment for efficient policy learning.</p>
              <a href="{{ '/projects/worldmodels' | relative_url }}" class="see-more-btn">
                <span class="btn-text">View Full Details</span>
                <span class="btn-icon">→</span>
              </a>
            </div>
            
            <div class="card-video">
              <div class="image-placeholder">
                <img src="https://goodluckoguzie.github.io/Viva/img/world_model_schematic.jpg" alt="World Models Architecture" class="carousel-image">
              </div>
              <p class="video-caption">World Models architecture and implementation</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
    <!-- Carousel Indicators -->
    <div class="carousel-indicators">
      <button class="carousel-dot active" onclick="goToSlide('other-projects', 0)" aria-label="Go to slide 1"></button>
      <button class="carousel-dot" onclick="goToSlide('other-projects', 1)" aria-label="Go to slide 2"></button>
    </div>
  </div>
</div>

---

## 🎓 PhD Thesis Integration

<div class="environments-carousel-container">
  <div class="environments-carousel-wrapper">
    <!-- Carousel Navigation -->
    <button class="carousel-nav carousel-prev" aria-label="Previous project" onclick="moveCarousel('phd-thesis', -1)">←</button>
    <button class="carousel-nav carousel-next" aria-label="Next project" onclick="moveCarousel('phd-thesis', 1)">→</button>
    
    <!-- Carousel Content -->
    <div class="environments-carousel" id="phd-thesis-carousel">
      
      <div class="carousel-slide active" data-slide="0">
        <div class="carousel-card">
          <div class="card-header">
            <div class="card-badges">
              <div class="project-status-badge completed">COMPLETED</div>
            </div>
            <h3>📚 PhD Thesis: Enhancing Robot Social Navigation</h3>
            <p class="project-meta"><strong>2020 - 2024</strong> • Aston University • Supervisors: Dr. Luis J. Manso, Prof. Dr. Aniko Ekart</p>
          </div>
          
          <div class="card-content">
            <div class="card-text">
              <p class="project-description">Completed PhD thesis integrating all three proposed models into a comprehensive framework for social robot navigation: <strong>Predictive World Models</strong> (2StepAhead, MASPM), <strong>Cosine-Gated LSTM</strong> architecture, and <strong>Adaptive Prediction Horizons</strong> (entropy-driven). Successfully defended with 2 conference papers published (UKCI 2023, IEEE PRML 2024) and superior performance in all tested environments.</p>
              <a href="{{ '/projects/phd-thesis' | relative_url }}" class="see-more-btn">
                <span class="btn-text">View Full Details</span>
                <span class="btn-icon">→</span>
              </a>
            </div>
            
            <div class="card-video">
              <div class="image-placeholder">
                <img src="https://goodluckoguzie.github.io/Viva/img/aston_title_background.jpg" alt="PhD Thesis Cover" class="carousel-image">
              </div>
              <p class="video-caption">PhD Thesis: Enhancing Robot Social Navigation with Reinforcement Learning and Advanced Predictive Models</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
    <!-- Carousel Indicators -->
    <div class="carousel-indicators">
      <button class="carousel-dot active" onclick="goToSlide('phd-thesis', 0)" aria-label="Go to slide 1"></button>
    </div>
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
