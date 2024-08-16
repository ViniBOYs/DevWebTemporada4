import { createI18n } from "vue-i18n";
import PtBrTranslations from './pt_br.json';
import enTranslations from './en.json';

export type AvailableLangueges = 
    'en' | 'br';

export const i18nApplication = createI18n({
    legacy: false,
    locale: 'en',
    messages: {
        en: enTranslations,
        br: PtBrTranslations
    }
});

export const changeLanguage = (locale: AvailableLangueges)=>{
    i18nApplication.global.locale.value = locale;
}