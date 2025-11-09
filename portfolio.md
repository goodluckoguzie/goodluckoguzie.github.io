---
layout: default
title: Research Portfolio
description: "Explore Dr. Dirichukwu Goodluck Oguzie's (PhD, MSc, BSc in Computer Science) research portfolio including SocNavGym, LiteSocNavGym, FallingBallEnv environments, Cosine-Gated LSTM, Predictive World Models, and Adaptive Prediction Horizons."
---

# Research Portfolio

My research focuses on **Social Robot Navigation**, **Reinforcement Learning**, and **Action Recognition**. Below are the environments I've created or contributed to, the models I've proposed, and applications I've developed.

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

## Featured Publications

<div class="portfolio-grid" data-category="published">
  <div class="portfolio-card" data-category="rl-models published completed">
    <div class="portfolio-card-badges">
      <div class="contribution-badge created">PUBLISHED</div>
      <div class="project-status-badge completed">IEEE PRML 2024</div>
    </div>
    <h3>Cosine-Gated LSTM for Sequential Learning</h3>
    <p class="portfolio-card-meta">2024 • Neural Network Architecture</p>
    <div class="portfolio-card-media">
      <div class="portfolio-card-video">
        <video autoplay muted loop playsinline preload="metadata" poster="{{ '/assets/images/CGLSTMArchitecture.jpg' | relative_url }}" aria-label="Cosine-Gated LSTM demonstration video">
          <source src="{{ '/video/FallingBallEnv.webm' | relative_url }}" type="video/webm">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="portfolio-card-image">
        <img src="{{ '/assets/images/CGLSTMArchitecture.jpg' | relative_url }}" alt="Cosine-Gated LSTM architecture diagram" loading="lazy">
      </div>
    </div>
    <p class="portfolio-card-description">Novel Cosine-Gated LSTM architecture for improved sequential learning, outperforming LSTM, GRU, and Transformer models across multiple benchmarks.</p>
    <a href="{{ '/projects/cosine-gated-lstm' | relative_url }}" class="portfolio-card-link">View Paper →</a>
  </div>

  <div class="portfolio-card" data-category="rl-models social-nav published completed">
    <div class="portfolio-card-badges">
      <div class="contribution-badge created">PUBLISHED</div>
      <div class="project-status-badge completed">UKCI 2023</div>
    </div>
    <h3>Predictive World Models for Social Navigation</h3>
    <p class="portfolio-card-meta">2023 • Reinforcement Learning</p>
    <div class="portfolio-card-media">
      <div class="portfolio-card-video">
        <video autoplay muted loop playsinline preload="metadata" poster="{{ '/assets/images/2StepAhead-MASPM.jpg' | relative_url }}" aria-label="Predictive World Models demonstration video">
          <source src="{{ '/video/SocNavGym.mp4' | relative_url }}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="portfolio-card-image">
        <img src="{{ '/assets/images/2StepAhead-MASPM.jpg' | relative_url }}" alt="Predictive World Models architecture showing 2StepAhead and MASPM" loading="lazy">
      </div>
    </div>
    <p class="portfolio-card-description">Predictive models (2StepAhead, MASPM) for safe autonomous navigation, improving performance and reducing collisions in social environments.</p>
    <a href="{{ '/projects/predictive-world-models' | relative_url }}" class="portfolio-card-link">View Paper →</a>
  </div>
</div>

---

## Research Environments

