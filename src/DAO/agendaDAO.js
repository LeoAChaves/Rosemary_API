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
          } else if (rows.length === 0) {
            reject({
              message: `Cliente de ID: ${Cliente_ID} não entcontrado`,
              error: false,
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

  pegarAgendamentoFuncionario = (Funcionario_ID) => {
    return new Promise((resolve, reject) => {
      this.db.all(
        "SELECT * FROM AGENDA WHERE Funcionario_ID = ?",
        Funcionario_ID,
        (error, rows) => {
          if (error) {
            reject({
              message: error,
              error: true,
            });
          } else if (rows.length === 0) {
            reject({
              message: `Funcionario de ID: ${Funcionario_ID} não encontrado`,
              error: false,
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

  pegarAgendamentoData = (Data) => {
    return new Promise((resolve, reject) => {
      this.db.all(
        "SELECT * FROM AGENDA WHERE Data = ?",
        Data,
        (error, rows) => {
          if (error) {
            reject({
              message: error,
              error: true,
            });
          } else if (rows.length === 0) {
            reject({
              message: `Agendamentos na data:${Data} não encontrado`,
              modelo_data: "AAAA-MM-DD",
              error: false,
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

  inserirAgendamento = (novoAgendamento) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        "INSERT INTO AGENDA (Cliente_ID, Funcionario_ID, Data, Hora, Servico, Duracao) VALUES (?, ?, ?, ?, ?, ?)",
        novoAgendamento.Cliente_ID,
        novoAgendamento.Funcionario_ID,
        novoAgendamento.Data,
        novoAgendamento.Hora,
        novoAgendamento.Servico,
        novoAgendamento.Duracao,
        (error) => {
          if (error) {
            reject({
              message: error,
              error: true,
            });
          } else {
            resolve({
              message: `Novo agendamento criado com sucesso. Data: ${novoAgendamento.Data}, Hora: ${novoAgendamento.Hora}`,
              agenda: novoAgendamento,
              error: false,
            });
          }
        }
      );
    });
  };

  atualizarAgendamento = (ID, atualizacao) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        "UPDATE AGENDA SET Cliente_ID = ?, Funcionario_ID = ?, Data = ?, Hora = ?, Servico = ?, Duracao = ? WHERE ID = ?",
        atualizacao.Cliente_ID,
        atualizacao.Funcionario_ID,
        atualizacao.Data,
        atualizacao.Hora,
        atualizacao.Servico,
        atualizacao.Duracao,
        ID,
        (error) => {
          if (error) {
            reject({
              message: error,
              error: true,
            });
          } else {
            resolve({
              message: `Agendamento de ID ${ID} atualizado com sucesso`,
              agendamento: atualizacao,
              error: false,
            });
          }
        }
      );
    });
  };

  deletarAgendamento = (ID) => {
    return new Promise((resolve, reject) => {
      this.db.run("DELETE FROM AGENDA WHERE ID = ?", ID, (error) => {
        if (error) {
          reject({
            message: error,
            error: true,
          });
        } else {
          resolve({
            message: `Agendamento de ID ${ID} deletado com sucesso`,
            error: false,
          });
        }
      });
    });
  };

  checarDisponibilidade = (novoAgendamento) => {
    return new Promise((resolve, reject) => {
      this.db.all("SELECT * FROM AGENDA", (error, rows) => {
        if (error) {
          reject({
            message: error,
            error: true,
          });
        }
        rows.forEach((agendamento) => {
          if (
            agendamento.Funcionario_ID === novoAgendamento.Funcionario_ID &&
            agendamento.Data === novoAgendamento.Data &&
            agendamento.Hora === novoAgendamento.Hora
          ) {
            reject({
              message:
                "A agenda deste funcionário está preenchida para este horário",
              error: true,
            });
          }
        });
        resolve({
          message: `Novo agendamento criado com sucesso. Data: ${novoAgendamento.Data}, Hora: ${novoAgendamento.Hora}`,
          agenda: novoAgendamento,
          error: false,
        });
      });
    });
  };
}

export default AgendaDAO;
