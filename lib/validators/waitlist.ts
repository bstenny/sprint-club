import { z } from "zod";

// Athlete background options
export const athleteBackgroundOptions = [
    { value: "ex_hs", label: "Ex-High School Athlete" },
    { value: "ex_college", label: "Ex-College Athlete" },
    { value: "other", label: "Other" },
    { value: "prefer_not", label: "Prefer not to say" },
] as const;

export type AthleteBackground = (typeof athleteBackgroundOptions)[number]["value"];

// Waitlist form validation schema
export const waitlistSchema = z.object({
    firstName: z
        .string()
        .min(1, "First name is required")
        .max(40, "First name must be 40 characters or less"),
    email: z
        .string()
        .email("Please enter a valid email address"),
    city: z
        .string()
        .min(2, "City is required")
        .max(60, "City must be 60 characters or less"),
    instagram: z
        .string()
        .max(30, "Instagram handle too long")
        .optional()
        .transform((val) => val?.replace(/^@/, "")), // Strip leading @
    athleteBackground: z
        .enum(["ex_hs", "ex_college", "other", "prefer_not"])
        .optional(),
    smsOptIn: z
        .boolean()
        .default(false),
    phone: z
        .string()
        .optional()
        .refine(
            (val) => !val || /^[\d\s\-\+\(\)]+$/.test(val),
            "Please enter a valid phone number"
        ),
    source: z
        .enum(["hero", "denver_block", "footer"])
        .default("hero"),
    // Honeypot field - must be empty
    company: z
        .string()
        .max(0, "")
        .optional(),
});

// Type for validated waitlist data
export type WaitlistFormData = z.infer<typeof waitlistSchema>;

// Validate with conditional phone requirement
export function validateWaitlist(data: unknown) {
    const result = waitlistSchema.safeParse(data);

    if (!result.success) {
        return { success: false as const, errors: result.error.flatten().fieldErrors };
    }

    // Additional validation: phone required if smsOptIn is true
    if (result.data.smsOptIn && !result.data.phone) {
        return {
            success: false as const,
            errors: { phone: ["Phone number is required for text updates"] },
        };
    }

    return { success: true as const, data: result.data };
}
