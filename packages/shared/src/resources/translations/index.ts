import { Translations } from '@wpro/magento/dist/types'
import enDefault from '@wpro/magento/dist/core/resources/translations/en.json'
import enTranslations from './en.json'

/**
 * Available translations
 * @type array
 */
export const translations: Translations = [
  {
    code: 'en',
    title: 'English',
    keys: {
      ...enDefault,
      ...enTranslations,
    },
    translationKey: 'locale.title.en',
  },
]
