import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { title, code } = await req.json();

    const prompt = `
      Problem Title: "${title}"
      User Code: 
      ${code}

      Evaluate if the provided code is a correct and efficient solution to the problem. Return a JSON object:
      {
        "isCorrect": boolean,
        "message": string
      }
    `;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();
    const message = data.choices?.[0]?.message?.content;

    if (!message) throw new Error("Invalid response from OpenAI");

    const parsed = JSON.parse(message);
    return NextResponse.json(parsed);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Validation failed" }, { status: 500 });
  }
}
