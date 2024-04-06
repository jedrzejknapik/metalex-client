import type { BaseTranslation, Translations } from '../i18n-types.js';

const pl: Translations = {
  SIGN_IN: {
    PAGE_TITLE: 'Metalex - Zaloguj się',
    FORGOT_PASSWORD: 'Zapomniałeś hasła?',
    FORM: {
      TITLE: 'Zaloguj się do panelu użytkownika',
      USERNAME: {
        LABEL: 'Nazwa użytkownika',
        VALIDATION: {
          REQUIRED: 'Nazwa użytkownika jest wymagana',
        },
      },
      PASSWORD: {
        LABEL: 'Hasło',
        VALIDATION: {
          REQUIRED: 'Hasło jest wymagane',
        },
      },
      SUBMIT: 'Zaloguj się',
      RESPONSE: {
        SUCCESS: 'Pomyślnie zalogowano',
        FAILED: 'Błędny login lub hasło',
      },
    },
  },
  SIGN_OFF: {
    TITLE: 'Wyloguj',
    RESPONSE: {
      SUCCESS: 'Pomyślnie wylogowano',
      FAILED: 'Nie udało się wylogować',
    },
  },
  FORGOT_PASSWORD: {
    PAGE_TITLE: 'Metalex - Zresetuj hasło',
    SIGN_IN: 'Jednak pamiętam hasło',
    FORM: {
      TITLE: 'Zresetuj hasło',
      USERNAME: {
        LABEL: 'Nazwa użytkownika',
        VALIDATION: {
          REQUIRED: 'Nazwa użytkownika jest wymagana',
        },
      },
      SUBMIT: 'Zresetuj hasło',
      RESPONSE: {
        SUCCESS: '<UPDATE PASSWORD SUCCESS>',
        FAILED: '<UPDATE PASSWORD FAILED>',
      },
    },
  },
  NOT_FOUND: {
    PAGE_TITLE: 'Metalex - Strona nie istnieje',
    MESSAGE: 'Strona której szukasz nie istnieje',
    BUTTON_MESSAGE: 'Powrót',
  },
  DASHBOARD: {
    PAGE_TITLE: 'Metalex - Panel użytkownika',
  },
  USER_PROFILE: {
    PAGE_TITLE: 'Metalex - Profil użytkownika',
  },
} satisfies BaseTranslation;

export default pl;
