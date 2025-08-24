"use client";

import React from "react";
import {motion, Variants} from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

type SkillLogo = {
    name: string;
    src: string;
};

const skills: SkillLogo[] = [
    { name: "React",          src: "/logos/react.svg" },
    { name: "Next.js",        src: "/logos/nextjs.svg" },
    { name: "TypeScript",     src: "/logos/typescript.svg" },
    { name: "Tailwind CSS",   src: "/logos/tailwind.svg" },
    { name: "Framer Motion",  src: "/logos/motion.svg" },
    { name: "Node.js",        src: "/logos/nodejs.svg" },
    { name: "Flutter",        src: "/logos/flutter.svg" },
    { name: "Dart",           src: "/logos/dart.svg" },
    { name: "Google Cloud",   src: "/logos/google-cloud.svg" },
    { name: "Firebase",       src: "/logos/firebase.svg" },
    { name: "AWS",            src: "/logos/aws.svg" },
];

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const SkillsSection = () => {
    return (
        <AnimatedSection id="skills" className="bg-black text-white">
            <div className="container mx-auto px-6">
                <motion.h2
                    variants={itemVariants}
                    className="text-4xl md:text-5xl font-bold text-center mb-16"
                >
                    My Tech Stack
                </motion.h2>

                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            className="flex flex-col items-center justify-center p-4 bg-[#111] rounded-2xl transition-all duration-300 hover:bg-gray-800 hover:-translate-y-2"
                            title={skill.name}
                            aria-label={skill.name}
                        >
                            <div className="h-16 w-16 relative">
                                <Image
                                    src={skill.src}
                                    alt={skill.name}
                                    fill
                                    sizes="64px"
                                    className="object-contain"
                                    priority={false}
                                />
                            </div>
                            <p className="text-gray-300 mt-3 text-center">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </AnimatedSection>
    );
};

export default SkillsSection;
