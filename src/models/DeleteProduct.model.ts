import { prismaClient } from "../database/client";

type ProductType = {
  id: string,
  name: string,
  bar_code: string,
  price: number
}

export class DeleteProductModel {
  async execute(data: ProductType) {
    const findProduct = await prismaClient.product.findFirst({
      where: {
        id: data.id
      }
    })

    if (!findProduct) {
      return {message: "Id does not exist!!!"}
    }

    const result = await prismaClient.product.delete({
      where: {
        id: findProduct.id
      }
    })

    return {message: "Deleted!!!"};

  }
}