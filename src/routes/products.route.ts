import express from "express";
import { CreateProductController } from "../controllers/CreateProduct.controller";
import { DeleteProductController } from "../controllers/DeleteProduct.controller";
import { GetAllProductsController } from "../controllers/GetAllProducts.controller";
import { UpdateProductController } from "../controllers/UpdateProduct.controller";

const appRoutes = express.Router();

appRoutes.get("/", new GetAllProductsController().handle);
appRoutes.post("/", new CreateProductController().handle);
appRoutes.post("/:id", new UpdateProductController().handle);
appRoutes.delete("/:id", new DeleteProductController().handle );

export default appRoutes;