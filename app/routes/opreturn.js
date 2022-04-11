const Router = require('express-promise-router')
const router = new Router()

const validateRequest = require('./opreturn/validateRequest');
const loadOpReturnRelatedHashes = require('./opreturn/loadOpReturnRelatedHashes');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.status(404).json({
        'error': 'This is not a valid API endpoint. You must include op_return data ' +
            'to query this endpoint. Example: /opreturn/<op_return>'
    });
});

/* GET transaction and block hashes related to provided OP_RETURN data. */
router.get('/:opReturnData', async (req, res, next) => {
    let opReturnData = req.params.opReturnData

    if (!validateRequest(req)) {
        return res.status(400).json({
            'error': 'Invalid op_return provided. ' +
                'op_return must be an alphanumeric value.',
            'op_return': opReturnData
        });
    }

    let opReturnRelatedHashes = await loadOpReturnRelatedHashes(opReturnData);
    if (opReturnRelatedHashes) {
        return res.json(opReturnRelatedHashes);
    }

    res.status(404).json({
        'error': 'OP_RETURN not found',
        'op_return': opReturnData
    });
});

module.exports = router
