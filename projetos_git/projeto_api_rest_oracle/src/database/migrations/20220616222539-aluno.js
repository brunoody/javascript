module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('alunos', {
      id: {
        type: Sequelize.INTEGER,
        alowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        alowNull: false,
      },
      sobrenome: {
        type: Sequelize.STRING,
        alowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        alowNull: false,
      },
      idade: {
        type: Sequelize.INTEGER,
        alowNull: false,
      },
      peso: {
        type: Sequelize.FLOAT,
        alowNull: false,
      },
      altura: {
        type: Sequelize.FLOAT,
        alowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        alowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        alowNull: false,
      },

    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable('alunos');
  },
};
