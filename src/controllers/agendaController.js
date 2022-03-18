import AgendaDAO from "../DAO/agendaDAO.js";

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
};

export default AgendaController;
