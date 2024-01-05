import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const { name, email, phone, text } = await req.json();

    const transport = nodemailer.createTransport({
      host: 'ha01s019.org-dns.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_EMAIL_PASSWORD,
      },
    });

    const mailOptions: Mail.Options = {
      from: process.env.CONTACT_EMAIL,
      to: process.env.CONTACT_EMAIL,
      // cc: email, (uncomment this line if you want to send a copy to the sender)
      subject: `Message from ${name}`,
      text: `${text}

      email: ${email}
      tel: ${phone}`,
    };

    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve('Email sent');
          } else {
            reject(err.message);
          }
        });
      });

    try {
      await sendMailPromise();
      return NextResponse.json(
        {
          message:
            'Thanks for contacting us. One of the team will be in touch shortly.',
        },
        { status: 200 }
      );
    } catch (err) {
      return NextResponse.json(
        {
          error:
            'Failed to contact. Please try it later again or choose a different contact option.',
        },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }
}
