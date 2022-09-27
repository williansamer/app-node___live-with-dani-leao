
import { Request, Response } from "express";
import { CreateProductModel } from "../models/CreateProduct.model";

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, bar_code, price } = req.body;

    const createProductModel = new CreateProductModel();
    const result = await createProductModel.execute({name, bar_code, price})

    return res.status(200).json(result)
  }
}