import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

// forma de criar classe e do proprio sequelize
export default class User extends Model {
  static init(sequelize) { // conexão
    super.init({ // chama o init da classe pai, um objeto vai os nossos campos e o outro vai o sequelize que é a conexão que será configurada no database\index.js

      // Neste model vamos fazer algumas umas validações, o sequelize usa o Validator:
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          // notEmpty: {  valida se o campo esta vazio e mostra a mensagem que configurarmos! porem a validação seguinte sobrescreve ela, mas vou deixar só para informação
          //  msg: 'Campo nome não pode ficar vazio',
          // },
          len: { // verifica se o tamanho do nome esta entre os parametros que passarmos!!
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },

        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já existe', // essa mensagem é a tradução da captura de erros no catch dp UserController
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
      password_hash: { // este não precisa ser validado pois o que vamos receber do usuário é o password pelo addHook
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL, // campo virtual que não vai estar na base, só para validar
        defaultValue: '',
        validate: {
          len: {
            args: [4, 50],
            msg: 'Campo senha deve ter entre 4 e 50 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });
    // esse addHook pelo que entendi executa um tipo de evento como no delphi, vamos usar para passar a senha já com hash para o campo da base:
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
