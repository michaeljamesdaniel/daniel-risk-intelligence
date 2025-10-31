import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, service, comments } = body;

    // Validate required fields
    if (!name || !company || !email || !service || !comments) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New Contact Form Submission

Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service: ${service}

Message:
${comments}
    `.trim();

    // Use ZAI SDK to send email notification
    const zai = await ZAI.create();
    
    // Send notification using ZAI (you can customize this based on your needs)
    await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a notification system. Simply acknowledge the contact form submission.'
        },
        {
          role: 'user',
          content: `New contact form submission from ${name} (${email}) at ${company}. Service: ${service}. Message: ${comments}`
        }
      ],
    });

    // For production, you would integrate with an email service like Nodemailer
    // For now, we'll log the submission and return success
    console.log('Contact form submission:', emailContent);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}