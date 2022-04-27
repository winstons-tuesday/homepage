import { Controller, Post, Req } from "@nestjs/common";
import { Request } from 'express';
import { MailService } from "./mail.service";
import { MailDataDto } from "./models/mailData";


@Controller('messages')
export class MessagesController {
    constructor(private readonly mailService: MailService) {}
    
    @Post()
    contactUs(@Req() request: Request):string {
        // TODO: validate request body
        // TODO: Add logging like Sentry or something
        this.mailService.send(request.body);
        return request.body;
    }

}