import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {

    const body = await request.json();
    const { name, company, email, message } = body;

    // company is optional for the frontend page; require name, email, message
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields: name, email, message' }, { status: 400 });
    }

    // SMTP configuration via environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPortRaw = process.env.SMTP_PORT;
    const smtpPort = smtpPortRaw ? parseInt(smtpPortRaw, 10) : undefined;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      return NextResponse.json(
        { error: 'SMTP not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPortRaw === '465' || smtpPort === 465, // true for 465 (SSL), false otherwise
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    const mailOptions = {
      from: smtpUser,
      replyTo: `${name} <${email}>`,
      to: smtpUser,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nCompany: ${company ?? ''}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Company:</strong> ${company ?? ''}</p><p><strong>Email:</strong> ${email}</p><hr/><p>${message.replace(/\n/g, '<br/>')}</p>`
    } as const;

    await transporter.sendMail(mailOptions as any);

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: err?.message || 'Unknown error' }, { status: 500 });
  }
}
