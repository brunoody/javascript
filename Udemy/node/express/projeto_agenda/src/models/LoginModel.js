
const validator = require('validator');
const mongosse = require('mongoose');
const bcryptjs = require('bcryptjs');

// modelo de estrutura que vai ser gravado na base de dados
const LoginScheme = new mongosse.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

// criação do model:
const LoginModel = mongosse.model('Login', LoginScheme); // nome e eschema do model (o Login seria a "tabela" que vou gravar os dados)

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;   
    }
    
    valida() {
        this.cleanUp();
        // instalamos o pacote validator: npm i validator
        // O e-mail precisa ser válido
        if (!validator.isEmail(this.body.email)) {
            this.errors.push('E-mail inválido');
        };

        // senha precisa ter entre 3 e 8 caracteres
        if (this.body.password.length < 3 || this.body.password.length > 8) {
            this.errors.push('A Senha deve ter entre 3 e 8 caracteres');
        };                
    }

    // como vou lidar com base de dados tem que ser async!!
    async usuariojaCadastrado() {         
        if (this.errors.length === 0) {            
            const user = await LoginModel.findOne({email: this.body.email});// manda um objeto que seria como se fosse um "where" na base, pesqiisando na "tabela" de login pelo "campo" email com o valor que o usuário digitou;

            //se  a const User vier com valor é pq ele já exite:
            if (user) {            
                this.errors.push('Usuário já existe');
            }
        } 
    }

    // esse register precisa ser async pq vai executar um registro na base de dados e retornar uma promisse!
    // Como esta função é async, o ponto aonde ela é chamada tb deve ser!! (vr loginController)
    async register () {
        this.valida();

        // chamada await pq ela é async devido a lidar com banco de dados
        await this.usuariojaCadastrado(); 
                
        if (this.errors.length > 0) return; // para parar

        // fazendo um hash da senha (criptografando) pacote: npm i bcryptjs        
        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt) ;

        try {
            this.user = await LoginModel.create(this.body);// isso é uma promisse, aqui o body já foi validado e removidas as chaves que eu não quero mandar para a base (método cleanUp)
        } catch(e) { 
            console.log(e)
        }
    }
    cleanUp() {
        // especie de validação (professor) que verifica se os valores das chaves que estão vindo do formuláro são do tipo string, se não for ele atribui uma string vazia ao valor.
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '' ;
            }
        }
        // garantindo que o objeto vai ter somente os campos que presiso para enviar para a base, neste caso não presiamos no _csrf que vem automaticamente do form
        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }
}

// importado no loginController
module.exports = Login;