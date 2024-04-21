module.exports = (sequelize, Sequelize) => {
    const Vote = sequelize.define('Vote', {
      VoteID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      UserID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      CandidateID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Timestamp: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    }, {
      timestamps: false,
      tableName: 'Vote'
    });
  
    return Vote;
  };
  