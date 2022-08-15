// aqui podemos colocar validações diretamente no fronend, sem precisar deixar ir para onosso servidor para fazer validações simples como falta de preenchimento de campos por exemplo


//########## importante!!! 
// para essas validações funcionarem, todas as chamadas de rotas do negócio devem ser feitas SEM a palavra index! A não ser as que exigem parametros como a exclusã por exemplo

const validator = require('validator');

// importo no meu main.js
export default class LoginFrontend {
    constructor(classeForm) {
        this.form = document.querySelector(classeForm);
        this.existeFalha = false;
    }

    ativarValidacao() {        
        if (!this.form) return;        
        this.form.addEventListener('submit', e => {
            e.preventDefault(); // aqui impede a ação do click do notão, no caso o submit
            this.validar(); // validações, se tudo der certo ativo o submit
        })
    }

    validar() {
        this.existeFalha = false;
        for(let errorText of this.form.querySelectorAll('.validacao-campos')) {
            errorText.remove();
          };
      
        const campoEmail = this.form.querySelector('[name="email"]');
        const campoSenha = this.form.querySelector('[name="password"]');

        if (!campoEmail.value) {
            this.adicionarFalha(campoEmail, 'Preencha o e-mail') 
        } else if (!validator.isEmail(campoEmail.value)) {             
            this.adicionarFalha(campoEmail, 'E-mail inválido') 
        }

        if (!campoSenha.value) {
            this.adicionarFalha(campoSenha, 'Insira a sua senha') 
        } else if (campoSenha.value.length < 4 || campoSenha.value.length > 10) {
            this.adicionarFalha(campoSenha, 'A Senha deve ter entre 4 e 10 caracteres');    
        }
        
        if (!this.existeFalha) {
            this.form.submit();
        }
        
    }

    adicionarFalha(campo, mensagem)  {
        this.existeFalha = true;
        const div = document.createElement('div'); 
        div.innerHTML = mensagem;
        div.classList.add('validacao-campos');
        campo.insertAdjacentElement('afterend', div); 
    }
}
