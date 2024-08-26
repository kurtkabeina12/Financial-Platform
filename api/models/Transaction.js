const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Transaction = sequelize.define('Transaction', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    asset_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = Transaction;