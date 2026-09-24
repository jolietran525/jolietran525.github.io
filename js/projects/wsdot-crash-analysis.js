const projectData = {
  id: "wsdot-crash-analysis",

  category: "WSP / TRANSPORTATION SAFETY DATA SCIENCE",

  title: "WSDOT Crash Data Analysis Pipeline",

  subtitle:
    "A reusable R targets pipeline that standardizes crash-data ETL, analysis, visualization, and reporting across transportation safety projects and study areas.",

  tags: [
    "R",
    "targets",
    "sf",
    "ETL",
    "Spatial Analysis",
    "Interactive Visualization"
  ],

  proprietary: true,

  clients: [
    "Multiple MPOs, including PSRC and SCOG"
  ],

  tldr: `
    <p>
      A reusable R <code>targets</code> pipeline that standardizes
      crash-data ETL, analysis, visualization, and reporting across
      transportation safety projects and study areas.
    </p>
  `,

  problem: `
    <p>
      Transportation safety projects frequently require similar
      crash-data analyses: filtering records, summarizing crash
      characteristics, identifying high-crash locations, and producing
      visualizations.
    </p>

    <p>
      When each project is handled independently, the same analytical
      workflow has to be repeatedly recreated. This creates unnecessary
      manual effort and makes it harder to maintain consistency across
      projects.
    </p>
  `,

  thoughtProcess: `
    <p>
      I recognized that the core analytical workflow was relatively
      consistent even though the study areas and project requirements
      changed.
    </p>

    <p>
      Instead of building a new script for every project, I structured
      the analysis as a reusable pipeline with modular steps.
    </p>

    <p>
      The goal was to make the workflow:
    </p>

    <ul>
      <li>
        <strong>Repeatable</strong> — the same process can be applied
        to different study areas
      </li>
      <li>
        <strong>Scalable</strong> — larger geographic areas can be
        processed without rebuilding the workflow
      </li>
      <li>
        <strong>Traceable</strong> — dependencies between processing
        steps are explicit
      </li>
      <li>
        <strong>Reusable</strong> — standardized functions can support
        future projects
      </li>
      <li>
        <strong>Client-ready</strong> — outputs are generated in formats
        that can be directly used by project teams
      </li>
    </ul>
  `,

  solution: `
    <p>
      I developed an R <code>targets</code> pipeline that standardizes
      the workflow from raw crash data through final analysis and
      visualization.
    </p>

    <p>
      The pipeline handles:
    </p>

    <p>
      <strong>
        ETL → Filtering → Spatial Processing → Analysis →
        Summary Tables → Visualization
      </strong>
    </p>

    <p>
      Depending on the project, the resulting analysis can examine
      crash characteristics such as:
    </p>

    <ul>
      <li>Contributing factors</li>
      <li>Injury severity</li>
      <li>Lighting conditions</li>
      <li>Roadway characteristics</li>
      <li>Crash type</li>
      <li>Geographic location</li>
      <li>Other project-specific safety indicators</li>
    </ul>

    <p>
      The pipeline produces standardized Excel summary tables as well
      as self-contained HTML visualizations showing high-crash
      locations with interactive pop-up information.
    </p>

    <p>
      Some of these HTML visualization outputs have been hosted by
      <strong>PSRC</strong> as part of regional safety planning work,
      and analysis results have contributed to safety indices.
    </p>
  `,

  impact: [
    {
      value: "≤15 MIN",
      label: "PROJECT-LEVEL ANALYSIS"
    },
    {
      value: "REUSABLE",
      label: "CROSS-PROJECT PIPELINE"
    },
    {
      value: "1",
      label: "STANDARDIZED WORKFLOW"
    }
  ],



  role: `
    <p>
      Designed and developed the reusable R pipeline, including ETL,
      functionalized analysis modules, spatial processing, standardized
      reporting outputs, and interactive visualization generation.
    </p>
  `,

};