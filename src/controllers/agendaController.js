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
    // agendaDAO
    //   .pegarTodosAgendamentos()
    //   .then((resposta) => {
    //     res.json(resposta);
    //   })
    //   .catch((error) => {
    //     res.json(error);
    //   });
  });
};

export default AgendaController;
