const mongosse = require('mongoose');

const ContatoScheme = new mongosse.Schema({
    nome: {type: String, required: true},
    sobrenome: {type: String, required: true},
    email: {type: String, required: true},
    telefone: {type: String, required: true}
});

// criação do model:
const ContatoModel = mongosse.model('Contato', ContatoScheme); // nome e eschema do model
const validator = require('validator');

class Contato {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.Contato = null;   
    }
    
    valida() {
        this.cleanUp();

        console.log('telefone: ', this.body.telefone, typeof this.body.telefone);
        if (!validator.isEmail(this.body.email)) {
            this.errors.push('E-mail inválido');
        };
    }
    
    async contatojaCadastrado () {  
        
        if (this.errors.length === 0) {            
            this.contato = await ContatoModel.findOne({email: this.body.email});

            if (this.contato) {            
               this.errors.push('Contato com este e-mail já cadastrado');            
            } 
        }
    }   
    
    async register () {
        this.valida();

        await this.contatojaCadastrado(); 
                
        if (this.errors.length > 0) return;
        
        this.contato = await ContatoModel.create(this.body);
    }

    cleanUp() {
        // especie de validação (professor) que verifica se os valores das chaves que estão vindo do formuláro são do tipo string, se não for ele atribui uma string vazia ao valor.
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '' ;
            }
        }
        // garantindo que o objeto vai ter somente os campos que preciso para enviar para a base, neste caso não presiamos no _csrf que vem automaticamente do form
        this.body = {
            nome: this.body.nome,
            sobrenome: this.body.sobrenome,
            email: this.body.email,
            telefone: this.body.telefone        
        }
    }
}



// importado no ContatoController
module.exports = Contato;