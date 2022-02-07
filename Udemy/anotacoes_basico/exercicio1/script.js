function meuEscopo () {
    const form = document.querySelector('.form');// ponto pois é uma classe no HTML
    const resultado = document.querySelector('.resultado');
    const arrayPessoas = [];   

    //posso criar função dentro de função:
    function eventoQueExecutaSubmit (evento) {
        evento.preventDefault(); // isso impede que a página seja atualizada ao clicar no botão
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura'); 
        
        // colocando objetos em um array
        arrayPessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })
        
        console.log(arrayPessoas);

        // escreve na div..
        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}`;        
    };

    form.addEventListener('submit', eventoQueExecutaSubmit); // Associa um evento a uma função, pode ser uma //função anônima tb.
    

    //essa abaixo é uma das formas. a de cima é melhor
    //form.onsubmit = function (evento) { //onsubmit ocorre quendo clica no botão
    //    evento.preventDefault(); // isso impede que a página seja atualizada ao clicar no botão
    //};
}

meuEscopo();