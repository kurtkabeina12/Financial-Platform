const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const { swaggerUi, swaggerDocs } = require('./swagger');

const app = express();
app.use(bodyParser.json());

// Подключение Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const PORT = process.env.PORT || 3000;

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Сервер запущен на порту ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Ошибка при подключении к базе данных:', err);
    });