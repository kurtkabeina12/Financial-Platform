const Client = require('../models/Client');
const Transaction = require('../models/Transaction');
const PlatformBalance = require('../models/PlatformBalance');
const raydiumAPI = require('../services/raydiumService');

exports.openPosition = async (req, res) => {
    const { amount_token, asset_id, user_id } = req.body;

    const client = await Client.findByPk(user_id);
    if (client.balance < requiredSOL) {
        return res.status(400).send('Недостаточно средств');
    }

    client.balance -= requiredSOL;
    await client.save();

    try {
        await raydiumAPI.buyTokens(amount_token, asset_id);
    } catch (error) {
        client.balance += requiredSOL;
        await client.save();
        return res.status(500).send('Ошибка при покупке токенов');
    }

    const platformBalance = await PlatformBalance.findOne({ where: { asset_id } });
    platformBalance.balance += amount_token;
    await platformBalance.save();

    await Transaction.create({
        user_id,
        asset_id,
        amount: amount_token,
        type: 'open',
        timestamp: new Date(),
    });

    res.status(200).send('Позиция открыта');
};