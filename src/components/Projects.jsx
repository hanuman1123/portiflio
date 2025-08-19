import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "RealTime Chat App",
      description:
        "A real-time chat application with secure authentication, instant messaging, and user-friendly interface for seamless communication.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZMyLhjpjdECbQUNEIEoQCm4Bb3FRVLcuLg4lMnf6YWhpLard-TVEp-YwlL0HmEakDsy4&usqp=CAU",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "Socket-IO","Daisy-UI","TailWind.css"],
      liveUrl: "https://chatapp-jagadeesh.vercel.app/login",
      githubUrl: "https://github.com/hanuman1123/chatapp",
    },
    {
      title: "Jobify",
      description:
       "A job tracking application that allows users to manage and track their job applications with an intuitive interface and real-time updates.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPOZPcN51J2W9q0krVgnutCavzjPhq2lUtUPeSgcx9Yo5--ANL5qGDYtJNd-RpEOj6kc&usqp=CAU",
      technologies: ["React", "OpenAI API", "Node.js", "Prisma", "Vercel"],
      liveUrl: "https://jobify-2-wccv.onrender.com/dashboard",
      githubUrl: "https://github.com/hanuman1123/jobify",
    },
    {
      title: "Student Tribe Home Page",
      description:
        "Build an Animated and resposive HomePage for the student Tibe.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzl8myfSWJdZdx10l46hcIGVWlOYReEsZt33pFjapWgumGZ-37faaOPgXSAihR9ETLumc&usqp=CAU",
      technologies: ["React", "Firebase", "Tailwind.css", "Daisy-UI"],
      liveUrl: "https://studenttribe-wine.vercel.app/",
      githubUrl: "https://github.com/hanuman1123/studenttribe",
    },
    
    {
      title: "Airlines Ticket Booking",
      description:
        "A full-stack airline ticket booking application with real-time flight search.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqpS0IIqkSFTPu8kaVNbeGXnhV0HvMT_iUxJYUIqqTBhdeuGNlIW6dDl7wA5XZvrNwU0I&usqp=CAU",

      technologies: ["React", "Node.js", "Express", "MongoDB","TailwindCSS"],
      liveUrl: "https://jagadeesh-airline.vercel.app/",
      githubUrl: "https://github.com/hanuman1123/airline1",
    },
   
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 to-red-800/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative bg-black/40 backdrop-blur-lg border border-red-500/30 rounded-2xl overflow-hidden hover:border-red-400/50 transition-all duration-300 transform group-hover:scale-105">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  <div className="absolute top-4 right-4 flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      className="p-2 bg-red-500/80 backdrop-blur-sm rounded-full text-white hover:bg-red-600/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-black/80 backdrop-blur-sm rounded-full text-white hover:bg-black/90 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs border border-red-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
