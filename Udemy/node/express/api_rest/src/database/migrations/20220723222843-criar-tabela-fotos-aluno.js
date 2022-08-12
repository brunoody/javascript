module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('fotos', {
      id: {
        type: Sequelize.INTEGER,
        alowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      originalname: {
        type: Sequelize.STRING,
        alowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        alowNull: false,
      },
      aluno_id: { // capo foreign key
        type: Sequelize.INTEGER,
        alowNull: false,
        references: {
          model: 'alunos', // tabela a quel ele se referencia
          key: 'id', // campo referencia na tabela alunos
        },
        onDelete: 'CASCADE', // TEM TB: RESTRICT E NO ACTION
        onUpdate: 'CASCADE',
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
    return queryInterface.dropTable('fotos');
  },
};
