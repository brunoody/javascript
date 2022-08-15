"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _appConfig = require('../config/appConfig'); var _appConfig2 = _interopRequireDefault(_appConfig);

// forma de criar classe e do proprio sequelize
 class Foto extends _sequelize.Model {
  static init(sequelize) { // conexão
    super.init({ // chama o init da classe pai, um objeto vai os nossos campos e o outro vai o sequelize que é a conexão que será configurada no database\index.js
      originalname: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio',
          },
        },
      },
      filename: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio',
          },
        },
      },
      url: { // caminho da imagem no nosso servidor, na pasta upload, é um campo VIRTUAL, como se fosse o calculado no Delphi:
        type: _sequelize2.default.VIRTUAL,
        get() {
          // getDataValue pega o valor do campo passado, como se fisse o nosso fieldbyname!
          return `${_appConfig2.default.url}:${process.env.APP_PORT}/images/${this.getDataValue('filename')}`;
          // configurar no app para poder abrir essa url no navegador
        },
      },

    }, {
      sequelize,
    });
    return this;
  }

  // associação com a tabela de alunos:
  // poderíamos tb ir na tabela de alunos e criar o mesmo método porém com this.hasOne ou this.hasMany
  // esse associate vi ser executado no database\index.js!
  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
} exports.default = Foto;
