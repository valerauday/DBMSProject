module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
      UserID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      UserType: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }, {
      timestamps: false,
      tableName: 'User'
    });
  
    return User;
  };
  