/* ============================================================================
 * BLA_02_Software_Process_Models_Master_Poster.js
 * ----------------------------------------------------------------------------
 * Project : Comparing Software Process Models in Cloud-Native and Live-Service
 *           Architectures: An Empirical Analysis of Netflix and Riot Games
 * Author  : Truong Phat Tu
 * Sponsor : Dr. Visvasuresh (Victor) Govindaswamy
 * School  : Concordia University Chicago
 * Course  : Software Engineering (BLA 02)
 * Purpose : Machine-readable Mermaid.js source for the REQUIRED "Original
 *           Software Engineering Visuals" (Poster Section 8).
 *
 * HOW TO RENDER TO HIGH-RESOLUTION VECTOR (SVG/PDF) FOR POSTER PRINTING
 * ----------------------------------------------------------------------------
 * OPTION A - Mermaid Live Editor (fastest):
 *   1. Open https://mermaid.live
 *   2. Paste the contents of any single diagram string below (the text between
 *      the backticks only - do NOT paste the JS wrapper).
 *   3. Click Actions -> SVG. SVG is vector and will stay crisp at 48" x 36".
 *
 * OPTION B - Mermaid CLI (best for reproducible, commit-tracked artifacts):
 *   npm install -g @mermaid-js/mermaid-cli
 *   mmdc -i artifact1_netflix.mmd -o artifact1_netflix.svg -b transparent -s 3
 *
 * OPTION C - Render in a browser using this file directly:
 *   See the HTML harness at the bottom of this file (POSTER_HTML_HARNESS).
 *
 * NOTE ON COLOR DISCIPLINE (poster design rule):
 *   ONE accent color is reserved for PROCESS/PIPELINE elements and ONE for the
 *   SYSTEM UNDER TEST. That mapping is held constant across every figure.
 *     PROCESS  = #1F6FEB  (blue)
 *     SYSTEM   = #D1383A  (red)
 *     GATE     = #B88700  (amber - decision/validation gates)
 *     SUCCESS  = #1A7F37  (green - promotion to production)
 * ==========================================================================*/

"use strict";

/* ---------------------------------------------------------------------------
 * GLOBAL MERMAID THEME CONFIGURATION
 * Applied to every diagram so all poster figures share one visual language.
 * ------------------------------------------------------------------------ */
const MERMAID_CONFIG = {
  startOnLoad: true,
  theme: "base",
  themeVariables: {
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif",
    fontSize: "16px",
    primaryColor: "#EAF2FD",
    primaryTextColor: "#0B1F33",
    primaryBorderColor: "#1F6FEB",
    lineColor: "#44505E",
    tertiaryColor: "#FFFFFF"
  },
  flowchart: { curve: "basis", nodeSpacing: 45, rankSpacing: 55, htmlLabels: true }
};

/* ===========================================================================
 * ARTIFACT 1A - NETFLIX CONTINUOUS DEPLOYMENT / CANARY PIPELINE
 * ---------------------------------------------------------------------------
 * Illustrates a fully continuous, microservice-driven DevOps process in which
 * specification, implementation, validation, and evolution are collapsed into
 * a single always-running loop. Evidence basis: Netflix microservices
 * architecture with independent build and deployment per service [Ref 5].
 * ========================================================================= */
const ARTIFACT_1A_NETFLIX_PIPELINE = `
flowchart TD
    A["Feature Hypothesis<br/>derived from live telemetry"]:::process
    B["Commit to Service Repository<br/>independent microservice"]:::process
    C["Automated Build<br/>unit tests + static analysis"]:::process
    D["Immutable Image Bake<br/>versioned deployable artifact"]:::process
    E{"Canary Deploy<br/>1-2 percent of live traffic"}:::gate
    F["Automated Canary Analysis<br/>compare canary vs baseline metrics"]:::gate
    G{"Canary score<br/>within threshold?"}:::gate
    H["Automated Rollback<br/>traffic returned to baseline"]:::system
    I["Progressive Rollout to 100 percent<br/>zero-downtime, behind feature flag"]:::success
    J["Live Production Operation<br/>global CDN + adaptive bitrate streaming"]:::system
    K["Resilience Validation<br/>Chaos Engineering fault injection"]:::system
    L["Continuous Telemetry + A/B Experimentation<br/>quality-of-experience metrics"]:::process

    A --> B --> C --> D --> E --> F --> G
    G -- "Fail / metric deviation" --> H
    H --> L
    G -- "Pass" --> I --> J
    J --> K
    K -- "Weakness discovered" --> L
    J --> L
    L -- "New hypothesis, same day" --> A

    classDef process fill:#EAF2FD,stroke:#1F6FEB,stroke-width:2px,color:#0B1F33;
    classDef system  fill:#FDEDED,stroke:#D1383A,stroke-width:2px,color:#33090B;
    classDef gate    fill:#FFF8E1,stroke:#B88700,stroke-width:2px,color:#332900;
    classDef success fill:#E7F6EC,stroke:#1A7F37,stroke-width:2px,color:#06290F;
`;

