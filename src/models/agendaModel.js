class AgendaModel {
  constructor(id, cliente_id, funcionario_id, data, hora, servico, duracao) {
    this.id = id;
    this.cliente_id = cliente_id;
    this.funcionario_id = funcionario_id;
    this.data = data;
    this.hora = hora;
    this.servico = servico;
    this.duracao = duracao;
  }
}

export default AgendaModel;
