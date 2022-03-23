import AgendaDAO from "../DAO/agendaDAO.js";
import AgendaModel from "../models/agendaModel.js";

const AgendaController = (app, bd) => {
  const agendaDAO = new AgendaDAO(bd);

  app.get("/agenda", async (req, res) => {
    try {
      const pegarTodosAgendamentos = await agendaDAO.pegarTodosAgendamentos();
      res.status(200).json(pegarTodosAgendamentos);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  app.get("/agenda/cliente/:Cliente_ID", async (req, res) => {
    try {
      const Cliente_ID = req.params.Cliente_ID;
      const pegarAgendamentoCliente = await agendaDAO.pegarAgendamentoCliente(
        Cliente_ID
      );
      res.status(200).json(pegarAgendamentoCliente);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  app.get("/agenda/funcionario/:Funcionario_ID", async (req, res) => {
    try {
      const Funcionario_ID = req.params.Funcionario_ID;
      const pegarAgendamentoFuncionario =
        await agendaDAO.pegarAgendamentoFuncionario(Funcionario_ID);
      res.status(200).json(pegarAgendamentoFuncionario);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  app.get("/agenda/data/:Data", async (req, res) => {
    try {
      const Data = req.params.Data;
      const pegarAgendamentoData = await agendaDAO.pegarAgendamentoData(Data);
      res.status(200).json(pegarAgendamentoData);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  app.post("/agenda", async (req, res) => {
    const body = req.body;
    try {
      const novoAgendamento = new AgendaModel(
        body.Cliente_ID,
        body.Funcionario_ID,
        body.Data,
        body.Hora,
        body.Servico,
        body.Duracao
      );
      const inserirAgendamento = await agendaDAO.inserirAgendamento(
        novoAgendamento
      );
      res.status(201).json(inserirAgendamento);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });

  app.put("/agenda/id/:ID", async (req, res) => {
    const ID = req.params.ID;
    const body = req.body;
    try {
      const atualizacao = new AgendaModel(
        body.Cliente_ID,
        body.Funcionario_ID,
        body.Data,
        body.Hora,
        body.Servico,
        body.Duracao
      );
      const atualizarAgendamento = await agendaDAO.atualizarAgendamento(
        ID,
        atualizacao
      );
      res.status(200).json(atualizarAgendamento);
    } catch (error) {
      res.status(400).json(error.message);
      console.log(error);
    }
  });

  app.delete("/agenda/id/:ID", async (req, res) => {
    const ID = req.params.ID;
    try {
      const deletarAgendamento = await agendaDAO.deletarAgendamento(ID);
      res.status(200).json(deletarAgendamento);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });
};

export default AgendaController;
