import type { CreateUserDto, UpdateUserProfileDto } from '@gp/types';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { JwtAuthGuards } from 'src/auth/jwt-auth.guard';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';
import { UserInfo } from '@gp/types/user';

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

  @Get('profile/:username')
  async findUserInfoByUsername(
    @Param('username') username: string,
  ): Promise<UserInfo> {
    return this.usersService.findUserInfoByUsername(username);
  }

  @Put('profile/:id')
  async updateUserProfileById(
    @Param('id') id: ObjectId,
    @Body() user: UpdateUserProfileDto,
  ): Promise<any> {
    return this.usersService.updateUserProfileById(id, user);
  }

  @Get(':userName')
  async getUserByUsername(@Param('userName') userName: string): Promise<User> {
    return this.usersService.findOne(userName);
  }

  @Put('security/:id')
  async updatePassword(
    @Param('id') id: string,
    @Body() PasswordInfo: { oldPassword: string; newPassword: string },
  ) {
    return this.usersService.updatePassword(PasswordInfo, id);
  }

  @Delete('destory')
  async deleteUserById(@Req() req: any) {
    return this.usersService.deleteUserById(req.header.id);
  }

  @Get('search/:name')
  async findUsersByName(
    @Param('name') name: string,
    @Query('page') page: number,
    @Query('size') size: number,
  ) {
    return this.usersService.findUsersByName(name, page, size);
  }
}