<div class="portfolio-grid" data-category="environments">
  <div class="portfolio-card" data-category="environments social-nav completed">
    <div class="portfolio-card-badges">
      <div class="contribution-badge created">DEVELOPED</div>
      <div class="project-status-badge completed">COMPLETED</div>
    </div>
    <h3>FallingBallEnv</h3>
    <p class="portfolio-card-meta">2023 • Custom OpenAI Gym Environment</p>
    <div class="portfolio-card-media">
      <div class="portfolio-card-video">
        <video autoplay muted loop playsinline preload="metadata" poster="{{ '/assets/images/FallingBall.png' | relative_url }}" aria-label="FallingBallEnv demonstration video">
          <source src="{{ '/video/FallingBallEnv.webm' | relative_url }}" type="video/webm">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="portfolio-card-image">
        <img src="{{ '/assets/images/FallingBall.png' | relative_url }}" alt="FallingBallEnv environment visualization" loading="lazy">
      </div>
    </div>
    <p class="portfolio-card-description">Simple environment where a ball falls and bounces, obeying gravity. The floor position is not included in the observation space, testing predictive capabilities.</p>
    <div class="portfolio-card-highlight">Published in IEEE PRML 2024 • Validated CGLSTM architecture</div>
    <a href="{{ '/projects/fallingballenv' | relative_url }}" class="portfolio-card-link">View Details →</a>
  </div>

  <div class="portfolio-card" data-category="environments social-nav completed">
    <div class="portfolio-card-badges">
      <div class="contribution-badge created">DEVELOPED</div>
      <div class="project-status-badge completed">COMPLETED</div>
    </div>
    <h3>LiteSocNavGym</h3>
    <p class="portfolio-card-meta">2024 • Lightweight Social Navigation Environment</p>
    <div class="portfolio-card-media">
      <div class="portfolio-card-video">
        <video autoplay muted loop playsinline preload="metadata" poster="{{ '/assets/images/output_lite.png' | relative_url }}" aria-label="LiteSocNavGym demonstration video">
          <source src="{{ '/video/LITESOCNAVGYM.webm' | relative_url }}" type="video/webm">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="portfolio-card-image">
        <img src="{{ '/assets/images/output_lite.png' | relative_url }}" alt="LiteSocNavGym environment output" loading="lazy">
      </div>
    </div>
    <p class="portfolio-card-description">Lite version of SocNavGym optimized for rapid iteration. 3-5x faster simulations while preserving core social navigation dynamics.</p>
    <div class="portfolio-card-highlight">Used for Predictive World Models • Core dynamics preserved</div>
    <a href="{{ '/projects/litesocnavgym' | relative_url }}" class="portfolio-card-link">View Details →</a>
  </div>

  <div class="portfolio-card" data-category="environments social-nav completed">
    <div class="portfolio-card-badges">
      <div class="contribution-badge team">TEAM CONTRIBUTION</div>
      <div class="project-status-badge completed">COMPLETED</div>
    </div>
    <h3>SocNavGym</h3>
    <p class="portfolio-card-meta">2020-2024 • Team Project • Supervisor: Dr. Luis J. Manso</p>
    <div class="portfolio-card-media">
      <div class="portfolio-card-video">
        <video autoplay muted loop playsinline preload="metadata" poster="{{ '/assets/images/TestingMetrics1.jpg' | relative_url }}" aria-label="SocNavGym demonstration video">
          <source src="{{ '/video/SocNavGym.mp4' | relative_url }}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="portfolio-card-image">
        <img src="{{ '/assets/images/TestingMetrics1.jpg' | relative_url }}" alt="SocNavGym episode metrics histograms comparing RVO2, DuelingDQN, SFM, WM DuelingDQN and 2StepAhead MASPM DuelingDQN algorithms" loading="lazy">
      </div>
    </div>
    <p class="portfolio-card-description">Comprehensive social navigation gymnasium environment for evaluating social robot navigation algorithms. Primary environment for testing Predictive World Models.</p>
    <a href="{{ '/projects/socnavgym' | relative_url }}" class="portfolio-card-link">View Details →</a>
  </div>
</div>

---

## Proposed Models & Algorithms

