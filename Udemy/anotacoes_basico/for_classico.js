

     //variavel dde controle; condicção; incremento da variavel de controle
for (let i = 0; i <= 10; i++)  {
    console.log(`Linha: ${i}`);    
};

for (let i = 0; i <= 10; i+=2)  { // pula de 2 em 2 
    console.log(`Linha: ${i}`);    
};

for (let i = 10; i >= 0; i--)  { // inversão
    console.log(`Linha: ${i}`);    
};

for (let i = 0; i <= 10; i++)  { // saber se número é par ou impar
    let tipoNumero = i % 2 === 0 ? 'Par' :'Ímpar';
  
    console.log(`Linha ${i}: Número ${tipoNumero}`);  
};

// percorrer array:
const frutas = ['maçã', 'banana', 'laranja', 'uva'];
for (let i = 0; i < frutas.length; i++)  { 
    console.log(frutas[i]);
}


