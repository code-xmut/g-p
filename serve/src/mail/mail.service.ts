import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  private readonly codeLength = 6;

  async generateCode(): Promise<string> {
    const code = Math.floor(100000 + Math.random() * 900000)
      .toString()
      .substring(0, this.codeLength);
    return code;
  }

  async sendEmail(email: string) {
    const code = await this.generateCode();
    await this.mailerService.sendMail({
      to: email,
      from: process.env.MAIL_USER,
      subject: 'Hello ✔',
      text: code,
    });
  }
}
