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
    "Servico" text,
    "Duracao" integer
)`;

const ADD_AGENDA_DATA = `INSERT INTO AGENDA (Cliente_ID, Funcionario_ID, Data, Servico, Duracao)
VALUES (1, 3, "16/03/2022", "Portifolio_ID 5", 60),
(2, 1, "17/04/2022", "Portifolio_ID 2", 120),
(3, 4, "18/05/2022", "Portifolio_ID 15", 30),
(4, 2, "19/06/2022", "Portifolio_ID 7", 180),
(5, 2, "19/06/2022", "Portifolio_ID 10", 90)`;

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
