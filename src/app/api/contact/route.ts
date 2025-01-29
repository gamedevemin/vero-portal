import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, message, productInterest } = body

    // Validate required fields
    if (!name || !company || !email || !message) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      )
    }

    // Send email notification
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'sales@vero-manufacturing.com',
      subject: `New Contact Form Submission - ${company}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Product Interest:</strong> ${productInterest}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    // Store in database (example using prisma)
    // const lead = await prisma.lead.create({
    //   data: {
    //     name,
    //     company,
    //     email,
    //     phone,
    //     message,
    //     productInterest,
    //   },
    // })

    // Track conversion
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will contact you soon.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    )
  }
} 