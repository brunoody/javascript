"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

// forma de criar classe e do proprio sequelize
 class Aluno extends _sequelize.Model {
  static init(sequelize) { // conexão
    super.init({ // chama o init da classe pai, um objeto vai os nossos campos e o outro vai o sequelize que é a conexão que será configurada no database\index.js
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 200],
            msg: 'Nome precisa ter entre 3 e 200 caracteres',
          },
        },
      },
      sobrenome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 200],
            msg: 'Sobrenome precisa ter entre 3 e 200 caracteres',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já cadastrado',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },

      idade: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um numero inteiro',
          },
        },
      },
      peso: {
        type: _sequelize2.default.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'O Peso precisa ser um valor FLOAT',
          },
        },
      },
      altura: {
        type: _sequelize2.default.FLOAT,
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

  // colocamos aqui e tb no módulo de Fotos esta relação
  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
    // this.hasOne(models.Foto, { foreignKey: 'aluno_id' });
    // se eu usar o hasOne e o aluno tiver mais de uma foto, na consulta ele vai trazer várias vezes o mesmo aluno mas cada um com uma foto diferente, o hasMany é como se fosse um "group" nesse caso, um para vários
  }
} exports.default = Aluno;
