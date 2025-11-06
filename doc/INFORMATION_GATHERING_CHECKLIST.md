# 📋 INFORMATION GATHERING CHECKLIST
## Step-by-Step Guide for Research Portfolio Details

**Goal:** Go through each section methodically and gather all necessary information to make the portfolio comprehensive and accurate.

---

## 🎯 ORDER OF REVIEW (First to Last)

We'll tackle them in this logical order:

### **PHASE 1: Research Environments** (Foundation - other projects reference these)
### **PHASE 2: Proposed Models** (Built on environments)
### **PHASE 3: Action Recognition** (Separate research area)
### **PHASE 4: Other Projects** (Additional work)
### **PHASE 5: PhD Thesis Integration** (Ties everything together)

---

## 📝 DETAILED INFORMATION NEEDED FOR EACH SECTION

---

### **PHASE 1: 🎯 RESEARCH ENVIRONMENTS**

#### **1.1 FallingBallEnv** ⚽
**Status:** CREATED ✅  
**GitHub:** https://github.com/goodluckoguzie/falling_ball_env ✅  
**Section:** Lines 49-82 in portfolio.md

**Information Needed:**
- [ ] **Purpose:** What problem does this environment solve?
- [ ] **Technical Details:**
  - OpenAI Gym version/compatibility
  - Key parameters (gravity, bounce coefficient, etc.)
  - State space description
  - Action space description
  - Reward structure
- [ ] **Unique Features:** What makes this different from other environments?
- [ ] **Usage Examples:**
  - Which projects/models used this?
  - What research questions did it answer?
- [ ] **Results/Impact:**
  - Any validation results?
  - Publications that used it?
  - Citations or usage by others?
- [ ] **Screenshots/Videos:** Do you have any visualizations?

**Questions for You:**
1. What inspired you to create this environment?
2. What specific RL problems does it test?
3. Why ball falling vs other physics simulations?
4. Any performance benchmarks or comparisons?

---

#### **1.2 LiteSocNavGym** 🤖
**Status:** CREATED ✅  
**GitHub:** ⚠️ Need link or confirm if private  
**Section:** Lines 84-113 in portfolio.md

**Information Needed:**
- [ ] **Purpose:** What gap does this fill vs full SocNavGym?
- [ ] **Technical Details:**
  - How is it "lightweight"?
  - What features were simplified?
  - Performance improvements?
  - State/action spaces
- [ ] **Relationship to SocNavGym:**
  - Is it a fork/modification?
  - What's different?
  - Why create a separate version?
- [ ] **Usage:**
  - Which models used this?
  - What experiments ran here?
  - Results/metrics
- [ ] **GitHub:** Is there a public repo? Or is it part of another repo?

**Questions for You:**
1. What does "lite" mean? Faster? Simpler? Smaller state space?
2. When did you create it? Timeline?
3. What motivated creating a lighter version?
4. Any documentation or examples?

---

#### **1.3 SocNavGym** 👥
**Status:** TEAM CONTRIBUTION ✅  
**GitHub:** https://github.com/gnns4hri/SocNavGym ✅  
**Section:** Lines 115-147 in portfolio.md

**Information Needed:**
- [ ] **Your Specific Role:** More details about "RL aspects"
  - What RL algorithms did you integrate?
  - What components did you develop?
  - Code contributions?
  - Documentation contributions?
- [ ] **Timeline:**
  - When did you join the project?
  - How long did you contribute?
  - What stage was it at when you joined?
- [ ] **Impact of Your Contribution:**
  - How did your RL work improve the environment?
  - Any specific features you added?
  - Performance improvements?
- [ ] **Collaboration Details:**
  - Team size?
  - Your specific responsibilities?
  - Supervisors' role?

**Questions for You:**
1. Can you list specific RL features you added?
2. What was your code contribution percentage (roughly)?
3. Any commits or pull requests you can highlight?
4. How did your PhD research integrate with SocNavGym?

---

### **PHASE 2: 🧠 PROPOSED MODELS & ALGORITHMS**

#### **2.1 Predictive World Models (2StepAhead & MASPM)** 🤖
**Status:** COMPLETED • PUBLISHED ✅  
**Publication:** UKCI 2023 ✅  
**Section:** Lines 155-204 in portfolio.md

**Information Needed:**
- [ ] **Model Architecture Details:**
  - How does 2StepAhead work? (step-by-step)
  - How does MASPM work? (step-by-step)
  - How do they combine in the hybrid?
  - Neural network structure/diagrams
- [ ] **Key Innovations:**
  - What's novel about each approach?
  - Why two models instead of one?
  - What problems do they solve that others don't?
