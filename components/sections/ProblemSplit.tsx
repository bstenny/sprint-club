"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";

export function ProblemSplit() {
    return (
        <section className="section-padding">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left: Headline */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-6xl lg:text-7xl leading-none">
                            {copy.problem.title}
                        </h2>
                    </motion.div>

                    {/* Right: Bullets + Close */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <ul className="space-y-4 mb-8">
                            {copy.problem.bullets.map((bullet, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-start gap-3 text-[var(--muted)]"
                                >
                                    <span className="text-[var(--lime)] mt-1">—</span>
                                    <span>{bullet}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <p className="text-2xl font-[family-name:var(--font-bebas-neue)] text-[var(--lime)] uppercase tracking-wide">
                            {copy.problem.close}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
