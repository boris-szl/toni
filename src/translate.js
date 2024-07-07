import path from 'path';
import { loadConfig } from './config.js';
import { readLocaleFile, writeLocaleFile, getLocaleFiles } from './utils.js';
import translate from 'google-translate-api';

const translateLocales = async () => {
  const config = loadConfig();
  const localeFiles = getLocaleFiles(config.localePath);

  for (const file of localeFiles) {
    const localeFilePath = path.join(config.localePath, file);
    const localeData = readLocaleFile(localeFilePath);

    for (const lang of config.targetLanguages) {
      const translatedData = await translateLocaleData(localeData, lang);
      const translatedFilePath = path.join(config.localePath, `${lang}.json`);
      writeLocaleFile(translatedFilePath, translatedData);
    }
  }
};

const translateLocaleData = async (data, targetLang) => {
  const translatedData = {};

  for (const key of Object.keys(data)) {
    const translated = await translate(data[key], { to: targetLang });
    translatedData[key] = translated.text;
  }

  return translatedData;
};

export { translateLocales };
