const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cron = require('node-cron');
const GetDataHourly = require('./getData');

const app = express();
app.use(cors())

//Capturar Body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Carga de rutas
const verifyToken = require('./routes/auth/verify-token');
const Auth = require('./routes/auth/auth'); 
const Accounts = require('./routes/accounts'); 

//Routes Middlewares
app.use('/auth', Auth);
app.use('/accounts', verifyToken, Accounts);

GetDataHourly()

cron.schedule('0 * * * *', async () => {
    console.log('Ejecutando GetDataHourly()...');
    await GetDataHourly();
  });

module.exports = app