import { translateLocales, translateLocaleData } from '../src/translate.js';
import { loadConfig } from '../src/config.js';
import { readLocaleFile, writeLocaleFile, getLocaleFiles } from '../src/utils.js';
import translate from 'google-translate-api';
import * as jest from "node/test.js";

jest.mock('../src/config.js');
jest.mock('../src/utils.js');
jest.mock('google-translate-api');

describe('Translate', () => {
  it('should translate locale data', async () => {
    const mockData = { "sign.in.welcome.message": "Welcome" };
    const mockTranslatedData = { "sign.in.welcome.message": "Willkommen" };
    translate.mockResolvedValue({ text: "Willkommen" });

    const translatedData = await translateLocaleData(mockData, 'de');
    expect(translatedData).toEqual(mockTranslatedData);
  });

  it('should translate locales', async () => {
    const mockConfig = {
      localePath: './locales',
      baseLanguage: 'en',
      targetLanguages: ['de']
    };
    const mockFiles = ['en.json'];
    const mockData = { "sign.in.welcome.message": "Welcome" };
    const mockTranslatedData = { "sign.in.welcome.message": "Willkommen" };

    loadConfig.mockReturnValue(mockConfig);
    getLocaleFiles.mockReturnValue(mockFiles);
    readLocaleFile.mockReturnValue(mockData);
    translate.mockResolvedValue({ text: "Willkommen" });

    await translateLocales();

    expect(writeLocaleFile).toHaveBeenCalledWith('./locales/de.json', mockTranslatedData);
  });
});
