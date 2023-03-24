module.exports = {
    PORT: process.env.SERVER_PORT || 4001,
    DB: process.env.DB || 'mongodb://127.0.0.1:27017/hermes',
    TOKEN_SECRET: process.env.TOKEN_SECRET || "TOKEN_SECRETT"
}