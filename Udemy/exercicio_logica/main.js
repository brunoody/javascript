function divisoresTresCinco(numero) {
    const divisivelTres = (numero % 3 === 0);
    const divisivelCinco = (numero % 5 === 0);

    if (divisivelTres && divisivelCinco) {
        return 'FizzBuzz'        
    } else if (divisivelTres) {
        return 'Fizz'
    } else if (divisivelCinco) {
        return 'buzz'
    } else {
        return numero;
    };    
}

for (let i = 1; i <= 100; i++) {
console.log(i, divisoresTresCinco(i));
};