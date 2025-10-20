import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@heroui/button";
import React from "react";

import { projectsData } from "@/data/projects";
import { contactLinks } from "@/data/contacts";
import { WhiteLinkedinIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { AnimatedGreeting } from "@/components/animatedGreetings";
import sukuna from "@/public/assets/sukuna.png";
import sukunaWhite from "@/public/assets/sukuna-white.png";
import { ProjectCard } from "@/components/cardProject";
import { ContactCard } from "@/components/cardContact";
import { TechCarousel } from "@/components/cardTech";
import { SectionWrapper } from "@/components/wrapper";

export default function IndexPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Message from Portfolio - ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:officialedymikhael@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <DefaultLayout>
      <SectionWrapper
        className="flex min-h-screen flex-col items-start justify-center gap-4 pt-20"
        id="home"
      >
        <AnimatedGreeting />
        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={contactLinks[3].href}
          >
            <WhiteLinkedinIcon size={16} />
            LinkedIn
          </Link>
        </div>
      </SectionWrapper>
      <SectionWrapper
        className="flex min-h-screen flex-col items-start justify-center"
        id="about"
      >
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3 text-lg leading-relaxed">
              <p>
                I&apos;m Edy Mikhael Novrianta Surbakti, fresh graduate of
                computer science from Mikroskil University, passionate in UI/UX
                design and full-stack web development. I like transforming
                concepts into useful and eye-catching digital experiences.
              </p>
              <p className="mt-4">
                I work to create effective, user-centered solutions using my
                strong background in web technologies and my expanding skill set
                in front-end and back-end programming. In addition to my
                technical work, I have some basic experience designing user
                interfaces that are clear and easy to use using Figma.
              </p>
              <p className="mt-4">
                I have a strong interest in lifelong learning and investigating
                innovative technologies that enhance people&apos;s technological
                interactions. I&apos;m now open to full-time and internship jobs
                where I can work with skilled individuals, share my abilities,
                and advance as a developer.
              </p>
            </div>

            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <div className="relative w-64 h-80 md:w-full md:h-96 rounded-2xl overflow-hidden">
                <Image
                  fill
                  priority
                  alt="Profile photo of Edy Mikhael - Light Mode"
                  className="block dark:hidden transform transition-transform duration-500 hover:scale-105 object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  src={sukuna}
                />

                <Image
                  fill
                  priority
                  alt="Profile photo of Edy Mikhael - Dark Mode"
                  className="hidden dark:block transform transition-transform duration-500 hover:scale-105 object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  src={sukunaWhite}
                />
              </div>
            </div>
          </div>

          <div className="mt-20 w-full">
            <h3 className="mb-8 text-3xl font-bold">My Tech Stack</h3>
            <TechCarousel />
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper
        className="flex min-h-screen flex-col items-start justify-center"
        id="projects"
      >
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              description={project.description}
              imageSrc={project.imageSrc}
              link={project.link}
              technologies={project.technologies}
              title={project.title}
            />
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper
        className="flex min-h-screen flex-col items-start justify-center"
        id="contact"
      >
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl">
          Have questions or want to collaborate? Don&apos;t hesitate to Contact me.
          I&apos;m always open to discussion and new opportunities.
        </p>

        <form className="w-full max-w-2xl" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6 sm:flex-row">
              <input
                required
                className="w-full rounded-md border-2 border-[#84818D] bg-white/5 p-3 focus:ring-2 focus:ring-purple-500"
                name="name"
                placeholder="Nama Anda"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                required
                className="w-full rounded-md border-2 border-[#84818D] bg-white/5 p-3 focus:ring-2 focus:ring-purple-500"
                name="email"
                placeholder="Email Anda"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <textarea
              required
              className="w-full rounded-md border-2 border-[#84818D] bg-white/5 p-3 focus:ring-2 focus:ring-purple-500"
              name="message"
              placeholder="Pesan Anda"
              rows={5}
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <Button
            className={`mt-6 px-8 py-3 font-semibold${buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}`}
            type="submit"
          >
            Send Message
          </Button>
        </form>

        <div className="mt-20 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((link, index) => (
            <ContactCard
              key={index}
              href={link.href}
              icon={link.icon}
              subtitle={link.subtitle}
              title={link.title}
            />
          ))}
        </div>
      </SectionWrapper>
    </DefaultLayout>
  );
}
