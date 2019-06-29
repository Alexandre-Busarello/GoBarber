// Faz a conexão com o banco de dados
import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // Abre a conexão
    this.connection = new Sequelize(databaseConfig);

    // Itera todos os models e dispara o init
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
