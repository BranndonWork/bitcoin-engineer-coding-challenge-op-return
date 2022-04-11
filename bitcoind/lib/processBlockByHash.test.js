const processBlockByHash = require("./processBlockByHash");
const db = require('../db')

jest.setTimeout(60 * 10 * 1000)
describe('Process block by hash', () => {
    it('block hash ----> parses op_returns from block and inserts values to db',
        async () => {
            let testBlockHash =
                '000000000000000004c31376d7619bf0f0d65af6fb028d3b4a410ea39d22554c'
            let blockProcessed = await processBlockByHash(testBlockHash)
            expect(blockProcessed).toEqual(true);
        }
    );

    afterAll(async () => {
        return await db.close();
    })
});
