const projectData = {
  id: "synchro-processor",

  category: "DATA SCIENTIST @ WSP USA Inc.",

  title: "Synchro Processor",

  subtitle:
    "Automated extraction and consolidation of traffic operations results from Synchro outputs.",

  tags: [
    "PYTHON",
    "PANDAS",
    "TKINTER",
    "ETL",
    "AUTOMATION"
  ],

  proprietary: true,

  tldr: `
    <p>
      Synchro Processor automates the extraction and consolidation
      of traffic operations results from multiple Synchro outputs
      into a structured Excel workbook.
    </p>
  `,

  problem: `
    <p>
      Engineers often need to open individual Synchro output files,
      locate relevant tables, copy values, and consolidate the
      results manually.
    </p>
  `,

  thoughtProcess: `
    <p>
      I approached the workflow as a batch-processing problem:
      identify the relevant output tables, extract only the required
      measures, and make the workflow usable without programming.
    </p>
  `,

  solution: `
    <p>
      The resulting Python application scans a folder of Synchro
      outputs, identifies available summary tables, allows the user
      to select relevant results, and produces a consolidated Excel
      workbook.
    </p>
  `,

  impact: [
    {
      value: "95%",
      label: "REDUCTION IN MANUAL LABOR"
    },
    {
      value: "0",
      label: "REPETITIVE COPY-PASTE"
    },
    {
      value: "BATCH",
      label: "MULTI-FILE PROCESSING"
    }
  ],

  technology: [
    "Python",
    "Pandas",
    "Tkinter",
    "Excel",
    "ETL",
    "Standalone Executable"
  ],

  role: `
    <p>
      I designed and developed the processing workflow end-to-end,
      including file ingestion, parsing, extraction, transformation,
      Excel generation, interface design, and executable packaging.
    </p>
  `,

};