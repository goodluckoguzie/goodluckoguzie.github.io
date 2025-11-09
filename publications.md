---
layout: default
title: Publications
description: "Research publications by Dr. Dirichukwu Goodluck Oguzie (PhD, MSc, BSc in Computer Science) including IEEE PRML 2024 and UKCI 2023 conference papers on Cosine-Gated LSTM, Predictive World Models, and PhD thesis on social robot navigation."
---

# Publications

My research contributions in reinforcement learning, social robotics, and neural network architectures.

---

## Featured Publication

<div class="publication featured-publication" data-type="conference">
  <div class="publication-badge">IEEE PRML 2024</div>
  <h3>Cosine-Gated LSTM for Sequential Learning</h3>
  <p class="publication-meta">
    <strong>Author:</strong> Dirichukwu Goodluck Oguzie<br>
    <strong>Venue:</strong> 2024 IEEE 5th International Conference on Pattern Recognition and Machine Learning (PRML)<br>
    <strong>Pages:</strong> 8-15<br>
    <strong>Year:</strong> 2024
  </p>
  
  <div class="publication-video">
    <video autoplay muted loop playsinline preload="auto" aria-label="Cosine-Gated LSTM demonstration video">
      <source src="{{ '/video/FallingBallEnv.webm' | relative_url }}" type="video/webm">
      Your browser does not support the video tag.
    </video>
    <p class="video-caption">Demonstration of Cosine-Gated LSTM performance in FallingBallEnv environment</p>
  </div>

  <p class="publication-summary">Novel Cosine-Gated LSTM (CGLSTM) architecture that uses cosine gating mechanisms for improved sequential learning. The architecture dynamically weighs inputs versus hidden states based on cosine similarities, outperforming LSTM, GRU, and Transformer models in benchmark tasks.</p>

  <details class="publication-details">
    <summary>View Full Abstract & Details</summary>
    <h4>Abstract</h4>
    <p>Introduced a novel Cosine-Gated LSTM (CGLSTM) architecture that uses cosine gating mechanisms for improved sequential learning. The architecture dynamically weighs inputs versus hidden states based on cosine similarities, outperforming LSTM, GRU, and Transformer models in benchmark tasks including FallingBallEnv and SocNavGym environments.</p>

    <h4>Key Contributions</h4>
    <ul>
      <li>Novel cosine gating mechanism for LSTM architecture</li>
      <li>Dynamic input weighting based on cosine similarity</li>
      <li>Superior performance compared to baseline architectures</li>
      <li>Efficient parameter usage with improved long-term dependency handling</li>
    </ul>
  </details>

  <div class="publication-links">
    <a href="{{ '/Cosine_Gated_LSTM_main.pdf' | relative_url }}" class="btn" target="_blank">Download Paper (PDF)</a>
    <a href="https://github.com/goodluckoguzie" class="btn btn-secondary" target="_blank">View Code</a>
    <a href="{{ '/projects/cosine-gated-lstm' | relative_url }}" class="btn btn-secondary">View Project Details</a>
  </div>
</div>

---

## All Publications

<p><strong>Filter by:</strong></p>

<div class="publication-filters">
  <button class="filter-btn active" data-filter="all">All Publications</button>
  <button class="filter-btn" data-filter="conference">Conference Papers</button>
  <button class="filter-btn" data-filter="thesis">Thesis</button>
</div>

---

<div class="publication" data-type="conference">
  <div class="publication-badge">UKCI 2023</div>
  <h3>Predictive World Models for Social Navigation</h3>
  <p class="publication-meta">
    <strong>Author:</strong> Dirichukwu Goodluck Oguzie<br>
    <strong>Venue:</strong> UKCI 2023 - UK Conference on Intelligent Systems<br>
    <strong>Year:</strong> 2023<br>
    <strong>Institution:</strong> Aston University
  </p>

  <div class="publication-video">
    <video autoplay muted loop playsinline preload="auto" aria-label="Predictive World Models demonstration video">
      <source src="{{ '/video/SocNavGym.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <p class="video-caption">Predictive World Models in action: Social navigation with 2StepAhead and MASPM</p>
  </div>

  <p class="publication-summary">Developed predictive world models enabling autonomous systems to navigate safely in social environments. The work introduces 2StepAhead and Multi-Action State Predictive Models (MASPM) that enable multi-step ahead predictions and comprehensive action evaluation.</p>

  <details class="publication-details">
    <summary>View Full Abstract & Details</summary>
    <h4>Abstract</h4>
    <p>Developed predictive world models enabling autonomous systems to navigate safely in social environments. The work introduces 2StepAhead and Multi-Action State Predictive Models (MASPM) that enable multi-step ahead predictions and comprehensive action evaluation, significantly improving navigation performance in dynamic social environments.</p>

    <h4>Key Contributions</h4>
    <ul>
      <li>2StepAhead model for multi-step ahead predictions</li>
      <li>MASPM (Multi-Action State Predictive Model) for comprehensive action evaluation</li>
      <li>Hybrid model combining both approaches</li>
      <li>Superior performance compared to baseline methods</li>
    </ul>
  </details>

  <div class="publication-links">
    <a href="{{ '/_UKCI_2023__Predictive_World_Models_for_Social_Navigation.pdf' | relative_url }}" class="btn" target="_blank">Download Paper (PDF)</a>
    <a href="https://github.com/goodluckoguzie" class="btn btn-secondary" target="_blank">View Code</a>
    <a href="{{ '/projects/predictive-world-models' | relative_url }}" class="btn btn-secondary">View Project Details</a>
  </div>
