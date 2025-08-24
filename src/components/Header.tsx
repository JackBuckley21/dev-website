"use client"

import React, { useState, useEffect } from 'react';
import {motion, AnimatePresence, Variants} from 'framer-motion';
import { Menu, X } from 'lucide-react';



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ["Projects", "Skills", "Contact"];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    const mobileMenuVariants: Variants   = {
        hidden: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
        visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.1 } },
    };

    const mobileLinkVariants: Variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    };


    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-lg' : 'bg-transparent'}`}>
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-bold text-white tracking-wider"
                    >
                        JB.
                    </motion.div>
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <motion.button
                                key={link}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                onClick={() => scrollToSection(link)}
                                className="text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                {link}
                            </motion.button>
                        ))}
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(true)} className="text-white">
                            <Menu size={24} />
                        </button>
                    </div>
                </nav>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="fixed inset-0 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-10 z-50"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={28} />
                        </button>
                        {navLinks.map((link) => (
                            <motion.button
                                key={link}
                                variants={mobileLinkVariants}
                                onClick={() => scrollToSection(link)}
                                className="text-4xl font-medium text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                {link}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
