"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

export function FinalCTA() {
    return (
        <section className="section-padding lane-lines">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-10"
                >
                    <h2 className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-6xl lg:text-7xl uppercase mb-4">
                        {copy.finalCta.title}
                    </h2>
                    <p className="text-xl text-[var(--muted)]">
                        {copy.finalCta.copy}
                    </p>
                </motion.div>

                <div className="max-w-lg mx-auto">
                    <WaitlistForm source="footer" />
                </div>
            </div>
        </section>
    );
}
