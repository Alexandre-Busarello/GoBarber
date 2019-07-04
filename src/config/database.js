require('dotenv/config');

// Precisa usar a sintaxe antiga porque é utilizado pelo sequelize

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST, // para docker toolbox
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  define: {
    timestamps: true, // garante o update at e created at em todas as tabelas
    underscored: true, // caixa baixa separa por _ para os nomes da tabelas
    underscoredAll: true, // caixa baixa separado por _ para os campos e outras coisas do banco
  },
};
