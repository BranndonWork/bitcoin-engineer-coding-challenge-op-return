const runShellCommand = require("./runShellCommand");

describe('Run Shell Commands', () => {
    it('commands execute succesfully', async () => {
        let { stderr, stdout } = await runShellCommand('ls', ['-lah', './'])
        expect(stderr).toBe('')
        expect(stdout).toContain('index.js')
    });
});
