import { Project, Experience, SkillGroup } from './types';

export const PROJECTS: Project[] =[
  {
    title: "Rate My Schedule",
    description: "Built a Chrome extension that automates UCSD course planning and enrollment for Diamond Hacks 2026.",
    details: "Reads the student's DARS degree audit via content script injection, scrapes RateMyProfessor and CAPE evaluations, and generates conflict-free schedule combinations ranked by weighted priority scoring using reciprocal rank-order centroid weighting. Auto-enrolls in WebReg at pass time via the Browser Use cloud SDK. Stack: Chrome extension (vanilla JS), Express/Node.js backend, SQLite via better-sqlite3.",
    tags: ["JavaScript", "Node.js", "Express", "SQLite", "Chrome Extension", "Browser Use SDK", "Hackathon"],
    date: "Apr 2026",
    link: "https://github.com/ttai2023/ratemyschedule"
  },
  {
    title: "Brain Tumor Segmentation",
    description: "Implemented a 2D U-Net CNN from scratch in PyTorch for automated segmentation on 4-channel multimodal MRI scans.",
    details: "Built entirely from scratch using PyTorch, this model addresses the heavy class imbalance between healthy tissue and tumor boundaries by implementing a custom Dice Loss function. Evaluated against the BraTS dataset, it successfully localizes heterogeneous tumor structures to assist in diagnostic accuracy with a 0.83 validation dice score.",
    tags: ["Python", "PyTorch", "Computer Vision", "U-Net", "Deep Learning", "ECE 176"],
    date: "Jan 2026 - Mar 2026",
    link: "https://github.com/ttai2023/emmywei-territai-ece176-finalproject"
  },
  {
    title: "WayNo Smart Parallel Parking Robot",
    description: "Designed a real-time parallel parking algorithm leveraging sensor fusion and path planning in ROS2.",
    details: "Utilized a combination of HSV color masking, contour detection, and sensor data to allow a multi-agent robotic system to autonomously navigate and park. Achieved >95% accuracy in simulated Gazebo environments and physical testing.",
    tags:["Python", "ROS2", "OpenCV", "Robotics", "ECE 148"],
    date: "Sep 2025 - Dec 2025",
    link: "https://github.com/UCSD-ECEMAE-148/fall-final-project-team-9"
  },
  {
    title: "Professor Card Collector App",
    description: "Collaborated to build a card collector web app for UCSD professors in a team of 12. Voted best project in class.",
    details: "Acted in an Agile/SCRUM environment to map out UI/UX and database schemas. Allowed students to 'collect' trading cards of their favorite UCSD professors. Managed sprint planning, code reviews, and deployments.",
    tags:["HTML", "CSS", "Javascript", "Agile/SCRUM", "CSE 110"],
    date: "Jan 2025 - Mar 2025",
    link: "https://github.com/cse110-sp25-group30/cse110-sp25-group30"
  },
  {
    title: "Food Nutrition Analyzer",
    description: "Developed a nutrition analysis tool that extracts and evaluates food data to provide detailed dietary insights.",
    details: "Built during DiamondHacks 2025, this application analyzes food items using external nutrition APIs to return key metrics such as calories, macronutrients, and ingredient breakdowns. Designed a user-friendly interface for inputting food data and visualizing results, enabling users to make informed dietary decisions. Integrated backend logic for API handling, data parsing, and real-time feedback.",
    tags: ["Python", "API Integration", "Data Analysis", "Hackathon"],
    date: "Mar 2025",
    link: "https://github.com/Akhil-py/DiamondHacks-FoodNutritionAnalyzer"
  },
  {
    title: "Text To Tracks Web App",
    description: "Collaborated to create a web app that transforms articles into TikTok-style videos with subtitles.",
    details: "Built in 48 hours for DiamondHacks 2024 (Honorable Mention). Uses Python web-scraping to ingest scholarly articles and dynamically overlays text onto 'Subway Surfers' gameplay footage to increase Gen-Z viewer retention.",
    tags:["Python", "CSS", "Hackathon"],
    date: "Mar 2024",
    link: "https://github.com/danielbonkowsky/subwaysurfers-text"
  },
  {
    title: "EQ Glasses",
    description: "Constructed a facial recognition algorithm using OpenCV to identify targets and assist in emotion recognition.",
    details: "Leveraged pre-trained cascade classifiers and customized facial mapping algorithms to identify user emotions in real-time, aiming to assist neurodivergent individuals in navigating relationship interactions.",
    tags:["Python", "OpenCV", "AI"],
    date: "Jul 2024 - Aug 2024",
    link: "https://github.com/marcokrause7/EQ-Glasses"
  }
];

