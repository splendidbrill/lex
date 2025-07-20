// app/api/chat/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const userMessage = body.message;

    const res = await fetch('https://n8nlex-edcrcmbyc3epc5e0.canadacentral-01.azurewebsites.net/webhook/9cf400c3-2fd1-4828-9b27-76a01ffd463d/chatt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await res.json();

    return NextResponse.json({ reply: data });
  } catch (error) {
    console.error('Error contacting n8n:', error);
    return NextResponse.json({ error: 'Failed to reach AI agent' }, { status: 500 });
  }
}
