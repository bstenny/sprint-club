"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";

export function FormatSpec() {
    return (
        <section className="section-padding bg-[var(--panel)]">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="panel-brutal p-6 sm:p-10"
                >
                    {/* Title */}
                    <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-5xl mb-8 text-center uppercase">
                        {copy.format.title}
                    </h2>

                    {/* Spec Rows */}
                    <div className="divide-y divide-[var(--muted)]">
                        {copy.format.rows.map((row, index) => (
                            <motion.div
                                key={row.label}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="grid sm:grid-cols-[120px_1fr] gap-2 sm:gap-4 py-4"
                            >
                                <span className="font-[family-name:var(--font-bebas-neue)] text-[var(--lime)] text-lg tracking-wider">
                                    {row.label}
                                </span>
                                <span className="text-[var(--fg)]">{row.value}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Disclaimer */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-sm text-[var(--muted)] text-center mt-8 border-t border-[var(--muted)] pt-6"
                    >
                        {copy.format.disclaimer}
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
