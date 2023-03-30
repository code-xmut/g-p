import { Controller, Get, Query } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get()
  async sendEmail(@Query('email') email: string) {
    await this.mailService.sendEmail(email);

    return 'ok';
  }
}
