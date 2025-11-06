# 🔥 BRUTAL CRITIQUE: Research Portfolio Page

## Current State: https://goodluckoguzie.github.io/portfolio

**Date:** November 2024  
**Focus:** Research portfolio page restructure and improvement

---

## 🚨 CRITICAL ISSUES

### **ISSUE #1: MISSING YOUR ACTUAL RESEARCH STRUCTURE**
**Problem:** Your page lists projects but doesn't show your research THEME or ORGANIZATION.

**What's Missing:**
- ❌ No clear research areas (Social Robot Navigation, RL, Action Recognition)
- ❌ Environments are buried (SocNavGym, FallingBallEnv, LiteSocNavGym)
- ❌ Your models aren't clearly categorized (Predictive World Models, CGLSTM, Adaptive Prediction Horizons)
- ❌ Projects look disconnected, not like a coherent research program

**Impact:** Visitors can't see your research vision or how projects connect.

---

### **ISSUE #2: GITHUB LINKS ARE GENERIC**
**Problem:** Most links just say "Code Repository" pointing to your main GitHub, not specific repos.

**What's Wrong:**
- ❌ "Code Repository" → generic GitHub profile (useless)
- ❌ Missing direct links to:
  - SocNavGym (you were part of team)
  - FallingBallEnv (you created it!)
  - LiteSocNavGym (you created it!)
  - CosineGatedLSTM
  - ActionRecognitionUsingWiFi
  - Disneyland_Project
  - WorldModels
- ❌ No differentiation between "created" vs "contributed to"

**Impact:** Can't verify your work. Looks unprofessional. Missing credit for your creations.

---

### **ISSUE #3: NO RESEARCH AREA ORGANIZATION**
**Problem:** Everything is flat. No grouping by research theme.

**Current Structure:**
```
- Project 1
- Project 2
- Project 3
- Project 4
- Project 5
```

**What You Need:**
```
🔬 Research Area 1: Social Robot Navigation
  ├── Environments (SocNavGym, FallingBallEnv, LiteSocNavGym)
  ├── Models (Predictive World Models, CGLSTM, Adaptive Prediction Horizons)
  └── Publications
  
🔬 Research Area 2: Action Recognition
  ├── Wi-Fi CSI Action Recognition
  └── ESP32 Implementation
  
🔬 Research Area 3: Other Projects
  ├── Disneyland Project
  └── WorldModels
```

**Impact:** Hard to understand your research focus. Looks scattered.

---

### **ISSUE #4: ENVIRONMENTS ARE INVISIBLE**
**Problem:** You created FallingBallEnv and LiteSocNavGym, but they're not featured!

**What's Missing:**
- ❌ No "Environments" section
- ❌ Can't see that you CREATED environments (big deal!)
- ❌ SocNavGym contribution isn't clear (you were "part of team")
- ❌ Environments should be highlighted as research tools

**Impact:** Major contribution missing. Creating RL environments is significant work!

---

### **ISSUE #5: MODELS ARE CONFUSED WITH PROJECTS**
**Problem:** Your models (Predictive World Models, CGLSTM, Adaptive Prediction Horizons) are buried in project descriptions.

**What's Confusing:**
- Is "Predictive World Models" a project or a model?
- Is "CGLSTM" a separate project or part of another?
- Where does "Adaptive Prediction Horizons" fit?

**What You Need:**
- Clear MODEL section showing your 3 proposed models
- Each model should have:
  - What it is (model/proposed solution)
  - What problems it solves
  - Where it's used/validated
  - GitHub links
  - Publications

---

### **ISSUE #6: ONGOING VS COMPLETED IS CLEAR BUT PROJECTS ARE INCOMPLETE**
**Problem:** Good separation, but projects missing details.

**Missing Information:**
- ❌ Which environment was used for each model?
- ❌ What were the results/metrics?
- ❌ Which projects are published vs unpublished?
- ❌ What's the timeline/chronology?

---

### **ISSUE #7: ACTION RECOGNITION IS BURIED**
**Problem:** Wi-Fi CSI Action Recognition is a significant project but:
- ❌ Not clearly visible
- ❌ No clear category
- ❌ ESP32 hardware aspect not highlighted (unique!)

**Impact:** Misses showing breadth of your research beyond robotics.

---

### **ISSUE #8: "OTHER PROJECTS" NEED CONTEXT**
**Problem:** Disneyland Project and WorldModels listed but:
- ❌ No description of what they are
- ❌ Why they're important
- ❌ How they fit your research

**Impact:** Looks like random projects, not intentional research.

---

### **ISSUE #9: NO VISUAL HIERARCHY FOR RESEARCH THEMES**
**Problem:** Everything looks same importance.

