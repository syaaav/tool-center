import nodemailer from 'nodemailer';

// const EMAIL = 'mail@inscenter.ru';

const EMAIL = 'tank.card.battle@gmail.com'

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
    pass: 'vaujawkmnhzualoh'
  }
})

export const mailOptions = {
  from: EMAIL,
  to: EMAIL,
}
