import { loadConfig } from '../src/config.js';
import fs from 'fs-extra';

jest.mock('fs-extra');

describe('loadConfig', () => {
  it('should load configuration correctly', () => {
    const mockConfig = {
      localePath: './locales',
      baseLanguage: 'en',
      targetLanguages: ['es', 'fr', 'de']
    };
    fs.readJsonSync.mockReturnValue(mockConfig);

    const config = loadConfig();
    expect(config).toEqual(mockConfig);
  });

  it('should throw error if config file is not found', () => {
    fs.readJsonSync.mockImplementation(() => {
      throw new Error('Configuration file not found');
    });

    expect(() => loadConfig()).toThrow('Configuration file not found');
  });
});
