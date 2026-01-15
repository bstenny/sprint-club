"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";

export function ProofStrip() {
    return (
        <section className="border-y-[var(--bw)] border-[var(--muted)] bg-[var(--panel)]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    {copy.proofStrip.items.map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className={`
                relative px-4 py-6 sm:px-6 sm:py-8
                ${index !== copy.proofStrip.items.length - 1 ? "border-r-[1px] border-[var(--muted)]" : ""}
                ${index < 2 ? "border-b-[1px] lg:border-b-0 border-[var(--muted)]" : ""}
              `}
                        >
                            {/* Lime corner tick */}
                            <div className="absolute top-2 left-2 w-2 h-2 border-t-[var(--bw)] border-l-[var(--bw)] border-[var(--lime)]" />

                            <p className="font-[family-name:var(--font-bebas-neue)] text-base sm:text-lg lg:text-xl uppercase tracking-wide text-[var(--fg)]">
                                {item}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
