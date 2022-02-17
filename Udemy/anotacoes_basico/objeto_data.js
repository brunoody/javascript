
const data = new Date(); // se não passar nada pega a data atual, a data é formada por milésimos de segundo.
console.log(data.toString());

const tresHoras = 60 * 60 * 3 * 1000; // em milisegundos
const data1 = new Date(0 + tresHoras); // Zero é considerado o marco inicial: 01/01/1970 - Timestamp unix
// se deixar só o 0 não aparece 1970 e sim 1969 pois estamos em um fuso horário 3 horas a menos. Dá para somar oou diminuir

console.log(data1.toString());

//outra forma:
const data2 = new Date(2022, 2, 20, 15, 10, 20);// Ano, mes(começa do 0), dia, hora, minuto, segundo..

//data em string:
const data3 = new Date('2022-12-31 20:30:59'); // tem alguns formatos que se pode passar

// Obter os dados da data:
console.log('Dia: ', data3.getDate()); //Dia:  não é getday! é Getdate para o dia  !
console.log('Mês: ', data3.getMonth() + 1); // Mes começa do 0
console.log('Ano: ', data3.getFullYear());
console.log('Hora: ', data3.getHours());
console.log('Min: ', data3.getMinutes());
console.log('Seg: ', data3.getSeconds()); 
console.log('Ms: ', data3.getMilliseconds()); 
console.log('Dia semana: ', data3.getDay());  // obtem o número do dia da semana 0 é domingo e 6 é sábado
console.log(Date.now); // data em milisegundos desde o marco 0