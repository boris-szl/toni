import fs from 'fs-extra';
import path from 'path';

const readLocaleFile = (filePath) => fs.readJsonSync(filePath);

const writeLocaleFile = (filePath, content) => fs.writeJsonSync(filePath, content, { spaces: 2 });

const getLocaleFiles = (dir) => fs.readdirSync(dir).filter(file => file.endsWith('.json'));

export { readLocaleFile, writeLocaleFile, getLocaleFiles };
