import { Injectable } from '@nestjs/common';
import { User } from '@gp/types';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      username: 'john',
      password: 'John123',
    },
    {
      id: 2,
      name: 'Jane Doe',
      username: 'jane',
      password: 'Jane123',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
