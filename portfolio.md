---
layout: default
title: Portfolio
---

# Project Portfolio

Detailed case studies of research projects and software development work I've successfully delivered.

<p><strong>Filter by:</strong></p>

<div class="portfolio-filters">
  <button class="portfolio-filter-btn active" data-filter="all">All Projects</button>
  <button class="portfolio-filter-btn" data-filter="research">Research Projects</button>
  <button class="portfolio-filter-btn" data-filter="web">Web Development</button>
  <button class="portfolio-filter-btn" data-filter="teaching">Teaching</button>
</div>

---

<div class="portfolio-case-study" data-category="research">
<h3>Adaptive Prediction Horizons in Reinforcement Learning</h3>

<div class="project-status-badge ongoing">Ongoing</div>

<p>📅 <strong>2024 - Present</strong> • 🏢 <strong>Aston University / Solent University</strong> • 👥 <strong>Research Team</strong> • 📊 <strong>In Progress</strong></p>

<h4>🎯 Project Overview</h4>

<p>Developing an entropy-driven adaptive prediction horizon system for reinforcement learning applications. This work extends my PhD thesis research by implementing dynamic prediction horizon adjustment based on environmental complexity and action entropy. The system integrates with SAC (Soft Actor-Critic) algorithms and demonstrates improved performance in complex environments including SocNavGym and LunarLander-v2.</p>

<h4>⚠️ Challenges</h4>

<ul>
<li>Complex environment dynamics requiring adaptive prediction strategies</li>
<li>Balancing prediction accuracy with computational efficiency</li>
<li>Integration with existing reinforcement learning algorithms</li>
<li>Handling varying environmental complexity across different scenarios</li>
<li>Optimizing entropy-based selection mechanisms</li>
<li>Real-time performance requirements for practical applications</li>
</ul>

<h4>💡 Solution</h4>

<ul>
<li>Developed entropy-driven prediction horizon selection algorithm</li>
<li>Implemented dynamic adjustment mechanism based on environmental complexity</li>
<li>Created integration framework for SAC (Soft Actor-Critic) algorithms</li>
<li>Designed adaptive prediction system that scales with environment complexity</li>
<li>Built performance optimization framework for real-time applications</li>
<li>Established evaluation metrics for prediction horizon effectiveness</li>
</ul>

<h4>📈 Impact & Results</h4>

<ul>
<li><strong>Improved navigation performance</strong> in complex social environments</li>
<li><strong>Enhanced efficiency</strong> compared to fixed prediction horizons</li>
<li><strong>Better handling</strong> of varying environmental complexity</li>
<li><strong>Superior performance</strong> in SocNavGym and LunarLander-v2 environments</li>
<li><strong>Reduced computational overhead</strong> through adaptive mechanisms</li>
<li>Work in progress for conference submission</li>
</ul>

<h4>🛠️ Technologies & Tools</h4>

<p>Python • PyTorch • Gymnasium • SocNavGym • Reinforcement Learning • Jupyter Notebooks • Git • GitHub</p>
</div>

---

<div class="portfolio-case-study" data-category="research">
<h3>Predictive World Models for Social Navigation</h3>

<div class="project-status-badge completed">Completed</div>

<p>📅 <strong>2023</strong> • 🏢 <strong>Aston University</strong> • 👥 <strong>Research Team</strong> • 📊 <strong>Published at UKCI 2023</strong></p>

<h4>🎯 Project Overview</h4>

<p>Developed predictive world models that enable autonomous systems to navigate safely in social environments. Introduced 2StepAhead and Multi-Action State Predictive Models (MASPM) for improved navigation performance. The work demonstrates superior performance in dynamic social environments with multi-step ahead predictions and comprehensive action evaluation.</p>

<h4>⚠️ Challenges</h4>

<ul>
<li>Predicting human behavior in dynamic social environments</li>
<li>Integrating multi-step ahead predictions into navigation algorithms</li>
<li>Balancing prediction accuracy with real-time performance requirements</li>
<li>Handling uncertainty in social navigation scenarios</li>
<li>Evaluating comprehensive action spaces efficiently</li>
<li>Adapting to varying social dynamics</li>
</ul>

<h4>💡 Solution</h4>

<ul>
<li>Developed 2StepAhead predictive model for multi-step ahead predictions</li>
<li>Created Multi-Action State Predictive Model (MASPM) for comprehensive action evaluation</li>
<li>Designed hybrid 2StepAhead-MASPM model combining both approaches</li>
<li>Implemented efficient prediction algorithms for real-time applications</li>
<li>Established evaluation framework for social navigation performance</li>
<li>Integrated predictive models with reinforcement learning algorithms</li>
</ul>

