// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { transporter, mailOptions } from "../../config/nodemailer";

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    if (!data) {
      return res.status(400).json({ message: 'Bad request' });
    }

    try {
      const i = await transporter.sendMail({
        ...mailOptions,
        subject: data,
        text: 'Test string',
        html: '<h1>Test mail<h1><p>Body mail<p>'
      });
      console.log(i)
      return res.status(200).json({ success: true })
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  }
  res.status(400).json({ message: 'Bad request' });
}

export default handler;
