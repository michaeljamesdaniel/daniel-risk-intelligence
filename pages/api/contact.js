const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields: name, email, message' });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : undefined;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      return res.status(500).json({ error: 'SMTP not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS.' });
    }

    // Create transporter using explicit SMTP configuration (Gmail-compatible)
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports (587 uses STARTTLS)
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

      const mailOptions = {
        from: 'michael@danielriskintelligence.com', // site sender (use verified address)
        replyTo: `${name} <${email}>`,
        to: 'michael@danielriskintelligence.com', // deliver to business inbox
      subject: `Website contact form from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><hr/><p>${String(message).replace(/\n/g, '<br/>')}</p>`
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('API /api/contact error:', err);
    return res.status(500).json({ error: err?.message || 'Failed to send email' });
  }
}
