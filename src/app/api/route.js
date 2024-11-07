import nodemailer from 'nodemailer';

export async function POST(req) {
  const { email, firstName, lastName, company, companySize, phoneNumber, state } = await req.json();

  // Set up Nodemailer transport
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'lamar@kiwinutzcoffee.com',
    subject: 'Contact Form Submission',
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company}\nCompany Size: ${companySize}\nPhone: ${phoneNumber}\nState: ${state}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Email sending failed', error: error.message }),
      { status: 500 }
    );
  }
}
