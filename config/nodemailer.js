import nodemailer from 'nodemailer';

// const EMAIL = 'mail@inscenter.ru';

const EMAIL = 'email@gmail.com'

// export const transporter = nodemailer.createTransport({
//   host: 'mail.hosting.reg.ru',
//   port: 587,
//   secure: false,
//   auth: {
//     user: EMAIL,
//     pass: 'pass',
//   }
// })

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: 'vaujawkmnhzualoh'
  }
})

export const mailOptions = {
  from: EMAIL,
  to: EMAIL,
}
