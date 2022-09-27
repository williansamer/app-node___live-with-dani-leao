import { prismaClient } from "../database/client";

export class GetAllProductsModel {
  async execute() {
    const result = await prismaClient.product.findMany();

    return result;
  }
}