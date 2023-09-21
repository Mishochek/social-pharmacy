import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_LOGIN,
      pass: process.env.EMAIL_PASSWORD,
    },
  },
  {
    from: 'Elbrustestemail Elbrus Nodemailer <elbrustestemail@gmail.com',
  },
);
const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log('Email sent: ', info);
  });
};
export default mailer;
