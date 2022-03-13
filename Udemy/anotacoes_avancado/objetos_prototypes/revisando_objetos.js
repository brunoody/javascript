
// revisão de objetos:

const pessoa = {
    nome: 'Marcelo',
    sobrenome: 'Toller'
};

//posso chamar o valor tanto por notação de ponto (.)
console.log(pessoa.nome);
// com tb posso usar a notação de colchetes:
console.log(pessoa['nome']);

//posso criar objeto assim tb
const pessoa1 = new Object();
pessoa1.nome = 'Marcelo';
pessoa1.sobrenome = 'Toller';

// apagar uma chave:
//delete pessoa1.nome;

// travar um objeto de ser alterado:
Object.freeze(pessoa1);
pessoa1.nome = 'teste'; // não vai alterar!
console.log(pessoa1);

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this);// não pode mais mudar o valores, nem incluir chaves(por fora) nem apagar chaves!!
}
