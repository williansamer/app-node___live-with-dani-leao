import { Request, Response } from "express";
import { DeleteProductModel } from "../models/DeleteProduct.model";


export class DeleteProductController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, bar_code, price } = req.body;

    const deleteProductModel = new DeleteProductModel;
    const result = await deleteProductModel.execute({id, name, bar_code, price});

    return res.status(200).json(result);
  }
}