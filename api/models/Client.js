const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Client = sequelize.define('Client', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    balance: {
        type: DataTypes.DECIMAL,
        defaultValue: 0,
    },
});

module.exports = Client;