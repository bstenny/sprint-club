"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { copy } from "@/content/copy";

export function SessionFlow() {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    return (
        <section id="session-flow" className="section-padding">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-5xl lg:text-6xl text-center mb-12 uppercase"
                >
                    {copy.session.title}
                </motion.h2>

                {/* Steps Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {copy.session.steps.map((step, index) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="panel-brutal p-5"
                        >
                            <div className="font-[family-name:var(--font-bebas-neue)] text-5xl text-[var(--lime)] mb-3">
                                {step.num}
                            </div>
                            <h3 className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase mb-1">
                                {step.title}
                            </h3>
                            {step.duration && (
                                <p className="text-sm text-[var(--muted)]">{step.duration}</p>
                            )}
                            {step.subtitle && (
                                <p className="text-sm text-[var(--muted)]">{step.subtitle}</p>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Sample Session Accordion */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-8 border-[var(--bw)] border-[var(--muted)]"
                >
                    <button
                        onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                        className="w-full px-6 py-4 flex items-center justify-between bg-[var(--panel)] hover:bg-[var(--bg)] transition-colors"
                    >
                        <span className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase tracking-wide">
                            {copy.session.sampleTitle}
                        </span>
                        <motion.span
                            animate={{ rotate: isAccordionOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-[var(--lime)] text-2xl"
                        >
                            ↓
                        </motion.span>
                    </button>

                    <AnimatePresence>
                        {isAccordionOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 py-5 bg-[var(--bg)] border-t border-[var(--muted)]">
                                    <ul className="space-y-2">
                                        {copy.session.sampleContent.map((item, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-3 text-[var(--muted)]"
                                            >
                                                <span className="text-[var(--lime)]">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
