const { v4: uuidv4 } = require('uuid');

class Filme {
    constructor({ titulo, genero, duracao, anoLancamento }) {
        this.id = uuidv4();
        this.titulo = titulo;
        this.genero = genero;
        this.duracao = duracao;
        this.anoLancamento = anoLancamento;
    }
}

module.exports = Filme;