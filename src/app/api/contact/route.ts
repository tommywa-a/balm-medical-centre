import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email
    const data = await resend.emails.send({
      from: 'Balm Medical Centre <onboarding@resend.dev>', // Replace with your verified sender
      to: [process.env.CONTACT_EMAIL || 'balmmedicalcenter01@gmail.com'],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name} &lt;${email}&gt;${phone ? `<br/><strong>Phone:</strong> ${phone}` : ''}</p>
          <div style="background-color: #f3f4f6; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <h3 style="margin-top: 0; color: #1e40af;">${subject}</h3>
            <p style="white-space: pre-line;">${message}</p>
          </div>
          <p style="font-size: 0.875rem; color: #6b7280; margin-top: 2rem;">
            This email was sent from the contact form on Balm Medical Centre's website.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
