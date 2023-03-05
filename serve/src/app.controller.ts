import { User } from '@gp/types';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuards } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req: { user: User }): any {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuards)
  @Get('protected')
  getHello(): string {
    return 'Hello World!';
  }
}
