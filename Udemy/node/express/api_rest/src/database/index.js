import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

const models = [Aluno, User, Foto];

const connection = new Sequelize(databaseConfig); // Configura a conexão (ver arquivo database.js)

models.forEach((model) => model.init(connection)); // para ada model ele vai setar a conexão configurada!

// verifica se tem o método associate e executa
models.forEach((model) => model.associate && model.associate(connection.models));
