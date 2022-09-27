import { GetAllProductsModel } from "../models/GetAllProducts.model"
import { Request, Response } from "express";

export class GetAllProductsController {
  async handle(req: Request, res: Response) {
    const getAllProductsModel = new GetAllProductsModel();
    const result = await getAllProductsModel.execute();

    if (result) {
      return res.status(200).json(result);
    } else {
      return res.status(400).json({
        error: "Products not found"
      })
    }
  }
}