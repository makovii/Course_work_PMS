import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport(
  {
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
  },
  {
    from: `<${process.env.MAIL_USER}>`
  }
);

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if(err) return console.log(err);
  })
}

export { mailer }