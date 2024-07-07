#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { translateLocales } from '../src/translate.js';

yargs(hideBin(process.argv)).command({
  command: 'translate',
  describe: 'Translate locale files to target languages',
  handler: () => {
    translateLocales();
  }
}).parse();
