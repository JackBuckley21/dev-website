"use client"

import React from 'react';
import {motion, Variants} from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const EnvelopeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

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

const ContactSection = () => {
    return (
        <AnimatedSection id="contact" className="bg-black text-white">
            <div className="container mx-auto px-6 text-center">
                <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
                    Get In Touch
                </motion.h2>
                <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto mb-12">
                    I&apos;m currently open to new opportunities and collaborations. Feel free to reach out!
                </motion.p>
                <motion.div variants={itemVariants} className="flex justify-center items-center space-x-6">
                    <a href="mailto:jack.buckley21@gmail.com" className="group flex items-center space-x-2 bg-gray-800 text-white py-3 px-6 rounded-full hover:bg-indigo-600 transition-all duration-300">
                        <EnvelopeIcon className="h-6 w-6" />
                        <span>Email Me</span>
                    </a>
                    <a href="https://github.com/JackBuckley21" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors duration-300 p-3 rounded-full bg-gray-800 hover:bg-gray-700">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/jack-buckley-ux/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors duration-300 p-3 rounded-full bg-gray-800 hover:bg-gray-700">
                        <Linkedin size={24} />
                    </a>
                </motion.div>
            </div>
        </AnimatedSection>
    );
};

export default ContactSection;