**What You Need:**
- Primary research areas (clear headings)
- Sub-sections within each area
- Visual separation (cards, tabs, or accordions)
- Clear indication of what's ongoing vs completed

---

### **ISSUE #10: FILTERING IS GENERIC**
**Problem:** Filters are "Research | Web | Teaching" but don't match your actual research structure.

**Better Filters:**
- By Research Area (Social Navigation | RL Models | Action Recognition)
- By Type (Environments | Models | Applications)
- By Status (Ongoing | Completed | Published)
- By Environment (SocNavGym | FallingBallEnv | LiteSocNavGym)

---

## 💡 SUGGESTIONS FOR IMPROVEMENT

### **SUGGESTION 1: RESTRUCTURE BY RESEARCH AREAS**

**New Structure:**

```
Research Portfolio

[Research Area Tabs/Nav]
├── 🔬 Social Robot Navigation (Primary)
├── 🤖 Reinforcement Learning Models  
├── 📡 Action Recognition
└── 🔧 Tools & Environments

OR

[Hierarchical Sections]
├── 1. SOCIAL ROBOT NAVIGATION
│   ├── Environments
│   │   ├── SocNavGym (Team Contribution)
│   │   ├── FallingBallEnv (Created)
│   │   └── LiteSocNavGym (Created)
│   └── Models & Algorithms
│       ├── Predictive World Models
│       ├── Adaptive Prediction Horizons
│       └── CGLSTM (used here)
├── 2. REINFORCEMENT LEARNING MODELS
│   ├── Predictive World Models for Social Navigation
│   ├── Cosine-Gated LSTM (CGLSTM)
│   └── Adaptive Predictive RL (Entropy-Driven)
└── 3. ACTION RECOGNITION
    └── Wi-Fi CSI Action Recognition (ESP32)
```

---

### **SUGGESTION 2: CREATE SEPARATE SECTIONS**

**Section 1: Research Environments**
```
🎯 Research Environments

These are the environments I created or contributed to for 
evaluating reinforcement learning algorithms and social 
navigation models.

[Card 1] FallingBallEnv
- Created: You
- Purpose: Gravity/bouncing simulation
- GitHub: [link]
- Used in: [which projects]

[Card 2] LiteSocNavGym  
- Created: You
- Purpose: Lightweight social navigation
- GitHub: [link]
- Used in: [which projects]

[Card 3] SocNavGym
- Team Contribution
- Your Role: RL aspect development
- GitHub: [link]
- Used in: [which projects]
```

**Section 2: Proposed Models**
```
🧠 Proposed Models & Algorithms

[Model Card 1] Predictive World Models
- Type: RL Model
- Problem: Multi-step prediction for navigation
- Environment: SocNavGym, FallingBallEnv
- Publication: UKCI 2023
- GitHub: [if available]

[Model Card 2] Cosine-Gated LSTM (CGLSTM)
- Type: Neural Architecture
- Problem: Sequential learning
- Environment: Used in Predictive Models
- Publication: IEEE PRML 2024
- GitHub: [link]

[Model Card 3] Adaptive Prediction Horizons
- Type: RL Algorithm
- Problem: Dynamic horizon adjustment
- Environment: SocNavGym, FallingBallEnv
- Status: Ongoing
- GitHub: [if available]
```

**Section 3: Applications**
```
📡 Action Recognition
- Wi-Fi CSI Action Recognition
- Hardware: ESP32
- GitHub: [link]
- Status: [ongoing/completed]
```

---

### **SUGGESTION 3: IMPROVE VISUAL ORGANIZATION**

**Option A: Tabbed Interface**
- Tabs: Environments | Models | Applications | All
- Click tab to filter
- Visual, easy navigation

**Option B: Accordion Sections**
- Expandable sections per research area
- Can see overview, expand for details
- Reduces overwhelming feeling

**Option C: Card Grid with Tags**
- Cards organized by research area
- Tags for filtering: #Environment #Model #Published #Ongoing
- Visual hierarchy with size/color

---

### **SUGGESTION 4: ADD RESEARCH TIMELINE/CHRONOLOGY**

Show progression:
```
Research Journey:

2023: Predictive World Models → UKCI 2023
2024: CGLSTM → IEEE PRML 2024
2024: Adaptive Prediction Horizons (Ongoing)
2024: Action Recognition (Ongoing)
```

---

### **SUGGESTION 5: CLEAR CONTRIBUTION LABELS**

For each project, clearly show:
- ✅ **Created** - You built this from scratch
- 👥 **Team Contribution** - You were part of team (specify role)
- 📄 **Published** - Peer-reviewed publication
- 🔄 **Ongoing** - Active development

---

