"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Taxinor - BlockStars (Pvt) Ltd",
    description:
      "This project is a mobile application for passengers and drivers of a Norwegian company, designed to streamline transportation services. As a Freelance Mobile Developer, I focused on integrating the Stripe payment gateway to facilitate secure and efficient transactions. Additionally, I handled API integration to ensure seamless communication between the app and backend services. The application utilizes Google Maps for accurate location tracking and navigation, while real-time tracking is achieved through web sockets, providing users with up-to-the-minute updates on their journeys.",
    imgUrl: "https://gist.github.com/user-attachments/assets/5dd12a7f-4b51-4e34-a932-f2f5071886da",
    tag: ["All", "Mobile"],
    link: "#",
    github: "#",
    techStack: [
      "Flutter",
      "Stripe",
      "Google Maps",
      "MongoDB",
      "Provider",
      "WebSockets",
      "Rest API",
      "GitLab",
    ],
  },
  {
    id: 2,
    title: "Golden Foods Agro - Freelance Project",
    description:
      "Golden Foods Agro Pvt Ltd is a leading agricultural commodity company specializing in the import and distribution of a wide range of products. I worked on a freelance web application project for Golden Foods Agro Company, collaborating with another developer. My role focused on UI design, and I made several updates to the website using Next.js. The project features sections for news and events, as well as an articles section. Additionally, we integrated WhatsApp messaging for enhanced customer communication.",
    imgUrl: "https://gist.github.com/user-attachments/assets/6bc134b3-da69-4f8a-9e56-6a7859f2bf32",
    tag: ["All", "Web"],
    link: "https://gfagro.lk/",
    github: "#",
    techStack: ["NextJs", "React", "GitHub"],
  },

  {
    id: 3,
    title: "Gogo Dance - Freelance Project",
    description:
      "Gogo Dance an app for vip dancers in Clubs / Gogos. The app manages your business professionally. A time chronometer tracking song count, song length, where you set your price per song, and calculates totals charged after pressing Start / Stop. It is like having an organized office for dancers at work. Vip Dancer app manages and keeps record of every transaction for you with date, time,length of dances and total amount to charge customer.",
    imgUrl: "https://gist.github.com/user-attachments/assets/cf7c415c-53fe-44b9-89a5-f0ee81a16316",
    tag: ["All", "Mobile"],
    link: "https://play.google.com/store/apps/details?id=com.vip.dance.app",
    github: "#",
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Stripe",
      "GetX",
      "GitHub",
      "App Store",
      "Play Store",
    ],
  },
  {
    id: 4,
    title: "ER Life Force - Elzian Agro (Pvt) Ltd",
    description:
      "This project is a mobile application incorporating blockchain verification to track and enhance the Photosynthetic Biomass (PB) of specific plant species. During my internship, I worked on the offline audit section and developed the email-sending function using the AWS SES service. This was my first real-world project, and it provided me with substantial knowledge and hands-on experience. The application aims to ensure the accuracy and integrity of biomass data, leveraging blockchain technology for secure and transparent verification. Working on this project has greatly enriched my understanding of both mobile app development and blockchain integration.",
    imgUrl: "https://gist.github.com/user-attachments/assets/0ae36f63-2288-4708-b042-f87e32464f4e",
    tag: ["All", "Mobile"],
    link: "https://www.youtube.com/watch?v=2VCjJUh47IM",
    github: "#",
    techStack: [
      "Flutter",
      "NodeJS",
      "MySQL",
      "SQFlite",
      "AWS",
      "GitHub",
      "SQL Server",
    ],
  },

  {
    id: 5,
    title: "Mind Spark - Top Up Final Project",
    description:
      "This project is an e-counselling mobile application for mental health, developed as my final project for my top-up degree. The application includes modules such as an online appointment system and a video conference system, providing a comprehensive platform for mental health support. Patients can conveniently schedule and view their upcoming meetings, while doctors have the capability to approve or decline appointments based on their availability. Additionally, the app ensures secure communication and maintains confidentiality, offering a reliable and user-friendly solution for both patients and healthcare providers.",
    imgUrl: "https://gist.github.com/user-attachments/assets/07cfecc3-f8b7-4773-8152-bcc3cd00aafe",
    tag: ["All", "Mobile"],
    link: "#",
    github: "#",
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Provider",
      "Jitsi Meet",
      "Figma",
      "GitHub",
    ],
  },

  {
    id: 6,
    title: "Golden Foods Agro UI",
    description:
      "Golden Foods Agro Pvt Ltd is a leading agricultural commodity company specializing in the import and distribution of a wide range of products. I worked on a freelance web application project for Golden Foods Agro Company, collaborating with another developer. My role focused on UI design, and I made several updates to the website using Next.js. The project features sections for news and events, as well as an articles section. Additionally, we integrated WhatsApp messaging for enhanced customer communication.",
    imgUrl: "https://gist.github.com/user-attachments/assets/6f40b889-a381-4a32-af8f-ceff9828edae",
    tag: ["All", "UI/UX"],
    link: "#",
    github: "#",
    techStack: ["Figma", "Wireframe", "Ui/Ux"],
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filterProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <div className="flex flex-col items-center justify-center mb-10">
        <h2 className="text-4xl font-bold mb-14">My Projects</h2>
        <div className="text-white flex flex-row justify-center items-center gap-3 mb-8">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="UI/UX"
            isSelected={tag === "UI/UX"}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filterProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              link={project.link}
              github={project.github}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
