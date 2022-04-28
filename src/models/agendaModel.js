class AgendaModel {
  constructor(cliente_id, funcionario_id, data, hora, servico, duracao) {
    this.Cliente_ID = cliente_id;
    this.Funcionario_ID = funcionario_id;
    this.Data = this._validaData(data);
    this.Hora = this._validaHora(hora);
    this.Servico = servico;
    this.Duracao = this._validaDuracao(duracao);
  }
  _validaData = (data) => {
    if (data.length == 10 && data.indexOf("-") == 4) {
      return data;
    } else {
      throw new Error(
        "Formato de data inválido. O formato deve ser 'AAAA-MM-DD'"
      );
    }
  };
  _validaHora = (hora) => {
    if (hora.length == 8 && hora.indexOf(":" == 2)) {
      return hora;
    } else {
      throw new Error("Formato de hora inválido. O formato deve ser 'HH:MM'");
    }
  };
  _validaDuracao = (duracao) => {
    const duracoesValidas = [
      "10",
      "20",
      "30",
      "45",
      "60",
      "90",
      "120",
      "150",
      "180",
    ];
    if (duracoesValidas.includes(duracao)) {
      return duracao;
    } else {
      throw new Error(
        "Duração não permitida. A duração deve ser em minutos: 10, 20, 30, 45, 60, 90, 120, 150 ou 180"
      );
    }
  };
}

export default AgendaModel;
