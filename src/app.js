import express from "express";
import database from "./database/sqlite-db.js";

const app = express();
app.use(express.json());

export default app;
