
import LANGUAGES_LIST, { Language, LanguageCode, LanguageDir, LanguageName, LanguageNativeName } from './data';

export default class ISO6391 {
  /**
   * Get the array of the language objects by the given codes.
   * Invalid codes will be filtered out.
   */
  static getLanguages(codes: LanguageCode[]) {
    return Object.entries(LANGUAGES_LIST).filter(([code, lang]) => codes.includes(code.toLowerCase() as LanguageCode)).map(([code, lang]) => ({ code: code, ...lang }));
  }

  /**
   * Get the language object by the given code
   */
  static getLanguage(code: LanguageCode) {
    code = code.toLowerCase() as LanguageCode;
    return ISO6391.validate(code) ? { ...LANGUAGES_LIST[code], code } : undefined
  }


  /**
   * Get language english name by the code
   */
  static getName(code: LanguageCode): LanguageName | undefined {
    code = code.toLowerCase() as LanguageCode;
    return ISO6391.validate(code) ? LANGUAGES_LIST[code].name : undefined;
  }

  /**
   * Get language english name by the code
   */
  static getDir(code: LanguageCode): LanguageDir | undefined {
    code = code.toLowerCase() as LanguageCode;
    return ISO6391.validate(code) ? LANGUAGES_LIST[code].dir : undefined;
  }

  /**
   * Get all languages english names
   */
  static getAllNames(): LanguageName[] {
    return Object.values(LANGUAGES_LIST).map(l => l.name);
  }

  /**
   * Get language native name by the code
   */
  static getNativeName(code: LanguageCode): LanguageNativeName | undefined {
    code = code.toLowerCase() as LanguageCode;
    return ISO6391.validate(code) ? LANGUAGES_LIST[code].nativeName : undefined;
  }

  /**
   * Get all languages native names
   */
  static getAllNativeNames() {
    return Object.values(LANGUAGES_LIST).map(l => l.nativeName);
  }

  /**
   * Get code of a language by english name or native name
   */
  static getCode(name: string): LanguageCode | undefined {
    name = name.toLowerCase();
    const code = Object.entries(LANGUAGES_LIST)?.find(([code, language]) => {
      return (
        language.name.toLowerCase() === name ||
        language.nativeName.toLowerCase() === name
      );
    })?.[0] as LanguageCode;
    return code;
  }

  /**
   * Get all languages codes
   */
  static getAllCodes(): LanguageCode[] {
    return Object.keys(LANGUAGES_LIST) as LanguageCode[];
  }

  /**
  * Validate if language exists by the code
  */
  static validate(code: string): code is LanguageCode {
    code = code.toLowerCase();
    return LANGUAGES_LIST.hasOwnProperty(code);
  }
}
