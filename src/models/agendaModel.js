class AgendaModel {
  constructor(cliente_id, funcionario_id, data, hora, servico, duracao) {
    this.Cliente_ID = cliente_id;
    this.Funcionario_ID = funcionario_id;
    this.Data = data;
    this.Hora = hora;
    this.Servico = servico;
    this.Duracao = duracao;
  }
}
export default AgendaModel;