/* ===========================================================================
 * ARTIFACT 1B - RIOT GAMES SYNCHRONIZED INCREMENTAL RELEASE TRAIN
 * ---------------------------------------------------------------------------
 * Illustrates a hybrid Agile / incremental process constrained by a fixed
 * bi-weekly global patch cadence and strict client-server version parity.
 * Evidence basis: documented patch cadence, Public Beta Environment staging,
 * and client-server synchronization practices [Ref 6].
 * ========================================================================= */
const ARTIFACT_1B_RIOT_PIPELINE = `
flowchart TD
    A["Product Backlog<br/>champions, balance, systems, anti-cheat"]:::process
    B["Sprint Planning<br/>scoped to the next patch window"]:::process
    C["Cross-Functional Feature Team<br/>engineering, design, art, audio, QA"]:::process
    D["Automated Build + Unit and Integration Tests"]:::process
    E["Internal Playtesting<br/>designer and QA verification"]:::gate
    F{"Meets Definition of Done<br/>for this patch train?"}:::gate
    G["Deferred to Next Patch<br/>cadence is protected, scope is not"]:::process
    H["Public Beta Environment<br/>public staging, approx. two-week loop"]:::gate
    I{"Blocking bug, exploit,<br/>or balance outlier found?"}:::gate
    J["Hotfix Loop back to PBE"]:::system
    K["Patch Locked and Signed<br/>client and server versions pinned together"]:::success
    L["Synchronized Global Deployment<br/>region-by-region rollout windows"]:::success
    M["Live Service Operation<br/>authoritative servers, ranked and esports play"]:::system
    N["Live Telemetry + Community Feedback<br/>win rates, pick rates, player reports"]:::process
    O["Emergency Hotfix<br/>only for game-breaking defects"]:::system

    A --> B --> C --> D --> E --> F
    F -- "No" --> G --> A
    F -- "Yes" --> H --> I
    I -- "Yes" --> J --> H
    I -- "No" --> K --> L --> M --> N
    M -- "Critical regression" --> O --> M
    N -- "Feeds next bi-weekly increment" --> A

    classDef process fill:#EAF2FD,stroke:#1F6FEB,stroke-width:2px,color:#0B1F33;
    classDef system  fill:#FDEDED,stroke:#D1383A,stroke-width:2px,color:#33090B;
    classDef gate    fill:#FFF8E1,stroke:#B88700,stroke-width:2px,color:#332900;
    classDef success fill:#E7F6EC,stroke:#1A7F37,stroke-width:2px,color:#06290F;
`;

/* ===========================================================================
 * ARTIFACT 1C - SIDE-BY-SIDE COMPARATIVE PIPELINE (single-figure version)
 * ---------------------------------------------------------------------------
 * Use this when poster space allows only ONE pipeline figure. The subgraphs
 * force the reader to compare cadence and validation oracle directly.
 * ========================================================================= */
const ARTIFACT_1C_SIDE_BY_SIDE = `
flowchart LR
    subgraph NFX["NETFLIX - Continuous DevOps - decoupled microservices"]
      direction TB
      N1["Commit"]:::process --> N2["Automated Build and Test"]:::process
      N2 --> N3["Canary 1-2 percent traffic"]:::gate
      N3 --> N4{"Automated metric gate"}:::gate
      N4 -- "Pass" --> N5["Full rollout, same day"]:::success
      N4 -- "Fail" --> N6["Automatic rollback"]:::system
      N5 --> N7["Chaos fault injection in production"]:::system
      N7 --> N1
    end

    subgraph RIOT["RIOT GAMES - Hybrid Agile - coupled client-server engine"]
      direction TB
      R1["Sprint commitment"]:::process --> R2["Build and internal playtest"]:::process
      R2 --> R3["Public Beta Environment staging"]:::gate
      R3 --> R4{"Exploit or balance gate"}:::gate
      R4 -- "Fail" --> R5["Hotfix back to PBE"]:::system
      R4 -- "Pass" --> R6["Bi-weekly synchronized global patch"]:::success
      R6 --> R7["Live ranked and esports operation"]:::system
      R7 --> R1
    end

    DRIVER["ARCHITECTURAL CONSTRAINT DETERMINES CADENCE<br/>Independent services can ship alone.<br/>A coupled client and server must ship together."]:::note
    NFX --- DRIVER
    RIOT --- DRIVER

    classDef process fill:#EAF2FD,stroke:#1F6FEB,stroke-width:2px,color:#0B1F33;
    classDef system  fill:#FDEDED,stroke:#D1383A,stroke-width:2px,color:#33090B;
    classDef gate    fill:#FFF8E1,stroke:#B88700,stroke-width:2px,color:#332900;
    classDef success fill:#E7F6EC,stroke:#1A7F37,stroke-width:2px,color:#06290F;
    classDef note    fill:#F3F4F6,stroke:#44505E,stroke-width:1px,color:#0B1F33,font-style:italic;
`;

