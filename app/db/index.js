const { Pool } = require('pg')

const pool = new Pool({
    host: '127.0.0.1',
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
})

pool.on('error', (err) => console.log('Lost PG Connection', err));

module.exports = {
    query: (text, params) => pool.query(text, params),
    close: () => pool.end()
}
