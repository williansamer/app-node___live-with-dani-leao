import express from "express";
import appRoutes from "./routes/products.route";

const app = express();

app.use(express.json());
app.use(appRoutes);

export default app;