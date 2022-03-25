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

const ADD_AGENDA_DATA = `INSERT INTO AGENDA (ID, Cliente_ID, Funcionario_ID, Data, Hora, Servico, Duracao)
VALUES (1, 1, 3, "2022-03-09", "09:30:00", "Portifolio_ID 5", 60),
(2, 2, 1, "2022-04-21", "14:00:00", "Novo: Tatuagem de um aviãozinho de papel", 120),
(3, 3, 4, "2022-05-16", "10:45:00", "Portifolio_ID 15", 30),
(4, 4, 2, "2022-06-12", "16:50:00","Portifolio_ID 7", 180),
(5, 2, 3, "2022-07-25", "18:30:00","Novo: Tatuagem de um tubarão com o número 11", 90),
(6, 5, 5, "2022-08-26", "18:00:00","Novo: Perfuração no lábio", 60),
(7, 6, 1, "2022-09-12", "14:15:00","Portifolio_ID 4", 90),
(8, 7, 2, "2022-09-25", "10:30:00","Portifolio_ID 40", 180),
(9, 8, 3, "2022-10-25", "17:30:00","Novo: Tatuagem de um cubo mágico", 90),
(10, 9, 4, "2022-10-27", "18:15:00","Portifolio_ID 37", 60)`;

function criarTabelaAgenda() {
  db.run(AGENDA_SCHEMA, (error) => {
    if (error)
      console.log("Erro ao criar tabela AGENDA\n" + error.message + "\n");
  });
}

function popularTabelaAgenda() {
  db.run(ADD_AGENDA_DATA, (error) => {
    if (error) {
      if (
        error.message ===
        "SQLITE_CONSTRAINT: UNIQUE constraint failed: AGENDA.ID"
      ) {
        console.log("A tabela já foi populada\n");
      } else {
        console.log(`Erro ao popular tabela AGENDA\n${error.message}\n`);
      }
    }
  });
}

db.serialize(() => {
  criarTabelaAgenda();
  popularTabelaAgenda();
});
