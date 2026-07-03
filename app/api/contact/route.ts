import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Here you would typically send an email using a service like SendGrid, Resend, or Nodemailer
    // sending to xyz@gmail.com
    console.log('Received contact submission for xyz@gmail.com:', data);

    // Mock successful response
    return NextResponse.json({ success: true, message: 'Message received' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to process request' }, { status: 500 });
  }
}
