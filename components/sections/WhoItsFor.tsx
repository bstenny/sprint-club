"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";

export function WhoItsFor() {
    return (
        <section className="section-padding">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-5xl lg:text-6xl text-center uppercase mb-12"
                >
                    {copy.whoItsFor.title}
                </motion.h2>

                {/* Three Columns */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {copy.whoItsFor.columns.map((col, index) => (
                        <motion.div
                            key={col.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="text-center p-6 border border-[var(--muted)] hover:border-[var(--lime)] transition-colors"
                        >
                            <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl sm:text-3xl uppercase mb-3">
                                {col.title}
                            </h3>
                            <p className="text-[var(--muted)]">{col.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Men-only Statement */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="font-[family-name:var(--font-bebas-neue)] text-2xl sm:text-3xl text-[var(--lime)] uppercase mb-4">
                        {copy.whoItsFor.menOnly}
                    </p>
                    <p className="text-sm text-[var(--muted)] max-w-xl mx-auto">
                        {copy.whoItsFor.footer}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
