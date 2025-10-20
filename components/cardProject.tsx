import Image from "next/image";
import { Link } from "@heroui/link";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  link?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  technologies,
  link,
}) => {
  const cardContent = (
    <div className="group relative h-80 w-full overflow-hidden rounded-2xl shadow-lg">
      <Image
        fill
        alt={`Screenshot of ${title}`}
        className="transition-transform duration-500 group-hover:scale-105 object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={imageSrc}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );

  return link ? (
    <Link isExternal className="block" href={link}>
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
};
