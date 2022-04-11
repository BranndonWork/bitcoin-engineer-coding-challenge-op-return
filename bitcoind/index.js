const getLatestBlockHash = require("./lib/getLatestBlockHash");
const processBlockByHash = require("./lib/processBlockByHash");

async function processBlocks() {
    try {
        let latestBlockHash = await getLatestBlockHash()
        await processBlockByHash(latestBlockHash, processPreviousBlocks = true)
    } catch (err) {
        console.error('error processing block', err)
    } finally {
        setTimeout(() => {
            processBlocks()
        }, 60 * 10 * 1000);
    }

}

processBlocks()