- [ ] **Experimental Setup:**
  - Exact environments used (SocNavGym configs?)
  - Training procedures
  - Hyperparameters
  - Evaluation metrics
- [ ] **Results:**
  - Performance numbers/metrics
  - Comparison with baselines (specific numbers)
  - Success rates
  - Navigation efficiency gains
  - Any figures/tables from paper?
- [ ] **Limitations & Future Work:**
  - What doesn't it handle well?
  - Future improvements?

**Questions for You:**
1. What's the mathematical formulation?
2. Can you explain the "multi-step ahead" concept simply?
3. What were the key performance improvements?
4. Any interesting findings or surprises?
5. Figures/diagrams from your thesis?

---

#### **2.2 Cosine-Gated LSTM (CGLSTM)** 🧠
**Status:** COMPLETED • PUBLISHED ✅  
**Publication:** IEEE PRML 2024 ✅  
**GitHub:** https://github.com/goodluckoguzie/CosineGatedLSTM ✅  
**Section:** Lines 209-258 in portfolio.md

**Information Needed:**
- [ ] **Architecture Details:**
  - How does cosine gating work?
  - Mathematical formulation
  - Why cosine similarity vs other measures?
  - Architecture diagram
  - Parameter count vs LSTM/GRU
- [ ] **Key Innovations:**
  - Why is this better than standard LSTM?
  - What problem does cosine gating solve?
  - Long-term dependency improvements?
- [ ] **Experimental Setup:**
  - Datasets/tasks tested
  - Baselines compared (LSTM, GRU, Transformer)
  - Training details
  - Evaluation metrics
- [ ] **Results:**
  - Performance numbers (accuracy, loss, etc.)
  - Comparison tables from paper
  - Speed/efficiency improvements
  - Parameter efficiency
- [ ] **Usage in Other Projects:**
  - How is it used in Predictive World Models?
  - Other applications?

**Questions for You:**
1. What inspired using cosine similarity for gating?
2. Can you explain the gating mechanism simply?
3. Key performance improvements (specific numbers)?
4. Any figures from the paper?
5. Code examples or demos?

---

#### **2.3 Adaptive Prediction Horizons** 🔄
**Status:** ONGOING ✅  
**Section:** Lines 263-310 in portfolio.md

**Information Needed:**
- [ ] **Current Status:**
  - How far along are you? (% complete?)
  - What's working vs what's in progress?
  - Initial results?
- [ ] **Concept Details:**
  - How does entropy measure complexity?
  - How does horizon adapt dynamically?
  - Mathematical formulation
  - Algorithm pseudocode/concept
- [ ] **Experimental Setup:**
  - Environments being tested
  - Baseline comparisons
  - Evaluation metrics planned
- [ ] **Preliminary Results:**
  - Any early findings?
  - Comparison with fixed horizons?
  - Performance gains observed?
- [ ] **Challenges & Solutions:**
  - What problems have you encountered?
  - How are you solving them?
- [ ] **Future Plans:**
  - Expected completion timeline?
  - Publication plans?
  - Extensions/enhancements?

**Questions for You:**
1. What's the core idea in simple terms?
2. How far along is the research (% done)?
3. Any preliminary results?
4. Biggest challenges so far?
5. Timeline for completion?

---

### **PHASE 3: 📡 ACTION RECOGNITION RESEARCH**

#### **3.1 Wi-Fi CSI Action Recognition with ESP32** 📡
**Status:** ONGOING ✅  
**GitHub:** https://github.com/goodluckoguzie/ActionRecognitionUsingWiFi ✅  
**Section:** Lines 318-348 in portfolio.md

**Information Needed:**
- [ ] **Project Overview:**
  - What is Wi-Fi CSI?
  - Why use it for action recognition?
  - Advantages over camera-based approaches?
- [ ] **Technical Setup:**
  - ESP32 hardware specifications used
  - Data collection setup
  - Signal processing methods
  - Machine learning models used
- [ ] **Current Status:**
  - How far along?
  - What's working?
  - What's next?
- [ ] **Research Questions:**
  - What are you trying to prove/show?
  - What actions are you recognizing?
  - Accuracy/precision expectations?
- [ ] **Challenges:**
  - Technical challenges?
  - Signal processing issues?
  - Hardware limitations?
- [ ] **Applications:**
  - Use cases?
  - Real-world applications?
- [ ] **Results (if any):**
  - Any preliminary results?
  - Performance metrics?

**Questions for You:**
1. What inspired this project?
2. What actions can you recognize?
3. What's the current status?
4. Any preliminary results?
5. Real-world applications?
6. Hardware setup details?

