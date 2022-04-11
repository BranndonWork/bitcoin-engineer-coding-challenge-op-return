function getOpReturn(transaction) {
    for (let index = 0; index < transaction['vout'].length; index++) {
        const vout = transaction['vout'][index];
        if (vout['scriptPubKey'] && vout['scriptPubKey']['asm']) {
            if (vout['scriptPubKey']['asm'].includes('OP_RETURN')) {
                return String(vout['scriptPubKey']['asm']).substring(10)
            }
        }
    }
    return null
}

function getOpReturnDataFromBlock(block) {
    let blockHash = block['hash']
    let transactions = block['tx']
    let opReturnData = []
    for (let index = 0; index < transactions.length; index++) {
        let transaction = transactions[index];
        let opReturn = getOpReturn(transaction)
        if (opReturn) {
            opReturnData.push({
                'block_hash': blockHash,
                'transaction_hash': transaction['hash'],
                'op_return': opReturn,
            })
        }
    }
    return opReturnData
}

module.exports = getOpReturnDataFromBlock
