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
              
              <a href="{{ '/projects/fallingballenv' | relative_url }}" class="see-more-btn" aria-label="Explore FallingBallEnv project details, results, and technical specifications">
                <span class="btn-text">Explore Environment Details</span>
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
                preload="metadata"
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
              
              <a href="{{ '/projects/litesocnavgym' | relative_url }}" class="see-more-btn" aria-label="Explore LiteSocNavGym lightweight environment details and performance metrics">
                <span class="btn-text">View Performance Metrics</span>
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
                preload="metadata"
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
              <a href="{{ '/projects/socnavgym' | relative_url }}" class="see-more-btn" aria-label="Explore SocNavGym comprehensive environment specifications and research applications">
                <span class="btn-text">Explore Environment Specs</span>
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
              <p class="project-description">Predictive world models give the agent a short-horizon view of how humans will move before it commits to an action. I designed three variants for <a href="{{ '/projects/socnavgym' | relative_url }}" style="color: var(--link); text-decoration: underline;">SocNavGym</a>: 2StepAhead rolls the latent state two steps forward for the current action, MASPM evaluates the next state for every discrete action, and 2StepAhead-MASPM fuses both behaviours. This framework improved success rate and reduced human collisions, leading to my <a href="{{ '/publications' | relative_url }}#ukci-2023" style="color: var(--link); text-decoration: underline;">UKCI 2023 publication</a>.</p>

              <div class="project-stats" style="margin: 1rem 0; padding: 0.75rem; background: var(--bg-alt); border-radius: 6px; font-size: 0.875rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0;">
                  <span style="font-size: 1.2rem;">📈</span>
                  <span><strong>0.67 reward</strong> achieved by 2StepAhead-MASPM</span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0;">
                  <span style="font-size: 1.2rem;">🚫</span>
                  <span><strong>Lower human collisions</strong> across 500 test runs</span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0;">
                  <span style="font-size: 1.2rem;">🕒</span>
                  <span><strong>Converged in ~3,200 episodes</strong> (faster than baselines)</span>
                </div>
              </div>
              <a href="{{ '/projects/predictive-world-models' | relative_url }}" class="see-more-btn" aria-label="Explore Predictive World Models architecture, training results, and performance comparisons">
                <span class="btn-text">View Architecture & Results</span>
                <span class="btn-icon">→</span>
              </a>
            </div>
            
            <div class="card-video">
              <img src="{{ '/assets/images/predictive_world_models_training.png' | relative_url }}" alt="Training reward comparison chart showing 2StepAhead, MASPM, and 2StepAhead-MASPM models outperforming baseline Dueling DQN in SocNavGym environment" class="carousel-image" loading="lazy" style="width: 100%; height: auto; border-radius: 6px; display: block;">
              <p class="video-caption">Training reward comparison (200k episodes): 2StepAhead-MASPM maintains the highest cumulative reward</p>
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
              <p class="project-description">Cosine-Gated LSTM augments the vanilla architecture with cosine similarity gates that prioritise trajectory-aligned inputs. The model achieves superior sequence prediction across synthetic tasks, row-wise MNIST, Fashion-MNIST, IMDB, and the SocNavGym predictor, underpinning the Predictive World Models framework showcased at IEEE PRML 2024.</p>

              <div class="project-stats" style="margin: 1rem 0; padding: 0.75rem; background: var(--bg-alt); border-radius: 6px; font-size: 0.875rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0;">
                  <span style="font-size: 1.2rem;">🧮</span>
                  <span><strong>0.0225 MAE</strong> on the adding problem (T=1000)</span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0;">
                  <span style="font-size: 1.2rem;">🎯</span>
                  <span><strong>99.07% accuracy</strong> on row-wise MNIST</span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0;">
                  <span style="font-size: 1.2rem;">🤖</span>
                  <span><strong>35% lower MAE</strong> than Transformer at k=10 in SocNavGym</span>
                </div>
              </div>

              <a href="{{ '/projects/cosine-gated-lstm' | relative_url }}" class="see-more-btn" aria-label="Explore Cosine-Gated LSTM architecture, benchmark results, and implementation details">
                <span class="btn-text">View Benchmarks & Code</span>
                <span class="btn-icon">→</span>
              </a>
            </div>
            
            <div class="card-video">
              <img src="{{ '/assets/images/CGLSTMArchitecture.jpg' | relative_url }}" alt="Cosine-Gated LSTM neural network architecture diagram showing cosine similarity gates and integrated gating mechanism for improved sequential learning" class="carousel-image" loading="lazy" style="width: 100%; height: auto; border-radius: 6px; display: block;">
              <p class="video-caption">Cosine-Gated LSTM architecture</p>
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
              <p class="project-description">Entropy-driven controller that extends SAC + CGLSTM only when the policy is uncertain. Cuts wall-time on LunarLander-v2, sustains positive reward on LiteSocNavGym, and preserves real-time inference budgets. Ongoing research building on the Predictive World Models stack.</p>

              <div class="project-stats" style="margin: 1rem 0; padding: 0.75rem; background: var(--bg-alt); border-radius: 6px; font-size: 0.875rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0;">
                  <span style="font-size: 1.2rem;">⏱️</span>
                  <span><strong>53.48 h vs 59.54 h</strong> to hit 500k steps (entropy vs fixed horizon)</span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0;">
                  <span style="font-size: 1.2rem;">✅</span>
                  <span><strong>100% success</strong> with 0.48 avg. return in LiteSocNavGym</span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0;">
                  <span style="font-size: 1.2rem;">📉</span>
                  <span><strong>5.62 days</strong> training vs 28.41 days for DreamerV3 + CGLSTM</span>
                </div>
              </div>
              <a href="{{ '/projects/adaptive-prediction-horizons' | relative_url }}" class="see-more-btn" aria-label="Explore Adaptive Prediction Horizons methodology, experimental results, and entropy-based adaptation">
                <span class="btn-text">View Methodology & Results</span>
                <span class="btn-icon">→</span>
              </a>
            </div>
            
            <div class="card-video">
              <img src="{{ '/assets/images/TrainingReturn_SocNavGym-1.jpg' | relative_url }}" alt="Training return curves comparing adaptive prediction horizon (cyan) with fixed horizon methods in LiteSocNavGym, showing superior learning performance" class="carousel-image" loading="lazy" style="width: 100%; height: auto; border-radius: 6px; display: block;">
              <p class="video-caption">Training performance: adaptive horizon sustains reward on LiteSocNavGym</p>
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
              <p class="project-description">Developing action recognition systems using Wi-Fi Channel State Information (CSI) with ESP32 microcontrollers to predict human actions using only WiFi. This research addresses privacy concerns associated with camera-based systems by exploring contactless human activity recognition through wireless signals. Investigating challenges such as noise interference and signal variability while combining hardware design with machine learning.</p>
              <a href="{{ '/projects/action-recognition' | relative_url }}" class="see-more-btn" aria-label="Explore Wi-Fi CSI Action Recognition system design, hardware implementation, and machine learning approach">
                <span class="btn-text">View System Design</span>
                <span class="btn-icon">→</span>
              </a>
            </div>
            
            <div class="card-video">
              <div class="image-placeholder" style="display: flex; align-items: center; justify-content: center; min-height: 200px; background: var(--bg-alt); border-radius: 6px; border: 2px dashed var(--border);">
                <p style="color: var(--text-light); font-size: 1.125rem; font-weight: 500; margin: 0;">Coming Soon</p>
              </div>
              <p class="video-caption">Visual content coming soon</p>
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
            <h3>🌍 WorldModels</h3>
            <p class="project-meta"><strong>Predictive Modeling Research</strong></p>
          </div>
          
          <div class="card-content">
            <div class="card-text">
              <p class="project-description">Exploration and implementation of World Models concept in reinforcement learning, where an agent learns a compressed, predictive model of its environment for efficient policy learning.</p>
              <a href="{{ '/projects/worldmodels' | relative_url }}" class="see-more-btn" aria-label="Explore World Models implementation and reinforcement learning approach">
                <span class="btn-text">View Implementation</span>
                <span class="btn-icon">→</span>
              </a>
            </div>
            
            <div class="card-video">
              <div class="image-placeholder">
                <img src="{{ '/assets/images/world_model_schematic.jpg' | relative_url }}" alt="World Models architecture diagram showing VAE encoder, RNN dynamics model, and policy network components" class="carousel-image" loading="lazy">
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
              <a href="{{ '/projects/phd-thesis' | relative_url }}" class="see-more-btn" aria-label="Explore PhD thesis comprehensive framework, publications, and research contributions">
                <span class="btn-text">Read Thesis Summary</span>
                <span class="btn-icon">→</span>
              </a>
            </div>
            
            <div class="card-video">
              <div class="image-placeholder">
                <img src="{{ '/assets/images/aston_title_background.jpg' | relative_url }}" alt="PhD Thesis cover page showing Aston University branding and thesis title: Enhancing Robot Social Navigation with Reinforcement Learning and Advanced Predictive Models" class="carousel-image" loading="lazy">
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
