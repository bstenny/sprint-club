import { NextRequest, NextResponse } from "next/server";
import { validateWaitlist } from "@/lib/validators/waitlist";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Honeypot check
        if (body.company && body.company.length > 0) {
            // Bot detected - silently succeed
            return NextResponse.json({ success: true });
        }

        // Validate
        const result = validateWaitlist(body);

        if (!result.success) {
            return NextResponse.json(
                { success: false, errors: result.errors },
                { status: 400 }
            );
        }

        // For MVP: Log to console (replace with DB insert later)
        console.log("=== New Waitlist Signup ===");
        console.log("Name:", result.data.firstName);
        console.log("Email:", result.data.email);
        console.log("City:", result.data.city);
        console.log("Source:", result.data.source);
        if (result.data.instagram) console.log("Instagram:", result.data.instagram);
        if (result.data.athleteBackground) console.log("Background:", result.data.athleteBackground);
        if (result.data.smsOptIn) console.log("Phone:", result.data.phone);
        console.log("Timestamp:", new Date().toISOString());
        console.log("===========================");

        // TODO: Add database insert with Drizzle
        // await db.insert(waitlistSignups).values({
        //   firstName: result.data.firstName,
        //   email: result.data.email,
        //   city: result.data.city,
        //   instagram: result.data.instagram,
        //   athleteBackground: result.data.athleteBackground,
        //   smsOptIn: result.data.smsOptIn,
        //   phone: result.data.phone,
        //   source: result.data.source,
        // });

        // TODO: Send confirmation email with Resend
        // await resend.emails.send({
        //   from: 'Sprint Club <noreply@sprintclub.run>',
        //   to: result.data.email,
        //   subject: "You're on the Sprint Club Denver list",
        //   html: confirmationEmailTemplate(result.data.firstName),
        // });

        return NextResponse.json({
            success: true,
            message: "You're on the list!",
        });
    } catch (error) {
        console.error("Waitlist signup error:", error);
        return NextResponse.json(
            { success: false, errors: { submit: ["Server error. Please try again."] } },
            { status: 500 }
        );
    }
}
