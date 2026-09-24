const projectData = {
  id: "mtc-regional-transit-assessment",

  category: "DATA SCIENTIST @ WSP USA Inc.",

  title: "MTC Regional Transit Assessment",

  subtitle:
    "A scalable transportation data workflow and packaged dashboard that compares transit performance metrics from multiple data sources, helping users explore differences between probe and open-source transportation datasets.",

  tags: [
    "PYTHON",
    "DUCKDB",
    "GEOPARQUET",
    "STREAMLIT",
    "TRANSPORTATION APIs",
    "SPATIAL DATA"
  ],

  proprietary: true,

  clients: [
    "Metropolitan Transportation Commission · California"
  ],

  tldr: `
    <p>
      A scalable transportation data workflow and packaged dashboard
      that compares transit performance metrics from multiple data
      sources, helping users explore differences between probe and
      open-source transportation datasets.
    </p>
  `,

  problem: `
    <p>
      Transit performance can be represented differently depending on
      the underlying data source. For a regional transit assessment,
      the team needed a practical way to process and compare data from
      different providers while preserving a consistent analytical
      framework.
    </p>

    <p>
      The challenge was not simply extracting the data, but creating
      a workflow that could handle multiple agencies, time periods,
      routes, and data sources in a consistent manner.
    </p>
  `,

  thoughtProcess: `
    <p>
      I approached the problem as a data integration and exploration
      workflow:
    </p>

    <p>
      <strong>
        Multiple Data Sources → Standardized Processing →
        Comparable Metrics → Interactive Exploration
      </strong>
    </p>

    <p>
      Rather than generating a static report for each comparison,
      I built a reusable workflow that allowed users to dynamically
      investigate differences between datasets.
    </p>

    <p>
      This made it possible to move from a one-time analysis toward
      a reusable analytical tool.
    </p>
  `,

  solution: `
    <p>
      I developed a streamlined workflow for extracting and
      transforming transportation data from sources including
      <strong>Cal-ITP</strong> and <strong>Swiftly</strong>.
    </p>

    <p>
      The workflow standardized the data and generated comparable
      transit performance metrics across the two sources.
    </p>

    <p>
      I then packaged the analysis into an interactive dashboard where
      users could explore differences by dimensions such as:
    </p>

    <ul>
      <li>Agency</li>
      <li>Route</li>
      <li>Corridor</li>
      <li>Stop pair</li>
      <li>Time period</li>
      <li>Performance metric</li>
      <li>Data source</li>
    </ul>

    <p>
      The dashboard allows users to interactively compare results
      rather than relying solely on pre-generated static tables.
    </p>
  `,

  impact: [
    {
      value: "MULTI-SOURCE",
      label: "TRANSPORTATION DATA INTEGRATION"
    },
    {
      value: "INTERACTIVE",
      label: "CLIENT DATA EXPLORATION"
    },
    {
      value: "REUSABLE",
      label: "ANALYTICAL WORKFLOW"
    }
  ],

  technology: [
    "Python",
    "DuckDB",
    "GeoParquet",
    "Streamlit",
    "Transportation APIs",
    "Spatial Data Processing",
    "ETL",
    "Data Analysis"
  ],

  role: `
    <p>
      <strong>Data Scientist</strong> — developed the data extraction
      and transformation workflow, standardized multiple transportation
      data sources, implemented analytical comparisons, and packaged
      the results into an interactive client-facing dashboard.
    </p>
  `,

  previous: {
    id: "wsdot-toll-data-request-form",
    title: "WSDOT Toll Data Request Form"
  },

  next: {
    id: "next-project-id",
    title: "Next Project"
  }
};