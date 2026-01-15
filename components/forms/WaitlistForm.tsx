"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { copy } from "@/content/copy";
import { athleteBackgroundOptions, type WaitlistFormData } from "@/lib/validators/waitlist";

interface WaitlistFormProps {
    source: "hero" | "denver_block" | "footer";
    compact?: boolean;
}

export function WaitlistForm({ source, compact = false }: WaitlistFormProps) {
    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        city: "Denver",
        instagram: "",
        athleteBackground: "",
        smsOptIn: false,
        phone: "",
    });
    const [showMore, setShowMore] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState<Record<string, string[]>>({});
    const [shareUrl, setShareUrl] = useState("");

    // Check localStorage for previous success
    useEffect(() => {
        const saved = localStorage.getItem("sprint-club-waitlist-success");
        if (saved === "true") {
            setIsSuccess(true);
        }
        setShareUrl(window.location.origin);
    }, []);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setErrors({});
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, source, company: "" }),
            });

            const result = await response.json();

            if (!response.ok) {
                setErrors(result.errors || { submit: ["Something went wrong. Please try again."] });
                return;
            }

            // Success!
            setIsSuccess(true);
            localStorage.setItem("sprint-club-waitlist-success", "true");
        } catch {
            setErrors({ submit: ["Network error. Please try again."] });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const copyLink = () => {
        navigator.clipboard.writeText(shareUrl);
        alert("Link copied!");
    };

    const shareOnX = () => {
        const text = "I just signed up for Sprint Club — coach-led sprint training for men in Denver. Join the waitlist:";
        window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`,
            "_blank"
        );
    };

    // Success state
    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="panel-brutal p-6 sm:p-8"
            >
                <div className="text-center">
                    <div className="text-[var(--lime)] text-5xl mb-4">✓</div>
                    <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl sm:text-3xl mb-2">
                        {copy.form.success}
                    </h3>
                    <p className="text-[var(--muted)] text-sm mb-6">
                        {copy.form.shareLine}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                            onClick={copyLink}
                            className="btn-brutal btn-brutal--outline text-sm"
                        >
                            Copy Link
                        </button>
                        <button
                            onClick={shareOnX}
                            className="btn-brutal text-sm"
                        >
                            Share on X
                        </button>
                    </div>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`panel-brutal ${compact ? "p-4 sm:p-6" : "p-6 sm:p-8"}`}
            id={source === "hero" ? "hero-waitlist-form" : undefined}
        >
            {/* Required Fields */}
            <div className="space-y-4">
                <div>
                    <label htmlFor={`${source}-firstName`} className="sr-only">
                        {copy.form.fields.firstName}
                    </label>
                    <input
                        type="text"
                        id={`${source}-firstName`}
                        name="firstName"
                        placeholder={copy.form.fields.firstName}
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="input-brutal"
                    />
                    {errors.firstName && (
                        <p className="text-red-400 text-xs mt-1">{errors.firstName[0]}</p>
                    )}
                </div>

                <div>
                    <label htmlFor={`${source}-email`} className="sr-only">
                        {copy.form.fields.email}
                    </label>
                    <input
                        type="email"
                        id={`${source}-email`}
                        name="email"
                        placeholder={copy.form.fields.email}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-brutal"
                    />
                    {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email[0]}</p>
                    )}
                </div>

                <div>
                    <label htmlFor={`${source}-city`} className="sr-only">
                        {copy.form.fields.city}
                    </label>
                    <input
                        type="text"
                        id={`${source}-city`}
                        name="city"
                        placeholder={copy.form.fields.city}
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="input-brutal"
                    />
                    {errors.city && (
                        <p className="text-red-400 text-xs mt-1">{errors.city[0]}</p>
                    )}
                </div>
            </div>

            {/* Toggle More Fields */}
            {!compact && (
                <button
                    type="button"
                    onClick={() => setShowMore(!showMore)}
                    className="text-[var(--muted)] text-xs uppercase tracking-wider mt-4 hover:text-[var(--lime)] transition-colors"
                >
                    {showMore ? "− Less" : "+ More options"}
                </button>
            )}

            {/* Optional Fields */}
            <AnimatePresence>
                {showMore && !compact && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 mt-4 overflow-hidden"
                    >
                        <div>
                            <label htmlFor={`${source}-instagram`} className="sr-only">
                                {copy.form.fields.instagram}
                            </label>
                            <input
                                type="text"
                                id={`${source}-instagram`}
                                name="instagram"
                                placeholder={copy.form.fields.instagram}
                                value={formData.instagram}
                                onChange={handleChange}
                                className="input-brutal"
                            />
                        </div>

                        <div>
                            <label htmlFor={`${source}-athleteBackground`} className="sr-only">
                                Athlete Background
                            </label>
                            <select
                                id={`${source}-athleteBackground`}
                                name="athleteBackground"
                                value={formData.athleteBackground}
                                onChange={handleChange}
                                className="input-brutal"
                            >
                                <option value="">Select your background</option>
                                {athleteBackgroundOptions.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id={`${source}-smsOptIn`}
                                name="smsOptIn"
                                checked={formData.smsOptIn}
                                onChange={handleChange}
                                className="w-5 h-5 accent-[var(--lime)]"
                            />
                            <label
                                htmlFor={`${source}-smsOptIn`}
                                className="text-sm text-[var(--muted)]"
                            >
                                Text me launch updates
                            </label>
                        </div>

                        {formData.smsOptIn && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <input
                                    type="tel"
                                    id={`${source}-phone`}
                                    name="phone"
                                    placeholder={copy.form.fields.phone}
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="input-brutal"
                                />
                                {errors.phone && (
                                    <p className="text-red-400 text-xs mt-1">{errors.phone[0]}</p>
                                )}
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Submit */}
            <div className="mt-6">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-brutal btn-brutal--lime w-full"
                >
                    {isSubmitting ? "Submitting..." : copy.hero.primaryCta}
                </button>
                <p className="text-[var(--muted)] text-xs text-center mt-3">
                    {copy.form.consent}
                </p>
            </div>

            {errors.submit && (
                <p className="text-red-400 text-sm text-center mt-3">
                    {errors.submit[0]}
                </p>
            )}

            {/* Honeypot - hidden from users */}
            <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                style={{ position: "absolute", left: "-9999px" }}
            />
        </motion.form>
    );
}