<h4>📈 Impact & Results</h4>

<ul>
<li><strong>Published at UKCI 2023</strong> - UK Conference on Intelligent Systems</li>
<li><strong>Superior performance</strong> in dynamic social environments</li>
<li><strong>Improved navigation safety</strong> through predictive human behavior modeling</li>
<li><strong>Enhanced multi-step ahead predictions</strong> compared to baseline methods</li>
<li><strong>Better action evaluation</strong> through comprehensive state modeling</li>
<li><strong>Significant contribution</strong> to social robot navigation research</li>
</ul>

<h4>🛠️ Technologies & Tools</h4>

<p>Python • PyTorch • Reinforcement Learning • Social Navigation Algorithms • Git • GitHub</p>

<p><strong>Links:</strong></p>
<ul>
<li><a href="{{ '/_UKCI_2023__Predictive_World_Models_for_Social_Navigation.pdf' | relative_url }}">Paper PDF</a></li>
<li><a href="https://github.com/goodluckoguzie">Code Repository</a></li>
</ul>
</div>

---

<div class="portfolio-case-study" data-category="research">
<h3>Cosine-Gated LSTM for Sequential Learning</h3>

<div class="project-status-badge completed">Completed</div>

<p>📅 <strong>2024</strong> • 🏢 <strong>Aston University</strong> • 👥 <strong>Research Team</strong> • 📊 <strong>Published at IEEE PRML 2024 (pp. 8-15)</strong></p>

<h4>🎯 Project Overview</h4>

<p>Introduced a novel Cosine-Gated LSTM (CGLSTM) architecture that uses cosine gating mechanisms for improved sequential learning. The architecture dynamically weighs new inputs versus hidden states based on similarities, outperforming LSTM, GRU, and Transformer models in benchmark tasks including FallingBallEnv and SocNavGym.</p>

<h4>⚠️ Challenges</h4>

<ul>
<li>Improving sequential learning performance over existing architectures</li>
<li>Designing effective gating mechanisms for long-term dependencies</li>
<li>Balancing parameter efficiency with performance</li>
<li>Handling complex sequential patterns in benchmark tasks</li>
<li>Comparing against state-of-the-art models (LSTM, GRU, Transformer)</li>
<li>Optimizing cosine similarity computations</li>
</ul>

<h4>💡 Solution</h4>

<ul>
<li>Developed novel cosine gating mechanism for LSTM architecture</li>
<li>Implemented dynamic input weighting based on cosine similarity</li>
<li>Created efficient parameter usage strategy</li>
<li>Designed comprehensive evaluation framework for sequential learning</li>
<li>Established benchmark comparisons with LSTM, GRU, and Transformer</li>
<li>Optimized cosine similarity computations for performance</li>
</ul>

<h4>📈 Impact & Results</h4>

<ul>
<li><strong>Published at IEEE PRML 2024</strong> - 2024 IEEE 5th International Conference on Pattern Recognition and Machine Learning (pp. 8-15)</li>
<li><strong>Superior performance</strong> over LSTM, GRU, and Transformer in benchmark tasks</li>
<li><strong>Better handling</strong> of long-term dependencies through cosine gating</li>
<li><strong>Improved efficiency</strong> in sequential data processing</li>
<li><strong>Efficient parameter usage</strong> compared to baseline models</li>
<li><strong>Significant contribution</strong> to neural network architecture research</li>
</ul>

<h4>🛠️ Technologies & Tools</h4>

<p>Python • PyTorch • TensorFlow • Neural Network Architectures • Sequential Learning • Jupyter Notebooks • Git • GitHub</p>

<p><strong>Links:</strong></p>
<ul>
<li><a href="{{ '/Cosine_Gated_LSTM_main.pdf' | relative_url }}">Paper PDF</a></li>
<li><a href="https://github.com/goodluckoguzie">Code Repository</a></li>
</ul>
</div>

---

<div class="portfolio-case-study" data-category="research">
<h3>PhD Thesis: Enhancing Robot Social Navigation</h3>

<div class="project-status-badge completed">Completed</div>

<p>📅 <strong>2020 - 2024</strong> • 🏢 <strong>Aston University</strong> • 👥 <strong>Supervisors: Dr. Luis J. Manso, Prof. Dr. Aniko Ekart</strong> • 📊 <strong>PhD Thesis Completed</strong></p>

<h4>🎯 Project Overview</h4>

<p>Completed PhD thesis on "Enhancing Robot Social Navigation with Reinforcement Learning and Advanced Predictive Models" at Aston University. The research integrates reinforcement learning with advanced predictive models, introducing three key contributions: Predictive World Models, Cosine-Gated LSTM architecture, and Adaptive Prediction Horizons. Achieved superior performance in simulation environments including LunarLander-v2 and SocNavGym.</p>

