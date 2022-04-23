const mongosse = require('mongoose');

const ContatoScheme = new mongosse.Schema({     
    nome: {type: String, required: true},
    sobrenome: {type: String, required: true},
    email: {type: String, required: true},
    telefone: {type: String, required: true},
    criadoEm: {type: Date, default: Date.now},
    usuarioId: {type: String, required: true}
});

// criação do model:
const ContatoModel = mongosse.model('Contato', ContatoScheme); // nome e eschema do model
const validator = require('validator');

class Contato {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.contato = null;   
    }
    
    valida() {
        this.cleanUp();       
        
        if (!validator.isEmail(this.body.email)) {
            this.errors.push('E-mail inválido');
        };

        // dá p colocar mais validações aqui mas não to afim
    }
    
    async contatojaCadastrado () {  
        
        console.log('contatojaCadastrado', this.body.usuarioId)
        if (this.errors.length === 0) {            
            this.contato = await ContatoModel.findOne({usuarioId: this.body.usuarioId, email: this.body.email});

            if (this.contato) {            
               this.errors.push('Contato com este e-mail já cadastrado'); 
               this.contato = null;

            } 
        }
    }   
    
    async register () {
        this.valida();

        await this.contatojaCadastrado(); 
                
        if (this.errors.length > 0) return;
        
        console.log('Antes e gravar usuário: ', this.body);
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
            telefone: this.body.telefone,        
            usuarioId: this.body.usuarioId
        }
    }

    async buscaPorId(id) {
        this.contato = await ContatoModel.findById(id);
    }

    async delete(id) {
        this.contato = await ContatoModel.findByIdAndDelete({_id: id});
    }

    async indexEdit(id) {
        this.valida();

        if (this.errors.length > 0) {
            return
        }
        // encontra e atualiza!                 
        this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, {
            new: true //isso é umparametro para dizer para após atualizar é para retonar os dados atualizados e não os antigos..
        });
    }

    async carregarListaContatos() {
        console.log('carregarListaContatos', this.body.usuarioId);  
        return await ContatoModel.find({usuarioId: this.body.usuarioId}).sort({criadoEm: 1});
        // sort: 1 : odem crescente, -1 descescente         
    }
}
// importado no ContatoController
module.exports = Contato;