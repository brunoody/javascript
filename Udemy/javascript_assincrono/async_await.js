function rand(max, min) {
    // para já ficar em segundos
    min *= 1000;    
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min)
};

 function espera (mensagem, tempo) {
     // parametro resolve Executa e o reject rejeita, mas nós é que controlamos eles
    return new Promise((resolve, reject) => {
        setTimeout(() => { // esse setTimeout é apenas para simular algo que possa demorar, só isso!
            // tratando erro:
            if (mensagem === 'xxx') {
                reject(mensagem + ' é proíbida!')
                //reject(new Error(mensagem + ' é proíbida!'))//pode ser assim tb
                // se quiser que ela pare tem que dar um return abaixo
                return;
            } else {
                resolve(mensagem);
            }               
        }, tempo); 
    })    
};


// vai executar cada uma e esperar até terminar para executar a próxima:
async function Executa () {
    // posso colocar um catchem cada uma ou emglobar todas num só:
    // para de executar as outras assim que encontra um erro    
    try {
      const fase1 = await espera('fase1', rand(1,5));    
      console.log(fase1);
      // se não tivesse usado o awaait ela apareceria com status pending no console.log, ms continuaria executando.

      const erro = await espera('xxx', rand(1,5)); // erro proposital xxx
      console.log(erro);

      const fase2 = await espera('fase2', rand(1,5));
      console.log(fase2);

      const fase3 = await espera('fase3', rand(1,5));
      console.log(fase3);

      console.log('tudo terminado');
    } catch(e) {
        console.log(e);
    }    
}

Executa();