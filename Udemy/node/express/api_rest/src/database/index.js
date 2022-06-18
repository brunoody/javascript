import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';

const models = [Aluno];

const connection = new Sequelize(databaseConfig); // Configura a conexão (ver arquivo database.js)

models.forEach((model) => model.init(connection)); // para ada model ele vai setar a conexão configurada!
