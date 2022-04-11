const db = require('../../db')

async function pullOpReturnData(op_return) {
    let queryString = 'SELECT * FROM bitcoin_op_return_data WHERE op_return = $1::text'

    var { rows } = await db.query(queryString, [op_return])

    let block_hash_rows = []
    let transaction_hash_rows = []
    if (rows.length) {
        for (let index = 0; index < rows.length; index++) {
            const row = rows[index];
            transaction_hash_rows.push(row['transaction_hash'])
            block_hash_rows.push(row['block_hash'])
        }
    }

    // remove any duplicate block/transaction hashes
    transaction_hash_rows = [...new Set(transaction_hash_rows)]
    block_hash_rows = [...new Set(block_hash_rows)]

    return { transaction_hash_rows, block_hash_rows }
}

async function loadOpReturnRelatedHashes(op_return) {
    let { transaction_hash_rows, block_hash_rows } = await pullOpReturnData(op_return)

    if (block_hash_rows.length && transaction_hash_rows.length) {
        return {
            'op_return': op_return,
            'block_hashes': block_hash_rows,
            'transaction_hashes': transaction_hash_rows,
        }
    }

    return false
}

module.exports = loadOpReturnRelatedHashes
