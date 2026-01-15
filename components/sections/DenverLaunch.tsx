"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { copy } from "@/content/copy";

export function DenverLaunch() {
    const [email, setEmail] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: "Denver Form",
                    email,
                    city: neighborhood || "Denver",
                    source: "denver_block",
                    company: "",
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
                localStorage.setItem("sprint-club-waitlist-success", "true");
            }
        } catch {
            // Silent fail, user can try again
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="section-padding lane-lines relative overflow-hidden">
            {/* Lane line decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-[var(--lime)] opacity-20" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="panel-brutal p-8 sm:p-12 text-center"
                >
                    {/* Tagline */}
                    <span className="eyebrow eyebrow--lime mb-6 inline-block">
                        {copy.denver.tagline}
                    </span>

                    {/* Title */}
                    <h2 className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-6xl lg:text-7xl uppercase mb-6">
                        {copy.denver.title}
                    </h2>

                    {/* Copy */}
                    <p className="text-[var(--muted)] max-w-2xl mx-auto mb-8">
                        {copy.denver.copy}
                    </p>

                    {/* Mini Form */}
                    {isSuccess ? (
                        <div className="text-[var(--lime)] font-[family-name:var(--font-bebas-neue)] text-2xl">
                            ✓ You're on the list
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                            <input
                                type="email"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="input-brutal"
                            />
                            <input
                                type="text"
                                placeholder="Your neighborhood (optional)"
                                value={neighborhood}
                                onChange={(e) => setNeighborhood(e.target.value)}
                                className="input-brutal"
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-brutal btn-brutal--lime w-full"
                            >
                                {isSubmitting ? "Joining..." : "Get First Access"}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
