class AgendaDAO {
  constructor(db) {
    this.db = db;
  }

  pegarTodosAgendamentos = () => {
    return new Promise((resolve, reject) => {
      this.db.all("SELECT * FROM AGENDA", (error, rows) => {
        if (error) {
          reject({
            mensagem: error,
            error: true,
          });
        } else {
          resolve({
            agenda: rows,
            error: false,
          });
        }
      });
    });
  };
}

export default AgendaDAO;
