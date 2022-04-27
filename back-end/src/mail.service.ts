import { Injectable } from "@nestjs/common";
import { MailerService } from '@nestjs-modules/mailer';
import { MailDataDto } from "./models/mailData";

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  public send(data: MailDataDto): void {
    this.mailerService
      .sendMail({
        to: 'adam@winstonstuesday.com', // list of receivers
        from: 'noreply@winstonstuesday.com', // sender address
        subject: 'New Contact Request', // Subject line
        html: `
            <h1>New Contact Request</h1>
            <p><b>From:</b> ${data.firstName} ${data.lastName}</p>
            <p><b>Email:</b> ${data.email}</p>
            <h2>Services:</h2>
            <p><b>Website:</b> ${data.servicesRequested.website}</p>
            <p><b>WebApp:</b> ${data.servicesRequested.webapp}</p>
            <p><b>Consulting:</b> ${data.servicesRequested.consulting}</p>
            <p><b>Hosting:</b> ${data.servicesRequested.hosting}</p>
            <hr />
            <p>${data.message}</p>
            <hr />
        `, // HTML body content
      })
      .then((x) => {console.log(x)})
      .catch((err) => {console.log(err)});
  }
}