export const EXPERIENCES: Experience[] =[
  {
    company: "Jacobs School of Engineering at UCSD",
    role: "Engineering Learning Community (ELC) Tutor",
    period: "Sep 2025 - Present",
    location: "La Jolla, CA",
    description:[
      "Lead weekly collaborative study sessions for engineering undergraduates in MATH 20D (Differential Equations), emphasizing peer-to-peer learning.",
      "Break down complex mathematical concepts into digestible modules, equipping students with critical problem-solving skills for advanced engineering coursework."
    ]
  },
  {
    company: "Women in Computing (WIC) at UCSD",
    role: "Tech Dev Projects Chair",
    period: "Sep 2025 - Present",
    location: "La Jolla, CA",
    description:[
      "Manage 12+ student project teams (groups of 5) each quarter, providing ongoing mentorship and technical guidance.",
      "Develop overarching project themes, teach foundational programming concepts, and direct teams through 4 major milestone meetup events.",
      "Organize and host 1-2 interactive technical workshops per quarter to elevate members' software engineering skills."
    ]
  },
  {
    company: "Eta Kappa Nu (HKN) at UCSD",
    role: "Hard Hack Director",
    period: "Apr 2025 - Present",
    location: "La Jolla, CA",
    description:[
      "Direct and organize HKN's annual hardware hackathon (Hard Hack), managing end-to-end event logistics, planning, and execution.",
      "Secure and coordinate technical sponsorships with major industry partners including DigiKey, Qualcomm, and Major League Hacking (MLH)."
    ]
  },
  {
    company: "UCSD CSE Department",
    role: "Computer Science Tutor",
    period: "Sep 2024 - Present",
    location: "La Jolla, CA",
    description:[
      "Mentored 30+ students weekly on foundational Data Structures and Object-Oriented Programming.",
      "Partnered with professors to design course content and grading rubrics for 100+ students."
    ]
  },
  {
    company: "IEEE at UCSD - RoboCup Soccer",
    role: "Software Team Lead",
    period: "Oct 2023 - Dec 2025",
    location: "La Jolla, CA",
    description:[
      "Directed a 25-person team to develop autonomous agents in Java for RoboCup Small-Sized League.",
      "Replaced legacy shape-based system with A* search algorithm, increasing navigation space by 75%.",
      "Engineered a vector-based dribbling function that optimized movement trajectories, improving scoring efficiency by 15%.",
      "Secured $3,000+ in external sponsorships for hardware and international competition travel."
    ]
  },
  {
    company: "Yonder Deep",
    role: "Software Team Member",
    period: "Oct 2023 - Oct 2024",
    location: "La Jolla, CA",
    description:[
      "Developed software for an Autonomous Underwater Vehicle (AUV) dedicated to oceanography and climate research.",
      "Implemented depth map stereo vision and underwater computer vision algorithms using Python and OpenCV to enhance object detection.",
      "Analyzed IMU data and implemented a PID controller, successfully improving the AUV's directional accuracy by 10%."
    ]
  },
  {
    company: "Existential Robotics Lab (ERL)",
    role: "Undergraduate Researcher",
    period: "Jun 2025 - Aug 2025",
    location: "San Diego, CA",
    description:[
      "Integrated Particle Filter SLAM and implemented Kalman Filters for motion prediction.",
      "Validated algorithms in Gazebo simulations before deploying to physical multi-agent robotic systems."
    ]
  },
  {
    company: "UCSD Triton Research - Lo Lab",
    role: "Research Assistant",
    period: "Jun 2024 - Aug 2024",
    location: "San Diego, CA",
    description:[
      "Selected for a highly competitive 10-week undergraduate research program (15% acceptance rate).",
      "Researched and implemented colour compensation methods to remove spill over in reconstructed fluorescent microscopic images using Python libraries including NumPy, Pandas, PyTorch, scikit-image, and OpenCV.",
      "Modified the Mosaic-PICASSO algorithm by assisting a PhD student in the development of a ResNet algorithm.",
      "Co-authored a manuscript detailing the findings, successfully published as an Article in Cytometry Part A."
    ]
  },
  {
    company: "Caltech VURP Program",
    role: "Researcher",
    period: "Jun 2023 - Aug 2023",
    location: "Pasadena, CA",
    description:[
      "Designed and assembled a magneto-optical instrument for RA-SHG experiments.",
      "Encoded motor using Python, increasing data collection efficiency and accuracy."
    ]
  }
];

export const SKILLS: SkillGroup[] =[
  {
    category: "Languages",
    skills:["Java", "Python", "C/C++", "Go", "HTML/CSS", "JavaScript", "Swift", "XML", "ARM32 Assembly"]
  },
  {
    category: "Frameworks & Tools",
    skills:["ROS2", "PyTorch", "OpenCV", "Git", "Linux", "Gazebo", "Firebase", "VSCode", "IntelliJ", "MATLAB", "Raspberry Pi"]
  },
  {
    category: "Developer Skills",
    skills:["Data Structures", "Algorithms", "Agile/SCRUM", "OOD", "Unit Testing", "App/Web Development", "GenAI Prompting"]
  }
];
