import { Resource, ResourceKey, ResourceLanguage } from 'i18next';

export type Translation = Record<string, unknown>;
export type Translations = Record<string, Translation>;

const toLanguage = ([key, value]: [string, ResourceKey]): [string, ResourceLanguage] => [
  key,
  {
    translation: value,
  },
];

const mergeTranslations = (translationsList: Translations[]): Translations =>
  translationsList
    .flatMap(translations => Object.entries(translations))
    .reduce(
      (acc, [key, translation]) => ({
        ...acc,
        [key]: acc[key] ? { ...acc[key], ...translation } : translation,
      }),
      {} as Translations
    );

export const toTranslationResources = (...translationsList: Translations[]): Resource =>
  Object.entries(mergeTranslations(translationsList))
    .map(toLanguage)
    .reduce(
      (acc, current) => ({
        ...acc,
        [current[0]]: current[1],
      }),
      {}
    );
