
// semelhante ao try except do Delphi
try {
    console.log(variavelinesistente)    
} catch (varDeErro) {
    console.log('variável não existe');
    //console.log(varDeErro);
};

/////////////////////// throw: semelhante ao nosso raise  //////////////////////////
function teste(numero) {
    if (typeof(numro) !== 'number') {
        //throw('o parametro precisa ser um número');
        //throw new error();('o parametro precisa ser um número');// semelhante ao nosso raise 
        throw new ReferenceError('o parametro precisa ser um número');// semelhante ao nosso raise
        // error e  ReferenceError e várias outros são funções construtoras que vamos aprender mais a frente
    }
    return numero;
}
try {
    teste('A');
} catch (erro) {
    console.log(erro);
}   

//////////// FINALLY É IGUAL AO DELPHI ///////////////

try {
    console.log('abri um arquivo');
    console.log('editei o arquivo');
    console.log('salvei o arquivo');    
    throw('AQUI DEU UM ERRO');
} catch {
    console.log('caiu no catch');
} finally {
    console.log('caiu no finally - Fechei o arquivo');    
}
