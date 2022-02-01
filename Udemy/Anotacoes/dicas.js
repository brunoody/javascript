
//Modulo  básico de JS da Udemy:

// Site muito bom: https://www.w3schools.com/js/

//Obs.: var e let : Var deixa redeclarer a variavel com mesmo nome, o let não. Usae sempre o let.

// aspas simpels, duplas e crase
let texto = 'texto "simples"'; // Aspas duplas podem estar dentro de aspas simples, não daria para fazer tudo com as simples
let texto1 = "texto 'simples'"; // Aspas simples podem estar dentro de aspas duplas, não daria para fazer tudo com as duplas
let texto3 = `"texto" 'simples'`; // com a crase pode colocar as duas aspas, simples e duplas, altem de poder usar o Template Strings:
let texto4 = `texto ${texto1}`;
// é possivel usar aspas duplas com aspas duplas usando a barra invertida como escape:
let texto5 = "texto \"simples\"";
// caso precise de uma única barra invertida no texto, deve se usar outra barra como escape:
let texto6 = "texto \\simples"; // Assim mostra somente uma barra
// strings são indexadas:
let texto7 = 'texto simples';
// texto7[0] é a letra t 

// NUMEROS:
let num1 = 0.7;
let num2 = 0.1;

num1 += num2; // 0,8
num1 += num2; // 0,9
num1 += num2; // 1,0 - Só que aqui mostra 0.99999999 no console, imprecisão
// então fazemos assim:
//num1 = num1.toFixed(2); // Arredondamento, ele mostra 1.0 no console mas a função Number.IsInteger diz que é falso!
console.log(num1);
console.log(Number.isInteger(num1));
// então se faz assim (uma das maneiras):
num1 = Number(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1));

// No Objeto Math tb tem inumeras rotinas com numeros.