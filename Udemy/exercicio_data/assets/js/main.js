
function retornaHoraCompleta (hora, minuto) {
    const horaFormatada = hora <= 9 ? '0'+hora : hora;
    const minutoFormatado = minuto <= 9 ? '0'+minuto : minuto;

    return `${horaFormatada}:${minutoFormatado}`;
}

function retornaMesExtenso (mesNumerico) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'dezembro'];

    return (mesNumerico >=0 && mesNumerico <=11) ? meses[mesNumerico] : 'Mês Desconhecido';
}

function retornaDiaSemana (diaNumerico) {
    const diasSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];

    return (diaNumerico >= 0 && diaNumerico <= 6) ? diasSemana[diaNumerico] : 'Dia Desconhecido';    
}

function mostraDiaCompleto () {
    const container = document.querySelector('.container');    
    const h1Mensagem = document.createElement('h1');
    const dataAtual = new Date();        

    const mesExtenso = retornaMesExtenso(dataAtual.getMonth());
    const diaSemana = retornaDiaSemana(dataAtual.getDay());        
    const anoNumerico = dataAtual.getFullYear(); 
    const horaCompleta = retornaHoraCompleta(dataAtual.getHours(), dataAtual.getMinutes());           
    
    h1Mensagem.innerHTML = `${diaSemana}, ${dataAtual.getDate()} de ${mesExtenso} de ${anoNumerico} ${horaCompleta}`;

    container.innerHTML = '';
    container.appendChild(h1Mensagem);    
}

mostraDiaCompleto();