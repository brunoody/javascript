
//const teste = ['a', 'b', 'c'];
const teste = new Array('a', 'b', 'c'); // Dá para criar array assim tb, é a mesma coisa
delete teste[2]; // apaga o c mas fica um buraco
teste.unshift('d'); // adiciona no inicio
teste.unshift('e'); // adiciona no inicio
teste.unshift('f'); // adiciona no inicio
console.log(teste);
teste.shift(); // exclui do inicio
console.log(teste);
teste.push('g');//adiciona no final
teste.pop(); // remove do final
console.log(teste);
////////////////////////////////////
const teste1 = ['a', 'b', 'c', 'd', 'e', 'f'];
const teste3 = teste1.slice(1, 3);  //vai pegar os itens dos indices 1 e 2 (b e c), o 3 não é incluido!
const teste4 = teste1.slice(0, -1); //vai remover o f
///////////////////////////////
const teste5 = 'Luiz antonio silva';
const teste6 = teste5.split(' ');// vai transformar em um array de 3 palavras separado por espaços
const teste7 = teste5.join(' ');// une o array numa só string


