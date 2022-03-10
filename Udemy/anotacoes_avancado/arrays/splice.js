
const nomes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
//nomes.splice(indice inicial, qtos elementos quer apagar, elementos para adicionar)

//nomes.splice(6,1); // vai remover, a partir no 6 indice, 1 elemento, no caso somente o g. Ela retorna o(s) elemento(s) removido(s) em forma de array
//console.log(nomes);

//nomes.splice(3, Number.MAX_VALUE);// esse max value é o maior numero que o JS suporta, tipo se eu quiser escluir todos os itens do array começando no 3 mas não sei o tamanho dele..
//console.log(nomes);

//// adicionando:
nomes.splice(3, 0 , 'h'); // vai adicionar o h no indice 3 e incrementar os indices dos outros elementos
nomes.splice(3, 1 , 'h'); // neste caso vai remover o d e colocar o h no lugar
nomes.splice(3, 0 , 'h', 'i', 'j'); // vai adicionar o h, i, j colocando o h no 3 e assim por diante
nomes.splice(0, 1); // simula o shift
nomes.splice(-1, 1); // simula o pop
nomes.splice(nomes.length, 0, 'i'); // simula o push
nomes.splice(0, 0, 'i'); // simula o unShift

const removidos = nomes.splice(3, 2); // vai retornar o "d" e o "e"


