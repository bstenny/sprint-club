"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";
import { coaches } from "@/content/coaches";

export function Coaches() {
    return (
        <section className="section-padding bg-[var(--panel)]">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-12"
                >
                    <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-5xl lg:text-6xl uppercase mb-4">
                        {copy.coaches.title}
                    </h2>
                    <p className="text-[var(--muted)] max-w-2xl mx-auto">
                        {copy.coaches.subtitle}
                    </p>
                </motion.div>

                {/* Coach Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {coaches.map((coach, index) => (
                        <motion.div
                            key={coach.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="panel-brutal p-6"
                        >
                            {/* Big last name */}
                            <h3 className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-5xl uppercase mb-4 leading-none">
                                {coach.lastName}
                            </h3>

                            {/* Credentials */}
                            <div className="space-y-1 mb-4">
                                <p className="text-sm text-[var(--muted)]">
                                    • {coach.credential1}
                                </p>
                                <p className="text-sm text-[var(--muted)]">
                                    • {coach.credential2}
                                </p>
                            </div>

                            {/* Specialty */}
                            <p className="text-sm">
                                <span className="text-[var(--lime)]">Specialty:</span>{" "}
                                <span className="text-[var(--fg)]">{coach.specialty}</span>
                            </p>

                            {/* Philosophy */}
                            <p className="text-sm text-[var(--muted)] italic mt-4 pt-4 border-t border-[var(--muted)]">
                                "{coach.philosophy}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
