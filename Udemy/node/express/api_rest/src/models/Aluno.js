import Sequelize, { Model } from 'sequelize';

// forma de criar classe e do proprio sequelize
export default class Aluno extends Model {
  static init(sequelize) { // conexão
    super.init({ // chama o init da classe pai, um objeto vai os nossos campos e o outro vai o sequelize que é a conexão que será configurada no database\index.js
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 200],
            msg: 'Nome precisa ter entre 3 e 200 caracteres',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 200],
            msg: 'Sobrenome precisa ter entre 3 e 200 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já cadastrado',
        },
        validate: {                    
          isEmail: {
            msg: 'E-mail inválido',          
          },
        }
      },

      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um numero inteiro',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'O Peso precisa ser um valor FLOAT',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'A Altura precisa ser um valor FLOAT',
          },
        },
      },

    }, {
      sequelize,
    });
    return this;
  }
}
