import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.png";

export const HERO_CONTENT = `Software developer from India 🇮🇳, I like to develop full-stack with a strong focus on backend development, passionate about Cloud and Web3 technologies, always ready to tackle complex backend challenges.`;

//export const ABOUT_TEXT = ``;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Software Engineer",
    company: "AllState",
    description: `During my internship in Chatbot Development, I refined code using SonarQube, followed TDD for building chatbot flows, and gained insights into agile software development from design to maintenance.`,
    technologies: ["JavaScript", "SonarQube", "AWS Lambda", "Serverless"],
  },
];

export const PROJECTS = [
  {
    title: "Next-Gen Recommendation System",
    image: project1,
    description:
      "A custom recommendation engine inspired by platforms like YouTube and Google Search, designed to provide personalized content recommendations using AI and machine learning.",
    technologies: ["Next.js", "Convex DB", "LangChain"],
    liveLink: "https://nextgen-recsys.vercel.app/",
    githubLink: "https://github.com/asimar007/Custom-Recommendation-System",
  },
  {
    title: "PixelFlow",
    image: project2,
    description:
      "PixelFlow is a cloud-based, scalable video transcoding service inspired by MUX. It enables users to upload high-quality videos, which are then processed into multiple resolutions for optimized streaming, ensuring compatibility across various devices and network conditions.",
    technologies: ["TypeScript", "S3", "FFmpeg", "SQS"],
    liveLink: "https://github.com/asimar007/PixelFlow",
    githubLink: "https://github.com/asimar007/PixelFlow",
  },
  {
    title: "Buy Me A Chai",
    image: project3,
    description:
      "Reimagining creator support with Web3, our decentralized platform uses Ethereum smart contracts for transparent, global donations, empowering creativity through community governance.",
    technologies: ["React.js", "Solidity", "Node.js", "MetaMask"],
    liveLink: "https://buymechaidapp.netlify.app/",
    githubLink: "https://github.com/asimar007/Buy-Me-A-Chai",
  },
  {
    title: "Cloud Cost Optimization",
    image: project4,
    description:
      "It involves automating the identification and deletion of stale EBS snapshots, reducing unnecessary storage costs. The process ensures only snapshots linked to active EC2 instances are retained.",
    technologies: ["Python", "EC2", "EBS Snapshot"],
    liveLink: "https://github.com/asimar007/Cloud-Cost-Optimization",
    githubLink: "https://github.com/asimar007/Cloud-Cost-Optimization",
  },
  {
    title: "Seamless CI/CD Automation",
    image: project5,
    description:
      "It is an end-to-end CI/CD pipeline designed for automating application build, testing, security checks, and deployment. It ensures streamlined delivery from code integration to production deployment.",
    technologies: ["Kubernetes", "Jenkins", "Docker", "AWS"],
    liveLink: "https://github.com/asimar007/Seamless-CI-CD-Automation",
    githubLink: "https://github.com/asimar007/Seamless-CI-CD-Automation",
  },
  {
    title: "D-GDrive3.0",
    image: project6,
    description:
      "D-GDrive3.0 is a decentralized file-sharing platform that ensures secure and efficient data storage. It offers seamless, decentralized file sharing with enhanced retrieval speed.",
    technologies: ["dApp", "Blockchain", "React.js", "IPFS"],
    liveLink: "https://www.youtube.com/watch?v=87bIZEuHNYI",
    githubLink: "https://github.com/asimar007/D-GDrive3.0",
  },
  {
    title: "Cross Region Migration of AWS EBS Volumes",
    image: project7,
    description:
      "It focuses on migrating AWS EBS volumes between regions, ensuring minimal downtime and data integrity. It involves snapshot creation, volume replication, and thorough verification for seamless relocation.",
    technologies: ["Cloud", "EBS", "AWS"],
    liveLink: "https://asimar007.hashnode.dev/cross-region-migration-of-aws-ebs-volumes",
    githubLink: "https://github.com/asimar007/Cross-Region-Migration-of-AWS-EBS-Volumes/tree/main",
  },
];

export const EDUCATION = [
  {
    schoolName: "New Horizon College of Engineering",
    degree: "Master of Computer Applications (MCA)",
    duration: "2021 - 2023",
    CGPA: "8.37/10",
  },
  {
    schoolName: "The University of Burdwan",
    degree: "Bachelor of Computer Applications (BCA)",
    duration: "2017 - 2020",
    CGPA: "6.54/10",
  },
];

export const RESEARCH_PAPER = {
  title: "Role of Blockchain Technology in Healthcare",
  link: "https://ieeexplore.ieee.org/document/10104832",
  description:
    "Blockchain in healthcare ensures secure, transparent data storage, fostering efficiency and trust among stakeholders for a patient-centric ecosystem.",
};

export const CONTACT = {
  address: "Bangalore, Karnataka, India ",
  phoneNo: "+91 9933672964",
  email: "asimsk777@gmail.com",
};
