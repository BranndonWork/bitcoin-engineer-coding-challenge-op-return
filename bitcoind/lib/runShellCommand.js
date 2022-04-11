'use strict';

const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function runShellCommand(command, args = []) {
    command = command + ' ' + args.join(' ')

    // increase the terminal data buffer to 10mb to ensure we get all the block data.
    let maxBuffer = 1024 * 1024 * 10
    const { stdout, stderr } = await exec(command, { maxBuffer: maxBuffer });
    return { stderr, stdout }
}

module.exports = runShellCommand
