/* =====================================================================
   PORTFOLIO CONTENT — the only file you need to edit.
   ---------------------------------------------------------------------
   Option A: edit this file and push it. Done.
   Option B: keep your content in a Google Sheet instead.
     1. Import portfolio-sheet-template.csv into a new Google Sheet.
     2. File > Share > Publish to web > (this sheet) > "Comma-separated values (.csv)" > Publish.
     3. Paste the link it gives you into PORTFOLIO_SHEET_CSV_URL below.
   When the sheet loads, its rows replace the matching sections here.
   If it can't load (offline, unpublished, slow), this file is used.

   Formatting conventions (same in this file and in the sheet):
     - Dates: "Mon YYYY" (e.g. "Nov 2025"). End date "Present" = ongoing.
       Experience and leadership roles are drawn on the timeline automatically.
       A role whose start date is in the future is labelled "Upcoming".
     - Projects ending in "Present" are listed under "Currently building".
     - Leave link or demo empty to hide that button.
     - Projects show no pictures by default. To add one only where it really
       helps, set image to a docs/ path or any image URL (e.g. a file in the
       repo: https://raw.githubusercontent.com/<user>/<repo>/HEAD/<path>.png).
   ===================================================================== */

window.PORTFOLIO_SHEET_CSV_URL = ""; // e.g. "https://docs.google.com/spreadsheets/d/e/XXXX/pub?output=csv"

