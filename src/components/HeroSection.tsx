"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
            <div
                className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage:
                        "linear-gradient(white 2px, transparent 2px), linear-gradient(90deg, white 2px, transparent 2px)",
                    backgroundSize: "100px 100px",
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" />

            <div className="container mx-auto px-6 text-center z-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4"
                >
                    Jack Buckley
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
                >
                    A Creative Developer Crafting Modern, User-Centric Web Experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="mt-12"
                >
                    <button
                        onClick={() =>
                            document
                                .getElementById("projects")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        View My Work
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
