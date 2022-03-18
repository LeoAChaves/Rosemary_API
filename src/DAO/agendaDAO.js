class AgendaDAO {
  constructor(db) {
    this.db = db;
  }
  pegarTodosAgendamentos = () => {
    return new Promise((resolve, reject) => {
      this.db.all("SELECT * FROM AGENDA", (error, rows) => {
        if (error) {
          reject({
            message: error,
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
  pegarAgendamentoCliente = (Cliente_ID) => {
    return new Promise((resolve, reject) => {
      this.db.all(
        "SELECT * FROM AGENDA WHERE Cliente_ID = ?",
        Cliente_ID,
        (error, rows) => {
          if (error) {
            reject({
              message: error,
              error: true,
            });
          } else {
            resolve({
              agenda: rows,
              error: false,
            });
          }
        }
      );
    });
  };
}

export default AgendaDAO;
