const pessoa = {
    nome: 'Marcelo',
    sobrenome: 'Toller',
    idade: 42,
    endereco: { // objeto dentro de objeto
        rua: 'Jozino Liotti',
        numero: 51,
        bairro: 'Jardim Algarve',
        cidade: 'Alvorada'
    }
};

//const {nome} = pessoa; // como o nome da const é o mesmo do atributo do objeto é só fazer assim.
//console.log(nome);

//const {nome, sobrenome, idade, peso=80} = pessoa; // pode-se atribuir um valor default caso uma propriedade do objeto não exista, no caso, peso:
//console.log(nome, sobrenome, idade, peso);

//caso queira criar uma constante diferente do nome da propriedade:
//const {nome: meuNome} = pessoa;
//console.log(meuNome);

// pega valores do objeto dentro do objeto:
//const {endereco: {rua: minhaRua, numero: meuNumero}} = pessoa;
//console.log(minhaRua, meuNumero);