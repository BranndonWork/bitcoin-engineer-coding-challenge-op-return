const db = require('./index')

describe("Database tests", () => {
    it('Execute SELECT statement to ensure connectivity', async () => {
        let { rows } = await db.query(
            "SELECT * FROM bitcoin_op_return_data LIMIT 1")
        expect(rows.length).not.toBe(0)
    })

    afterAll(async () => {
        return await db.close();
    })
})
