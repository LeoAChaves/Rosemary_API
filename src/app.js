import express from "express";
import database from "./database/sqlite-db.js";
import AgendaController from "./controllers/agendaController.js";

const app = express();
app.use(express.json());

AgendaController(app, database);

export default app;