</div>

---

<div class="publication" data-type="thesis">
  <div class="publication-badge">PhD Thesis</div>
  <h3>Enhancing Robot Social Navigation with Reinforcement Learning and Advanced Predictive Models</h3>
  <p class="publication-meta">
    <strong>Author:</strong> Dirichukwu Goodluck Oguzie<br>
    <strong>Degree:</strong> Doctor of Philosophy (PhD)<br>
    <strong>Institution:</strong> Aston University, United Kingdom<br>
    <strong>Year:</strong> 2024<br>
    <strong>Supervisors:</strong> Dr. Luis J. Manso, Prof. Dr. Aniko Ekart
  </p>

  <div class="publication-video">
    <video autoplay muted loop playsinline preload="auto" aria-label="PhD thesis demonstration video">
      <source src="{{ '/video/LunarLander.webm' | relative_url }}" type="video/webm">
      Your browser does not support the video tag.
    </video>
    <p class="video-caption">Adaptive Prediction Horizons in action: LunarLander-v2 environment</p>
  </div>

  <p class="publication-summary">Comprehensive research integrating reinforcement learning with advanced predictive models for social robot navigation. The research introduces three key contributions: Predictive World Models (2StepAhead and MASPM), Cosine-Gated LSTM (CGLSTM) architecture, and Adaptive Prediction Horizons.</p>

  <details class="publication-details">
    <summary>View Full Abstract & Details</summary>
    <h4>Abstract</h4>
    <p>This PhD thesis presents comprehensive research integrating reinforcement learning with advanced predictive models for social robot navigation. The research introduces three key contributions that collectively advance the field: Predictive World Models (2StepAhead and MASPM), Cosine-Gated LSTM (CGLSTM) architecture, and Adaptive Prediction Horizons. The work demonstrates superior performance in simulation environments including LunarLander-v2 and SocNavGym, achieving higher success rates and more efficient navigation compared to baseline methods.</p>

    <h4>Key Contributions</h4>

    <h5>1. Predictive World Models</h5>
    <ul>
      <li>2StepAhead: Multi-step ahead prediction system</li>
      <li>MASPM: Multi-Action State Predictive Model for comprehensive action evaluation</li>
      <li>Hybrid approach combining both models for optimal performance</li>
    </ul>

    <h5>2. Cosine-Gated LSTM Architecture</h5>
    <ul>
      <li>Novel architecture using cosine gating mechanisms</li>
      <li>Dynamic input weighting based on cosine similarity</li>
      <li>Superior sequential learning performance</li>
    </ul>

    <h5>3. Adaptive Prediction Horizons</h5>
    <ul>
      <li>Entropy-driven adaptive prediction horizon systems</li>
      <li>Dynamic adjustment based on environmental complexity</li>
      <li>Improved performance in diverse RL environments</li>
    </ul>

    <h4>Results</h4>
    <ul>
      <li>Successfully defended PhD thesis with excellent feedback</li>
      <li>Published 2 conference papers (UKCI 2023, IEEE PRML 2024)</li>
      <li>Superior performance in simulation environments</li>
      <li>Higher success rates than baseline methods</li>
      <li>More efficient navigation algorithms</li>
    </ul>
  </details>

  <div class="publication-links">
    <a href="{{ '/Goodluck_s_thesis.zip' | relative_url }}" class="btn" target="_blank">Download Thesis (ZIP)</a>
    <a href="{{ '/OGUZIE DIRICHUKWU GOODLUCK  190212683 2024.pdf' | relative_url }}" class="btn btn-secondary" target="_blank">Download Thesis (PDF)</a>
    <a href="https://goodluckoguzie.github.io/Viva/" class="btn btn-secondary" target="_blank">View Viva Presentation</a>
    <a href="{{ '/portfolio' | relative_url }}" class="btn btn-secondary">View Project Details</a>
  </div>
</div>

---

## Citation Tools

If you use my work in your research, please cite appropriately. Citation tools with BibTeX, APA, MLA, and Chicago formats are available for each publication above.

For questions about my publications, collaboration opportunities, or accessing materials, please <a href="{{ '/collaborations' | relative_url }}">contact me</a>.
