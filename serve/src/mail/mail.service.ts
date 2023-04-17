import { MailerService } from '@nestjs-modules/mailer';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class MailService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly mailerService: MailerService,
  ) {}

  private readonly codeLength = 6;

  async generateCode(): Promise<string> {
    const code = Math.floor(100000 + Math.random() * 900000)
      .toString()
      .substring(0, this.codeLength);
    return code;
  }

  async sendEmail(email: string) {
    const code = await this.generateCode();
    await this.cacheManager.set(email, code, 1000 * 60);
    await this.mailerService
      .sendMail({
        to: email,
        from: process.env.MAIL_USER,
        subject: '验证码',
        text: `您的验证码为${code}`,
      })
      .catch((err) => {
        return err;
      });

    return true;
  }

  async verifyCode(email: string, code: string) {
    const cacheCode = await this.cacheManager.get(email);
    if (cacheCode === code) {
      await this.cacheManager.del(email);
      return true;
    }
    return false;
  }
}
