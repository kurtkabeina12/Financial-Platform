const express = require('express');
const platformBalance = require('../models/PlatformBalance.js');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: PlatformBalance
 *   description: Управление балансами
 */

/**
 * @swagger
 * /platformBalance:
 *   get:
 *     summary: Получить список балансов
 *     tags: [PlatformBalance]
 *     responses:
 *       200:
 *         description: Успешно получен список балансов
 *   post:
 *     summary: Добавить новый баланс
 *     tags: [PlatformBalance]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               asset_id:
 *                 type: string
 *               balance:
 *                 type: number
 *     responses:
 *       201:
 *         description: Баланс успешно обновлен
 */
router.route('/')
    .get(async (req, res) => {
        try {
            const platformBalance = await platformBalance.findAll();
            res.status(200).json(platformBalance);
        } catch (error) {
            res.status(500).json({ error: 'Ошибка при получении активов' });
        }
    })
    .post(async (req, res) => {
        try {
            const { asset_id, balance } = req.body;
            const newAsset = await platformBalance.create({ asset_id, balance });
            res.status(201).json(newAsset);
        } catch (error) {
            res.status(500).json({ error: 'Ошибка при создании актива' });
        }
    });

module.exports = router;