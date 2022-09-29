import { Request, Response } from "express";
import { UpdateProductModel } from "../models/UpdateProduct.model";


export class UpdateProductController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, bar_code, price } = req.body;

    const updateProductModel = new UpdateProductModel;
    const result = await updateProductModel.execute({id, name, bar_code, price});

    return res.status(200).json(result);
  }
}