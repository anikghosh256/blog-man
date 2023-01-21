import { Prisma } from "@prisma/client";

export class UserService {
  constructor() {
    this.prisma = new Prisma();
  }

  async getUser(id) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
}
