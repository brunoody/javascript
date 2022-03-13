

//Object.defineProperty e Object.defineProperties

function Produto (nome, preco, estoque) {
    //this.nome = nome;
    //this.preco = preco;
    // os dois acima criei no defineProperties

    //this.estoque = estoque; criado no definePreperty: atrubuto é "definido" abaixo, posso chamar ele de fora tb e setar valores, se ele estiver configurado para tal.
    Object.defineProperty(this, // que é o proprio objeto 

                          'estoque', //propriedade (posso apagar o atributo this.estoque = estoque acima)

                          {//objeto de atributos, pode-se setar vários atributos para a propriedade do objeto
                              enumerable: true,// significa que eu quero que ele apareça no objeto como um atributo, mostra a chave no console.log
                              value: estoque, // atrubuindo um valor (que veio pelos parametros)
                              writable: false, // não pode alterar o valor
                              configurable : false // não permite apagar a chave
                          });
                          
                          
    // igula a de cima mas cria várias de uma só vez:                      
    Object.defineProperties(this, // próprio objeto
                            {// criando as properties que não objetos dentro deste objeto
                                nome: {
                                    enumerable: true,
                                    value: nome,
                                    writable: true
                                },
                                preco: {
                                    enumerable: true,
                                    value: preco,
                                    writable: true
                                }
                            })                          
                  
} 

const p1 = new Produto('Camiseta', 30, 2);
console.log(p1);

// mostrar s chaves de um objeto:
console.log(Object.keys(p1)); // no estoque, se o atributo enumerable estiver false, não aparace aqui e tb não itera no for in

