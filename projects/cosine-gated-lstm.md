---
layout: default
title: Cosine-Gated LSTM - Research Project
---

# 🧠 Cosine-Gated LSTM for Sequential Learning

<div class="project-header">
  <div class="contribution-badge created">PROPOSED MODEL</div>
  <div class="project-status-badge completed">COMPLETED • PUBLISHED</div>
  <p><strong>2024</strong> • Aston University • Published at IEEE PRML 2024 (pp. 8-15)</p>
</div>

## Model Overview

Novel neural network architecture using cosine gating mechanisms for improved sequential learning. The CGLSTM dynamically weighs inputs versus hidden states based on cosine similarities, outperforming LSTM, GRU, and Transformer models.

## Key Innovations

<ul>
  <li>Cosine gating mechanism replacing traditional sigmoid gates</li>
  <li>Dynamic input weighting based on similarity measures</li>
  <li>Improved long-term dependency handling</li>
  <li>Efficient parameter usage</li>
</ul>

## Validation Environments

Tested in: <strong>FallingBallEnv</strong> (custom), <strong>SocNavGym</strong>, standard sequential learning benchmarks

## Results & Impact

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

<div style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid var(--border);">
  <a href="{{ '/portfolio' | relative_url }}" class="btn">← Back to Research Portfolio</a>
</div>

