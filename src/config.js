import fs from 'fs-extra';
import path from 'path';

const loadConfig = () => {
  const configPath = path.resolve(process.cwd(), 'toni.config.json');
  if (!fs.existsSync(configPath)) {
    throw new Error('Configuration file not found');
  }
  return fs.readJsonSync(configPath);
};

export { loadConfig };
