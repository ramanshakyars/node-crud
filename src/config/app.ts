import express from "express";
import cors from "cors";
import helmet from "helmet";
import userRoutes from "./routes/user.routes";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);

app.use(errorHandler);

export default app;