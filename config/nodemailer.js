import nodemailer from "nodemailer";
import { pass } from "./config";
// const EMAIL = 'mail@inscenter.ru';

const EMAIL = "mysyava@gmail.com";

// export const transporter = nodemailer.createTransport({
//   host: 'mail.hosting.reg.ru',
//   port: 587,
//   secure: false,
//   auth: {
//     user: EMAIL,
//     pass: 'vF5cO2uO4ejV4sL4',
//   }
// })

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    // pass: "ctsmzgbsfatjymsx",
    pass: pass,
  },
});

export const mailOptions = {
  from: EMAIL,
  to: EMAIL,
};