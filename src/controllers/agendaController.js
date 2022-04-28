import AgendaDAO from "../DAO/agendaDAO.js";
import AgendaModel from "../models/agendaModel.js";

const AgendaController = (app, bd) => {
  const agendaDAO = new AgendaDAO(bd);

  app.get("/agenda", async (req, res) => {
    try {
      const pegarTodosAgendamentos = await agendaDAO.pegarTodosAgendamentos();
      res.status(200).json(pegarTodosAgendamentos);
    } catch (error) {
      res.status(404).json({
        message: error.message,
        error: true,
      });
    }
  });

  app.get("/agenda/id/:ID", async (req, res) => {
    try {
      const ID = req.params.ID;
      const pegarAgendamentoID = await agendaDAO.pegarAgendamentoID(ID);
      res.status(200).json(pegarAgendamentoID);
    } catch (error) {
      res.status(404).json({
        message: error.message,
        error: true,
      });
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
      res.status(404).json({
        message: error.message,
        error: true,
      });
    }
  });

  app.get("/agenda/funcionario/:Funcionario_ID", async (req, res) => {
    try {
      const Funcionario_ID = req.params.Funcionario_ID;
      const pegarAgendamentoFuncionario =
        await agendaDAO.pegarAgendamentoFuncionario(Funcionario_ID);
      res.status(200).json(pegarAgendamentoFuncionario);
    } catch (error) {
      res.status(404).json({
        message: error.message,
        error: true,
      });
    }
  });

  app.get("/agenda/data/:Data", async (req, res) => {
    try {
      const Data = req.params.Data;
      const pegarAgendamentoData = await agendaDAO.pegarAgendamentoData(Data);
      res.status(200).json(pegarAgendamentoData);
    } catch (error) {
      res.status(404).json({
        message: error.message,
        error: true,
      });
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
      const checarDisponibilidade = await agendaDAO.checarDisponibilidade(
        novoAgendamento
      );
      const inserirAgendamento = await agendaDAO.inserirAgendamento(
        novoAgendamento
      );
      if (checarDisponibilidade) {
        res.status(201).json(inserirAgendamento);
      }
    } catch (error) {
      res.status(400).json({
        message: error.message,
        error: true,
      });
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
      const checarDisponibilidade = await agendaDAO.checarDisponibilidade(
        atualizacao
      );
      const atualizarAgendamento = await agendaDAO.atualizarAgendamento(
        ID,
        atualizacao
      );
      if (checarDisponibilidade) {
        res.status(201).json(atualizarAgendamento);
      }
    } catch (error) {
      res.status(400).json({
        message: error.message,
        error: true,
      });
    }
  });

  app.delete("/agenda/id/:ID", async (req, res) => {
    const ID = req.params.ID;
    try {
      const deletarAgendamento = await agendaDAO.deletarAgendamento(ID);
      res.status(200).json(deletarAgendamento);
    } catch (error) {
      res.status(400).json({
        message: error.message,
        error: true,
      });
    }
  });
};

export default AgendaController;