/* ===========================================================================
 * ARTIFACT 2A - SOFTWARE PROCESS SELECTION DECISION MATRIX (quadrant chart)
 * ---------------------------------------------------------------------------
 * Positions both systems against the two variables that, per the BLA 02
 * analysis, actually drive process selection: deployment frequency and
 * system coupling / cost of failure.
 * Coordinates are ANALYTICAL PLACEMENTS derived from documented cadence and
 * architecture, not measured quantitative data. Label them as such on the
 * poster to preserve citation integrity.
 * ========================================================================= */
const ARTIFACT_2A_DECISION_MATRIX = `
quadrantChart
    title Software Process Selection - coupling and release risk vs. deployment frequency
    x-axis "Low deployment frequency" --> "Continuous deployment"
    y-axis "Low coupling / low failure cost" --> "High coupling / high failure cost"
    quadrant-1 "Hybrid: plan-driven baseline, agile execution"
    quadrant-2 "Plan-driven / Waterfall-leaning"
    quadrant-3 "Lightweight incremental"
    quadrant-4 "Continuous Agile DevOps"
    "Netflix streaming microservices": [0.93, 0.22]
    "Riot Games live game engine": [0.38, 0.78]
    "Riot esports tournament build": [0.12, 0.93]
    "Netflix core DRM and billing": [0.55, 0.62]
    "Internal analytics tooling": [0.72, 0.15]
    "Regulated medical device firmware": [0.08, 0.96]
`;

/* ===========================================================================
 * ARTIFACT 2B - DECISION MATRIX AS A SELECTION FLOWCHART (alternate form)
 * ---------------------------------------------------------------------------
 * Use this instead of 2A if the reviewer prefers a prescriptive engineering
 * model over a positioning chart. It encodes the same finding: process is
 * selected from constraints, not preference.
 * ========================================================================= */
const ARTIFACT_2B_SELECTION_FLOW = `
flowchart TD
    S["New software subsystem"]:::process --> Q1{"Can this component be<br/>deployed independently of<br/>all other components?"}:::gate

    Q1 -- "No - version parity required" --> Q2{"Does a defect in production<br/>destroy correctness, fairness,<br/>or safety?"}:::gate
    Q1 -- "Yes - decoupled interface" --> Q3{"Can correctness be judged<br/>automatically from live<br/>telemetry?"}:::gate

    Q2 -- "Yes" --> P1["PLAN-DRIVEN LEANING HYBRID<br/>fixed release train, staged public beta,<br/>formal sign-off before lock<br/>EXAMPLE: Riot Games patch cycle"]:::system
    Q2 -- "No" --> P2["INCREMENTAL DEVELOPMENT<br/>interleaved specification, development,<br/>and validation per increment"]:::process

    Q3 -- "Yes" --> P3["CONTINUOUS AGILE DEVOPS<br/>canary release, automated metric gate,<br/>automatic rollback, feature flags<br/>EXAMPLE: Netflix microservices"]:::success
    Q3 -- "No - needs human judgment" --> P2

    P1 --> R["RESULT: no universal best process.<br/>Process is a function of coupling,<br/>failure cost, and validation oracle."]:::note
    P2 --> R
    P3 --> R

    classDef process fill:#EAF2FD,stroke:#1F6FEB,stroke-width:2px,color:#0B1F33;
    classDef system  fill:#FDEDED,stroke:#D1383A,stroke-width:2px,color:#33090B;
    classDef gate    fill:#FFF8E1,stroke:#B88700,stroke-width:2px,color:#332900;
    classDef success fill:#E7F6EC,stroke:#1A7F37,stroke-width:2px,color:#06290F;
    classDef note    fill:#F3F4F6,stroke:#44505E,stroke-width:1px,color:#0B1F33;
`;

