import { readLocaleFile, writeLocaleFile, getLocaleFiles } from '../src/utils.js';
import fs from 'fs-extra';
import * as jest from "node/test.js";

jest.mock('fs-extra');

describe('Utils', () => {
  it('should read locale file', () => {
    const mockData = { "sign.in.welcome.message": "Welcome" };
    fs.readJsonSync.mockReturnValue(mockData);

    const data = readLocaleFile('path/to/file.json');
    expect(data).toEqual(mockData);
  });

  it('should write locale file', () => {
    const mockData = { "sign.in.welcome.message": "Willkommen" };

    writeLocaleFile('path/to/file.json', mockData);
    expect(fs.writeJsonSync).toHaveBeenCalledWith('path/to/file.json', mockData, { spaces: 2 });
  });

  it('should get locale files', () => {
    const mockFiles = ['en.json', 'es.json'];
    fs.readdirSync.mockReturnValue(mockFiles);

    const files = getLocaleFiles('path/to/dir');
    expect(files).toEqual(mockFiles);
  });
});
