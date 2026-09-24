/* Edit the data objects below to add, remove, or reorder portfolio content. */

var portfolioContent = {
  hello: {
    slides: [
      {
        greeting: "PLAYER PROFILE: PROFESSIONAL",
        title: "I'm <span>Jolie Tran</span>",
        subtitle: "A data scientist who turns messy data into tools people can use."
      },
      {
        greeting: "PLAYER PROFILE: PROFESSIONAL",
        title: "I'm <span>Jolie Tran</span>",
        subtitle: "I work at the intersection of data engineering and human-centered design."
      },
      {
        greeting: "PLAYER PROFILE: PROFESSIONAL",
        title: "I'm <span>Jolie Tran</span>",
        subtitle: "I focus on efficiency, accuracy, and usability."
      }
    ],
    image: "images/bg_2.png"
  },

  about: {
    paragraphs: [
      "I am currently a M.S. student in Human-Centered Design and Engineering (HCDE) at the University of \
      Washington, with an expected graduation date of 2028.",
      "I have been a Transportation Data Scientist at WSP USA Inc. for 2+ years after I graduated in 2024. I specialize \
      in data processing, data visualization, and data tools development. I work with MPOs, DOTs, and transit \
      agencies to provide data-driven insights for safety, transit planning and traffic operations.",
      "Previously, I got my B.A. in Geography: Data Science at the University of Washington (2024). Upon \
      graduation, I had at least 1 year of experience with data analytics and web development at the Washington \
      State Transportation Center (TRAC UW) and a summer internship at UW's Humanities Data Science Summer Institute 2023.",
      "I have a passion in \"cooking up\" the data to create insightful visualizations and building data tools \
      (either for the purpose of visualization or analysis or extraction) that can help people make better \
      decisions and improves efficiency and accuracy in their work."
    ],
    details: [
      { icon: "fa-solid fa-inbox", text: "jolietran525@gmail.com", href: "mailto:jolietran525@gmail.com" },
      { icon: "fa-brands fa-linkedin-in", text: "My LinkedIn", href: "https://www.linkedin.com/in/jolietran525/" },
      { icon: "fa-brands fa-github", text: "My Github", href: "https://github.com/jolietran525" }
    ]
  },

  resume: {
    entries: [
      {
        category: "education",
        status: "locked",
        date: "September 2026-June 2028",
        title: "M.S. in Human-Centered Design and Engineering (HCDE)",
        organization: "University of Washington",
        bullets: [
          "In-major GPA: [in-progress]."
        ]
      },
      {
        category: "professional",
        date: "April 2024-September 2026",
        title: "Data Scientist",
        organization: "WSP USA Inc.",
        bullets: [
          "Built and deployed Python/R automation tools (Shiny, Streamlit, standalone executables) that convert raw \
          Synchro, IDAX, and VISSIM outputs into analysis-ready datasets, cutting processing time from ~2 days to under \
          5 minutes per project.",
          "Designed Python ETL pipelines integrating GTFS, Replica, INRIX, Swiftly, crash, and spatial data into \
          standardized multimodal databases, cutting data-prep time by ~80% across 15+ studies.",
          "Replaced WSDOT's legacy Excel tolling reports with a Streamlit dashboard (Pandas, Plotly backend), \
          automating ingestion and reporting and reducing manual analyst effort by ~80%.",
          "Automated the crash analysis workflow end to end (cleaning, statistics, visualization) on WSDOT data, \
          turning multi-week analyses into a process completed in hours and designed to scale across jurisdictions.",
          "Led crash and safety analysis for 4+ regional safety action plans, building geospatial models and interactive \
          maps, including tailored tools for Tribal agencies, to identify high-crash corridors and prioritize investments."
        ]
      },
      {
        category: "education",
        date: "September 2021-March 2024",
        title: "B.A. in Geography: Data Science",
        organization: "University of Washington",
        bullets: [
          "In-major GPA: 4.0.",
          "Cumulative GPA: 3.94",
          "Relevant Coursework: Data Structures and Algorithm, Database Management, Machine Learning, Web Development"
        ]
      },
      {
        category: "professional",
        date: "June 2023-January 2025",
        title: "Research Engineer",
        organization: "Washington State Transportation Center (TRAC)",
        groups: [
          {
            title: "ORCAnalysis",
            dates: "Dec 2023 - January 2025",
            bullets: [
              "Implemented robust methods in PostgreSQL to effectively rectify wrongly encoded stops within the ORCA data based on GTFS, ensuring data integrity and accuracy.",
              "Created an interactive map interface and treemap/billboard dashboards, seamlessly integrated with ORCA data, providing a comprehensive visualization of ridership at each stop in adherence to the GTFS standard."
            ]
          },
          {
            title: "TDEI: OpenSidewalks",
            dates: "June 2023 - Jan 2024",
            bullets: [
              "Developed a method for automating sidewalk attributes collection from State and City DOT and feed into the sidewalk data in OpenStreetMap (OSM) using PostgreSQL and PostGIS.",
              "Designed sets of rules in SQL for handling data integration challenges from disparate sources, identifying poorly drawn segments, and generating missing OSM sidewalk networks.",
              "Tested and fine-tuned queries across multiple neighborhoods in Seattle (WA), achieving an accuracy rate exceeding 90%. Established a baseline for scaling in Portland (OR) and Baltimore (MD).",
              "Built a web interface with HTML, CSS, JavaScript, and Leaflet for transparent public review, fostering continuous enhancements in sidewalk data precision."
            ]
          }
        ]
      },
      {
        category: "volunteer",
        date: "June 2023-August 2023",
        title: "Social Media Research Intern",
        organization: "Humanities Data Science Summer Institute (HDSSI) @ University of Washington",
        bullets: [
          "Collaborated with a multidisciplinary team to conduct a comprehensive analysis of social media conversations on Twitter, focusing on the influence of historical figures in political movements and historical events.",
          "Analyzed an extensive dataset of 3 million tweets spanning from 2007 to 2023, applying advanced data processing techniques using Pandas and Dask libraries in Python. This efficient analysis revealed key trends and patterns.",
          "Implemented a mixed-method research approach, combining quantitative data analysis with qualitative assessment to uncover nuanced patterns and trends in social media conversations.",
          "Contributed valuable insights and created compelling data visualizations for an ongoing book project led by a professor at UW, enhancing the research and its potential impact."
        ]
      },
      {
        category: "volunteer",
        date: "April 2023-March 2024",
        title: "Undergraduate Research Assistant",
        organization: "Laboratory for Auditory Neuroscience and Development (LAND Lab)",
        bullets: [
          "Utilized MATLAB and the Hilbert transform to extract the envelope of the speech from EEG data of 7-month-old and 11-month-old infants, with a success rate of 70%.",
          "Engaged in the pre-processing and artifact removal pipeline, achieving a 25% reduction in data distortion.",
          "Analyzed chance prediction accuracy and determined whether the observed prediction accuracy exceeded chance."
        ]
      }
    ],
    cv: "assets/JolieTran_Resume_202609.pdf"
  },

  expertise: [
    { icon: "flaticon-web-design", title: "Web Map Development (HTML, Javascript)" },
    { icon: "flaticon-web-design", title: "Tool Development (Python-based Executables)" },
    { icon: "flaticon-web-design", title: "Dashboard Development (Python/R-based Servers: Streamlit & Shiny)" },
    { icon: "flaticon-analysis", title: "[Spatial] Data Analysis (R/Python/SQL)" },
    { icon: "flaticon-analysis", title: "Data Processing (R/Python/SQL)" }
  ],

  skills: [
    { name: "R", level: "Advanced", progress: 85 },
    { name: "PL/SQL", level: "Proficient", progress: 70 },
    { name: "Python", level: "Proficient", progress: 70 },
    { name: "MATLAB", level: "Basic", progress: 50 },
    { name: "JavaScript", level: "Basic", progress: 50 },
    { name: "HTML/CSS", level: "Basic", progress: 50 }
  ],

  projects: [
    {
      image: "https://mms.businesswire.com/media/20191119005371/en/757516/5/Synchro_11_Logo-01.jpg",
      title: "Synchro Processor",
      role: "Data Scientist @ WSP",
      description: "An live server dashboard tool that streamlined and automated WSDOT toll disposition report workflow.",
      links: [],
      href: "./project.html?name=synchro-processor"
    },
    {
      image: "https://www.helixtraffic.com/wp-content/uploads/2026/03/Idax.Helix-Full-Color.png",
      title: "IDAX Processor",
      role: "Data Scientist @ WSP",
      description: "An automation tool (.exe application) that reads and combines IDAX traffic counts data from multiple files/intersections (.xlsx) and compiles them into a structured Excel workbook",
      links: [],
      href: "./project.html?name=idax-processor"
    },
    {
      image: "https://cdn-wsprod.azureedge.net/public/cwp/assets/images/logo_header_wsdot_goodtogo.png",
      title: "WSDOT Toll Reporting Dashboard",
      role: "Data Scientist @ WSP",
      description: "A password-protected Streamlit dashboard that automated a recurring toll reporting workflow, replacing a manual query-to-Excel process with an interactive reporting application.",
      links: [],
      href: "./project.html?name=wsdot-toll-reporting-dashboard"
    },
    {
      image: "https://cdn-wsprod.azureedge.net/public/cwp/assets/images/logo_header_wsdot_goodtogo.png",
      title: "WSDOT Toll Data Request Form",
      role: "Data Scientist @ WSP",
      description: "A password-protected Streamlit request-management application that transformed an email- and spreadsheet-based client request process into a centralized workflow for submitting, tracking, commenting on, and completing data requests.",
      links: [],
      href: "./project.html?name=wsdot-toll-request-form"
    },
    {
      image: "https://targetzero.com/wp-content/uploads/2024/09/safe-system-approach-1030x1030.png",
      title: "WSDOT Crash Analysis Pipeline",
      role: "Data Scientist @ WSP",
      description: "A reusable R `targets` pipeline that standardizes crash-data ETL, analysis, visualization, and reporting across transportation safety projects and study areas within Washington State.",
      links: [],
      href: "./project.html?name=wsdot-crash-analysis"
    },
    {
      image: "https://mtc.ca.gov/themes/custom/mtcca/logo.svg",
      title: "MTC Regional Transit Assessment",
      role: "Data Scientist @ WSP",
      description: "A reusable R `targets` pipeline that standardizes crash-data ETL, analysis, visualization, and reporting across transportation safety projects and study areas within Washington State.",
      links: [],
      href: "./project.html?name=mtc-transit-assessment"
    },
    {
      image: "images/orca-project2.png",
      title: "ORCAnalysis",
      role: "Research Engineer @ TRAC",
      description: "This map, with GTFS data integrated, is built into the existing dashboard to provide more insights into ORCA data for institutions in the ORCA Business Programs.",
      links: [
        { icon: "fa-brands fa-github", href: "https://github.com/jolietran525/trac-orcanalysis" },
        { icon: "fa-solid fa-map", href: "https://jolietran525.github.io/trac-orcanalysis/" },
        { icon: "fa-solid fa-circle-info", href: "https://orcanalysis.com/pages/about" }
      ],
      href: "https://jolietran525.github.io/trac-orcanalysis/"
    },
    {
      image: "images/osw-project.png",
      title: "TDEI: Conflation Review Tool",
      role: "Research Engineer @ TRAC",
      description: "This is a web map interface that facilitates reviewing the results from the OpenSidewalks Conflation project.",
      links: [
        { icon: "fa-brands fa-github", href: "https://github.com/jolietran525/trac-conflation-review-tool" },
        { icon: "fa-solid fa-map", href: "https://jolietran525.github.io/trac-conflation-review-tool/" }
      ],
      href: "https://jolietran525.github.io/trac-conflation-review-tool/"
    },
    {
      image: "images/conflation-project2.png",
      title: "TDEI: OpenSidewalks Conflation",
      role: "Research Engineer @ TRAC",
      description: "This project automates the sidewalk data collection in OSM by extracting sidewalk attributes from the State & City DOT and feeding into OSM through data integration.",
      links: [
        { icon: "fa-brands fa-github", href: "https://github.com/jolietran525/trac-conflation" },
        { icon: "fa-solid fa-circle-info", href: "assets/OpenSidewalks-Conflation.pdf" }
      ],
      href: "https://jolietran525.github.io/trac-conflation/"
    },
    // {
    //   image: "images/geog328-project.png",
    //   title: "2022 U.S Influenza Map",
    //   role: "Web GIS Coursework",
    //   description: "This map provides dashboards visualizing weekly and annually data of influenza cases in 2022.",
    //   links: [
    //     { icon: "fa-brands fa-github", href: "https://github.com/lquan02/geog328_flu_map" },
    //     { icon: "fa-solid fa-map", href: "https://lquan02.github.io/geog328_flu_map/" }
    //   ],
    //   href: "https://lquan02.github.io/geog328_flu_map/"
    // }
  ]
};

