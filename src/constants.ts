import { Project, Experience, SkillGroup } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Brain Tumor Segmentation",
    description: "Implemented a 2D U-Net CNN from scratch in PyTorch for automated segmentation on 4-channel multimodal MRI scans. Engineered a custom Dice Loss function to mitigate class imbalance.",
    tags: ["Python", "PyTorch", "Computer Vision", "U-Net"],
    date: "Jan 2024 - Mar 2024",
    link: "https://github.com/ttai2023"
  },
  {
    title: "WayNo Smart Parallel Parking Robot",
    description: "Designed a real-time parallel parking algorithm leveraging sensor fusion and path planning in ROS2. Achieved >95% accuracy in designated spaces.",
    tags: ["Python", "ROS2", "OpenCV", "Robotics"],
    date: "Sep 2024 - Dec 2024",
    link: "https://github.com/ttai2023"
  },
  {
    title: "Text To Tracks Web App",
    description: "Collaborated to create a web app that transforms articles into TikTok-style videos with subtitles. Won Honorable Mention at DiamondHacks 2024.",
    tags: ["Python", "CSS", "Hackathon"],
    date: "2024"
  },
  {
    title: "EQ Glasses",
    description: "Constructed a facial recognition algorithm using OpenCV to identify targets and assist in emotion recognition for relationship interactions.",
    tags: ["Python", "OpenCV", "AI"],
    date: "2024"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "IEEE at UCSD - RoboCup Soccer",
    role: "Software Team Lead",
    period: "Oct 2023 - Present",
    location: "San Diego, CA",
    description: [
      "Directed a 25-person team to develop autonomous agents in Java for RoboCup Small-Sized League.",
      "Replaced legacy shape-based system with A* search algorithm, increasing navigation space by 75%.",
      "Engineered a vector-based dribbling function that optimized movement trajectories, improving scoring efficiency by 15%.",
      "Secured $3,000+ in external sponsorships for hardware and international competition travel."
    ]
  },
  {
    company: "Existential Robotics Lab (ERL)",
    role: "Undergraduate Researcher",
    period: "June 2024 - Aug 2024",
    location: "La Jolla, CA",
    description: [
      "Integrated Particle Filter SLAM and implemented Kalman Filters for motion prediction.",
      "Validated algorithms in Gazebo simulations before deploying to physical multi-agent robotic systems."
    ]
  },
  {
    company: "UCSD CSE Department",
    role: "Computer Science Tutor",
    period: "Sep 2024 - Present",
    location: "La Jolla, CA",
    description: [
      "Mentored 30+ students weekly on foundational Data Structures and Object-Oriented Programming.",
      "Partnered with professors to design course content and grading rubrics for 100+ students."
    ]
  },
  {
    company: "Caltech VURP Program",
    role: "Researcher",
    period: "Jun 2023 - Aug 2023",
    location: "Pasadena, CA",
    description: [
      "Designed and assembled a magneto-optical instrument for RA-SHG experiments.",
      "Encoded motor using Python, increasing data collection efficiency and accuracy."
    ]
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Java", "Python", "C/C++", "Go", "JavaScript", "Swift", "ARM32 Assembly"]
  },
  {
    category: "Frameworks & Tools",
    skills: ["ROS2", "PyTorch", "OpenCV", "Git", "Linux", "Gazebo", "Firebase", "Raspberry Pi"]
  },
  {
    category: "Developer Skills",
    skills: ["Data Structures", "Algorithms", "Agile/SCRUM", "OOD", "Unit Testing", "GenAI Prompting"]
  }
];
