import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, service, comments } = body;

    // Validate required fields (only name and email are required)
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
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
Company: ${company || 'Not provided'}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service: ${service || 'Not specified'}

Message:
${comments || 'No message provided'}
    `.trim();

    // Log the submission
    console.log('Contact form submission:', emailContent);
    
    // For production, you would integrate with an email service like SendGrid, Nodemailer, etc.
    // For now, we're just logging the submission

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