
///////////// CÓDIGO DO PROFESSOR, SÓ FIZ ALGUMAS ANOTAÇ~~OES, NOSSA TEM MUITA GAMBIARRA..
function criaCalculadora() {
  return {
    display: document.querySelector('.display'),    
    
    // este fiz sozinho, pesquisando
    bloqueiaDigitacaoDisplay () {
        this.display.addEventListener('keypress', function (e) {
            e.preventDefault(); // isso aqui impede que o evento em questão ocorra!
        })
    },

    inicia() {
      this.cliqueBotoes();
      this.pressionaBackSpace();
      this.pressionaEnter();
      this.bloqueiaDigitacaoDisplay();
    },

    pressionaBackSpace() {
      this.display.addEventListener('keydown', e => {
        if (e.keyCode === 8) {
          e.preventDefault();
          this.clearDisplay();
        }         
      });
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }; 

      });
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        //########## eval, importante ############
        // eval interpreta uma string qualquer para codigo JS! Enão precia-se ter muito cuidado
        // com as entradas de usuários pois se eles digitarem códigos JS podem fazer estrago!
        // Precisa criar bloqueios bem seguros de oq o usuário pode ou não digitar.   
        conta = eval(conta);         

        if(!conta) {
          alert('Conta inválida');
          return;
        }

        this.display.value = String(conta);
      } catch(e) {
        alert('Conta inválida');
        return;
      }
    },

    clearDisplay() {
      this.display.value = '';
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1); // Apaga "fatia" começando no 0 e o -1 e terminando no -1, então apaga o último
    },


    cliqueBotoes() {
    //#################### exemplo de bind ############################:
    //  document.addEventListener('click', function (e) {
    //     const el = e.target;

    //     if(el.classList.contains('btn-num')) {
    //       this.btnParaDisplay(el.innerText); // No caso este this não se refere o objeto Calculadora e sim ao document pois esta dentro do escopo do listener do document! para referenciar esse this ao objeto, usa-se o bind, que parece ser uma espécie de typecast do delphi:
    //     }
    // }).bind(this);// espécie de typecast que torna o this (document) para this(objeto calculadora)

    //IMPORTANTE! quando se usa arrow function não temos o problema de bind acima, o this é sempre o objeto!!
      document.addEventListener('click', e => {
        const el = e.target;

        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if(el.classList.contains('btn-eq')) {
          this.realizaConta();
        }

        this.display.focus();
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    }

  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
