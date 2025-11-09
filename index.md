---
layout: default
title: Home
description: "Dr. Dirichukwu Goodluck Oguzie (PhD, MSc, BSc) - Post-PhD Researcher & Lecturer in Computer Science specializing in Reinforcement Learning, Social Robotics, and Neural Network Architectures. Published at IEEE PRML 2024 and UKCI 2023."
---

<div class="home-hero">
  <div class="home-hero-content">
    <div class="home-hero-image">
      <img src="{{ '/assets/images/goodluck.jpg' | relative_url }}" alt="Dr. Dirichukwu Goodluck Oguzie, PhD in Computer Science, Post-PhD Researcher and Lecturer" class="home-profile-photo" loading="lazy">
    </div>
    <div class="home-hero-text">
      <h1 class="home-hero-title">Dr. Dirichukwu Goodluck Oguzie</h1>
      <p class="home-hero-tagline">Researcher & Lecturer</p>
      <p class="home-hero-credentials">PhD, MSc, BSc • Computer Science<br>Specializing in RL & Social Robotics</p>
      <p class="home-hero-intro">I develop intelligent systems that integrate reinforcement learning, predictive models, and neural network architectures to solve real-world problems in social robotics. My research focuses on creating safer, more efficient autonomous navigation systems, with work published at top-tier conferences including IEEE PRML 2024 and UKCI 2023.</p>
      <div class="home-hero-actions">
        <a href="{{ '/portfolio' | relative_url }}" class="btn btn-primary">View Research</a>
        <a href="{{ '/collaborations' | relative_url }}" class="btn btn-secondary">Contact</a>
      </div>
    </div>
  </div>
</div>

<div class="home-quick-stats">
  <div class="home-stat-item">
    <div class="home-stat-number">2+</div>
    <div class="home-stat-label">Papers Published</div>
    <div class="home-stat-detail">IEEE PRML 2024 • UKCI 2023</div>
  </div>
  <div class="home-stat-item">
    <div class="home-stat-number">3</div>
    <div class="home-stat-label">Research Environments</div>
    <div class="home-stat-detail">FallingBallEnv • LiteSocNavGym • SocNavGym</div>
  </div>
  <div class="home-stat-item">
    <div class="home-stat-number">13+</div>
    <div class="home-stat-label">Years Teaching</div>
    <div class="home-stat-detail">AI & Machine Learning Courses</div>
  </div>
</div>

---

## Featured Publications

<div class="home-publications">
  <div class="home-publication-card">
    <div class="home-publication-badge">IEEE PRML 2024</div>
    <h3>Cosine-Gated LSTM for Sequential Learning</h3>
    <p class="home-publication-meta">Published • Neural Network Architecture</p>
    <p>Novel Cosine-Gated LSTM architecture for improved sequential learning, outperforming LSTM, GRU, and Transformer models.</p>
    <div class="home-publication-actions">
      <a href="{{ '/projects/cosine-gated-lstm' | relative_url }}" class="home-publication-link">View Paper →</a>
    </div>
  </div>

  <div class="home-publication-card">
    <div class="home-publication-badge">UKCI 2023</div>
    <h3>Predictive World Models for Social Navigation</h3>
    <p class="home-publication-meta">Published • Reinforcement Learning</p>
    <p>Predictive models (2StepAhead, MASPM) for safe autonomous navigation, improving performance and reducing collisions.</p>
    <div class="home-publication-actions">
      <a href="{{ '/projects/predictive-world-models' | relative_url }}" class="home-publication-link">View Paper →</a>
    </div>
  </div>

  <p class="section-cta">
    <a href="{{ '/publications' | relative_url }}" class="btn btn-secondary">All Publications →</a>
  </p>
</div>

---

## Current Research

<div class="home-research-section">
  <div class="home-research-grid">
    <!-- Left Column: Adaptive Prediction Horizons -->
    <div class="home-research-card">
      <div class="home-research-badge ongoing">ONGOING</div>
      <h3>Adaptive Prediction Horizons in Reinforcement Learning</h3>
      <p class="home-research-meta">2024 - Present • Aston University</p>
      <div class="home-research-image">
        <img src="{{ '/assets/images/AverageReturnvsInferenceTime.png' | relative_url }}" alt="Scatter plot showing average return vs inference time trade-off for various RL models in LiteSocNavGym, demonstrating adaptive prediction horizon achieving highest return among low-latency models" loading="lazy">
        <p class="home-research-caption">Performance vs efficiency: adaptive prediction horizon achieves highest return among low-latency models</p>
      </div>
      <p>Entropy-driven adaptive prediction horizons for RL, enabling dynamic adjustment based on environmental complexity.</p>
      <div class="home-research-actions">
        <a href="{{ '/projects/adaptive-prediction-horizons' | relative_url }}" class="home-research-link">View Project →</a>
      </div>
    </div>

    <!-- Right Column: WiFi CSI Action Recognition -->
    <div class="home-research-card">
      <div class="home-research-badge ongoing">ONGOING</div>
      <h3>Wi-Fi CSI Action Recognition with ESP32</h3>
      <p class="home-research-meta">2024 - Present • Hardware-based Action Recognition</p>
      <div class="home-research-image">
        <div class="home-research-placeholder">
          <div>
            <div class="home-research-placeholder-icon">📡</div>
            <div class="home-research-placeholder-text">Wi-Fi CSI Signal Processing</div>
          </div>
        </div>
        <p class="home-research-caption">Privacy-preserving action recognition using wireless signals</p>
      </div>
      <p>Wi-Fi CSI action recognition with ESP32 for privacy-preserving human action prediction using wireless signals.</p>
      <div class="home-research-actions">
        <a href="{{ '/projects/action-recognition' | relative_url }}" class="home-research-link">View Project →</a>
      </div>
    </div>
  </div>

  <p class="section-cta">
    <a href="{{ '/portfolio' | relative_url }}" class="btn btn-secondary">View All Research Projects</a>
  </p>
</div>

---

## Teaching

<div class="home-teaching-section">
  <p>I teach AI and machine learning courses with <strong>13+ years of experience</strong> at multiple institutions, integrating cutting-edge research with practical application.</p>
  <p class="section-cta">
    <a href="{{ '/teaching' | relative_url }}" class="btn btn-secondary">View Teaching Details →</a>
  </p>
</div>

---

## Open for Collaboration

<div class="home-collaboration-section">
  <p>Seeking research partnerships in <strong>Reinforcement Learning & Autonomous Systems</strong>, <strong>Social Robot Navigation</strong>, and <strong>Neural Network Architectures</strong>.</p>
  <p>Open to joint projects, student co-supervision, industry partnerships, and grant applications.</p>
  <div class="home-collaboration-actions">
    <a href="{{ '/collaborations' | relative_url }}" class="btn btn-primary">Let's Collaborate →</a>
  </div>
</div>
