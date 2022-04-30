import request from "supertest";
import app from "../app.js";

describe("GET /agenda", () => {
  it("Deve retornar todos os agendamentos", async () => {
    const res = await request(app).get("/agenda");
    expect(res.statusCode).toEqual(200);
  });
});

describe("GET /agenda/cliente/:Cliente_ID", () => {
  it("Deve retornar os agendamentos do cliente solicitado", async () => {
    const res = await request(app).get("/agenda/cliente/2");
    expect(res.statusCode).toEqual(200);
  });
});

describe("GET /agenda/funcionario/:Funcionario_ID", () => {
  it("Deve retornar os agendamentos do funcionario solicitado", async () => {
    const res = await request(app).get("/agenda/funcionario/2");
    expect(res.statusCode).toEqual(200);
  });
});

describe("GET /agenda/data/:Data", () => {
  it("Deve retornar os agendamentos na data solicitada", async () => {
    const res = await request(app).get("/agenda/data/2022-04-21");
    expect(res.statusCode).toEqual(200);
  });
});

describe("POST /agenda", () => {
  it("Deve inserir um novo agendamento", async () => {
    const res = await request(app).post("/agenda").send({
      Cliente_ID: 10,
      Funcionario_ID: 1,
      Data: "2022-11-15",
      Hora: "15:30",
      Servico: "Portifolio_ID 2",
      Duracao: "30",
    });
    expect(res.statusCode).toEqual(201);
  });
});

describe("PUT /agenda/id/:ID", () => {
  it("Deve atualizar um agendamento", async () => {
    const res = await request(app).put("/agenda/id/1").send({
      Cliente_ID: 9,
      Funcionario_ID: 6,
      Data: "2022-10-28",
      Hora: "17:30",
      Servico: "Portifolio_ID 37",
      Duracao: "60",
    });
    expect(res.statusCode).toEqual(201);
  });
});

describe("DELETE /agenda/id/:ID", () => {
  it("Deve deletar um agendamento", async () => {
    const res = await request(app).delete("/agenda/id/3");
    expect(res.statusCode).toEqual(200);
  });
});
