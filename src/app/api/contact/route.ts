import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000, "Message is too long"),
});

// Simple in-memory rate limiter for abuse protection
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;
const ipRequestMap = new Map<string, { count: number; timestamp: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = ipRequestMap.get(ip);
  
  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    ipRequestMap.set(ip, { count: 1, timestamp: now });
    return true;
  }
  
  if (record.count >= MAX_REQUESTS) {
    return false;
  }
  
  record.count += 1;
  return true;
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

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