var personalContent = {
  hello: {
    slides: [
      { greeting: "PLAYER PROFILE: PERSONAL", title: "I'm <span>Jolie Tran</span>", subtitle: "Photography hobbyist, playlist curator, cinema appreciator, and coffee/matcha lover." },
      { greeting: "PLAYER PROFILE: PERSONAL", title: "Collecting <span>small moments</span>", subtitle: "A playful archive of images, sounds, films, and hobbies in progress." }
    ],
    image: "images/photo_archive/v_photo_archive_1.png"
  },
  about: {
    paragraphs: [
      "Fun fact, I speak 4 languages: Vietnamese, English, Mandarin, and data.",
      "After my 9-5, I love spending time alone, enjoying the quiet moments. I love solo dates, wandering around town, or just simply staying in and decluttering my space.",
      "Photography is my favorite excuse to wander. I am drawn to candid street scenes, changing light, and the quiet geometry of cities.",
      "Music is something I cannot live without. I need music to power through my days, no matter what I am doing. It keeps me sane.",
      "I am a caffeine enthusiast. I enjoy exploring new coffee and matcha shops around town. I also make my own drinks at home, experiencing the process of brewing and tasting different beans and powder/leaves.",
    ],
    details: [
      { icon: "fa-solid fa-camera", text: "Photography archive", href: "#projects-section" },
      { icon: "fa-solid fa-music", text: "Current listening rotation", href: "#projects-section" },
      { icon: "fa-solid fa-film", text: "Films on my watchlist", href: "#projects-section" }
    ]
  },
  resume: {
    entries: [
      { category: "personal", date: "CURRENT QUEST"
        , title: "Build a tiny photo archive"
        , organization: "Ongoing", status: "locked"
        , bullets: ["Collecting favorite images and notes from random walks."] },
      { category: "personal", date: "RECENTLY CLEARED"
        , title: "Trying out new coffee and matcha shops around town"
        , organization: "Ongoing", status: "locked"
        , bullets: ["A guilty pleasure of exploring new flavors."] },
      { category: "personal", date: "RECENTLY CLEARED"
        , title: "Make room for more a diverse range of music and shows"
        , organization: "Ongoing", status: "locked"
        , bullets: ["Saving shows and songs that deserve a second listen."] }
    ],
    cv: "#"
  },
  expertise: [
    { icon: "fa-solid fa-camera-retro", title: "Street & everyday photography" },
    { icon: "fa-solid fa-headphones", title: "Playlist building for every mood" },
    { icon: "fa-solid fa-utensils", title: "Caffeine exploration" },
    { icon: "fa-solid fa-film", title: "Cinema deep dives" }
  ],
  skills: [
    { name: "Photography", level: "ACTIVE", progress: 72 },
    { name: "Music discovery", level: "ACTIVE", progress: 72 },
    { name: "Caffeine exploration", level: "ACTIVE", progress: 72 },
    { name: "Film exploration", level: "ACTIVE", progress: 72 }
  ],
  projects: [
    { image: "images/photo_archive/h_photo_archive_1.png", title: "Little Things that Matter", role: "Photography"
      , description: "A future collection of street scenes, shadows, and places worth slowing down for."
      , links: [], href: ""
      , photos: [
        { src: "images/photo_archive/h_photo_archive_1.png", caption: "Gas Work Park's Geese" },
        { src: "images/photo_archive/v_photo_archive_1.png", caption: "Free as a bird" },
        { src: "images/photo_archive/h_photo_archive_2.png", caption: "Sakura-chan, can you stay a little longer?" },
        { src: "images/photo_archive/v_photo_archive_2.png", caption: "Ben Thanh Market" },
        { src: "images/photo_archive/v_photo_archive_3.png", caption: "Pike Place Market's sunset view" },
        { src: "images/photo_archive/v_photo_archive_4.png", caption: "Humans on the WSF" },
        { src: "images/photo_archive/v_photo_archive_5.png", caption: "Color pallete" },
        { src: "images/photo_archive/v_photo_archive_6.png", caption: "Gems on the sky" },
        { src: "images/photo_archive/v_photo_archive_7.png", caption: "An audio visual gallery, National Nordic Museum" },
      ] },
    { image: "images/image_2.jpg", title: "The Listening Room", role: "Music"
      , description: "Albums, artists, and small soundtrack moments that keep the week moving."
      , links: [], href: "#"
      , playlists: [
        { title: "Daily mix", src: "https://open.spotify.com/embed/playlist/37i9dQZF1E4m9ZnqmwaAtb?utm_source=generator&si=1babf6c9d13b4a3a" },
        { title: "Favorite artist", src: "https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO2MKBFK?utm_source=generator&si=559dfcbbd0b742fc"}
      ] },
    { image: "images/image_2.jpg", title: "The Taste", role: "Coffee and Tea"
      , description: "Exploring the world of coffee and tea, from bean to cup."
      , links: [], href: "#"
      , locations: [
        { type: "Coffee", title: "Ancient Gate Coffee", href: "https://maps.app.goo.gl/RvaupHdMPvD9H8rP7" },
        { type: "Coffee", title: "Monorail Expresso", href: "https://maps.app.goo.gl/73SXQzCJNkXvLwLW7" },
        { type: "Tea", title: "Miro Tea", href: "https://maps.app.goo.gl/yN55MgbR84QkpGDv8" },
        { type: "Tea", title: "CU URBAN MARKET & CAFE", href: "https://maps.app.goo.gl/EejSy6pUpxUFvZzw7" }
      ] },
    { image: "images/image_3.jpg", title: "The Watchlist", role: "Cinema"
      , description: "A running list of films to revisit, recommend, and discuss over coffee."
      , links: [], href: "#"
        , watchlist: [
          { title: "Gone Girl (2014)"
            , poster: "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_FMjpg_UY2048_.jpg"
            , imdb: "https://www.imdb.com/title/tt2267998/" },
          { title: "Shutter Island (2010)"
            , poster: "https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_.jpg"
            , imdb: "https://www.imdb.com/title/tt1130884/" },
          { title: "Someday or One Day (2019)"
            , poster: "https://m.media-amazon.com/images/M/MV5BMDM1ODI5NTYtYzk1ZC00ZmQ0LTgwOTgtNDcxNGU1Nzk1NjZhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            , imdb: "https://www.imdb.com/title/tt11262762/" },
          { title: "Severance (2022)"
            , poster: "https://m.media-amazon.com/images/M/MV5BZDI5YzJhODQtMzQyNy00YWNmLWIxMjUtNDBjNjA5YWRjMzExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            , imdb: "https://www.imdb.com/title/tt11280740/" },
          { title: "Slow Horses (2022)"
            , poster: "https://m.media-amazon.com/images/M/MV5BY2NkNTBiYWUtMGFiZS00MGI4LWE3YjMtZTU3NzhhZmEyYzlkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            , imdb: "https://www.imdb.com/title/tt5875444/" },
          { title: "With You (2016)"
            , poster: "https://m.media-amazon.com/images/M/MV5BYjA4Y2M1ZjktM2FhYS00YTY5LWI3ODktMDlhODJlZjhjMTlhXkEyXkFqcGc@._V1_.jpg"
            , imdb: "https://www.imdb.com/title/tt7049444/" },
          { title: "Your Name Engraved Herein (2020)"
            , poster: "https://m.media-amazon.com/images/M/MV5BODcwZDY4N2QtYzkwNy00NzNjLWIwODAtM2Y5MGU0YzM1MzQyXkEyXkFqcGc@._V1_.jpg"
            , imdb: "https://www.imdb.com/title/tt10329134/" }
        ] }
  ]
};

function getSavedMode() {
  try { return window.sessionStorage.getItem('portfolioMode'); } catch (e) { return null; }
}
var activePortfolio = getSavedMode() === 'personal' ? personalContent : portfolioContent;

function externalLink(href, content) {
  if (!href) {
    return content;
  }
  var isInternalAnchor = href.charAt(0) === '#';
  return isInternalAnchor
    ? '<a href="' + href + '">' + content + '</a>'
    : '<a href="' + href + '" target="_blank" rel="noopener">' + content + '</a>';
}

function renderHello() {
  // The hero image is static (outside the carousel) so only the text changes between slides.
  document.querySelector('#home-section .hero-image__pic').style.backgroundImage = 'url("' + activePortfolio.hello.image + '")';
  document.querySelector('#home-section .home-slider').innerHTML = activePortfolio.hello.slides.map(function(slide) {
    return '<div class="slider-item"><div class="container"><div class="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true"><div class="one-forth d-flex align-items-center ftco-animate" data-scrollax=" properties: { translateY: \'70%\' }"><div class="text"><span class="subheading">' + slide.greeting + '</span><h1 class="mb-4 mt-3">' + slide.title + '</h1>' + (slide.subtitle ? '<h2 class="mb-4">' + slide.subtitle + '</h2>' : '') + '<p><a href="#about-section" class="btn btn-primary py-3 px-4">About me</a> <a href="#projects-section" class="btn btn-white btn-outline-white py-3 px-4">Showcase</a></p></div></div></div></div></div>';
  }).join('');
}

function renderAbout() {
  var about = activePortfolio.about;
  document.querySelector('#about-section .heading-section p').innerHTML = about.paragraphs.join('<br><br>');
  document.querySelector('#about-section .about-info').innerHTML = about.details.map(function(detail) {
    return '<li class="d-flex"><span><i class="' + detail.icon + '" style="font-size: 20px;"></i></span><span>' + externalLink(detail.href, detail.text) + '</span></li>';
  }).join('');
}

function renderResume() {
  var categoryLabels = {
    education: "Education",
    professional: "Professional Experience",
    volunteer: "Internship/Volunteer Experience",
    personal: "Personal Quests"
  };
  var categoryOrder = activePortfolio === personalContent ? ["personal"] : ["professional", "education", "volunteer"];
  var entryIndex = 0;
  var resumeMarkup = categoryOrder.map(function(category) {
    var entries = activePortfolio.resume.entries.filter(function(entry) {
      return entry.category === category;
    });
    if (!entries.length) {
      return '';
    }
    var heading = '<div class="resume-category-heading"><span class="zone-label">ZONE ' + String(categoryOrder.indexOf(category) + 1).padStart(2, '0') + '</span><h3>' + categoryLabels[category] + '</h3></div>';
    var cards = entries.map(function(entry) {
      var index = entryIndex++;
      var body = entry.groups ? entry.groups.map(function(group) {
        return '<section><span class="resume-group-heading"><strong>' + group.title + '</strong><span>' + group.dates + '</span></span><ul>' + group.bullets.map(function(bullet) { return '<li>' + bullet + '</li>'; }).join('') + '</ul></section>';
      }).join('') : '<ul>' + entry.bullets.map(function(bullet) { return '<li>' + bullet + '</li>'; }).join('') + '</ul>';
      var status = entry.status || "unlocked";
      var statusLabel = status === "locked" ? "MAP LOCKED" : "MILESTONE UNLOCKED";
      return '<div class="card resume-wrap resume-' + status + ' ftco-animate"><div class="resume-node" aria-hidden="true">' + (status === "locked" ? "??" : String(index + 1).padStart(2, '0')) + '</div><div class="card-header" id="heading-' + index + '" data-toggle="collapse" data-target="#collapse-' + index + '" aria-expanded="true" aria-controls="collapse-' + index + '"><span class="achievement-label">' + statusLabel + '</span><span class="date">' + entry.date + '</span><h3>' + entry.title + '</h3><span class="position">' + entry.organization + '</span></div><div id="collapse-' + index + '" class="card-body collapse" aria-labelledby="heading-' + index + '" data-parent="#accordion"><div class="mt-4">' + body + '</div></div></div>';
    }).join('');
    return heading + cards;
  }).join('');
  document.querySelector('#resume-section #accordion').innerHTML = resumeMarkup;
  document.querySelector('#resume-section .text-center p').innerHTML = activePortfolio === personalContent ? '' : '<a href="' + activePortfolio.resume.cv + '" target="_blank" class="btn btn-primary py-4 px-5">Download CV</a>';
}

function renderExpertise() {
  document.querySelector('#expertise-section .row:last-child').innerHTML = activePortfolio.expertise.map(function(item) {
    return '<div class="col-md-4 text-center d-flex ftco-animate"><div class="services-1" style="cursor:context-menu;"><span class="icon"><i class="' + item.icon + '"></i></span><div class="desc"><h3 class="mb-5">' + item.title + '</h3></div></div></div>';
  }).join('');
}

function renderSkills() {
  document.querySelector('#skills-section .row:last-child').innerHTML = activePortfolio.skills.map(function(skill) {
    return '<div class="col-md-6 animate-box"><div class="progress-wrap ftco-animate"><h3>' + skill.name + '</h3><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="' + skill.progress + '" aria-valuemin="0" aria-valuemax="100" style="width:' + skill.progress + '%"><span>' + skill.level + '</span></div></div></div></div>';
  }).join('');
}

function renderProjects() {
  document.querySelector('#projects-section .row:last-child').innerHTML = activePortfolio.projects.map(function(project) {
    if (project.playlists) {
      return '<div class="col-md-6 room-container"><div class="playlist-room room-card ftco-animate"><div class="playlist-room__header"><span class="playlist-room__eyebrow">' + project.role + '</span><h3>' + project.title + '</h3><p>' + project.description + '</p></div><div class="playlist-room__scroll">' + project.playlists.map(function(playlist) {
        return '<div class="playlist-room__item"><h4>' + playlist.title + '</h4><iframe title="' + playlist.title + ' Spotify playlist" style="border-radius:12px" src="' + playlist.src + '" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>';
      }).join('') + '</div><button class="room-card__toggle" type="button">VIEW MORE</button></div></div>';
    }
    if (project.locations) {
      return '<div class="col-md-6 room-container"><div class="location-room room-card ftco-animate"><div class="location-room__header"><span class="location-room__eyebrow">' + project.role + '</span><h3>' + project.title + '</h3><p>' + project.description + '</p></div><div class="location-room__scroll">' + project.locations.map(function(location) {
        return '<a class="location-room__item" href="' + location.href + '" target="_blank" rel="noopener"><span class="location-room__icon" aria-hidden="true"><i class="fa-solid fa-location-dot"></i></span><span><strong>' + location.title + '</strong><small>OPEN MAP SEARCH</small></span><span class="location-room__arrow" aria-hidden="true">&gt;</span></a>';
      }).join('') + '</div><button class="room-card__toggle" type="button">VIEW MORE</button></div></div>';
    }
    if (project.watchlist) {
      return '<div class="col-md-6 room-container"><div class="watchlist-room room-card ftco-animate"><div class="watchlist-room__header"><span class="watchlist-room__eyebrow">' + project.role + '</span><h3>' + project.title + '</h3><p>' + project.description + '</p></div><div class="watchlist-room__scroll">' + (project.watchlist.length ? project.watchlist.map(function(item) {
        return '<a class="watchlist-room__poster" href="' + item.imdb + '" target="_blank" rel="noopener"><img src="' + item.poster + '" alt="' + item.title + ' poster" loading="lazy"><span>' + item.title + '</span></a>';
      }).join('') : '<p class="watchlist-room__empty">Add a poster URL and IMDb page to the watchlist data to start building this collection.</p>') + '</div><button class="room-card__toggle" type="button">VIEW MORE</button></div></div>';
    }
    if (project.photos) {
      return '<div class="col-md-6 room-container"><div class="photo-room room-card ftco-animate"><div class="photo-room__header"><span class="photo-room__eyebrow">' + project.role + '</span><h3>' + project.title + '</h3><p>' + project.description + '</p></div><div class="photo-room__scroll">' + (project.photos.length ? project.photos.map(function(photo) {
        return '<div class="photo-room__item"><img src="' + photo.src + '" alt="' + (photo.caption || project.title) + '" loading="lazy">' + (photo.caption ? '<span>' + photo.caption + '</span>' : '') + '</div>';
      }).join('') : '<p class="photo-room__empty">Add photo URLs to start building this archive.</p>') + '</div><button class="room-card__toggle" type="button">VIEW MORE</button></div></div>';
    }
    return '<div class="col-md-6 room-container"><div class="project img ftco-animate d-flex justify-content-center align-items-center" style="background-image:url(' + project.image + ')"><div class="overlay"></div><div class="text text-center p-4"><h3>' + externalLink(project.href, '<strong>' + project.title + '</strong>') + '</h3><span>' + project.role + '</span><p>' + project.description + '</p><div class="icon">' + project.links.map(function(link) { return externalLink(link.href, '<i class="' + link.icon + '"></i>'); }).join(' ') + '</div></div></div></div>';
  }).join('');
}

function renderPortfolio() {
  renderHello();
  renderAbout();
  renderResume();
  renderExpertise();
  renderSkills();
  renderProjects();
}

renderPortfolio();

document.querySelector('#projects-section .row:last-child').addEventListener('click', function(event) {
  var toggle = event.target.closest('.room-card__toggle');
  if (!toggle) {
    return;
  }
  var card = toggle.closest('.room-card');
  var expanded = card.classList.toggle('is-expanded');
  toggle.textContent = expanded ? 'VIEW LESS' : 'VIEW MORE';
});

function updateModeControl(personalMode) {
  document.body.classList.toggle('personal-mode', personalMode);
  document.querySelector('#mode-toggle').setAttribute('aria-checked', String(personalMode));
}

updateModeControl(activePortfolio === personalContent);

document.querySelector('#mode-toggle').addEventListener('click', function() {
  var modeToggle = this;
  if (modeToggle.disabled) {
    return;
  }
  var personalMode = activePortfolio !== personalContent;
  modeToggle.disabled = true;
  try { window.sessionStorage.setItem('portfolioMode', personalMode ? 'personal' : 'professional'); } catch (e) {}
  // Flip the switch first so the slide animation is visible, then reload with the new content.
  modeToggle.setAttribute('aria-checked', String(personalMode));
  window.setTimeout(function() {
    window.location.reload();
  }, 260);
});

