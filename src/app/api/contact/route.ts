import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    // In a real implementation, you would send this to Resend, SendGrid, etc.
    // For MVP, we mock the success response to simulate the integration.
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submission received:", validatedData);

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error?.name === "ZodError") {
      return NextResponse.json(
        { message: "Validation failed", errors: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
