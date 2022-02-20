const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

function criaTags () {
    const container = document.querySelector('.container');    
    const divMestre = document.createElement('div');
    container.appendChild(divMestre);

    for (i=0; i < elementos.length; i++)  {
        let {tag, texto} = elementos[i];
        let tagFilha = document.createElement(tag);
        //tagFilha.innerHTML = texto;
        //tagFilha.innerText = texto; // melhor usar este pois não tem HTML no texto
        //Pode ser assim também:
        let textoCriado = document.createTextNode(texto);
        tagFilha.appendChild(textoCriado);
        divMestre.appendChild(tagFilha);

    }    

    // for (i=0; i < elementos.length; i++)  {
    //     let elemento = elementos[i];
    //     let tagFilha = document.createElement(elemento.tag);
    //     tagFilha.innerHTML = elemento.texto;
    //     divMestre.appendChild(tagFilha);
    // }
};

criaTags();