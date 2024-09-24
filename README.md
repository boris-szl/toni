# toni

A CLI tool to translate JSON locale files based on configuration. To save time, locale kv pairs are loaded into GPT and prompted to translate values based on the input language. However, empirically GPT fails to translate all existing KV pairs, that are loaded into the prompt, even omitting some of them, which leads to incosistent values across different locale files. The margin of error increases by loading larger set of KV pairs into ChatGPT. This plugin aims to provide a blazingly fast translation and extension of locales for a given project. 

## Description

`toni` is a command-line interface tool designed to help you translate locale JSON files based on a configuration file. It uses Google Translate to perform the translations and supports multiple target languages.

## Installation

You can install the CLI tool globally using npm, yarn, or pnpm:

### npm

```bash
npm install -g toni
```

### yarn
```bash
yarn global add toni```
```

### pnpm
```bash
pnpm add -g toni
```

## Configuration
Create a toni.config.json in your project root with the following structure:
```json
{
  "localePath": "./locales",
  "baseLanguage": "en",
  "targetLanguages": ["es", "fr", "de"]
}
```

* `localePath`: Path to the directory containing your locale JSON files.
* `baseLanguage`: The base language of your locale files (e.g., "en" for English). 
* `targetLanguages`: An array of languages to which you want to translate your locale files (e.g., ["es", "fr", "de"] for Spanish, French, and German).

## Usage
```bash
toni translate
```


## Example
Suppose you have the following directory structure and configuration:
```
my-project/
├── locales/
│   ├── en.json
├── toni.config.json
```

`toni.config.json`:
```json
{
  "localePath": "./locales",
  "baseLanguage": "en",
  "targetLanguages": ["es", "fr", "de"]
}
```

Running `toni translate` will produce:
```
my-project/
├── locales/
│   ├── en.json
│   ├── es.json
│   ├── fr.json
│   ├── de.json
```
Each translated file will contain the translations for the respective target language.

### Additional Notes

1. Ensure you have appropriate permissions and handle rate limiting and errors when using translation APIs in a production environment.
2. You might need to set up environment variables or configuration for the translation API you use (e.g., API keys for Google Translate).

By following this README, users should have a clear understanding of how to install, configure, and use your CLI tool, along with insights into the project structure and development practices.
