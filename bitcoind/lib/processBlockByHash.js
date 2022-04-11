const getOpReturnDataFromBlock = require("./getOpReturnDataFromBlock");
const getBlockByHash = require("./getBlockByHash");
const saveOpReturnToDatabase = require("./saveOpReturnToDatabase");
const db = require("../db");

async function blockHasAlreadyBeenProcessed(blockHash) {
    let queryString =
        'SELECT * FROM bitcoin_op_return_data WHERE block_hash = $1::text LIMIT 1';
    var { rows } = await db.query(queryString, [blockHash]);
    return (rows.length > 0);
}

async function processBlockByHash(blockHash, processPreviousBlocks = false) {
    let { err, blockData } = await getBlockByHash(blockHash);

    if (err) {
        throw new Error(err);
    }

    if (!await blockHasAlreadyBeenProcessed(blockHash)) {
        let opReturnDataArray = getOpReturnDataFromBlock(blockData);
        if (opReturnDataArray.length) {
            for (let index = 0; index < opReturnDataArray.length; index++) {
                const opReturnData = opReturnDataArray[index];
                await saveOpReturnToDatabase(opReturnData);
            }
        }

        if (processPreviousBlocks) {
            let previousBlockHash = blockData['previousblockhash'];
            return processBlockByHash(previousBlockHash);
        }
    }

    return true;
}

module.exports = processBlockByHash
