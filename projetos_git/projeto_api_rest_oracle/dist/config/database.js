"use strict";require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timesamps: true,
    underscored: true, // serve para transformar camelcase em campos separados por underscore: nomeAluno > nome_aluno
    underscoredAll: true,
    // professor disse que esse recurs acima as vezes dá bug então vamos mapear manulmente os campos que dizem qdo o registro foi criado e qdo foi alterado:
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',

};
