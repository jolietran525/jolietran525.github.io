const projectData = {
  id: "wsdot-toll-data-request-form",

  category: "DATA SCIENTIST @ WSP USA Inc.",

  title: "WSDOT Toll Data Request Form",

  subtitle:
    "A password-protected Streamlit request-management application that transformed an email- and spreadsheet-based client request process into a centralized workflow for submitting, tracking, commenting on, and completing data requests.",

  tags: [
    "PYTHON",
    "STREAMLIT",
    "DATABASE",
    "WORKFLOW AUTOMATION",
    "EMAIL NOTIFICATIONS",
    "DATA MANAGEMENT"
  ],

  proprietary: true,

  clients: [
    "WSDOT Toll Division"
  ],

  tldr: `
    <p>
      A password-protected Streamlit request-management application
      that transformed an email- and spreadsheet-based client request
      process into a centralized workflow for submitting, tracking,
      commenting on, and completing data requests.
    </p>
  `,

  problem: `
    <p>
      As a consultant working with the client, the team did not have
      direct access to the client's internal drive. Data requests were
      primarily handled through email, making it difficult to maintain
      a centralized record of requests and track the level of effort
      associated with each one.
    </p>

    <p>
      Using a shared Excel file also created workflow problems:
    </p>

    <ul>
      <li>Requests could be accidentally modified</li>
      <li>Request history was difficult to track</li>
      <li>Status updates were not centralized</li>
      <li>Hours spent on individual requests were difficult to manage</li>
      <li>Communication was distributed across email threads</li>
    </ul>
  `,

  thoughtProcess: `
    <p>
      Rather than trying to improve the spreadsheet-based process,
      I treated the request itself as a structured data object.
    </p>

    <p>
      Each request could have:
    </p>

    <ul>
      <li>A requester</li>
      <li>A description</li>
      <li>A status</li>
      <li>Comments</li>
      <li>Administrative notes</li>
      <li>Hours spent</li>
      <li>Creation and completion information</li>
    </ul>

    <p>
      This made it possible to create a lightweight request-management
      system specifically designed around the client's workflow.
    </p>
  `,

  solution: `
    <p>
      I developed a password-protected Streamlit application where
      users can submit new data requests, view existing requests,
      review detailed request information, add comments, create
      similar requests from previous requests, and track request
      status.
    </p>

    <p>
      Administrators can additionally update request status, record
      level of effort, track hours spent, and manage the request
      lifecycle.
    </p>

    <p>
      The application also supports automated system notifications,
      allowing relevant users and administrators to be notified when
      requests are created or completed.
    </p>
  `,

  impact: [
    {
      value: "CENTRALIZED",
      label: "REQUEST MANAGEMENT"
    },
    {
      value: "STRUCTURED",
      label: "LEVEL-OF-EFFORT TRACKING"
    },
    {
      value: "AUTOMATED",
      label: "REQUEST NOTIFICATIONS"
    }
  ],

  technology: [
    "Python",
    "Streamlit",
    "Database",
    "Workflow Automation",
    "Email Notifications",
    "Request Management",
    "Web Application"
  ],

  role: `
    <p>
      Designed and developed the application workflow and scalable
      Python backend, translating a loosely structured email and
      spreadsheet process into a structured web-based
      request-management system.
    </p>
  `,

  previous: {
    id: "wsdot-toll-reporting-dashboard",
    title: "WSDOT Toll Reporting Dashboard"
  },

  next: {
    id: "next-project-id",
    title: "Next Project"
  }
};