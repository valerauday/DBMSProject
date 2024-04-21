module.exports = (sequelize, Sequelize) => {
    const Candidate = sequelize.define('Candidate', {
      CandidateID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      PartyID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      VoteCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    }, {
      timestamps: false,
      tableName: 'Candidate'
    });
  
    return Candidate;
  };
  
