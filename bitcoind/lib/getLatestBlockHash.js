'use strict';

const formatBlockchainResponseAsJson = require("./formatBlockchainResponseAsJson");
const runShellCommand = require("./runShellCommand");

async function getBlockByHash(blockHash) {
    if (!(new RegExp(/^[a-z0-9]+$/i).test(blockHash))) {
        throw new Error("Block hash must be an alphanumeric string.")
    }

    let command = 'docker exec bitcoind-node bitcoin-cli getblockchaininfo'

    let { stderr: err, stdout: blockData } = await runShellCommand(command)

    if (err) {
        throw new Error("Invalid response from bitcoin-cli: " + err)
    }

    let blockDataJson = formatBlockchainResponseAsJson(blockData)

    if (typeof blockDataJson === 'object' &&
        !Array.isArray(blockDataJson) &&
        blockDataJson !== null &&
        blockDataJson['bestblockhash']) {
        return blockDataJson['bestblockhash']
    }
    throw new Error("Invalid response from bitcoin-cli")
}

module.exports = getBlockByHash