/* ===========================================================================
 * SUPPORTING ARTIFACT 3 - UML USE CASE VIEW (optional third visual)
 * ---------------------------------------------------------------------------
 * Satisfies the "UML use-case" option in Poster Section 8 if a third visual
 * is desired. Shows how actor needs become process requirements.
 * ========================================================================= */
const ARTIFACT_3_USE_CASE_VIEW = `
flowchart LR
    V["Viewer"]:::actor
    PL["Player"]:::actor
    SRE["Site Reliability Engineer"]:::actor
    GD["Game Designer"]:::actor

    subgraph NSYS["Netflix streaming platform"]
      U1(["Stream title with adaptive bitrate"]):::uc
      U2(["Receive personalized recommendations"]):::uc
      U3(["Inject controlled failure to prove resilience"]):::uc
      U4(["Promote or roll back a canary release"]):::uc
    end

    subgraph RSYS["League of Legends live service"]
      U5(["Play a synchronized ranked match"]):::uc
      U6(["Validate a change in the Public Beta Environment"]):::uc
      U7(["Publish a bi-weekly balance patch"]):::uc
      U8(["Report a defect or suspected exploit"]):::uc
    end

    V --> U1
    V --> U2
    SRE --> U3
    SRE --> U4
    PL --> U5
    PL --> U6
    PL --> U8
    GD --> U7
    GD --> U6

    classDef actor fill:#FFFFFF,stroke:#0B1F33,stroke-width:2px,color:#0B1F33;
    classDef uc    fill:#EAF2FD,stroke:#1F6FEB,stroke-width:2px,color:#0B1F33;
`;

/* ===========================================================================
 * REGISTRY + EXPORT
 * ========================================================================= */
const POSTER_DIAGRAMS = {
  artifact1a_netflix_pipeline: {
    id: "artifact1a",
    posterSection: "8. Original Software Engineering Visuals",
    caption:
      "Figure 1a. Netflix continuous deployment pipeline. Validation is automated and " +
      "occurs in production via canary analysis and fault injection. Original diagram by " +
      "Truong Phat Tu, derived from documented Netflix microservice practice [Ref 5].",
    definition: ARTIFACT_1A_NETFLIX_PIPELINE
  },
  artifact1b_riot_pipeline: {
    id: "artifact1b",
    posterSection: "8. Original Software Engineering Visuals",
    caption:
      "Figure 1b. Riot Games synchronized incremental release train. Cadence is fixed; " +
      "scope is negotiable. Original diagram by Truong Phat Tu, derived from documented " +
      "patch cadence and Public Beta Environment practice [Ref 6].",
    definition: ARTIFACT_1B_RIOT_PIPELINE
  },
  artifact1c_side_by_side: {
    id: "artifact1c",
    posterSection: "7. Comparison / 8. Visuals",
    caption:
      "Figure 1c. Comparative pipeline view. Architectural coupling, not methodology " +
      "preference, determines achievable release cadence. Original diagram by Truong Phat Tu.",
    definition: ARTIFACT_1C_SIDE_BY_SIDE
  },
  artifact2a_decision_matrix: {
    id: "artifact2a",
    posterSection: "8. Original Software Engineering Visuals",
    caption:
      "Figure 2a. Process selection matrix. Placements are analytical, derived from " +
      "documented architecture and release cadence; they are not measured quantitative " +
      "values. Original model by Truong Phat Tu.",
    definition: ARTIFACT_2A_DECISION_MATRIX
  },
  artifact2b_selection_flow: {
    id: "artifact2b",
    posterSection: "8. Original Software Engineering Visuals (alternate)",
    caption:
      "Figure 2b. Prescriptive process selection model. Original engineering model by " +
      "Truong Phat Tu, synthesized from Sommerville's process framework [Ref 1].",
    definition: ARTIFACT_2B_SELECTION_FLOW
  },
  artifact3_use_case_view: {
    id: "artifact3",
    posterSection: "8. Optional third visual",
    caption:
      "Figure 3. UML-style use case view mapping actor needs to the validation activities " +
      "each process must support. Original diagram by Truong Phat Tu.",
    definition: ARTIFACT_3_USE_CASE_VIEW
  }
};

/* ---------------------------------------------------------------------------
 * RENDER HELPERS
 * ------------------------------------------------------------------------ */
function listDiagrams() {
  return Object.keys(POSTER_DIAGRAMS);
}

