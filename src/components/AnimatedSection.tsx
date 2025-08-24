"use client"

import React, { useEffect, ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const AnimatedSection = ({ children, className = '', id = '' }: AnimatedSectionProps) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.section
            id={id}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className={`py-20 sm:py-32 ${className}`}
        >
            {children}
        </motion.section>
    );
};

export default AnimatedSection;
