"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { copy } from "@/content/copy";

export function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToWaitlist = () => {
        const heroForm = document.getElementById("hero-waitlist-form");
        heroForm?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-[var(--bg)]/95 backdrop-blur-sm border-b-[var(--bw)] border-[var(--muted)]"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo / Brand */}
                    <div className="flex flex-col">
                        <Link
                            href="/"
                            className="font-[family-name:var(--font-bebas-neue)] text-2xl sm:text-3xl tracking-wide text-[var(--fg)] hover:text-[var(--lime)] transition-colors"
                        >
                            {copy.nav.brand}
                        </Link>
                        <span className="hidden sm:block text-[0.625rem] tracking-[0.15em] text-[var(--muted)] uppercase">
                            {copy.nav.tagline}
                        </span>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={scrollToWaitlist}
                        className="btn-brutal btn-brutal--lime text-sm"
                    >
                        {copy.nav.cta}
                    </button>
                </div>
            </div>
        </motion.header>
    );
}
