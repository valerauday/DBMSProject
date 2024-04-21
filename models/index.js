const Sequelize = require('sequelize');
const sequelize = new Sequelize('OnlineVotingSystem', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load models
db.User = require('./user')(sequelize, Sequelize);
db.Candidate = require('./candidate')(sequelize, Sequelize);
db.Vote = require('./vote')(sequelize, Sequelize);

// Define associations
db.User.hasMany(db.Vote, { foreignKey: 'UserID' });
db.Candidate.hasMany(db.Vote, { foreignKey: 'CandidateID' });
db.Vote.belongsTo(db.User, { foreignKey: 'UserID' });
db.Vote.belongsTo(db.Candidate, { foreignKey: 'CandidateID' });

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports = db;
