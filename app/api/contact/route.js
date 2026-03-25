// File: app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "Name, Email, and Message are required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Lead: ${service || 'General Inquiry'} from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f8fafb; border-radius: 10px;">
          <h2 style="color: #b45c5c;">New Inquiry from Colours Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Service Requested:</strong> ${service || 'Not selected'}</p>
          <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; margin-top: 20px; border: 1px solid #eeeeee;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 });

  } catch (error) {
    // YAHAN BADLAAV KIYA HAI: Ab asli error popup mein dikhega!
    console.error("API Error Details:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}