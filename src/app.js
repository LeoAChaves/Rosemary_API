import express from "express";
import cors from "cors";
import database from "./database/sqlite-db.js";
import IndexController from "./controllers/indexController.js";
import AgendaController from "./controllers/agendaController.js";

const app = express();
app.use(express.json());
app.use(cors());

IndexController(app);
AgendaController(app, database);

export default app;
