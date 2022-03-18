import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";
sqlite3.verbose();

const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath);

const AGENDA_SCHEMA = `CREATE TABLE IF NOT EXISTS "AGENDA" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "Cliente_ID" integer,
    "Funcionario_ID" integer,
    "Data" text,
    "Hora" datetime,
    "Servico" text,
    "Duracao" integer
)`;

const ADD_AGENDA_DATA = `INSERT INTO AGENDA (Cliente_ID, Funcionario_ID, Data, Hora, Servico, Duracao)
VALUES (1, 3, "2022-03-09", "09:30:00", "Portifolio_ID 5", 60),
(2, 1, "2022-04-21", "14:00:00", "Portifolio_ID 2", 120),
(3, 4, "2022-05-16", "10:45:00", "Portifolio_ID 15", 30),
(4, 2, "2022-06-12", "16:50:00","Portifolio_ID 7", 180),
(5, 2, "2022-07-25", "18:15:00","Portifolio_ID 10", 90)`;

function criarTabelaAgenda() {
  db.run(AGENDA_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar tabela AGENDA\n" + error.message);
  });
}

function popularTabelaAgenda() {
  db.run(ADD_AGENDA_DATA, (error) => {
    if (error) console.log("Erro ao popular tabela AGENDA\n" + error.message);
  });
}

db.serialize(() => {
  criarTabelaAgenda();
  popularTabelaAgenda();
});
