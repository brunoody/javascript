const container = document.querySelector('.container');
const paragrafos = container.querySelectorAll('p'); // PEGA TODOS OS PARAGRAFOS E COLOCA EM UM "CONTAINER" SEMELHANTE A UM ARRAY
const estiloBody = getComputedStyle(document.body); // PEGA TODO O ESTILO CSS DO ELEMENTO

for (let paragrafo of paragrafos) {
    paragrafo.style.backgroundColor = estiloBody.backgroundColor;    
    paragrafo.style.color = getComputedStyle(container).backgroundColor;
}
