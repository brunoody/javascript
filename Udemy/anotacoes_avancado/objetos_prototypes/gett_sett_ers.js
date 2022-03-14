


// criei o nome do arquivo assim pois não deixou criar getters_setters
// Get e Set similar ao Delphi nas propriedades

function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    // pode-se criar uma variavel "private" para trabalhar com set e get igual nas propriedades do Delphi:
    let estoquePrivado = estoque;
    Object.defineProperty(this, 
                          'estoque', 
                          {
                              enumerable: true,
                              //value: estoque, com getter e setter esses 2 atributos podem ser eliminados 
                              //writable: false,
                              configurable : false, 
                              get: function () {
                                  return estoquePrivado;
                              },
                              set: function(valor) {
                                   // validação no getter 
                                  if (typeof valor !== 'number') {
                                      throw new TypeError('não é um numero');
                                  }
                                  estoquePrivado = valor;
                              }
                          });                  
} 

const p1 = new Produto('Camiseta', 30, 2);
console.log(p1);
