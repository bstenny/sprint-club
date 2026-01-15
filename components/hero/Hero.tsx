"use client";

import { motion, Variants } from "framer-motion";
import { copy } from "@/content/copy";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

export function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const scrollToSession = () => {
        const section = document.getElementById("session-flow");
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex items-center pt-20 lane-lines">
            {/* Animated lines decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 5,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 w-full h-px bg-gradient-to-r from-transparent via-[var(--lime)] to-transparent opacity-30"
                />
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 7,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                    className="absolute top-3/4 w-full h-px bg-gradient-to-r from-transparent via-[var(--lime)] to-transparent opacity-20"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Typography */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Eyebrow tags */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-6">
                            {copy.hero.eyebrows.map((tag) => (
                                <span key={tag} className="eyebrow eyebrow--lime">
                                    {tag}
                                </span>
                            ))}
                        </motion.div>

                        {/* H1 */}
                        <motion.h1
                            variants={itemVariants}
                            className="font-[family-name:var(--font-bebas-neue)] text-7xl sm:text-8xl lg:text-9xl tracking-tight leading-none mb-6"
                        >
                            {copy.hero.h1}
                        </motion.h1>

                        {/* Subhead */}
                        <motion.p
                            variants={itemVariants}
                            className="text-xl sm:text-2xl text-[var(--fg)] max-w-xl mb-4"
                        >
                            {copy.hero.subhead}
                        </motion.p>

                        {/* Micro */}
                        <motion.p
                            variants={itemVariants}
                            className="text-base text-[var(--muted)] max-w-lg mb-8"
                        >
                            {copy.hero.micro}
                        </motion.p>

                        {/* Secondary CTA for desktop */}
                        <motion.button
                            variants={itemVariants}
                            onClick={scrollToSession}
                            className="hidden lg:inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--lime)] transition-colors uppercase tracking-wider"
                        >
                            {copy.hero.secondaryCta}
                            <span className="text-lg">↓</span>
                        </motion.button>
                    </motion.div>

                    {/* Right: Form Panel */}
                    <div>
                        <WaitlistForm source="hero" />
                    </div>
                </div>
            </div>
        </section>
    );
}
