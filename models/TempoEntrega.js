const MySql = require('./MySql')
const moment = require('moment');

const TempoEntrega = MySql.sequelize.define('TempoEntrega', {
  id: {
    type: MySql.Sequelize.INTEGER,
    primaryKey: true,
  },
  produto: {
    type: MySql.Sequelize.STRING,
    allowNull: false
  },
  data_saida: {
    type: MySql.Sequelize.DATE,
    allowNull: false
  },
  data_entrega: {
    type: MySql.Sequelize.DATE, // em minutos ou horas
    allowNull: false,
    get() {
      // calcula a diferença entre as datas em minutos
      const diffMinutes = moment(this.getDataValue('data_entrega')).diff(this.getDataValue('data_saida'), 'minutes');
      // se quiser em horas, é só dividir por 60
      const diffHours = diffMinutes / 60;
      return diffHours;
    }
  }
}, { freezeTableName: true });

module.exports = TempoEntrega;


//TempoEntrega.sync({ force: true })

