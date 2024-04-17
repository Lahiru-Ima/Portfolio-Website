import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { LinkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  link,
  github,
  techStack,
}) => {
  return (
    <div className="flex flex-col w-full max-w-[400px] h-full">
      <div className="h-52 max-h-[200px] rounded-t-xl relative group">
        <div
          className="w-full h-full rounded-t-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <Link href={github}>
              <CodeBracketIcon className="w-10 h-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between flex-1 rounded-b-xl bg-[#1e1e1e]">
        <div className="text-white py-4 px-4">
          <div className="flex justify-between items-center">
            <h5 className="font-semibold text-lg">{title}</h5>
            <Link href={link}>
              <LinkIcon className="w-5 h-5  cursor-pointer hover:text-white" />
            </Link>
          </div>
          <p className="mt-2 text-sm text-[#ADB7BE] ">{description}</p>
        </div>
        <div className="flex flex-wrap px-4 py-4 gap-2">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="p-1 text-xs text-[#e6e6e6] border border-[#e6e6e6] rounded-sm"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
