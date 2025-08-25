"use client";

import React, {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

const GRID = 100;

export default function GridBackground() {
    const [dots, setDots] = useState<{ id: number; x: number; y: number; color: string }[]>([]);
    const [dimensions, setDimensions] = useState({width: 0, height: 0});

    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({width: window.innerWidth, height: window.innerHeight});
        };


        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        let id = 0;
        const tick = setInterval(() => {
            const cols = Math.floor(dimensions.width / GRID);
            const rows = Math.floor(dimensions.height / GRID);
            const x = Math.floor(Math.random() * (cols + 1)) * GRID;
            const y = Math.floor(Math.random() * (rows + 1)) * GRID;

            const isIndigo = Math.random() < 0.15;
            const color = isIndigo ? '#818cf8' : 'white';

            const dot = {id: id++, x, y, color};
            setDots((p) => [...p, dot]);
            setTimeout(() => setDots((p) => p.filter((d) => d.id !== dot.id)), 2000);
        }, 500);


        return () => {
            clearInterval(tick);
            window.removeEventListener('resize', updateDimensions);
        };
    }, [dimensions.width, dimensions.height]);

    return (
        <svg
            className="absolute inset-0 z-0 block"
            width="100%"
            height="100%"
            viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
            preserveAspectRatio="none"
            shapeRendering="crispEdges"
        >
            <defs>
                <pattern id="grid" width={GRID} height={GRID} patternUnits="userSpaceOnUse">
                    <path d={`M ${GRID} 0 L 0 0 0 ${GRID}`} fill="none" stroke="white" strokeWidth="4" opacity="0.3"/>
                </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)"/>

            <AnimatePresence>
                {dots.map((d) => (
                    <motion.circle
                        key={d.id}
                        cx={d.x}
                        cy={d.y}
                        r={4}
                        fill={d.color}
                        initial={{scale: 0, opacity: 0}}
                        animate={{scale: 1.75, opacity: [0, 0.5, 0]}}
                        exit={{scale: 0, opacity: 0}}
                        transition={{duration: 2, ease: "easeInOut"}}
                    />
                ))}
            </AnimatePresence>
        </svg>
    );
}
