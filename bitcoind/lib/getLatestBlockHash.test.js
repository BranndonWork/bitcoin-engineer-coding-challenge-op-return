const getLatestBlockHash = require("./getLatestBlockHash");
jest.setTimeout(60 * 2 * 1000);

describe('Get latest block hash', () => {
    it('a valid block hash is returned', async () => {
        let latestBlockHash = await getLatestBlockHash()
        let blockHashIsAlphaNumeric = new RegExp(/^[a-z0-9]+$/i).test(
            latestBlockHash)
        expect(blockHashIsAlphaNumeric).toEqual(true);
        expect(latestBlockHash.length).toEqual(64);
    });
});
