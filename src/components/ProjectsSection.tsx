"use client"

import React, { useState } from 'react';
import {motion, AnimatePresence, Variants} from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

const projects = [
    {
        title: "Health Care Search And Book Platform",
        description: "As a key developer in a small team, I am building a comprehensive healthcare search and booking system that simplifies how patients find and schedule care, while empowering providers with a dedicated B2B management platform.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Mollie", "AWS", "Node.js", "Motion"],
        liveUrl: "https://finbogo.com/",
        imageUrl: "https://finbogo.com/landing/landingpage-logo.svg",
        category: "professional"
    },
    {
        title: "B2B Sales & Trade in Platform",
        description: "Architected and led the front-end development of a B2B recycled phone trade-in platform, creating a scalable and intuitive user interface that streamlined sales and trade-in workflows.",
        tags: ["React", "Next.js", "Node.js", "PHP", "Tailwind CSS", "Zustand"],
        liveUrl: "https://www.urbusiness.co.uk/urPortal",
        githubUrl: "https://github.com/JackBuckley21/portal-demo",
        imageUrl: "https://www.urbusiness.co.uk/assets/images/urBusiness_logo_grey.svg",
        category: "professional"
    },
    {
        title: "Speech Aid For Stroke Victim",
        description: "This Flutter/Dart speech aid application was created by myself for a family member who had a stroke. It helps people who have difficulty speaking to communicate more effectively by converting their speech to text. The application is still an ongoing personal project, but it has already helped my family to communicate better with us.",
        tags: ["Flutter", "Dart", "Firebase",],
        githubUrl: "https://github.com/JackBuckley21/speech-aid",
        imageUrl: "/speech.png",
        category: "personal"
    },
    {
        title: "Wren Kitchens - Kitchen Planner",
        description: "I have been helping with the development and maintenance of a web-based kitchen planner at Wren Kitchens for 3 years. The planner allowed users to create 2D and 3D plans of their kitchens, take accurate measurements, and generate automatic customer documentation",
        tags: ["javascript", "react", "node.js", "tailwindcss", "mySQL", "TypeScript", "AWS"],
        liveUrl: "https://www.wrenkitchens.com/kitchen-design/online-planner",
        imageUrl: "/wren.png",
        category: "professional"
    },
    {
        "title": "Project: Catalyst",
        "description": "An in-development, AI-driven mobile health platform built with Flutter. The application is designed to create adaptive, personalized programs to guide users through physical recovery and track progress over time.",
        "tags": ["Flutter", "Dart", "AI", "Health-Tech", "Mobile App", "Firebase", "Google Cloud"],
        "imageUrl": "/project-catalyst.png",
        "category": "personal"
    }
];

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const ProjectsSection = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProjects = projects.filter(p =>
        activeFilter === 'all' || p.category === activeFilter
    );

    const filterButtons = ['all', 'professional', 'personal'];

    return (
        <AnimatedSection id="projects" className="bg-black text-white">
            <div className="container mx-auto px-6">
                <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-8">
                    Featured Projects
                </motion.h2>
                <motion.div variants={itemVariants} className="flex justify-center space-x-2 md:space-x-4 mb-16">
                    {filterButtons.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 md:px-6 md:py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
                                activeFilter === filter
                                    ? 'bg-white text-black'
                                    : 'bg-[#1a1a1a] text-gray-300 hover:bg-gray-700'
                            }`}
                        >
                            {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </button>
                    ))}
                </motion.div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                className="flex flex-col bg-[#111] rounded-2xl overflow-hidden group transform transition-shadow duration-500 hover:shadow-[0_0_15px_rgba(129,140,248,0.5),_0_0_35px_rgba(79,70,229,0.3)]"
                            >
                                <div className="h-48 bg-gray-900/50 flex items-center justify-center p-5 overflow-hidden">
                                    <Image
                                        src={project.imageUrl}
                                        alt="Descriptive alt text"
                                        width={1000}
                                        height={1000}
                                        className="w-fit h-auto  object-cover"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 my-4">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="bg-gray-800 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center space-x-4 mt-auto">
                                        {project.liveUrl && ( <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors duration-300">Site</a> )}
                                        {project.githubUrl && (<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors duration-300">Source Code</a>)}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </AnimatedSection>
    );
};

export default ProjectsSection;
