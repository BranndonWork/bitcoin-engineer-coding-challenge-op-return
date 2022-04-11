const db = require("../db")

async function saveOpReturnToDatabase(op_return) {
    let queryString =
        `INSERT INTO bitcoin_op_return_data (op_return, block_hash, transaction_hash) ` +
        `VALUES ($1::text, $2::text, $3::text) ON CONFLICT DO NOTHING`

    let { rowCount: rowsAffected } = await db.query(queryString, [
        op_return['op_return'],
        op_return['block_hash'],
        op_return['transaction_hash']
    ])

    return rowsAffected
}

module.exports = saveOpReturnToDatabase
