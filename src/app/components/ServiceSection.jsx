import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceData = [
  {
    id: 1,
    icon: "images/icons8-mobile-development-50.png",
    title: "Mobile Development",
    description:
      "I create innovative and user-friendly mobile applications for iOS and Android platforms, ensuring seamless and high-performance experiences.",
  },
  {
    id: 2,
    icon: "images/icons8-web-development-50.png",
    title: "Web Development",
    description:
      "I specialize in crafting dynamic and responsive websites, utilizing various programming languages and frameworks to deliver effective online solutions.",
  },
  {
    id: 3,
    icon: "images/icons8-paint-palette-50.png",
    title: "UI/UX Design",
    description:
      "I design visually appealing and intuitive interfaces to enhance user experiences, focusing on creating engaging and user-friendly digital interactions.",
  },
  {
    id: 4,
    icon: "images/icons8-graphic-design-64.png",
    title: "Graphic Design",
    description:
      "I transform ideas into visually compelling designs, using creativity and technical skill to produce graphics that communicate effectively and leave a lasting impression.",
  },
];

const ServiceSection = () => {
  return (
    <section id="services">
      <div className="flex flex-col items-center justify-center mb-10 lg:px-24">
        <div>
          <h2 className="text-4xl font-bold mb-14">Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ServiceData.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
