
function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}

function Camiseta (nome, preco, cor) {
    Produto.call(this, nome, preco); // isso é a "herença" bem parecido com delphi
    this.cor = cor;        
}
//porem da da foma aciam ele não consegue utilizar os métodos de aumento e esconto do prototype do produto, então se faz o seguinte:
Camiseta.prototype = Object.create(Produto.prototype);
// porem o construtor de camiseta ainda vai aparecer como produto, então temos que ajustar isso tb:
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta('Regata', 50, 'Preta');
camiseta.aumento(10);
console.log(camiseta);