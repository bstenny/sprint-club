import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Sprint Club",
    description: "Terms of Service and Assumption of Risk for Sprint Club - Coach-led sprint training for men in Denver.",
};

export default function TermsPage() {
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
                    Terms of Service
                </h1>

                <div className="prose prose-invert max-w-none space-y-6 text-[var(--muted)]">
                    <p>
                        <strong className="text-[var(--fg)]">Last updated:</strong> January 2026
                    </p>

                    <section>
                        <h2 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-[var(--fg)] mt-8 mb-4">
                            Acceptance of Terms
                        </h2>
                        <p>
                            By joining the Sprint Club waitlist or participating in Sprint Club sessions,
                            you agree to these Terms of Service. If you do not agree, please do not use
                            our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-[var(--fg)] mt-8 mb-4">
                            Assumption of Risk
                        </h2>
                        <div className="bg-[var(--panel)] border-l-4 border-[var(--lime)] p-4 my-4">
                            <p className="text-[var(--fg)] font-medium mb-2">Important Notice</p>
                            <p>
                                Sprint training involves inherent risks including, but not limited to:
                                muscle strains, sprains, fractures, cardiovascular events, and other injuries.
                            </p>
                        </div>
                        <p>
                            By participating in Sprint Club activities, you acknowledge and accept that:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>You are voluntarily participating in physical activities</li>
                            <li>You understand the risks associated with sprint training</li>
                            <li>You are physically capable of participating in high-intensity exercise</li>
                            <li>You have consulted with a physician if you have any health concerns</li>
                            <li>You assume full responsibility for any injury or harm that may occur</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-[var(--fg)] mt-8 mb-4">
                            Limitation of Liability
                        </h2>
                        <p>
                            To the fullest extent permitted by law, Sprint Club and its coaches, employees,
                            and affiliates shall not be liable for any direct, indirect, incidental, special,
                            consequential, or punitive damages arising from your participation in our programs.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-[var(--fg)] mt-8 mb-4">
                            Code of Conduct
                        </h2>
                        <p>All Sprint Club participants are expected to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Treat coaches and fellow participants with respect</li>
                            <li>Follow coach instructions for safety and training protocol</li>
                            <li>Communicate any injuries or limitations</li>
                            <li>Arrive on time and prepared for sessions</li>
                            <li>Maintain a supportive, ego-free training environment</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-[var(--fg)] mt-8 mb-4">
                            Modifications
                        </h2>
                        <p>
                            We reserve the right to modify these terms at any time. Continued participation
                            in Sprint Club activities constitutes acceptance of any modifications.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-[var(--fg)] mt-8 mb-4">
                            Contact
                        </h2>
                        <p>
                            Questions about these terms? Contact us at:{" "}
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
