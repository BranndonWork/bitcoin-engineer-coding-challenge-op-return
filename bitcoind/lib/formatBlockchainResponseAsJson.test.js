const formatBlockchainResponseAsJson = require("./formatBlockchainResponseAsJson");

describe('Format Blockchain Data Response as JSON', () => {
    it('string output from bitcoin-cli ----> JSON', () => {
        let blockchainInfo = `{
            "chain": "main",
            "blocks": 462829,
            "headers": 730379,
            "bestblockhash": "0000000000000000013e9b71ee947e9ef5189a2249e92d485e5c1c120ae72f0a",
            "difficulty": 520808749422.1398,
            "mediantime": 1492758874,
            "verificationprogress": 0.3025660194282876,
            "initialblockdownload": true,
            "chainwork": "0000000000000000000000000000000000000000004f8c9c544e792547195cb8",
            "size_on_disk": 128308521850,
            "pruned": false,
            "softforks": {
              "bip34": {
                "type": "buried",
                "active": true,
                "height": 227931
              },
              "bip66": {
                "type": "buried",
                "active": true,
                "height": 363725
              },
              "bip65": {
                "type": "buried",
                "active": true,
                "height": 388381
              },
              "csv": {
                "type": "buried",
                "active": true,
                "height": 419328
              },
              "segwit": {
                "type": "buried",
                "active": false,
                "height": 481824
              },
              "taproot": {
                "type": "bip9",
                "bip9": {
                  "status": "defined",
                  "start_time": 1619222400,
                  "timeout": 1628640000,
                  "since": 0,
                  "min_activation_height": 709632
                },
                "active": false
              }
            },
            "warnings": ""
          }`;

        let blockchainInfoJson = formatBlockchainResponseAsJson(blockchainInfo)
        expect(blockchainInfoJson).toEqual(expect.objectContaining({
            "blocks": 462829
        }));
    });
});
