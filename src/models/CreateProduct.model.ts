import { prismaClient } from "../database/client";

type CreateProductType = {
  name: string,
  bar_code: string,
  price: number
}

export class CreateProductModel {
  async execute(data: CreateProductType) {
    const productExist = await prismaClient.product.findFirst({
      where: {
        name: data.name
      }
    })

    if (productExist) {
      return {error: "Product already exists!!!"}
    }

    const result = await prismaClient.product.create({
      data: {
        name: data.name,
        bar_code: data.bar_code,
        price: data.price
      }
    })

    return result;
  }
}