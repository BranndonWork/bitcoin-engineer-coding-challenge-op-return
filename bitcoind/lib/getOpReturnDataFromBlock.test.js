const getOpReturnDataFromBlock = require("./getOpReturnDataFromBlock");

let testBlock = {
    hash: '000000000000000743aee48cf264e1aa4a05fc3018677be3c1bdbd2429ffeede',
    tx: [{
        "txid": "e14578437ec3c9990ad5e0628c26431ac526427cc8693262016b2f013d9875be",
        "hash": "e14578437ec3c9990ad5e0628c26431ac526427cc8693262016b2f013d9875be",
        "version": 1,
        "size": 247,
        "vsize": 247,
        "weight": 988,
        "locktime": 0,
        "vin": [{
            "txid": "8a6358a49d96612ccb317f79da5822c2aa495b33629b1f69b4aa8e4c18b3ba8d",
            "vout": 0,
            "scriptSig": {
                "asm": "3044022030222a4d6149bd4e842fc3e7162a60bafb50c3104922e2bbc2b71e3ed0db791902207fc7f33bc8a5f5718debe0ddaed340d8922938cd456acd23a6990d5ee2b9bd58[ALL] 0338f807120357ac7e937393df2e8bd9a01df2873428e9743e1d87c1884cd2da24",
                "hex": "473044022030222a4d6149bd4e842fc3e7162a60bafb50c3104922e2bbc2b71e3ed0db791902207fc7f33bc8a5f5718debe0ddaed340d8922938cd456acd23a6990d5ee2b9bd5801210338f807120357ac7e937393df2e8bd9a01df2873428e9743e1d87c1884cd2da24"
            },
            "sequence": 4294967295
        }],
        "vout": [{
            "value": 0,
            "n": 0,
            "scriptPubKey": {
                "asm": "OP_RETURN 4920676f742041746c61732053687275676765642066726f6d20746865206c6f63616c206c69627261727920616e64206469646e2774206576656e207265616c697a65207468652069726f6e792e",
                "hex": "6a4c4e4920676f742041746c61732053687275676765642066726f6d20746865206c6f63616c206c69627261727920616e64206469646e2774206576656e207265616c697a65207468652069726f6e792e",
                "type": "nulldata"
            }
        }],
        "fee": 0.0007175,
    }, {
        "txid": "e14578437ec3c9990ad5e0628c26431ac526427cc8693262016b2f013d9875be2",
        "hash": "e14578437ec3c9990ad5e0628c26431ac526427cc8693262016b2f013d9875be2",
        "version": 1,
        "size": 247,
        "vsize": 247,
        "weight": 988,
        "locktime": 0,
        "vin": [{
            "txid": "8a6358a49d96612ccb317f79da5822c2aa495b33629b1f69b4aa8e4c18b3ba8d",
            "vout": 0,
            "scriptSig": {
                "asm": "3044022030222a4d6149bd4e842fc3e7162a60bafb50c3104922e2bbc2b71e3ed0db791902207fc7f33bc8a5f5718debe0ddaed340d8922938cd456acd23a6990d5ee2b9bd58[ALL] 0338f807120357ac7e937393df2e8bd9a01df2873428e9743e1d87c1884cd2da24",
                "hex": "473044022030222a4d6149bd4e842fc3e7162a60bafb50c3104922e2bbc2b71e3ed0db791902207fc7f33bc8a5f5718debe0ddaed340d8922938cd456acd23a6990d5ee2b9bd5801210338f807120357ac7e937393df2e8bd9a01df2873428e9743e1d87c1884cd2da24"
            },
            "sequence": 4294967295
        }],
        "vout": [{
            "value": 0,
            "n": 0,
            "scriptPubKey": {
                "asm": "4920676f742041746c61732053687275676765642066726f6d20746865206c6f63616c206c69627261727920616e64206469646e2774206576656e207265616c697a65207468652069726f6e792e",
                "hex": "6a4c4e4920676f742041746c61732053687275676765642066726f6d20746865206c6f63616c206c69627261727920616e64206469646e2774206576656e207265616c697a65207468652069726f6e792e",
                "type": "nulldata"
            }
        }],
        "fee": 0.0007175,
    }]
}

describe('Get OP Return Data From Block', () => {
    it('block data ----> array of transactions that contain op_return', async () => {
        let opReturnData = getOpReturnDataFromBlock(testBlock)
        let opReturnDataComplete = 'OP_RETURN ' + opReturnData[0]['op_return']
        let opReturnMatch = testBlock['tx'][0]['vout'][0]['scriptPubKey']['asm']
        expect(opReturnDataComplete).toEqual(opReturnMatch);
    });
});
