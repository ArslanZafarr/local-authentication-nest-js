import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  public users: User[] = [
    {
      username: 'user1',
      email: 'user1@gmail.com',
      password: 'admin',
    },

    {
      username: 'user2',
      email: 'user2@gmail.com',
      password: 'admin',
    },

    {
      username: 'user3',
      email: 'user3@gmail.com',
      password: 'admin',
    },
  ];

  getUserByName(userName: string): User {
    return this.users.find((user) => user.username === userName);
  }
}
