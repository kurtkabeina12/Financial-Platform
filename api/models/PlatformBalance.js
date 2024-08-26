const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const PlatformBalance = sequelize.define('PlatformBalance', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    asset_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    balance: {
        type: DataTypes.DECIMAL,
        defaultValue: 0,
    },
});

module.exports = PlatformBalance;