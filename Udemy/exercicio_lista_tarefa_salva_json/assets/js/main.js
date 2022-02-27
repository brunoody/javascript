
const inputTarefa = document.querySelector('.inputTarefa');
const botaoAdicionaTarefa = document.querySelector('.botaoAdicionaTarefa');
const listaDeTarefas = document.querySelector('.listaDeTarefas');
const arrayTarefasSalvar = [];
let sequencialIdBotao;

//######################################################################

function validaMensagem(textoTarefa) {
    for (let objeto of arrayTarefasSalvar) {  
        if (objeto.descricaoTarefa.toUpperCase() === textoTarefa.toUpperCase()) {
            alert('Tarefa já adicionada!');            
            return false;
        };   
    };
    return true;
}

//######################################################################

function adicionaTarefa (textoTarefa = null) { 

    // texto da tarefa vem do input ou do salvo no storage
    let valorTextoTarefa = textoTarefa ? textoTarefa : inputTarefa.value; 
     
    if ((valorTextoTarefa) && validaMensagem(valorTextoTarefa))  {
        const tarefa = document.createElement('li');        
        tarefa.innerText = valorTextoTarefa;        

        const botaoExcluirTarefa = document.createElement('button');        
        botaoExcluirTarefa.innerText = 'Apagar';
        botaoExcluirTarefa.addEventListener('click', eventoBotaoExcluirTarefa); 
            
        sequencialIdBotao++;
        listaDeTarefas.appendChild(tarefa);            
        botaoExcluirTarefa.setAttribute('class', 'botaoApagarTarefa');    
        botaoExcluirTarefa.setAttribute('id', sequencialIdBotao);             
        
        const objetoTarefa = {
            idTarefa: sequencialIdBotao.toString(),
            descricaoTarefa: valorTextoTarefa
        };
        arrayTarefasSalvar.push(objetoTarefa);              
        tarefa.appendChild(botaoExcluirTarefa);    
                
        salvarTarefa();
    };

    inputTarefa.value = '';
    inputTarefa.focus();           
};

//######################################################################

function salvarTarefa () {     

    const tarefasJSON = JSON.stringify(arrayTarefasSalvar);
    localStorage.setItem('tarefas', tarefasJSON);        
}

//######################################################################

function eventoBotaoExcluirTarefa(evento) {

    const botao = evento.target;
    
    for (let ind = 0; arrayTarefasSalvar.length; ind++) {
        objeto = arrayTarefasSalvar[ind];

        if (objeto.idTarefa === botao.id) {
            arrayTarefasSalvar.splice(ind, 1); // apaga o objeto do indece ind e 1 item apenas           
            break;
        };        
    };
    salvarTarefa();    
    
    // aqui apaga o botão apaga o "pai" que é o li e apaga ele mesmo por consequencia
    if (botao.classList.contains('botaoApagarTarefa')) {
        botao.parentElement.remove();    
  }
}

//######################################################################

function pressionaTeclaInput (evento) {
    if (evento.keyCode === 13) {
        adicionaTarefa();
    };
};

//######################################################################

function adicionaTarefaBotao () {// fiz uma função separada pois o adicionaTarefa tem um parametro meu
    adicionaTarefa();
}

//######################################################################

function restaurarTarefasSalvas () {

    const listaTarefasSalvas = localStorage.getItem('tarefas');
    const arrayListaTarefasSalvas = JSON.parse(listaTarefasSalvas);
  
    for (let tarefa of arrayListaTarefasSalvas) {
        adicionaTarefa(tarefa.descricaoTarefa);
    }
}

//######################################################################
sequencialIdBotao = 0;
restaurarTarefasSalvas();
botaoAdicionaTarefa.addEventListener('click', adicionaTarefaBotao);
inputTarefa.addEventListener('keypress', pressionaTeclaInput)