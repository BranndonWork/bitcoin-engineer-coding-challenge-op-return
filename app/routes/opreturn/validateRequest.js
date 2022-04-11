/* Ensure requeset is alphanumeric */
function validateRequest(req) {
    return new RegExp(/^[a-z0-9]+$/i).test(req.params.opReturnData)
}

module.exports = validateRequest