---

### **PHASE 4: 🔧 OTHER PROJECTS**

#### **4.1 Disneyland Project** 🎢
**Status:** COMPLETED ✅  
**GitHub:** https://github.com/goodluckoguzie/disneyland_Project ✅  
**Section:** Lines 355-365 in portfolio.md

**Information Needed:**
- [ ] **Project Purpose:**
  - What is this project about?
  - Research application?
  - Learning project?
  - Real-world application?
- [ ] **Technical Details:**
  - Technologies used
  - Main features
  - What problem does it solve?
- [ ] **Timeline:**
  - When did you work on it?
  - How long did it take?
- [ ] **Results/Impact:**
  - Outcomes?
  - Learning achieved?
  - Any applications?

**Questions for You:**
1. What is the Disneyland Project?
2. What does it do?
3. Technologies used?
4. Purpose/research question?
5. Key features?
6. Any results or outcomes?

---

#### **4.2 WorldModels** 🌍
**Status:** COMPLETED ✅  
**GitHub:** https://github.com/goodluckoguzie/WorldModels ✅  
**Section:** Lines 367-377 in portfolio.md

**Information Needed:**
- [ ] **Project Purpose:**
  - World Models implementation/replication?
  - Your own variation?
  - Research application?
  - Learning project?
- [ ] **Technical Details:**
  - Original World Models paper?
  - Your modifications/improvements?
  - Technologies/frameworks
- [ ] **Timeline:**
  - When did you work on it?
  - Duration?
- [ ] **Results/Impact:**
  - Outcomes?
  - How does it relate to your research?
  - Learning/research insights?

**Questions for You:**
1. What is this WorldModels project?
2. Implementation of the paper or your own research?
3. How does it relate to your PhD work?
4. Technologies used?
5. Key features/contributions?
6. Any results?

---

### **PHASE 5: 🎓 PhD THESIS INTEGRATION**

#### **5.1 PhD Thesis Overview** 📚
**Status:** COMPLETED ✅  
**Section:** Lines 384-428 in portfolio.md

**Information Needed:**
- [ ] **Thesis Structure:**
  - Chapter breakdown
  - How chapters connect
  - Key figures/diagrams from each chapter
- [ ] **Integration Story:**
  - How do the 3 models work together?
  - Research progression narrative
  - Evolution from Chapter 1 to final work
- [ ] **Key Contributions Summary:**
  - What was novel?
  - What problems solved?
  - Impact on field
- [ ] **Results Overview:**
  - Main experimental results
  - Performance improvements
  - Key findings
- [ ] **Figures/Visuals:**
  - Architecture diagrams
  - Performance graphs
  - Comparison tables
  - Experimental setups
- [ ] **Viva Experience:**
  - Key questions asked?
  - Feedback received?
  - Highlights?

**Questions for You:**
1. Can you walk through your thesis chapters?
2. What figures/diagrams do you want highlighted?
3. How do the 3 models integrate?
4. Key results/metrics from thesis?
5. Main contributions in simple terms?
6. Viva presentation highlights?

---

## 📊 INFORMATION GATHERING TEMPLATE

For each section, please provide:

```
### Project Name: [Name]

**Basic Info:**
- Purpose: [What problem does it solve?]
- Timeline: [When did you work on it?]
- Status: [Completed/Ongoing]

**Technical Details:**
- Technologies: [List]
- Key Features: [List]
- Innovations: [What's novel?]

**Results/Impact:**
- Performance Metrics: [Numbers]
- Outcomes: [What was achieved?]
- Publications: [If any]

**Visuals:**
- Screenshots: [Available?]
- Diagrams: [Available?]
- Videos: [Available?]

**Related Work:**
- Used in: [Other projects]
- Built on: [Previous work]
- Links to: [Related research]
```

---

## 🎯 RECOMMENDED PROCESS

1. **Start with Phase 1 (Environments)** - Foundation for everything
2. **Then Phase 2 (Models)** - Core research contributions
3. **Then Phase 3 (Action Recognition)** - Separate research area
4. **Then Phase 4 (Other Projects)** - Additional work
5. **Finally Phase 5 (PhD Thesis)** - Ties everything together

**For Each Phase:**
- You provide information
- I ask clarifying questions
- We refine descriptions
- I update the portfolio
- We review together
- Move to next phase

---

## ✅ READY TO START?

**Let's begin with Phase 1, Section 1.1: FallingBallEnv**

Please provide information about FallingBallEnv using the template above, or answer the questions I've listed.

I'll wait for your input, then we'll go through each one systematically! 🚀

