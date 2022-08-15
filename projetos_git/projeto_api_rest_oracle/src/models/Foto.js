import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

// forma de criar classe e do proprio sequelize
export default class Foto extends Model {
  static init(sequelize) { // conexão
    super.init({ // chama o init da classe pai, um objeto vai os nossos campos e o outro vai o sequelize que é a conexão que será configurada no database\index.js
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio',
          },
        },
      },
      url: { // caminho da imagem no nosso servidor, na pasta upload, é um campo VIRTUAL, como se fosse o calculado no Delphi:
        type: Sequelize.VIRTUAL,
        get() {
          // getDataValue pega o valor do campo passado, como se fisse o nosso fieldbyname!
          return `${appConfig.url}:${process.env.APP_PORT}/images/${this.getDataValue('filename')}`;
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
}