### **SUGGESTION 6: IMPROVE GITHUB LINKS**

Replace generic "Code Repository" with:
- Specific repo names
- Brief description of what's in repo
- Direct links to each repo
- Differentiate: Created vs Contributed

Example:
```
GitHub Repositories:
• [falling_ball_env](link) - Custom Gym environment for gravity simulation
• [CosineGatedLSTM](link) - Implementation of CGLSTM architecture  
• [SocNavGym](link) - Team contribution: RL aspects
```

---

### **SUGGESTION 7: ADD VISUAL ELEMENTS**

- Research area icons/badges
- Environment logos or screenshots
- Model architecture diagrams (placeholders for now)
- Timeline visualization
- Connection lines showing how projects relate

---

### **SUGGESTION 8: SIMPLIFY PROJECT DESCRIPTIONS**

**Current Problem:** Too many bullets, overwhelming

**Solution:** 
- Summary paragraph (2-3 sentences)
- Key contributions (3-4 bullets max)
- Technologies used (one line, comma-separated)
- Results/Impact (brief, 2-3 bullets)

---

### **SUGGESTION 9: ADD "QUICK FACTS" SECTION**

At top of page:
```
Research Overview:
• 3 Proposed Models
• 3 Environments (2 created, 1 team contribution)
• 2 Conference Papers Published
• 1 PhD Thesis Completed
• Active Areas: Social Navigation, RL, Action Recognition
```

---

### **SUGGESTION 10: MOBILE-FRIENDLY FILTERING**

For mobile:
- Dropdown instead of buttons
- Stack sections vertically
- Collapsible sections
- Touch-friendly buttons

---

## 📐 PROPOSED WIREFRAME

```
╔═══════════════════════════════════════════════════════════════╗
║ RESEARCH PORTFOLIO                                             ║
╠═══════════════════════════════════════════════════════════════╣
║                                                                 ║
║ [Quick Facts Banner]                                           ║
║ • 3 Proposed Models • 3 Environments • 2 Papers Published     ║
║                                                                 ║
╠═══════════════════════════════════════════════════════════════╣
║                                                                 ║
║ [Research Area Navigation]                                     ║
║ [All] [Social Navigation] [RL Models] [Action Recognition]   ║
║                                                                 ║
╠═══════════════════════════════════════════════════════════════╣
║                                                                 ║
║ 🔬 SOCIAL ROBOT NAVIGATION                                     ║
║                                                                 ║
║ ┌─────────────────────────────────────────────────────────┐  ║
║ │ Environments                                             │  ║
║ │ ┌────┐ ┌────┐ ┌────┐                                    │  ║
║ │ │FB │ │LSN │ │SN │                                    │  ║
║ │ └────┘ └────┘ └────┘                                    │  ║
║ └─────────────────────────────────────────────────────────┘  ║
║                                                                 ║
║ ┌─────────────────────────────────────────────────────────┐  ║
║ │ Models & Algorithms                                       │  ║
║ │ • Predictive World Models (Published)                    │  ║
║ │ • Adaptive Prediction Horizons (Ongoing)                │  ║
║ └─────────────────────────────────────────────────────────┘  ║
║                                                                 ║
╠═══════════════════════════════════════════════════════════════╣
║                                                                 ║
║ 🧠 REINFORCEMENT LEARNING MODELS                               ║
║                                                                 ║
║ [Model Cards showing each proposed model]                     ║
║                                                                 ║
╠═══════════════════════════════════════════════════════════════╣
║                                                                 ║
║ 📡 ACTION RECOGNITION                                          ║
║                                                                 ║
║ [Wi-Fi CSI Action Recognition project]                          ║
║                                                                 ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## 🎯 IMPLEMENTATION PRIORITY

### **HIGH PRIORITY (Do First)**
1. ✅ Add all GitHub repo links (specific, not generic)
2. ✅ Organize by research areas (Social Navigation, RL Models, Action Recognition)
3. ✅ Create Environments section highlighting your creations
4. ✅ Separate Models section from Projects

### **MEDIUM PRIORITY**
5. ✅ Improve filtering by research area
6. ✅ Add contribution labels (Created vs Team)
7. ✅ Simplify project descriptions
8. ✅ Add Quick Facts section

### **LOW PRIORITY (Polish)**
9. ✅ Add visual elements (icons, badges)
10. ✅ Timeline/chronology view
11. ✅ Mobile enhancements

---

## 💬 NEXT STEPS

1. **You review this critique**
2. **Decide on structure** (tabs vs sections vs cards)
3. **Provide more details** about each project if needed
4. **I implement** the restructure
5. **We iterate** based on your feedback

**Ready to transform your research page?** 🚀

