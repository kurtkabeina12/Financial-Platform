const express = require('express');
const Asset = require('../models/Asset'); 
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Assets
 *   description: Управление активами
 */

/**
 * @swagger
 * /assets:
 *   get:
 *     summary: Получить список активов
 *     tags: [Assets]
 *     responses:
 *       200:
 *         description: Успешно получен список активов
 *   post:
 *     summary: Создать новый актив
 *     tags: [Assets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               symbol:
 *                 type: string
 *     responses:
 *       201:
 *         description: Актив успешно создан
 */
router.route('/')
    .get(async (req, res) => {
        try {
            const assets = await Asset.findAll();
            res.status(200).json(assets);
        } catch (error) {
            res.status(500).json({ error: 'Ошибка при получении активов' });
        }
    })
    .post(async (req, res) => {
        try {
            const { name, symbol } = req.body;
            const newAsset = await Asset.create({ name, symbol });
            res.status(201).json(newAsset);
        } catch (error) {
            res.status(500).json({ error: 'Ошибка при создании актива' });
        }
    });

module.exports = router;