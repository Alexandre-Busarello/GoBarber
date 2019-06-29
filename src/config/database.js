// Precisa usar a sintaxe antiga porque é utilizado pelo sequelize

module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100', // para docker toolbox
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true, // garante o update at e created at em todas as tabelas
    underscored: true, // caixa baixa separa por _ para os nomes da tabelas
    underscoredAll: true, // caixa baixa separado por _ para os campos e outras coisas do banco
  },
};
