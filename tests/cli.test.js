import execa from 'execa';
import fs from 'fs-extra';
import * as jest from "node/test.js";

jest.mock('fs-extra');

describe('CLI', () => {
  it('should run translate command', async () => {
    fs.readJsonSync.mockReturnValue({
      localePath: './locales',
      baseLanguage: 'en',
      targetLanguages: ['de']
    });
    fs.readdirSync.mockReturnValue(['en.json']);
    fs.readJsonSync.mockReturnValue({ "sign.in.welcome.message": "Welcome" });
    fs.writeJsonSync.mockImplementation(() => {});

    const result = await execa('node', ['./bin/translate.js', 'translate']);
    expect(result.exitCode).toBe(0);
  });
});
