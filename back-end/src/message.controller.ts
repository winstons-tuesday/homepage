import { Controller, Post, Req } from "@nestjs/common";
import { Request } from 'express';

@Controller('messages')
export class MessagesController {
    
    @Post()
    contactUs(@Req() request: Request):string {
        //console.log(request.body);
        return request.body;
    }

}