<div class="portfolio-grid" data-category="rl-models">
  <div class="portfolio-card" data-category="rl-models social-nav completed">
    <div class="portfolio-card-badges">
      <div class="contribution-badge created">PROPOSED MODEL</div>
      <div class="project-status-badge completed">PUBLISHED</div>
    </div>
    <h3>Predictive World Models (2StepAhead & MASPM)</h3>
    <p class="portfolio-card-meta">2023 • Published at UKCI 2023</p>
    <div class="portfolio-card-media">
      <div class="portfolio-card-video">
        <video autoplay muted loop playsinline preload="metadata" poster="{{ '/assets/images/predictive_world_models_training.png' | relative_url }}" aria-label="Predictive World Models training demonstration">
          <source src="{{ '/video/SocNavGym.mp4' | relative_url }}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="portfolio-card-image">
        <img src="{{ '/assets/images/predictive_world_models_training.png' | relative_url }}" alt="Predictive World Models training results" loading="lazy">
      </div>
    </div>
    <p class="portfolio-card-description">Predictive world models giving agents short-horizon views of human movement. Three variants: 2StepAhead, MASPM, and fused 2StepAhead-MASPM.</p>
    <div class="portfolio-card-highlight">0.67 reward achieved • Lower collisions • Faster convergence</div>
    <a href="{{ '/projects/predictive-world-models' | relative_url }}" class="portfolio-card-link">View Architecture →</a>
  </div>

  <div class="portfolio-card" data-category="rl-models completed">
    <div class="portfolio-card-badges">
      <div class="contribution-badge created">PROPOSED MODEL</div>
      <div class="project-status-badge completed">PUBLISHED</div>
    </div>
    <h3>Cosine-Gated LSTM</h3>
    <p class="portfolio-card-meta">2024 • Published at IEEE PRML 2024</p>
    <div class="portfolio-card-media">
      <div class="portfolio-card-video">
        <video autoplay muted loop playsinline preload="metadata" poster="{{ '/assets/images/cgltsmtestResult.jpg' | relative_url }}" aria-label="Cosine-Gated LSTM test results demonstration">
          <source src="{{ '/video/FallingBallEnv.webm' | relative_url }}" type="video/webm">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="portfolio-card-image">
        <img src="{{ '/assets/images/cgltsmtestResult.jpg' | relative_url }}" alt="Cosine-Gated LSTM test results showing improved performance" loading="lazy">
      </div>
    </div>
    <p class="portfolio-card-description">LSTM architecture with cosine similarity gates prioritizing trajectory-aligned inputs. Superior sequence prediction across multiple benchmarks.</p>
    <div class="portfolio-card-highlight">99.07% accuracy on MNIST • 35% lower MAE than Transformer</div>
    <a href="{{ '/projects/cosine-gated-lstm' | relative_url }}" class="portfolio-card-link">View Benchmarks →</a>
  </div>

  <div class="portfolio-card" data-category="rl-models ongoing">
    <div class="portfolio-card-badges">
      <div class="contribution-badge created">PROPOSED MODEL</div>
      <div class="project-status-badge ongoing">ONGOING</div>
    </div>
    <h3>Adaptive Prediction Horizons</h3>
    <p class="portfolio-card-meta">2024 - Present • Aston University</p>
    <div class="portfolio-card-media">
      <div class="portfolio-card-video">
        <video autoplay muted loop playsinline preload="metadata" poster="{{ '/assets/images/Lunarlander_Fixed_vs_Entropy.jpg' | relative_url }}" aria-label="Adaptive Prediction Horizons demonstration on LunarLander">
          <source src="{{ '/video/LunarLander.webm' | relative_url }}" type="video/webm">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="portfolio-card-image">
        <img src="{{ '/assets/images/Lunarlander_Fixed_vs_Entropy.jpg' | relative_url }}" alt="Adaptive Prediction Horizons comparison: Fixed vs Entropy-driven" loading="lazy">
      </div>
    </div>
    <p class="portfolio-card-description">Entropy-driven controller extending SAC + CGLSTM only when policy is uncertain. Cuts training time while preserving real-time inference budgets.</p>
    <div class="portfolio-card-highlight">100% success rate • 5.62 days vs 28.41 days training</div>
    <a href="{{ '/projects/adaptive-prediction-horizons' | relative_url }}" class="portfolio-card-link">View Methodology →</a>
  </div>
</div>

---

## Action Recognition Research

<div class="portfolio-grid" data-category="action-rec">
  <div class="portfolio-card" data-category="action-rec ongoing">
    <div class="portfolio-card-badges">
      <div class="contribution-badge created">PROPOSED PROJECT</div>
      <div class="project-status-badge ongoing">ONGOING</div>
    </div>
    <h3>Wi-Fi CSI Action Recognition with ESP32</h3>
    <p class="portfolio-card-meta">2024 - Present • Hardware-based Action Recognition</p>
    <p class="portfolio-card-description">Developing action recognition systems using Wi-Fi Channel State Information (CSI) with ESP32 microcontrollers for privacy-preserving human action prediction.</p>
    <a href="{{ '/projects/action-recognition' | relative_url }}" class="portfolio-card-link">View System Design →</a>
  </div>
</div>

---

## PhD Thesis

<div class="portfolio-grid portfolio-grid-single" data-category="completed">
  <div class="portfolio-card portfolio-card-large" data-category="completed">
    <div class="portfolio-card-badges">
      <div class="project-status-badge completed">COMPLETED</div>
    </div>
    <h3>PhD Thesis: Enhancing Robot Social Navigation</h3>
    <p class="portfolio-card-meta">2020 - 2024 • Aston University</p>
    <div class="portfolio-card-media">
      <div class="portfolio-card-video">
        <video autoplay muted loop playsinline preload="metadata" poster="{{ '/assets/images/AverageReturnvsInferenceTime.png' | relative_url }}" aria-label="PhD Thesis demonstration showing integrated models">
          <source src="{{ '/video/SocNavGym.mp4' | relative_url }}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="portfolio-card-image">
        <img src="{{ '/assets/images/AverageReturnvsInferenceTime.png' | relative_url }}" alt="PhD Thesis results: Average return vs inference time for various models" loading="lazy">
      </div>
    </div>
    <p class="portfolio-card-description">Completed PhD thesis integrating all three proposed models into a comprehensive framework: Predictive World Models, Cosine-Gated LSTM, and Adaptive Prediction Horizons. Successfully defended with 2 conference papers published (UKCI 2023, IEEE PRML 2024).</p>
    <a href="{{ '/projects/phd-thesis' | relative_url }}" class="portfolio-card-link">Read Thesis Summary →</a>
  </div>
</div>

---

**Note:** For complete work experience and previous positions, please visit the [About](/about) or [CV](/cv) page.

