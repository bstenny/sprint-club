import Link from "next/link";
import { copy } from "@/content/copy";

export function Footer() {
    return (
        <footer className="border-t-[var(--bw)] border-[var(--muted)] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <h2 className="font-[family-name:var(--font-bebas-neue)] text-2xl mb-4">
                            {copy.footer.brand}
                        </h2>
                        <p className="text-sm text-[var(--muted)]">
                            Coach-led sprint training for men.
                            <br />
                            Denver, Colorado.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-[family-name:var(--font-bebas-neue)] text-sm uppercase tracking-wider mb-4 text-[var(--muted)]">
                            Legal
                        </h3>
                        <ul className="space-y-2">
                            {copy.footer.links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[var(--fg)] hover:text-[var(--lime)] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-[family-name:var(--font-bebas-neue)] text-sm uppercase tracking-wider mb-4 text-[var(--muted)]">
                            Contact
                        </h3>
                        <a
                            href={`mailto:${copy.footer.email}`}
                            className="text-sm text-[var(--fg)] hover:text-[var(--lime)] transition-colors"
                        >
                            {copy.footer.email}
                        </a>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-[family-name:var(--font-bebas-neue)] text-sm uppercase tracking-wider mb-4 text-[var(--muted)]">
                            Follow
                        </h3>
                        <a
                            href="https://instagram.com/sprintclub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[var(--fg)] hover:text-[var(--lime)] transition-colors"
                        >
                            {copy.footer.instagram}
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-[var(--muted)]">
                    <p className="text-xs text-[var(--muted)] text-center">
                        © {new Date().getFullYear()} Sprint Club. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
