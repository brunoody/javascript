function CalcularIMC (evento) {
    evento.preventDefault();
    let resultado = window.document.getElementById('resultado');    
    resultado.innerHTML = 'teste';
    };

let form = window.document.querySelector('.form_calculo');
form.addEventListener('submit', CalcularIMC);
