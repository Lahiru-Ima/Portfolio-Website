import React from "react";
import SkillCard from "./SkillCard";

const skillsData = [
  {
    id: 1,
    imgUrl: "/icons/icons8-flutter.svg",
    tooltipText: "Flutter",
  },
  {
    id: 2,
    imgUrl: "/icons/icons8-html-5.svg",
    tooltipText: "HTML",
  },
  {
    id: 3,
    imgUrl: "/icons/icons8-css.svg",
    tooltipText: "CSS",
  },
  {
    id: 4,
    imgUrl: "/icons/icons8-javascript.svg",
    tooltipText: "JavaScript",
  },

  {
    id: 5,
    imgUrl: "/icons/icons8-nextjs.svg",
    tooltipText: "NextJS",
  },
  {
    id: 6,
    imgUrl: "/icons/icons8-python.svg",
    tooltipText: "Python",
  },
  {
    id: 7,
    imgUrl: "/icons/icons8-java.svg",
    tooltipText: "Java",
  },
  {
    id: 8,
    imgUrl: "/icons/icons8-tailwind-css.svg",
    tooltipText: "Tailwind CSS",
  },
  {
    id: 9,
    imgUrl: "/icons/icons8-stripe.svg",
    tooltipText: "Stripe",
  },

  {
    id: 10,
    imgUrl: "/icons/icons8-react-native.svg",
    tooltipText: "React Native",
  },
  {
    id: 11,
    imgUrl: "/icons/icons8-photoshop.svg",
    tooltipText: "Photoshop",
  },  {
    id: 12,
    imgUrl: "/icons/icons8-illustrator.svg",
    tooltipText: "Illustrator",
  },
  {
    id: 13,
    imgUrl: "/icons/icons8-adobe-premiere-pro.svg",
    tooltipText: "Premiere Pro",
  },
  {
    id: 14,
    imgUrl: "/icons/icons8-firebase.svg",
    tooltipText: "Firebase",
  },

  {
    id: 15,
    imgUrl: "/icons/icons8-heroku-logo.svg",
    tooltipText: "Heroku",
  },
  {
    id: 16,
    imgUrl: "/icons/icons8-amazon-web-services.svg",
    tooltipText: "AWS",
  },
];

const SkillSection = () => {
  return (
    <section id="skills">
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="text-4xl font-bold mb-14">Skills</div>
        <div className="flex flex-wrap gap-3 max-w-3xl mx-auto md: items-center justify-center">
          {skillsData.map((skill) => (
            <SkillCard
              key={skill.id}
              imgUrl={skill.imgUrl}
              tooltipText={skill.tooltipText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
