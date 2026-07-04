import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    // Configure Nodemailer transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER, // Needs to be authenticated user
      to: process.env.GMAIL_USER, // Sending it back to yourself
      replyTo: data.email, // So you can hit "reply" directly
      subject: `New Application/Inquiry: ${data.service || 'General'}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Service Interested In: ${data.service || 'Not specified'}

Message:
${data.message}
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Received and sent contact submission from:', data.email);

    return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send message' }, { status: 500 });
  }
}
