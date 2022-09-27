import express from "express";
import { CreateProductController } from "../controllers/CreateProduct.controller";
import { GetAllProductsController } from "../controllers/getAllProducts.controller";

const appRoutes = express.Router();

appRoutes.get("/", new GetAllProductsController().handle);
appRoutes.post("/", new CreateProductController().handle);
appRoutes.post("/:id", );
appRoutes.delete("/:id", );

export default appRoutes;