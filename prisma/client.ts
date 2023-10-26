import { PrismaClient } from "@prisma/client";

class SingletonPrismaClient {
  private static instance: PrismaClient|null = null;

  private constructor() {}
  
  public static connection() {
    if(!SingletonPrismaClient.instance) {
      SingletonPrismaClient.instance = new PrismaClient();
    }
    return SingletonPrismaClient.instance;
  }
}

export default SingletonPrismaClient.connection();
