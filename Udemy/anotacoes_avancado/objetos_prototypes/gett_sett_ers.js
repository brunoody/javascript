


// criei o nome do arquivo assim pois não deixou criar getters_setters

function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 
                          'estoque', 
                          {
                              enumerable: true,
                              value: estoque, 
                              writable: false,
                              configurable : false 
                          });                  
} 

const p1 = new Produto('Camiseta', 30, 2);
console.log(p1);
