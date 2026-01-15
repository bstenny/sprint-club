import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Sprint Club",
    description: "Privacy Policy for Sprint Club - Coach-led sprint training for men in Denver.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/"
                    className="text-[var(--muted)] hover:text-[var(--lime)] text-sm uppercase tracking-wider mb-8 inline-block"
                >
                    ← Back to Home
                </Link>

                <h1 className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-6xl mb-8">
                    Privacy Policy
                </h1>

                <div className="prose prose-invert max-w-none space-y-6 text-[var(--muted)]">
                    <p>
                        <strong className="text-[var(--fg)]">Last updated:</strong> January 2026
                    </p>

                    <section>
                        <h2 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-[var(--fg)] mt-8 mb-4">
                            Information We Collect
                        </h2>
                        <p>
                            When you join our waitlist, we collect:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Your name and email address</li>
                            <li>Your city</li>
                            <li>Optional: Instagram handle, athletic background, phone number</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-[var(--fg)] mt-8 mb-4">
                            How We Use Your Information
                        </h2>
                        <p>We use your information to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Notify you about Sprint Club launch dates and locations</li>
                            <li>Send session schedules and updates</li>
                            <li>Communicate important announcements</li>
                        </ul>
                        <p className="mt-4">
                            We will never sell your information to third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-[var(--fg)] mt-8 mb-4">
                            Data Security
                        </h2>
                        <p>
                            We implement appropriate security measures to protect your personal information.
                            Your data is stored securely and access is limited to authorized personnel only.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-[var(--fg)] mt-8 mb-4">
                            Your Rights
                        </h2>
                        <p>You have the right to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Request access to your personal data</li>
                            <li>Request correction of inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Unsubscribe from communications at any time</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-[var(--fg)] mt-8 mb-4">
                            Contact
                        </h2>
                        <p>
                            For privacy-related inquiries, contact us at:{" "}
                            <a
                                href="mailto:hello@sprintclub.run"
                                className="text-[var(--lime)] hover:underline"
                            >
                                hello@sprintclub.run
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
