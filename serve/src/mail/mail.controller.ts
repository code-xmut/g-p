import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get()
  async sendEmail(@Query('email') email: string) {
    return await this.mailService.sendEmail(email);
  }

  @Post('verify')
  async verifyEmail(@Body('email') email: string, @Body('code') code: string) {
    return await this.mailService.verifyCode(email, code);
  }
}
