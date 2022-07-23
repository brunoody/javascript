import Sequelize, { Model } from 'sequelize';

// forma de criar classe e do proprio sequelize
export default class Foto extends Model {
  static init(sequelize) { // conexão
    super.init({ // chama o init da classe pai, um objeto vai os nossos campos e o outro vai o sequelize que é a conexão que será configurada no database\index.js
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode icar vazio',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode icar vazio',
          },
        },
      },

    }, {
      sequelize,
    });
    return this;
  }

  // associação com a tabela de alunos:
  // poderíamos tb ir na tabela de alunos e criar o mesmo método porém com this.hasOne ou this.hasMany
  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
