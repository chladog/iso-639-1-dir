# ISO-639-1-dir

[![NPM Version][npm-image]][npm-url]
[![Download Count][download-url]][npm-url]

[npm-image]: https://img.shields.io/npm/v/iso-639-1-dir.svg?style=flat-square
[npm-url]: https://npmjs.org/package/iso-639-1-dir
[download-url]: https://img.shields.io/npm/dt/iso-639-1-dir.svg?style=flat-square

Simple interface for [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language their 2-letter codes, english names, native names and **writing directions**. Typescript friendly.

## Installation

```
npm install iso-639-1-dir
```

```
yarn add iso-639-1-dir
```

## Usage

### ES Module

```typescript
import ISO6391 from 'iso-639-1-dir';
```

### CommonJs

```typescript
const ISO6391 = require('iso-639-1-dir');
```

## Interfaces & Types

Codes list: [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

```typescript

type LanguageCode = "aa" | "ab" | "ae" | "af" | "ak" | "am" | "an" | "ar" | "as" | "av" | "ay" | "az" | "ba" | "be" | "bg" | "bi" | "bm" | "bn" | "bo" | "br" | "bs" | "ca" | "ce" | "ch" | "co" | "cr" | "cs" | ... 155 more ... | "zu"

type LanguageName = "Afar" | "Abkhaz" | "Avestan" | "Afrikaans" | "Akan" | "Amharic" | "Aragonese" | "Arabic" | "Assamese" | "Avaric" | "Aymara" | "Azerbaijani" | "Bashkir" | "Belarusian" | "Bulgarian" | ... 167 more ... | "Zulu"

type LanguageNativeName = "Afaraf" | "аҧсуа бызшәа" | "avesta" | "Afrikaans" | "Akan" | "አማርኛ" | "aragonés" | "اَلْعَرَبِيَّةُ" | "অসমীয়া" | "авар мацӀ" | "aymar aru" | "azərbaycan dili" | "башҡорт теле" | ... 168 more ... | "isiZulu"

/**
 * ltr - left to right
 * rtl - right to left
 * ttb - top to bottom
 */
type LanguageDir = 'ltr' | 'rtl' | 'ttb';

interface Language {
  name: LanguageName;
  nativeName: LanguageNativeName;
  dir: LanguageDir;
  code: LanguageCode;
}
```

## Methods

```typescript
  /**
   * Get the array of the language objects by the given codes.
   * Invalid codes will be filtered out.
   */
  getLanguages(codes: LanguageCode[]): Language[]

  /**
   * Get the language object by the given code
   */
  getLanguage(code: LanguageCode): Language | undefined

  /**
   * Get language english name by the code
   */
  getName(code: LanguageCode): LanguageName | undefined

  /**
   * Get language writing direction by the code
   */
  getDir(code: LanguageCode): LanguageDir | undefined

  /**
   * Get all languages english names
   */
  getAllNames(): LanguageName[]

  /**
   * Get language native name by the code
   */
  getNativeName(code: LanguageCode): LanguageNativeName | undefined

  /**
   * Get all languages native names
   */
  getAllNativeNames(): LanguageNativeName[]

  /**
   * Get code of a language by english name or native name
   */
  getCode(name: string): LanguageCode | undefined

  /**
   * Get all languages codes
   */
  getAllCodes(): LanguageCode[]

  /**
  * Validate if language exists by the code
  */
  validate(code: string): code is LanguageCode
```
