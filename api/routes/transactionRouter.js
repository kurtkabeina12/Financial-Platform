const express = require('express');
const Transaction = require('../models/Transaction.js');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Transaction
 *   description: Управление транзакциями
 */

/**
 * @swagger
 * /Transaction:
 *   get:
 *     summary: Получить список всех транзакций
 *     tags: [Transaction]
 *     responses:
 *       200:
 *         description: Успешно получен список балансов
 *   post:
 *     summary: Добавить новую транзакцию
 *     tags: [Transaction]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 *               asset_id:
 *                 type: string
 *               amount:
 *                 type: number
 *     responses:
 *       201:
 *         description: Транзакция успешно совершена
 *   delete:
 *     summary: Удалить транзакцию
 *     tags: [Transaction]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 *               asset_id:
 *                 type: string
 *               amount:
 *                 type: number
 *     responses:
 *       201:
 *         description: Транзакция успешно удалена
 */
router.route('/')
    .get(async (req, res) => {
        try {
            const Transaction = await Transaction.findAll();
            res.status(200).json(Transaction);
        } catch (error) {
            res.status(500).json({ error: 'Ошибка при получении активов' });
        }
    })
    .post(async (req, res) => {
        try {
            const { user_id, asset_id, amount } = req.body;
            const newAsset = await Transaction.create({ user_id, asset_id, amount });
            res.status(201).json(newAsset);
        } catch (error) {
            res.status(500).json({ error: 'Ошибка при создании актива' });
        }
    });
    delete(async (req, res) => {
        try {
            const { user_id, asset_id, amount } = req.body;
            const newAsset = await Transaction.create({ user_id, asset_id, amount });
            res.status(201).json(newAsset);
        } catch (error) {
            res.status(500).json({ error: 'Ошибка при создании актива' });
        }
    });

module.exports = router;