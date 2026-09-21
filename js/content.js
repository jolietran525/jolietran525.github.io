/* Edit the data objects below to add, remove, or reorder portfolio content. */

var portfolioContent = {
  hero: {
    slides: [
      {
        greeting: "Hello!",
        title: "I'm <span>Jolie Tran</span>",
        subtitle: "A Geospatial Data Analyst"
      },
      {
        greeting: "Hello!",
        title: "I'm a <span>geospatial data analyst</span> based in Seattle, WA"
      }
    ],
    image: "images/bg_2.png"
  },

  about: {
    image: "images/about.jpg",
    paragraphs: [
      "Jolie is currently a senior studying Geography: Data Science at the University of Washington. Upon graduation, she will have at least 1 year of experience with data analytics and web development.",
      "Jolie has a passion in \"cooking up\" the data to create insightful dashboards that can inform authorities to create positive changes in her community, especially in the transportation sector, with the focus on road and safety analysis."
    ],
    details: [
      { icon: "fa-solid fa-map-pin", text: "Seattle WA" },
      { icon: "fa-solid fa-inbox", text: "jolietran525@gmail.com", href: "mailto:jolietran525@gmail.com" },
      { icon: "fa-brands fa-linkedin-in", text: "Jolie's LinkedIn", href: "https://www.linkedin.com/in/jolietran525/" },
      { icon: "fa-brands fa-github", text: "Jolie's Github", href: "https://github.com/jolietran525" }
    ]
  },

  resume: {
    entries: [
      {
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
        date: "June 2023-Present",
        title: "GIS Analyst",
        organization: "Washington State Transportation Center (TRAC)",
        groups: [
          {
            title: "ORCAnalysis",
            dates: "Dec 2023 - Present",
            bullets: [
              "Implemented robust methods in PostgreSQL to effectively rectify wrongly encoded stops within the ORCA data based on GTFS, ensuring data integrity and accuracy.",
              "Created an interactive map interface and treemap/billboard dashboards, seamlessly integrated with ORCA data, providing a comprehensive visualization of ridership at each stop in adherence to the GTFS standard."
            ]
          },
          {
            title: "TDEI: OpenSidewalks",
            dates: "June 2023 - Present",
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
        date: "June 2023-August 2023",
        title: "Social Media Research Intern",
        organization: "Humanistic Data Science Summer Institute (HDSSI) @ University of Washington",
        bullets: [
          "Collaborated with a multidisciplinary team to conduct a comprehensive analysis of social media conversations on Twitter, focusing on the influence of historical figures in political movements and historical events.",
          "Analyzed an extensive dataset of 3 million tweets spanning from 2007 to 2023, applying advanced data processing techniques using Pandas and Dask libraries in Python. This efficient analysis revealed key trends and patterns.",
          "Implemented a mixed-method research approach, combining quantitative data analysis with qualitative assessment to uncover nuanced patterns and trends in social media conversations.",
          "Contributed valuable insights and created compelling data visualizations for an ongoing book project led by a professor at UW, enhancing the research and its potential impact."
        ]
      },
      {
        date: "April 2023-Present",
        title: "Undergraduate Research Assistant",
        organization: "Laboratory for Auditory Neuroscience and Development (LAND Lab)",
        bullets: [
          "Utilized MATLAB and the Hilbert transform to extract the envelope of the speech from EEG data of 7-month-old and 11-month-old infants, with a success rate of 70%.",
          "Engaged in the pre-processing and artifact removal pipeline, achieving a 25% reduction in data distortion.",
          "Analyzed chance prediction accuracy and determined whether the observed prediction accuracy exceeded chance."
        ]
      }
    ],
    cv: "assets/JolieTran_GISAnalyst_Resume.pdf"
  },

  expertise: [
    { icon: "flaticon-web-design", title: "Web Map Development" },
    { icon: "flaticon-analysis", title: "Data Analytics" },
    { icon: "flaticon-innovation", title: "Geospatial Data Analytics" }
  ],

  skills: [
    { name: "PL/SQL", level: 95, color: 1 },
    { name: "JavaScript", level: 85, color: 2 },
    { name: "Python", level: 85, color: 3 },
    { name: "R", level: 70, color: 4 },
    { name: "MATLAB", level: 70, color: 5 },
    { name: "GIS: QGIS, PostGIS", level: 95, color: 6 },
    { name: "LeafletJS", level: 85, color: 6 },
    { name: "MapboxGL", level: 75, color: 6 }
  ],

  projects: [
    {
      image: "images/orca-project2.png",
      title: "ORCAnalysis",
      role: "GIS Analyst @ TRAC",
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
      role: "GIS Analyst @ TRAC",
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
      role: "GIS ANALYST @ TRAC",
      description: "This project automates the sidewalk data collection in OSM by extracting sidewalk attributes from the State & City DOT and feeding into OSM through data integration.",
      links: [
        { icon: "fa-brands fa-github", href: "https://github.com/jolietran525/trac-conflation" },
        { icon: "fa-solid fa-circle-info", href: "assets/OpenSidewalks-Conflation.pdf" }
      ],
      href: "https://jolietran525.github.io/trac-conflation/"
    },
    {
      image: "images/geog328-project.png",
      title: "2022 U.S Influenza Map",
      role: "Web GIS Coursework",
      description: "This map provides dashboards visualizing weekly and annually data of influenza cases in 2022.",
      links: [
        { icon: "fa-brands fa-github", href: "https://github.com/lquan02/geog328_flu_map" },
        { icon: "fa-solid fa-map", href: "https://lquan02.github.io/geog328_flu_map/" }
      ],
      href: "https://lquan02.github.io/geog328_flu_map/"
    }
  ]
};

function externalLink(href, content) {
  return href ? '<a href="' + href + '" target="_blank" rel="noopener">' + content + '</a>' : content;
}

function renderHero() {
  document.querySelector('#home-section .home-slider').innerHTML = portfolioContent.hero.slides.map(function(slide) {
    return '<div class="slider-item"><div class="overlay"></div><div class="container"><div class="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true"><div class="one-third js-fullheight order-md-last img" style="background-image:url(' + portfolioContent.hero.image + ')"><div class="overlay"></div></div><div class="one-forth d-flex align-items-center ftco-animate" data-scrollax=" properties: { translateY: \'70%\' }"><div class="text"><span class="subheading">' + slide.greeting + '</span><h1 class="mb-4 mt-3">' + slide.title + '</h1>' + (slide.subtitle ? '<h2 class="mb-4">' + slide.subtitle + '</h2>' : '') + '<p><a href="#about-section" class="btn btn-primary py-3 px-4">Contact me</a> <a href="#projects-section" class="btn btn-white btn-outline-white py-3 px-4">My works</a></p></div></div></div></div></div>';
  }).join('');
}

function renderAbout() {
  var about = portfolioContent.about;
  document.querySelector('#about-section .img-about .img').style.backgroundImage = 'url(' + about.image + ')';
  document.querySelector('#about-section .heading-section p').innerHTML = about.paragraphs.join('<br><br>');
  document.querySelector('#about-section .about-info').innerHTML = about.details.map(function(detail) {
    return '<li class="d-flex"><span><i class="' + detail.icon + '" style="font-size: 20px;"></i></span><span>' + externalLink(detail.href, detail.text) + '</span></li>';
  }).join('');
}

function renderResume() {
  document.querySelector('#resume-section #accordion').innerHTML = portfolioContent.resume.entries.map(function(entry, index) {
    var body = entry.groups ? entry.groups.map(function(group) {
      return '<section><span style="color:white; display:flex; justify-content:space-between;"><strong>' + group.title + '</strong>' + group.dates + '</span><ul>' + group.bullets.map(function(bullet) { return '<li>' + bullet + '</li>'; }).join('') + '</ul></section>';
    }).join('') : '<ul>' + entry.bullets.map(function(bullet) { return '<li>' + bullet + '</li>'; }).join('') + '</ul>';
    return '<div class="card resume-wrap ftco-animate"><div class="card-header" id="heading-' + index + '" data-toggle="collapse" data-target="#collapse-' + index + '" aria-expanded="true" aria-controls="collapse-' + index + '"><span class="date">' + entry.date + '</span><h3>' + entry.title + '</h3><span class="position">' + entry.organization + '</span></div><div id="collapse-' + index + '" class="card-body collapse" aria-labelledby="heading-' + index + '" data-parent="#accordion"><div class="mt-4">' + body + '</div></div></div>';
  }).join('');
  document.querySelector('#resume-section .text-center p').innerHTML = '<a href="' + portfolioContent.resume.cv + '" target="_blank" class="btn btn-primary py-4 px-5">Download CV</a>';
}

function renderExpertise() {
  document.querySelector('#expertise-section .row:last-child').innerHTML = portfolioContent.expertise.map(function(item) {
    return '<div class="col-md-4 text-center d-flex ftco-animate"><div class="services-1" style="cursor:context-menu;"><span class="icon"><i class="' + item.icon + '"></i></span><div class="desc"><h3 class="mb-5">' + item.title + '</h3></div></div></div>';
  }).join('');
}

function renderSkills() {
  document.querySelector('#skills-section .row:last-child').innerHTML = portfolioContent.skills.map(function(skill) {
    return '<div class="col-md-6 animate-box"><div class="progress-wrap ftco-animate"><h3>' + skill.name + '</h3><div class="progress"><div class="progress-bar color-' + skill.color + '" role="progressbar" aria-valuenow="' + skill.level + '" aria-valuemin="0" aria-valuemax="100" style="width:' + skill.level + '%"><span>' + skill.level + '%</span></div></div></div></div>';
  }).join('');
}

function renderProjects() {
  document.querySelector('#projects-section .row:last-child').innerHTML = portfolioContent.projects.map(function(project) {
    return '<div class="col-md-6"><div class="project img ftco-animate d-flex justify-content-center align-items-center" style="background-image:url(' + project.image + ')"><div class="overlay"></div><div class="text text-center p-4"><h3>' + externalLink(project.href, '<strong>' + project.title + '</strong>') + '</h3><span>' + project.role + '</span><p>' + project.description + '</p><div class="icon">' + project.links.map(function(link) { return externalLink(link.href, '<i class="' + link.icon + '"></i>'); }).join(' ') + '</div></div></div></div>';
  }).join('');
}

function renderPortfolio() {
  renderHero();
  renderAbout();
  renderResume();
  renderExpertise();
  renderSkills();
  renderProjects();
}

renderPortfolio();
