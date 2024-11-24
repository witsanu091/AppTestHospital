import { resources } from '../../assets/constants/textInApp';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'react-native-localize';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

const language = storage.getString('language') || Localization.getLocales()[0].languageCode;

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: language,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