function getDiagram(key) {
  const d = POSTER_DIAGRAMS[key];
  if (!d) {
    throw new Error(
      "Unknown diagram key: " + key + ". Available: " + listDiagrams().join(", ")
    );
  }
  return d.definition.trim();
}

/* Writes every diagram into a container element, each with its poster caption. */
function renderAllDiagrams(containerId) {
  const host = document.getElementById(containerId);
  if (!host) throw new Error("Container element not found: " + containerId);
  host.innerHTML = "";
  Object.values(POSTER_DIAGRAMS).forEach(function (d) {
    const wrap = document.createElement("figure");
    wrap.style.margin = "0 0 56px 0";

    const graph = document.createElement("div");
    graph.className = "mermaid";
    graph.textContent = d.definition.trim();

    const cap = document.createElement("figcaption");
    cap.style.cssText =
      "font:14px Inter,Arial,sans-serif;color:#44505E;margin-top:10px;max-width:900px;";
    cap.textContent = d.caption;

    wrap.appendChild(graph);
    wrap.appendChild(cap);
    host.appendChild(wrap);
  });

  if (window.mermaid) {
    window.mermaid.initialize(MERMAID_CONFIG);
    window.mermaid.run();
  }
}

/* Node / CLI export: writes each diagram to its own .mmd file for mmdc. */
function writeMmdFiles() {
  const fs = require("fs");
  Object.entries(POSTER_DIAGRAMS).forEach(function (entry) {
    const key = entry[0];
    const d = entry[1];
    fs.writeFileSync(key + ".mmd", d.definition.trim() + "\n", "utf8");
    console.log("Wrote " + key + ".mmd");
  });
  console.log("\nNext: mmdc -i <file>.mmd -o <file>.svg -b transparent -s 3");
}

/* ---------------------------------------------------------------------------
 * STANDALONE HTML HARNESS
 * Save the string below as poster_diagrams.html next to this file, open it in
 * a browser, then right-click any figure to save the rendered SVG.
 * ------------------------------------------------------------------------ */
const POSTER_HTML_HARNESS = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>BLA 02 - Software Process Models - Poster Diagrams</title>
<style>
  body { font-family: Inter, Arial, sans-serif; margin: 48px; background:#FFFFFF; color:#0B1F33; }
  h1 { font-size: 24px; margin-bottom: 4px; }
  p.sub { color:#44505E; margin-top:0; }
</style>
<script type="module">
  import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";
  window.mermaid = mermaid;
</script>
<script src="BLA_02_Software_Process_Models_Master_Poster.js"></script>
</head>
<body onload="renderAllDiagrams('diagrams')">
  <h1>Comparing Software Process Models in Cloud-Native and Live-Service Architectures</h1>
  <p class="sub">Truong Phat Tu &middot; Concordia University Chicago &middot; Faculty Sponsor: Dr. Visvasuresh (Victor) Govindaswamy</p>
  <div id="diagrams"></div>
</body>
</html>`;

/* ---------------------------------------------------------------------------
 * MODULE EXPORTS
 * ------------------------------------------------------------------------ */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    MERMAID_CONFIG,
    POSTER_DIAGRAMS,
    POSTER_HTML_HARNESS,
    ARTIFACT_1A_NETFLIX_PIPELINE,
    ARTIFACT_1B_RIOT_PIPELINE,
    ARTIFACT_1C_SIDE_BY_SIDE,
    ARTIFACT_2A_DECISION_MATRIX,
    ARTIFACT_2B_SELECTION_FLOW,
    ARTIFACT_3_USE_CASE_VIEW,
    listDiagrams,
    getDiagram,
    renderAllDiagrams,
    writeMmdFiles
  };
}

/* ============================================================================
 * CITATION INTEGRITY NOTE
 * ----------------------------------------------------------------------------
 * These diagrams are ORIGINAL engineering models authored by Truong Phat Tu.
 * They represent process structures inferred from publicly documented sources:
 *   [Ref 1] Sommerville, I. Software Engineering, 10th ed. Pearson, 2015.
 *   [Ref 5] F5 NGINX Developer Blog. "Adopting Microservices at Netflix:
 *           Lessons for Architectural Design." F5 Networks, 2015.
 *   [Ref 6] Riot Games Engineering. "The Riot Games API: Deep Dive" and
 *           "Keeping Legacy Software Alive: A Case Study." 2016-2021.
 * No internal or proprietary process detail is claimed. Quadrant coordinates
 * in Artifact 2A are analytical placements, not measured metrics, and are
 * labeled as such in the figure caption.
 * ==========================================================================*/
