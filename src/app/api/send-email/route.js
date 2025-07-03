import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const { firstName, lastName, email, message, city } = body;

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'sebastiankolimagawork@gmail.com', // <-- ✅ Replace with your receiving email
      subject: 'New Contact Form Submission',
      html: `
        <p><strong>${firstName} ${lastName}</strong> from ${city} sent a message:</p>
        <p>${message}</p>
        <p>Reply to: ${email}</p>
      `,
    });
    console.log("Resend API response:", data);

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Resend Error:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
