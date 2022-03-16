import AgendaDAO from "../DAO/agendaDAO.js";

const AgendaController = (app, bd) => {
  const agendaDAO = new AgendaDAO(bd);

  app.get("/agenda", (req, res) => {
    agendaDAO
      .pegarTodosAgendamentos()
      .then((resposta) => {
        res.json(resposta);
      })
      .catch((error) => {
        res.json(error);
      });
  });
};

export default AgendaController;
