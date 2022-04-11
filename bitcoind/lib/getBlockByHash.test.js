const getBlockByHash = require("./getBlockByHash");

jest.setTimeout(60 * 2 * 1000);

describe('Get block by hash', () => {
    it('block hash ----> bitcoin block as an object', async () => {
        let blockHash =
            '000000000000000743aee48cf264e1aa4a05fc3018677be3c1bdbd2429ffeede'
        let { err, blockData } = await getBlockByHash(blockHash)

        expect(err).toBe('')
        expect(blockData['hash']).toBe(blockHash)
    });
});