window.PORTFOLIO = {
  profile: {
    name: "Melvin Tai",
    headline: "Computer Science in Data Science Undergraduate",
    university: "Monash University Malaysia",
    location: "Subang Jaya, Malaysia",
    graduation: "June 2027",
    summary:
      "Hi, I'm Melvin, BCs in Data Science undergrad at Monash University Malaysia. I'm actively pursuing internship/job opportunities in AI/ML, computer vision, cloud, and tech-strategy consulting - feel free to reach out!",
    availability: "Open to Research Opportunities",
    email: "melvintaich.126@gmail.com",
    linkedin: "https://www.linkedin.com/in/melvin-tai/",
    github: "https://github.com/melvin-tai",
    resume: "https://drive.google.com/drive/folders/1ao26OLonXC0aP4CorUyVR4OLBLDO8Whs?usp=drive_link",
    photo: "docs/pfp.jpg"
  },

  experience: [
    {
      title: "Data Science & Artificial Intelligence Intern",
      organization: "Zurich Services Malaysia Berhad",
      location: "Kuala Lumpur, Malaysia",
      start: "Nov 2026",
      end: "Feb 2027"
    },
    {
      title: "Consulting Intern (SAP Operations)",
      organization: "PricewaterhouseCoopers (PwC)",
      location: "Kuala Lumpur, Malaysia",
      start: "Nov 2025",
      end: "Feb 2026",
      highlights: [
        "Built 600+ unique test entries across Employee Profile, Leave, Work Schedule and Benefit modules for 20+ legal entities in 10+ countries, accelerating UAT and cutting manual input effort by ≈72%.",
        "Optimised 165+ HR benefit workflows and 55+ conditional business rules, and configured 15+ role-based access controls, reducing potential errors by ≈60% while improving cross-regional compliance.",
        "Coordinated 150+ rows of project planning and calendar data over 4+ months across 5+ departments, and introduced standard documentation templates that cut follow-up time by ≈45%."
      ],
      tags: ["SAP SuccessFactors", "Microsoft 365", "SharePoint", "Visio"]
    }
  ],

  leadership: [
    {
      title: "Founder and Chief Executive Officer",
      organization: "Monash Optima (mOptima)",
      location: "Monash University Malaysia",
      start: "Aug 2026",
      end: "May 2027",
      summary:
        "Built the first generation of mOptima, a student tech-consultancy team focused on competitive innovation, automation and global partnerships.",
      tags: ["C-suite management", "Advisory pitching", "Google Workspace", "Canva"]
    },
    {
      title: "Director, President's Office",
      organization: "Monash Career Peer",
      location: "Monash University Malaysia",
      start: "Jun 2026",
      end: "Dec 2026",
      highlights: [
        "Executed 6+ events over 4 months, reaching 13,800+ higher-education students, and built liaison with 100+ SMEs and MNCs (including Big Four consulting partners in Southeast Asia) to drive external partnerships, generating RM20,000+ in event revenue.",
        "Engineered a conditional marketing tracker for 30+ committees using Google Sheets, the Google Calendar API and Apps Script."
      ],
      tags: ["Partnerships", "Event management", "Apps Script", "Google Calendar API"]
    },
    {
      title: "Officer, Strategy Department",
      organization: "Monash Career Peer",
      location: "Monash University Malaysia",
      start: "Dec 2025",
      end: "May 2026",
      highlights: [
        "Assessed 5+ events and delivered 90+ internship and career opportunities and advice to a community of 1,800+ students.",
        "Developed an automated posting-tracker system for 30+ committees using Google Sheets, the Google Calendar API and Apps Script (JavaScript), streamlining outreach and engagement by 40%+."
      ],
      tags: ["JavaScript", "Apps Script", "Google Sheets", "Google Calendar API"]
    },
    {
      title: "Auditor, Heads of Finance’s Department",
      organization: "Monash University Student Association",
      location: "Monash University Malaysia",
      start: "Aug 2025",
      end: "Dec 2025",
      summary:
        "Prepared financial reports (fund acknowledgement receipts, fund requisition forms, budget proposals and financial reports) for 20+ events totalling RM15,000+ in reimbursements in Microsoft Excel, serving 3,600+ students.",
      tags: ["Microsoft Excel", "Financial reporting"]
    },
    {
      title: "Auditor, Secretary and Treasurer Department",
      organization: "Monash Blockchain Club",
      location: "Monash University Malaysia",
      start: "Aug 2025",
      end: "Nov 2025",
      summary:
        "Ran treasury and secretarial processes and funding assurance for 3 events (RM300+), liaising with the umbrella organisation and enforcing 3+ compliance checks for 200+ participants.",
      tags: ["Treasury", "Compliance"]
    }
  ],

  projects: [
    {
      title: "Thermal Imaging A.I. Security Screening System",
      category: "Computer Vision Deep Learning",
      start: "Jun 2026",
      end: "Present",
      summary:
        "An AI-powered thermal-imaging security screening system, trained on a specialised dataset, that detects threats in real time and classifies them to an exact label (e.g. \"Glock-19\", \"Blade, 5-inch\"). Built in Python and PyTorch to reduce the X-ray use, time and cost of basic security screening.",
      tags: ["Python", "PyTorch", "Computer vision", "Deep learning"],
      link: "https://github.com/melvin-tai/Thermal-Imaging-AI-Security-Screening-System",
      linkLabel: "Repository"
    },
    {
      title: "Swing Trading Trend Correlative Predictor",
      category: "Dimensionality Reduction Machine Learning",
      start: "May 2025",
      end: "Present",
      summary:
        "Optimising week-horizon (mid-term) trading prediction accuracy by identifying the most effective input ranges. Subject: SPY (SPDR S&P 500 ETF Trust), with data from Kaggle.",
      tags: ["Python", "Dimensionality reduction", "Polars", "scikit-learn", "Jupyter"],
      link: "https://github.com/melvin-tai/Swing-Trading-Trend-Correlative-Predictor",
      linkLabel: "Repository"
    },
    {
      title: "Fraud Detection & Intrusion Detection System",
      category: "Cloud Cybersecurity Machine Learning",
      start: "Mar 2026",
      end: "Present",
      summary:
        "A deployable security-analytics pipeline that detects credit-card fraud and network intrusions in real time, with secure APIs, alert monitoring and SHAP-based explainability.",
      tags: ["Python", "Polars", "XGBoost", "FastAPI", "Docker", "SHAP"],
      link: "https://github.com/melvin-tai/Fraud-Detection-Pipeline",
      linkLabel: "Repository"
    },
    {
      title: "Field of View Lens Projection Laboratory",
      category: "Camera Modeling Computer Vision",
      start: "Apr 2026",
      end: "Oct 2026",
      summary:
        "A browser-based lab for adjusting focal length, fisheye distortion and GoPro lens modes to see how angle and field of view change in real time, with nothing to install.",
      tags: ["JavaScript", "Camera modelling", "Computer vision"],
      link: "https://github.com/melvin-tai/FoV-Lens-Projection-Lab",
      linkLabel: "Repository",
      demo: "https://melvin-tai.github.io/FoV-Lens-Projection-Lab/"
    },
    {
      title: "Minimum Latency Audio Language Interpreter",
      category: "Speech Translation Deep Learning",
      start: "Apr 2026",
      end: "Oct 2026",
      summary:
        "A live interpreter in the browser that transcribes speech in six languages and shows each sentence with its translation, with on-device or online processing options.",
      tags: ["JavaScript", "Speech recognition", "Machine translation"],
      link: "https://github.com/melvin-tai/Audio-Language-Interpretation",
      linkLabel: "Repository",
      demo: "https://melvin-tai.github.io/Audio-Language-Interpretation/"
    },
    {
      title: "Kaizen Cloud Intrusion Detection System",
      category: "Cloud Computing, Generative AI API, MLOps",
      start: "Jan 2026",
      end: "Feb 2026",
      summary:
        "An AI-driven cloud intrusion-detection pipeline built with Vertex AI and the Gemini 3 API. It processes infrastructure logs through a continuous neural-network MLOps loop to detect unauthorised access and generate human-readable security explanations.",
      tags: ["Vertex AI", "Gemini API", "Google Cloud", "MLOps", "Neural networks"],
      link: "https://github.com/melvint-comp/Gemini-3",
      linkLabel: "Repository",
      demo: "https://melvint-comp.github.io/Gemini-3/"
    },
    {
      title: "Automated Systems & Events Retriever with Spreadsheets, Calendar, Extensions",
      category: "Automation",
      start: "Jan 2026",
      end: "Feb 2026",
      summary:
        "An automated events retriever integrating Google Sheets, Google Calendar and a Chrome extension, reducing a 3-step manual logging process to under 2 steps and improving workflow efficiency by ≈64%.",
      tags: ["JavaScript", "Google Sheets", "Google Calendar", "Chrome Extensions"],
      link: "https://github.com/melvin-tai/Automated-Systems-Events-Retriever",
      linkLabel: "Repository"
    },
    {
      title: "GrabRide Fare-Time Cost Optimization",
      category: "Predictive Machine Learning",
      start: "Nov 2025",
      end: "Jan 2026",
      summary:
        "A predictive framework in Python and Pandas that recommends the cheapest time to book GrabRide trips, achieving ≈47% optimisation in e-hailing price reduction.",
      tags: ["Python", "Pandas", "Predictive modelling", "Data collection"],
      link: "https://github.com/melvin-tai/GrabRide-Fare-Time-Cost-Optimization",
      linkLabel: "Repository",
      demo: "https://melvin-tai.github.io/GrabRide-Fare-Time-Cost-Optimization/"
    },
    {
      title: "Weighted Rating System & Statistical Modelling on Small-Sample Bias",
      category: "Machine Learning",
      start: "Jun 2025",
      end: "Jul 2025",
      highlights: [
        "Engineered a weighted-rating algorithm in Python/Polars after analysing statistical models (Bayesian average, Wilson score interval, Bradley–Terry–Luce, Dirichlet-multinomial) to normalise large datasets and mitigate small-sample bias.",
        "Built automated pipelines for quantitative analysis and visualisation (histograms, box plots, clustering, normal fits) to evaluate algorithm performance across 400K+ records."
      ],
      tags: ["Python", "Polars", "Statistical modelling", "Data visualisation"],
      link: "https://github.com/melvin-tai/Weighted-Rating-System",
      linkLabel: "Repository"
    },
    {
      title: "Project GRID - Geological Responsive and Informative Device",
      category: "Computer Engineering",
      start: "Dec 2024",
      end: "Feb 2025",
      highlights: [
        "Developed a multi-sensor survival-device prototype on an ESP32 microcontroller (Arduino C++), combining ergonomic energy harvesting with synchronised date and time to extend survival time for lost adventurers.",
        "Optimised cost and design to reduce defect rate and improve scalability for commercial production."
      ],
      tags: ["ESP32", "Arduino", "C++", "Embedded systems"],
      link: "https://github.com/melvin-tai/Project-GRID",
      linkLabel: "Repository"
    }
  ],

  writing: [
    {
      title: "Generative AI in Healthcare: Addressing Risks and Ensuring Patient Safety",
      status: "Research Proposal",
      summary:
        "Evaluated trust and patient safety in AI chatbots against the ACM Code of Ethics and proposed a framework for safer generative-AI deployment.",
      link: "https://drive.google.com/drive/folders/1RHv512kvcRvM7UTPh2krdpgj2SadyUYJ?usp=sharing",
      linkLabel: "View proposal"
    },
    {
      title: "Google LLC's Strategies to take over the Cloud Computing Industry",
      status: "Research Preprint",
      summary:
        "Analysed Google Cloud and its competitors' market development, innovation and M&A over 5+ years, and built a TOWS matrix to recommend ways to grow market share.",
      link: "https://drive.google.com/file/d/1Hy_fa31npU_1Xy1tFj0GfyiObRzP2q8n/view?usp=sharing",
      linkLabel: "Read preprint"
    },
    {
      title: "Increasing Investment and Product Defect Rate in Jabil Inc.'s GoPro Project",
      status: "Research Preprint",
      summary:
        "Assessed manufacturing performance with SWOT and fishbone analyses across 200+ workstations, quantifying a 7:3 manpower-to-automation ratio and a defect-rate fall from 8% to 0.5% over 7 product generations.",
      link: "https://drive.google.com/file/d/1tmIwbwqHsO2E_J56pmdi6T5MlM13R5T9/view?usp=sharing",
      linkLabel: "Read preprint"
    },
    {
      title: "Modeling a Camera's Field of View",
      status: "Research Preprint",
      summary: "",
      link: "https://drive.google.com/file/d/1-hUJ_lgmyGY1akszkmVyXZiWeStMS39S/view?usp=drive_link",
      linkLabel: "Read preprint"
    }
  ],

  skills: [
    { title: "Languages", tags: ["Python", "Java", "R", "C++", "JavaScript", "HTML/CSS", "Bash Shell", "Arduino"] },
    { title: "Data & ML", tags: ["Pandas", "Polars", "NumPy", "SciPy", "Matplotlib", "Scikit-learn", "Seaborn", "PyTorch"] },
    { title: "Tools & platforms", tags: ["GitHub/GitLab", "Google Cloud (Vertex AI)", "Google Workspace", "Microsoft 365", "Canva", "Linux", "SAS Viya", "SAP SuccessFactors"] }
  ]
};
