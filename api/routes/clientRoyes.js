const express = require('express');
const Client = require('../client');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Client
 *   description: Пользователи
 */

/**
 * @swagger
 * /client:
 *   get:
 *     summary: Получить список пользователей
 *     tags: [Client]
 *     responses:
 *       200:
 *         description: Успешно получен список пользователей
 *   post:
 *     summary: Создать нового пользователя
 *     tags: [Client]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               balance:
 *                 type: number
 *     responses:
 *       201:
 *         description: Пользователь успешно создан
 */
router.route('/')
    .get(async (req, res) => {
        try {
            const client = await Client.findAll();
            res.status(200).json(client);
        } catch (error) {
            res.status(500).json({ error: 'Ошибка при получении пользователей' });
        }
    })
    .post(async (req, res) => {
        try {
            const { name, balance } = req.body;
            const newAsset = await Client.create({ name, balance });
            res.status(201).json(newAsset);
        } catch (error) {
            res.status(500).json({ error: 'Ошибка при создании пользователя' });
        }
    });

module.exports = router;