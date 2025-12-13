import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  // Without a database, we can't return a real count; keep API shape consistent.
  return NextResponse.json({ count: 0 });
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const normalized = email.trim().toLowerCase();
    const resendApiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!resendApiKey) {
      return NextResponse.json(
        { error: "Resend API key not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    // Create contact in Resend (audienceId optional)
    try {
      await resend.contacts.create(
        audienceId
          ? { email: normalized, audienceId }
          : { email: normalized }
      );
    } catch (err) {
      console.error("Resend contact create failed", err);
      return NextResponse.json(
        { error: "Failed to create contact in Resend" },
        { status: 500 }
      );
    }

    // Without local storage, return a placeholder count
    return NextResponse.json({ count: 0 });
  } catch (error) {
    console.error("Waitlist POST failed", error);
    return NextResponse.json(
      { error: "Unable to process request" },
      { status: 500 }
    );
  }
}