<h4>⚠️ Challenges</h4>

<ul>
<li>Integrating multiple research contributions into coherent framework</li>
<li>Balancing theoretical development with practical implementation</li>
<li>Evaluating comprehensive navigation systems across multiple environments</li>
<li>Handling complex social navigation scenarios</li>
<li>Demonstrating superior performance compared to baseline methods</li>
<li>Managing large-scale research project over multiple years</li>
</ul>

<h4>💡 Solution</h4>

<ul>
<li>Developed comprehensive research framework integrating three key contributions</li>
<li>Created unified evaluation system for social navigation performance</li>
<li>Implemented rigorous testing across multiple simulation environments</li>
<li>Established systematic approach to research methodology</li>
<li>Designed comprehensive experiments comparing against baselines</li>
<li>Built reproducible research infrastructure with detailed documentation</li>
</ul>

<h4>📈 Impact & Results</h4>

<ul>
<li><strong>PhD Thesis Completed</strong> - Aston University, 2024</li>
<li><strong>Three key research contributions</strong> to social robot navigation</li>
<li><strong>Superior performance</strong> in LunarLander-v2 and SocNavGym environments</li>
<li><strong>Higher success rates</strong> compared to baseline methods</li>
<li><strong>More efficient navigation</strong> through adaptive prediction horizons</li>
<li><strong>Published research</strong> leading to two conference papers (UKCI 2023, IEEE PRML 2024)</li>
<li><strong>Successfully defended</strong> thesis with excellent feedback</li>
</ul>

<h4>🛠️ Technologies & Tools</h4>

<p>Python • PyTorch • Reinforcement Learning • Neural Networks • Social Navigation • Git • GitHub • Jupyter Notebooks • Research Methodology</p>

<p><strong>Links:</strong></p>
<ul>
<li><a href="{{ '/Goodluck_s_thesis.zip' | relative_url }}">Thesis PDF</a></li>
<li><a href="{{ '/OGUZIE DIRICHUKWU GOODLUCK  190212683 2024.pdf' | relative_url }}">Thesis Document</a></li>
<li><a href="https://goodluckoguzie.github.io/Viva/">Viva Presentation</a></li>
</ul>
</div>

---

<div class="portfolio-case-study" data-category="web">
<h3>DiscoverHealth: Healthcare Resource Discovery System</h3>

<div class="project-status-badge completed">Completed</div>

<p>📅 <strong>2023 - 2024</strong> • 🏢 <strong>Solent University</strong> • 👥 <strong>Teaching Project</strong> • 📊 <strong>Full-Stack Web Application</strong></p>

<h4>🎯 Project Overview</h4>

<p>Developed a comprehensive web-based system for discovering and managing healthcare resources, integrating modern web technologies with geographic information systems. The system includes React.js frontend, Node.js/Express backend, SQLite database, and Leaflet.js for geographic visualization. Used as a teaching example for web development modules.</p>

<h4>⚠️ Challenges</h4>

<ul>
<li>Integrating multiple technologies (React, Node.js, SQLite, Leaflet.js)</li>
<li>Designing user-friendly interface for healthcare resource discovery</li>
<li>Implementing geographic information system functionality</li>
<li>Managing database operations for healthcare resources</li>
<li>Ensuring responsive design for multiple devices</li>
<li>Creating comprehensive teaching materials</li>
</ul>

<h4>💡 Solution</h4>

<ul>
<li>Developed React.js frontend with responsive design</li>
<li>Built Node.js/Express backend with RESTful API</li>
<li>Implemented SQLite database for resource management</li>
<li>Integrated Leaflet.js for geographic visualization</li>
<li>Created user authentication and management system</li>
<li>Designed search and filter functionality</li>
<li>Developed comprehensive teaching documentation</li>
</ul>

<h4>📈 Impact & Results</h4>

<ul>
<li><strong>Full-stack web application</strong> successfully deployed</li>
<li><strong>Comprehensive teaching resource</strong> for web development modules</li>
<li><strong>Geographic information system</strong> integration working effectively</li>
<li><strong>User-friendly interface</strong> for healthcare resource discovery</li>
<li><strong>Responsive design</strong> working across multiple devices</li>
<li><strong>Teaching modules</strong> used successfully in courses</li>
</ul>

<h4>🛠️ Technologies & Tools</h4>

<p>React.js • Node.js • Express • SQLite • Leaflet.js • RESTful APIs • Geographic Information Systems • Git • GitHub</p>

<p><strong>Links:</strong></p>
<ul>
<li><a href="https://github.com/goodluckoguzie">GitHub Repository</a></li>
</ul>
</div>

