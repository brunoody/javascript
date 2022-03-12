let pessoa = { // array é com colchetes e objeto é com chaves
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};
console.log(pessoa.nome);

// FUNÇÃO QUE CRIA OBJETO:
function criaPessoa(nomePessoa, sobrenomePessoa, idadePessoa) {
    return {
        nome: nomePessoa,
        sobrenome: sobrenomePessoa,
        idade: idadePessoa
    }
}

let pessoa1 = criaPessoa('Ana', 'Paula', 20)
console.log(pessoa1.nome)

// Obs.:  se os parametros forem iguais aus atributos do objeto não precis atribuir com dois pontos, ele mesmo afz sozinho:
function criaPessoa1(nome, sobrenome, idade) {
    return {nome, sobrenome, idade}
}

// OBJETO COM FUNÇÃO:
let objetoComFuncao = {
    nome: 'Maria',
    sobrenome: 'Miranda',
    idade: 45,
    
    nomeCompleto() {
        return this.nome+' '+this.sobrenome;
    }
}
console.log(objetoComFuncao.nomeCompleto()) // tem que colocar o abre/fecha parentes vazio aqui

// Deletar uma chave do objeto:
let pessoa2 = { // array é com colchetes e objeto é com chaves
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};
delete pessoa2.nome;
console.log(pessoa2);


