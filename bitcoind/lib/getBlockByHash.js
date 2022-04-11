'use strict';

const runShellCommand = require("./runShellCommand");

function formatBlockchainResponseAsJson(blockData) {
    try {
        let blockDataJsonString = blockData.split(/\r?\n/).join(' ')
        let blockdataJson = JSON.parse(blockDataJsonString)
        return blockdataJson
    } catch (error) {
        return blockData
    }
}

async function getBlockByHash(blockHash) {
    if (!(new RegExp(/^[a-z0-9]+$/i).test(blockHash))) {
        throw new Error("Block hash must be an alphanumeric string.")
    }
    let command = `docker`
    let args = `exec bitcoind-node bitcoin-cli getblock ${blockHash} 2`.split(' ')
    let { stderr: err, stdout: blockData } = await runShellCommand(command, args)

    if (err) {
        return { err, blockData }
    }

    blockData = formatBlockchainResponseAsJson(blockData)

    return { err, blockData }
}

module.exports = getBlockByHash
