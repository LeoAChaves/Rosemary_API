import AgendaDAO from "../DAO/agendaDAO.js";
import AgendaModel from "../models/agendaModel.js";

const AgendaController = (app, bd) => {
  const agendaDAO = new AgendaDAO(bd);

  app.get("/agenda", async (req, res) => {
    try {
      const pegarTodosAgendamentos = await agendaDAO.pegarTodosAgendamentos();
      res.json(pegarTodosAgendamentos);
    } catch (error) {
      res.json(error);
    }
  });

  app.get("/agenda/cliente/:Cliente_ID", async (req, res) => {
    try {
      const Cliente_ID = req.params.Cliente_ID;
      const pegarAgendamentoCliente = await agendaDAO.pegarAgendamentoCliente(
        Cliente_ID
      );
      res.json(pegarAgendamentoCliente);
    } catch (error) {
      res.json(error);
    }
  });

  app.get("/agenda/funcionario/:Funcionario_ID", async (req, res) => {
    try {
      const Funcionario_ID = req.params.Funcionario_ID;
      const pegarAgendamentoFuncionario =
        await agendaDAO.pegarAgendamentoFuncionario(Funcionario_ID);
      res.json(pegarAgendamentoFuncionario);
    } catch (error) {
      res.json(error);
    }
  });

  app.get("/agenda/data/:Data", async (req, res) => {
    try {
      const Data = req.params.Data;
      const pegarAgendamentoData = await agendaDAO.pegarAgendamentoData(Data);
      res.json(pegarAgendamentoData);
    } catch (error) {
      res.json(error);
    }
  });

  app.post("/agenda", (req, res) => {
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
      agendaDAO
        .inserirAgendamento(novoAgendamento)
        .then((response) => {
          res.json(response);
        })
        .catch((error) => {
          res.json(error);
        });
    } catch (error) {
      res.json({
        message: error.message,
        error: true,
      });
    }
  });
};

export default AgendaController;
