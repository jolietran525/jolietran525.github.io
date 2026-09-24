const projectData = {
  id: "idax-processor",

  category: "DATA SCIENTIST @ WSP USA Inc.",

  title: "IDAX Processor",

  subtitle:
    "An automation tool (.exe application) that reads and combines IDAX traffic counts data from multiple files/intersections (.xlsx) and compiles them into a structured Excel workbook.",

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
      A Python desktop application that automatically consolidates
      intersection-level IDAX traffic count files into a single structured Excel output.
    </p>
  `,

  problem: `
    <p>
      Traffic count data from IDAX is typically delivered as separate Excel
      files for individual intersections. When an analysis involves many intersections,
      engineers have to open each file, locate the relevant movement counts, and
      manually consolidate them into a project-level table.
    </p>
    <p>
      This creates a repetitive workflow that becomes increasingly inefficient as the
      number of intersections grows.
    </p>
  `,

  thoughtProcess: `
    <p>
      The structure of the IDAX files was sufficiently standardized to make the
      workflow highly automatable.<br><br>

      Instead of asking engineers to manually open and consolidate each file,
      I built a batch-processing workflow that could:<br>

      <ol>
        <li> Scan a folder for available IDAX .xlsx files
        <li> Read and interpret each file
        <li> Extract the movement of different modes at each intersection
        <li> Standardize the extracted data
        <li> Combine all intersections into a single formatted output
      </ol>


      The tool was designed around the engineer's existing workflow rather 
      than requiring them to interact with a programming environment.
    </p>
  `,

  solution: `
    <p>
      I developed a standalone Python application that allows users to provide
      a folder containing IDAX Excel outputs.<br><br>

      The application automatically identifies the available files, extracts
      intersection-level movement counts, and compiles the results into a single
      formatted Excel workbook.
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

  role: `
    <p>
      I designed and developed the processing workflow end-to-end,
      including file ingestion, parsing, extraction, transformation,
      Excel generation, interface design, and executable packaging.
    </p>
  `,

};