import { User } from '@gp/types';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuards } from 'src/auth/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuards)
  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  // create user
  @Post('register')
  async createUser(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }
}
