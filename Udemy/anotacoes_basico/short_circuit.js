
/*
Avaliação de curto circuito é simplesmente que o "compilador" para quando encontra a primeira expressão falsa em um conjunto de "and" da mesma forma que para de avaliar as outras condições assim que encontra uma expressão true em um conjunto de "or". Coisa que o Delphi já faz..

Tudo em JS pode ser comparado com AND(&&) ou OR(||), inclusive string, numeros, ect..
Nesses casos, nessas comparações na maioria das vezes vai resultar em True por exemplo:
console.log('Maria' && 'João') - Isso dá True!!
O false numa expressão louca dessas vai retornar quando:
São chamadas expressões FALSY:
O próprio False literal
0 (zero),
strings vazias ('', "", ``)
null/undefinid
NaN
*/
console.log('joão' && 'maria'); //neste caso isso retorna a última "condição" no caso, Maria
console.log('joão' && null && 'maria'); //neste caso isso retorna a última "condição" que ele parou, no caso null pois é false e parou ali
console.log(0 || false || "maria" || true); // vai mostrar maria pois é o primeiro verdadeiro que encontrou na sequencia de OR



