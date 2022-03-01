
// Na função construtora a primeira letra é maiúscula! (só convenção, não é regra)
// na factory seria criaPessoa, na contrutora é apenas new Pessoa

// o new já cria um objeto e relaciona o this com a constente/variavel que esta eecebendo ela
// tb não repcisa de return
function Pessoa(nome, sobrenome) {
    const id = 1235;// escopo privado
    const metodoInterno = function () { // escopo privado
        console.log('teste');
    };

    // "criação" dos atributos ou métodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = () => {
        return this.nome+' '+this.sobrenome;
    };
};

const p1 = new Pessoa('Marcelo', 'Toller');
console.log(p1);
console.log(p1.metodo());
