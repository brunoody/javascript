
const inputTarefa = document.querySelector('.inputTarefa');
const botaoAdicionaTarefa = document.querySelector('.botaoAdicionaTarefa');
const listaDeTarefas = document.querySelector('.listaDeTarefas');
const arrayTarefasSalvar = [];
let sequencialIdBotao;

function adicionaTarefa (textoTarefa = null) { 

    let valorTextoTarefa = textoTarefa ? textoTarefa : inputTarefa.value;    
     
    if (valorTextoTarefa) {
        const tarefa = document.createElement('li');        
        tarefa.innerText = valorTextoTarefa;        

        const botaoExcluirTarefa = document.createElement('button');        
        botaoExcluirTarefa.innerText = 'Apagar';
        botaoExcluirTarefa.addEventListener('click', eventoBotaoExcluirTarefa);                
        
        if  (salvarTarefa(valorTextoTarefa)) {            
            listaDeTarefas.appendChild(tarefa);            
            botaoExcluirTarefa.setAttribute('class', 'botaoApagarTarefa');    
            botaoExcluirTarefa.setAttribute('id', sequencialIdBotao);    

            tarefa.appendChild(botaoExcluirTarefa);    
        };
        inputTarefa.value = '';
        inputTarefa.focus();       
    };

    console.log(arrayTarefasSalvar);
};

function salvarTarefa (textoTarefa) {
    //console.log('aqui1');

    for (let objeto of arrayTarefasSalvar) {  
        if (objeto.descricaoTarefa === textoTarefa) {
            alert('Tarefa já adicionada!');            
            return false;
        };   
    };

    sequencialIdBotao++;
    const objetoTarefa = {
        idTarefa: sequencialIdBotao.toString(),
        descricaoTarefa: textoTarefa
    };
    arrayTarefasSalvar.push(objetoTarefa);  

    const tarefasJSON = JSON.stringify(arrayTarefasSalvar);
    localStorage.setItem('tarefas', tarefasJSON);    
    return true;        
}

function eventoBotaoExcluirTarefa(evento) {
    const botao = evento.target;
    let removerTarefa = false;
    let ind;    

    for (ind = 0; arrayTarefasSalvar.length; ind++) {
        objeto = arrayTarefasSalvar[ind];

        if (objeto.idTarefa === botao.id) {            
            removerTarefa = true;     
            break;
        };        
    };

    if (removerTarefa) {
        arrayTarefasSalvar.splice(ind, 1);
    };      
    
    if (botao.classList.contains('botaoApagarTarefa')) {
        botao.parentElement.remove();    
  }
}

function pressionaTeclaInput (evento) {
    if (evento.keyCode === 13) {
        adicionaTarefa();
    };
};

function adicionaTarefaBotao () {// fiz uma função separada pois o adicionaTarefa tem um parametro meu
    adicionaTarefa();
}

function restaurarTarefasSalvas () {

}

sequencialIdBotao = 0;
restaurarTarefasSalvas;
botaoAdicionaTarefa.addEventListener('click', adicionaTarefaBotao);
inputTarefa.addEventListener('keypress', pressionaTeclaInput)