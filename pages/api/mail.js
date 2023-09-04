// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import { transporter, mailOptions } from "../../config/nodemailer";

// const handler = async (req, res) => {
//   if (req.method === 'POST') {
//     const data = req.body;
//     if (!data) {
//       return res.status(400).json({ message: 'Bad request' });
//     }

//     try {
//       await transporter.sendMail({
//         ...mailOptions,
//         subject: 'From form',
//         text: 'Test string',
//         html: `<p>Name: ${data?.fullname}<p><p>Email: ${data?.email}</p><p>Phone: ${data?.number}</p>`
//       });

//       return res.status(200).json({ success: true })
//     } catch (err) {
//       console.log(err);
//       return res.status(400).json({ message: err.message });
//     }
//   }
//   res.status(400).json({ message: 'Bad request' });
// }

// export default handler;
