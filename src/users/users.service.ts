import { Injectable } from "@nestjs/common";

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: "belbueno",
        password: "secret",
        rol: 1,
      },
      {
        userId: 2,
        username: "chris",
        password: "secret",
        rol: 2,
      },
      {
        userId: 3,
        username: "maria",
        password: "secreto",
        rol: 2,
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
