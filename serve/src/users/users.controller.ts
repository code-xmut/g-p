import type { CreateUserDto, UpdateUserProfileDto } from '@gp/types';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { JwtAuthGuards } from 'src/auth/jwt-auth.guard';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuards)
  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post('register')
  async createUser(@Body() user: CreateUserDto): Promise<User> {
    return this.usersService.create(user);
  }

  @Get('username/:username')
  async isUserNameValid(@Param('username') username: string): Promise<boolean> {
    return this.usersService.isUserNameValid(username);
  }

  @Put('profile/:id')
  async updateUserProfileById(
    @Param('id') id: ObjectId,
    @Body() user: UpdateUserProfileDto,
  ): Promise<any> {
    return this.usersService.updateUserProfileById(id, user);
  }
}
