const Database = require('./config/database');
const config = require('./config/config');
const app = require('./app');

Database.connect();

app.listen(config.PORT, err => {
    if (err) return console.log(err)
    console.log(`Servidor corriendo en el puerto: ${config.PORT}`);
})