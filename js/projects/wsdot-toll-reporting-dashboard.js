const projectData = {
  id: "wsdot-toll-reporting-dashboard",

  category: "DATA SCIENTIST @ WSP USA Inc.",

  title: "WSDOT Toll Reporting Dashboard",

  subtitle:
    "A password-protected Streamlit dashboard that automated a recurring toll reporting workflow, replacing a manual query-to-Excel process with an interactive reporting application.",

  tags: [
    "PYTHON",
    "STREAMLIT",
    "SQL",
    "DATABASE",
    "AUTOMATION",
    "DATA PRODUCT"
  ],

  proprietary: true,

  clients: [
    "WSDOT Toll Division"
  ],

  tldr: `
    <p>
      A password-protected Streamlit dashboard that automated a
      recurring WSDOT toll reporting workflow, replacing a manual
      weekly query → CSV → Excel → email process with an interactive
      reporting application.
    </p>
  `,

  problem: `
    <p>
      A recurring reporting workflow required an analyst to manually
      run a database query every Monday, export the results to CSV,
      copy the results into an Excel reporting template, and prepare
      and distribute the report by email.
    </p>

    <p>
      The workflow required recurring manual effort and introduced
      opportunities for errors during data transfer and formatting.
    </p>
  `,

  thoughtProcess: `
    <p>
      The reporting process was already structured and repeatable,
      making it a strong candidate for automation.
    </p>

    <p>
      Rather than simply automating Excel generation, I considered
      how the reporting process could become a
      <strong>self-service data product</strong>.
    </p>

    <p>
      The goal was to separate the data pipeline from the presentation
      layer:
    </p>

    <p>
      <strong>
        Source Data → Automated Query → Secondary Reporting Database
        → Dashboard → User
      </strong>
    </p>

    <p>
      A secondary database also allowed the reporting environment to
      contain only the information necessary for reporting, rather
      than exposing the underlying source system.
    </p>
  `,

  solution: `
    <p>
      I developed a password-protected Streamlit application that
      automatically presents summarized toll reporting results in a
      format aligned with the existing Excel reporting workflow.
    </p>

    <p>
      Users can access the dashboard and explore reporting results
      for the time period of interest without manually running
      queries, downloading data, or manipulating large Excel
      workbooks.
    </p>

    <p>
      The architecture separates the data extraction process from
      the dashboard layer, allowing the reporting workflow to be
      refreshed independently of the user interface.
    </p>
  `,

  impact: [
    {
      value: "AUTOMATED",
      label: "RECURRING REPORTING WORKFLOW"
    },
    {
      value: "SELF-SERVICE",
      label: "REPORTING ACCESS"
    },
    {
      value: "2-LAYER",
      label: "DATA + DASHBOARD ARCHITECTURE"
    }
  ],

  technology: [
    "Python",
    "Streamlit",
    "SQL",
    "Database Pipeline",
    "Data Processing",
    "Dashboard Development",
    "Automation"
  ],

  role: `
    <p>
      Designed and developed the automated data-processing workflow
      and Streamlit reporting application, including translating the
      existing Excel reporting logic into a scalable web-based
      interface.
    </p>
  `,

};