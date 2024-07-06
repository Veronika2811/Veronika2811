import { englishDictionary } from './locales/en.js';
import { russianDictionary } from './locales/ru.js';

export const REGIONS = {
  EN: 'EN',
  RU: 'RU',
};

export const TRANSLATION_OBJ = {
  [REGIONS.EN]: englishDictionary,
  [REGIONS.RU]: russianDictionary,
};