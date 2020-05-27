//init
const nodemailer = require("nodemailer");
var readlineSync = require('readline-sync');
const fs = require('fs-extra');
const smtp = require('./smtp.json');
const body = require('./body.json');
//smtp config
const smtp_host = smtp['host'];
const smtp_user = smtp['user'];
const smtp_pass = smtp['pass'];
//body config
const mail_from = body['from'];
const mail_to = readlineSync.questionEMail('A qui envoyer le mail ? > ')
const subject = body['subject'];
const corps = body['body'];
//infos
var version = "1.1";
console.log("Bxsic - Mailer " + version);
console.log()
console.log('Email sending...')

async function main() {
    let transporter = nodemailer.createTransport({
      host: smtp_host,
      port: 465,
      secure: true,
      auth: {
        user: smtp_user,
        pass: smtp_pass 
      }
    }); //logins smtp
    let info = await transporter.sendMail({
      from: mail_from,
      to: mail_to,
      subject: subject, 
      text: corps
    }); //structure mail
  } main().catch(console.error);

console.log()
console.log('Mail sent !');
