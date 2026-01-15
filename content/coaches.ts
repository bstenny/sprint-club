// Sprint Club - Coach Data (Placeholders)

export interface Coach {
    id: string;
    lastName: string;
    firstName: string;
    credential1: string;
    credential2: string;
    specialty: string;
    philosophy: string;
}

export const coaches: Coach[] = [
    {
        id: "coach-1",
        lastName: "MARTINEZ",
        firstName: "Coach",
        credential1: "Former D1 Track & Field",
        credential2: "USATF Level 2 Sprint Coach",
        specialty: "Acceleration mechanics",
        philosophy: "Technique-first. Intensity earned.",
    },
    {
        id: "coach-2",
        lastName: "THOMPSON",
        firstName: "Coach",
        credential1: "10+ years coaching experience",
        credential2: "Sports Performance Specialist",
        specialty: "Top-speed development",
        philosophy: "Speed is a skill. We build it.",
    },
    {
        id: "coach-3",
        lastName: "WILLIAMS",
        firstName: "Coach",
        credential1: "Physical Therapist (DPT)",
        credential2: "Return-to-Sport Specialist",
        specialty: "Injury prevention & return-to-speed",
        philosophy: "Smart programming. Long-term gains.",
    },
];
