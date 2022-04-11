function formatBlockchainResponseAsJson(blockData) {
    try {
        let blockDataJsonString = blockData.split(/\r?\n/).join(' ');
        let blockdataJson = JSON.parse(blockDataJsonString);
        return blockdataJson;
    } catch (error) {
        console.error('formatBlockchainResponseAsJson error', error)
        return blockData;
    }
}

module.exports = formatBlockchainResponseAsJson;
