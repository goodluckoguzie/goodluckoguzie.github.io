---
layout: default
title: Home
---

<div class="home-hero">
  <div class="home-hero-content">
    <div class="home-hero-image">
      <img src="{{ '/assets/images/goodluck.jpg' | relative_url }}" alt="Dr. Goodluck Oguzie, Post-PhD Researcher and Lecturer in Computer Science" class="home-profile-photo" loading="lazy">
    </div>
    <div class="home-hero-text">
      <h1 class="home-hero-title">Dr. Goodluck Oguzie</h1>
      <p class="home-hero-tagline">Advancing Social Robot Navigation through Reinforcement Learning</p>
      <p class="home-hero-credentials">Published at IEEE PRML 2024 • UKCI 2023<br>PhD Researcher & Lecturer</p>
      <p class="home-hero-bio">I develop intelligent systems that integrate reinforcement learning, predictive models, and neural network architectures to solve real-world problems in social robotics.</p>
      <div class="home-hero-actions">
        <a href="{{ '/portfolio' | relative_url }}" class="btn btn-primary">View My Research</a>
        <a href="{{ '/collaborations' | relative_url }}" class="btn btn-secondary">Contact Me</a>
      </div>
    </div>
  </div>
</div>

<div class="home-quick-stats">
  <div class="home-stat-item">
    <div class="home-stat-number">2</div>
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
  <div class="home-stat-item highlight-stat">
    <div class="home-stat-number">Open</div>
    <div class="home-stat-label">For Collaboration</div>
    <div class="home-stat-detail"><a href="{{ '/collaborations' | relative_url }}" class="home-stat-link">Let's Work Together →</a></div>
  </div>
</div>

---

## 📄 Recent Publications

<div class="home-publications">
  <div class="home-publication-card">
    <div class="home-publication-badge">IEEE PRML 2024</div>
    <h3>Cosine-Gated LSTM for Sequential Learning</h3>
    <p class="home-publication-meta">Published • Neural Network Architecture</p>
    <p>Introduced a novel Cosine-Gated LSTM (CGLSTM) architecture that uses cosine gating mechanisms for improved sequential learning, outperforming LSTM, GRU, and Transformer models across multiple benchmarks.</p>
    <div class="home-publication-actions">
      <a href="{{ '/projects/cosine-gated-lstm' | relative_url }}" class="home-publication-link">View Details →</a>
      <a href="{{ '/publications' | relative_url }}" class="home-publication-link">All Publications →</a>
    </div>
  </div>

  <div class="home-publication-card">
    <div class="home-publication-badge">UKCI 2023</div>
    <h3>Predictive World Models for Social Navigation</h3>
    <p class="home-publication-meta">Published • Reinforcement Learning</p>
    <p>Developed predictive models introducing 2StepAhead and MASPM for safe autonomous navigation in social environments, significantly improving navigation performance and reducing collisions.</p>
    <div class="home-publication-actions">
      <a href="{{ '/projects/predictive-world-models' | relative_url }}" class="home-publication-link">View Details →</a>
      <a href="{{ '/publications' | relative_url }}" class="home-publication-link">All Publications →</a>
    </div>
  </div>
</div>

---

## 🔬 Current Research

<div class="home-research-section">
  <div class="home-research-card featured">
    <div class="home-research-badge ongoing">ONGOING</div>
    <h3>Adaptive Prediction Horizons in Reinforcement Learning</h3>
    <p class="home-research-meta">2024 - Present • Aston University</p>
    <div class="home-research-image">
      <img src="{{ '/assets/images/AverageReturnvsInferenceTime.png' | relative_url }}" alt="Scatter plot showing average return vs inference time trade-off for various RL models in LiteSocNavGym, demonstrating adaptive prediction horizon achieving highest return among low-latency models" loading="lazy">
      <p class="home-research-caption">Performance vs efficiency: adaptive prediction horizon achieves highest return among low-latency models</p>
    </div>
    <p>Developing entropy-driven adaptive prediction horizon systems for RL applications, enabling dynamic adjustment based on environmental complexity for improved performance in autonomous systems.</p>
    <div class="home-research-tags">
      <span class="tag">Reinforcement Learning</span>
      <span class="tag">Robotics</span>
      <span class="tag">Adaptive Systems</span>
    </div>
    <div class="home-research-actions">
      <a href="{{ '/projects/adaptive-prediction-horizons' | relative_url }}" class="home-research-link">View Project Details →</a>
    </div>
  </div>

  <p style="text-align: center; margin-top: 2rem;">
    <a href="{{ '/portfolio' | relative_url }}" class="btn btn-secondary">View All Research Projects</a>
  </p>
</div>

---

## 📚 Teaching

<div class="home-teaching-section">
  <p>I teach AI and machine learning courses at multiple institutions, with <strong>13+ years of experience</strong> preparing students for academic and industry careers. My courses integrate cutting-edge research with practical application.</p>
  
  <div class="home-teaching-highlights">
    <div class="home-teaching-highlight">
      <strong>Current Positions:</strong> Seasonal Lecturer at QA Ltd (Partner with Solent University, University of Roehampton, Ulster University) • Lecturer at Crimson Education
    </div>
    <div class="home-teaching-highlight">
      <strong>Key Areas:</strong> Deep Learning, Machine Learning, Data Science, Object-Oriented Design, Networks & Security, Web Development
    </div>
  </div>

  <p style="text-align: center; margin-top: 1.5rem;">
    <a href="{{ '/teaching' | relative_url }}" class="btn btn-secondary">View Teaching Details</a>
  </p>
</div>

---

## 🤝 Open for Collaboration

<div class="home-collaboration-section">
  <h2>Let's Work Together</h2>
  <p>I'm actively seeking research collaborations in <strong>Reinforcement Learning & Autonomous Systems</strong>, <strong>Social Robot Navigation</strong>, and <strong>Neural Network Architectures</strong>.</p>
  <p>Open to joint research projects, student co-supervision (PhD/MSc), industry partnerships, and grant applications.</p>
  <div class="home-collaboration-actions">
    <a href="{{ '/collaborations' | relative_url }}" class="btn">Let's Collaborate</a>
  </div>
</div>
