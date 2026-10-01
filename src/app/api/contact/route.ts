import { NextResponse } from "next/server"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const name = String(body.name || "").trim()
    const email = String(body.email || "").trim()
    const message = String(body.message || "").trim()
    const website = String(body.website || "").trim()

    if (website) {
      return NextResponse.json({ ok: true })
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please complete all required fields.",
        },
        { status: 400 },
      )
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please enter a valid email address.",
        },
        { status: 400 },
      )
    }

    if (name.length > 100 || email.length > 254 || message.length > 2000) {
      return NextResponse.json(
        {
          ok: false,
          error: "One or more fields are too long.",
        },
        { status: 400 },
      )
    }

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL
    const webhookSecret = process.env.CONTACT_WEBHOOK_SECRET

    if (!webhookUrl || !webhookSecret) {
      console.error("Missing contact environment variables.")

      return NextResponse.json(
        {
          ok: false,
          error: "Contact service is not configured.",
        },
        { status: 500 },
      )
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: webhookSecret,
        name,
        email,
        message,
      }),
    })

    if (!response.ok) {
      console.error("Apps Script request failed:", response.status)

      return NextResponse.json(
        {
          ok: false,
          error: "Unable to send your message right now.",
        },
        { status: 502 },
      )
    }

    const result = await response.json()

    if (!result.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: "Unable to save your message.",
        },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact submission failed:", error)

    return NextResponse.json(
      {
        ok: false,
        error: "Something went wrong. Please try again.",
      },
      { status: 500 },
    )
  }
}
