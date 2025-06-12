import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { notes } = await req.json();

    const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful medical assistant." },
          { role: "user", content: `Patient notes: ${notes}. Give a brief suggestion.` },
        ],
      }),
    });

    const data = await openaiResponse.json();

    // ⛔ Handle OpenAI error object
    if (data.error) {
      console.error("⚠️ OpenAI error:", data.error);
      return NextResponse.json({ error: data.error.message, raw: data }, { status: 500 });
    }

    // ✅ Normal case
    return NextResponse.json({ result: data.choices[0].message.content });

  } catch (error: any) {
    console.error("🔥 Server Error:", error);
    return NextResponse.json({ error: "Server error", message: error.message }, { status: 500 });
  }
}

