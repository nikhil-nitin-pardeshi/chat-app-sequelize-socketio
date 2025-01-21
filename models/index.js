const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');

const User = require('./User');
const Message = require('./Message');

User.hasMany(Message, { foreignKey: 'senderId', as: 'sentMessages' });
User.hasMany(Message, { foreignKey: 'receiverId', as: 'receivedMessages' });
Message.belongsTo(User, { foreignKey: 'senderId', as: 'sender' });
Message.belongsTo(User, { foreignKey: 'receiverId', as: 'receiver' });

const initDB = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Database synced successfully');
  } catch (error) {
    console.error('Database sync failed:', error);
  }
};

initDB();

module.exports = {
  sequelize,
  User,
  Message,
};