---

<div class="portfolio-case-study" data-category="teaching">
<h3>DiscoverHealth Teaching Modules (Parts A-F)</h3>

<div class="project-status-badge completed">Completed</div>

<p>📅 <strong>2023 - 2024</strong> • 🏢 <strong>Solent University</strong> • 👥 <strong>Teaching Resources</strong> • 📊 <strong>6 Progressive Modules</strong></p>

<h4>🎯 Project Overview</h4>

<p>Developed comprehensive teaching modules for web development courses, covering progressive implementation of the DiscoverHealth platform from basic database setup (Part A) through full-stack development with React frontend, Node.js backend, and geographic information systems integration (Part F). Each module builds upon previous concepts and demonstrates modern web development practices.</p>

<h4>⚠️ Challenges</h4>

<ul>
<li>Creating progressive learning path from basic to advanced concepts</li>
<li>Ensuring each module builds upon previous knowledge</li>
<li>Balancing theoretical concepts with practical implementation</li>
<li>Providing comprehensive documentation and examples</li>
<li>Managing multiple versions of the same project</li>
<li>Ensuring consistency across all modules</li>
</ul>

<h4>💡 Solution</h4>

<ul>
<li>Developed six progressive teaching modules (Parts A-F)</li>
<li>Created comprehensive documentation for each module</li>
<li>Designed step-by-step implementation guides</li>
<li>Built example code for each module stage</li>
<li>Established clear progression from basic to advanced concepts</li>
<li>Integrated modern web development best practices</li>
<li>Created assessment materials for each module</li>
</ul>

<h4>📈 Impact & Results</h4>

<ul>
<li><strong>6 comprehensive teaching modules</strong> successfully developed</li>
<li><strong>Progressive learning path</strong> from basic to advanced web development</li>
<li><strong>Used successfully</strong> in undergraduate and postgraduate courses</li>
<li><strong>Student engagement</strong> improved through hands-on projects</li>
<li><strong>Modern web development practices</strong> demonstrated effectively</li>
<li><strong>Teaching resources</strong> widely adopted in courses</li>
</ul>

<h4>🛠️ Technologies & Tools</h4>

<p>React.js • Node.js • Express • SQLite • Leaflet.js • RESTful APIs • Modern JavaScript (ES6+) • Git • GitHub • Teaching Documentation</p>

<p><strong>Links:</strong></p>
<ul>
<li><a href="https://github.com/goodluckoguzie">GitHub Repository</a></li>
</ul>
</div>

---

<div class="portfolio-case-study" data-category="research">
<h3>Social Robot Navigation Simulator</h3>

<div class="project-status-badge ongoing">Ongoing</div>

<p>📅 <strong>2024 - Present</strong> • 🏢 <strong>Solent University</strong> • 👥 <strong>Research Tool</strong> • 📊 <strong>In Development</strong></p>

<h4>🎯 Project Overview</h4>

<p>Developing a comprehensive simulation environment for testing and evaluating social robot navigation algorithms. The simulator supports multiple environments (SocNavGym, LunarLander-v2) and provides detailed performance metrics, real-time visualization, and debugging tools for reinforcement learning research.</p>

<h4>⚠️ Challenges</h4>

<ul>
<li>Supporting multiple simulation environments</li>
<li>Providing detailed performance metrics</li>
<li>Implementing real-time visualization</li>
<li>Creating debugging tools for research</li>
<li>Ensuring reproducibility of experiments</li>
<li>Managing complex simulation configurations</li>
</ul>

<h4>💡 Solution</h4>

<ul>
<li>Developing multi-environment simulation framework</li>
<li>Implementing comprehensive performance metrics collection</li>
<li>Creating real-time visualization tools</li>
<li>Building debugging and analysis tools</li>
<li>Establishing reproducible experiment configurations</li>
<li>Designing user-friendly interface for researchers</li>
</ul>

<h4>📈 Impact & Results</h4>

<ul>
<li><strong>Multi-environment support</strong> for diverse research scenarios</li>
<li><strong>Comprehensive metrics</strong> for algorithm evaluation</li>
<li><strong>Real-time visualization</strong> for research insights</li>
<li><strong>Debugging tools</strong> improving research efficiency</li>
<li>Work in progress for research tool release</li>
</ul>

<h4>🛠️ Technologies & Tools</h4>

<p>Python • PyTorch • Gymnasium • SocNavGym • Visualization Tools • Reinforcement Learning • Git • GitHub</p>
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

**Note:** These case studies represent specific research projects and software development work. For detailed work experience and previous positions, please visit the [About](/about) or [CV](/cv) page.
