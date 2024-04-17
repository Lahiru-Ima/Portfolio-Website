"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Taxinor - BlockStars (Pvt) Ltd",
    description:
      "This project is a passenger and driver mobile application of the Norwegian Company. As a Freelance Mobile Developer, I work on handling Stripe payment gateway, API integration, Google Maps for location, and real-time tracking via web sockets.",
    imgUrl: "/images/taxinor.png",
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
    title: "Golden Foods Agro Website",
    description:
      "This project is an e-counselling mobile Application for Mental Health. This project has modules such as an online appointment system and, a video conference system. Patients can schedule and view their upcoming meetings. Doctors can approve or decline appointments based on their availability.",
    imgUrl: "/images/gfagro.png",
    tag: ["All", "Web"],
    link: "https://gfagro.lk/",
    github: "#",
    techStack: ["NextJs", "React","GitHub"],
  },

  {
    id: 3,
    title: "Candela Maker - Freelance Project",
    description:
      "This project is an e-counselling mobile Application for Mental Health. This project has modules such as an online appointment system and, a video conference system. Patients can schedule and view their upcoming meetings. Doctors can approve or decline appointments based on their availability.",
    imgUrl: "/images/candela.png",
    tag: ["All", "Mobile"],
    link: "#",
    github: "#",
    techStack: ["Flutter", "Dart", "Firebase", "Stripe", "GetX", "GitHub"],
  },
  {
    id: 4,
    title: "ER Life Force - Elzian Agro (Pvt) Ltd",
    description:
      "This project is a mobile application incorporating blockchain verification to track and enhance the Photosynthetic Biomass (PB) of specific plant species. I worked with the offline audit section and developed the email sent function using the AWS SES service.",
    imgUrl: "/images/er-lifeforce.png",
    tag: ["All", "Mobile"],
    link: "https://www.youtube.com/watch?v=2VCjJUh47IM",
    github: "#",
    techStack: ["Flutter", "NodeJS", "MySQL", "SQFlite", "AWS", "GitHub","SQL Server"],
  },

  {
    id: 5,
    title: "Mind Spark - Top Up Final Project",
    description:
      "This project is an e-counselling mobile Application for Mental Health. This project has modules such as an online appointment system and, a video conference system. Patients can schedule and view their upcoming meetings. Doctors can approve or decline appointments based on their availability.",
    imgUrl: "/images/final-project.png",
    tag: ["All", "Mobile"],
    link: "#",
    github: "#",
    techStack: ["Flutter", "Dart", "Firebase","Provider","Jitsi Meet","GitHub"],
  },

  {
    id: 6,
    title: "Golden Foods Agro UI",
    description:
      "This project is an e-counselling mobile Application for Mental Health. This project has modules such as an online appointment system and, a video conference system. Patients can schedule and view their upcoming meetings. Doctors can approve or decline appointments based on their availability.",
    imgUrl: "/images/gfagro-ui.png",
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
