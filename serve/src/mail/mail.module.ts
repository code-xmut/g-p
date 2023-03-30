import { CacheModule, Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: process.env.MAIL_SERVICE,
        port: parseInt(process.env.MAIL_PORT),
        secure: true,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      },
    }),
    CacheModule.register(),
  ],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}
