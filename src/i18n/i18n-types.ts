// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type {
  BaseTranslation as BaseTranslationType,
  LocalizedString,
} from 'typesafe-i18n';

export type BaseTranslation = BaseTranslationType;
export type BaseLocale = 'pl';

export type Locales = 'pl';

export type Translation = RootTranslation;

export type Translations = RootTranslation;

type RootTranslation = {
  SIGN_IN: {
    PAGE_TITLE: string;
    FORGOT_PASSWORD: string;
    FORM: {
      TITLE: string;
      USERNAME: {
        LABEL: string;
        VALIDATION: {
          REQUIRED: string;
        };
      };
      PASSWORD: {
        LABEL: string;
        VALIDATION: {
          REQUIRED: string;
        };
      };
      SUBMIT: string;
      RESPONSE: {
        SUCCESS: string;
        FAILED: string;
      };
    };
  };
  SIGN_OFF: {
    TITLE: string;
    RESPONSE: {
      SUCCESS: string;
      FAILED: string;
    };
  };
  FORGOT_PASSWORD: {
    PAGE_TITLE: string;
    SIGN_IN: string;
    FORM: {
      TITLE: string;
      USERNAME: {
        LABEL: string;
        VALIDATION: {
          REQUIRED: string;
        };
      };
      SUBMIT: string;
      RESPONSE: {
        SUCCESS: string;
        FAILED: string;
      };
    };
  };
  NOT_FOUND: {
    PAGE_TITLE: string;
    MESSAGE: string;
    BUTTON_MESSAGE: string;
  };
  DASHBOARD: {
    PAGE_TITLE: string;
    HEADING: string;
  };
  USER_PROFILE: {
    PAGE_TITLE: string;
    HEADING: string;
  };
  MENU_LIST: {
    PROFILE: string;
    DASHBOARD: string;
  };
};

export type TranslationFunctions = {
  SIGN_IN: {
    PAGE_TITLE: () => LocalizedString;
    FORGOT_PASSWORD: () => LocalizedString;
    FORM: {
      TITLE: () => LocalizedString;
      USERNAME: {
        LABEL: () => LocalizedString;
        VALIDATION: {
          REQUIRED: () => LocalizedString;
        };
      };
      PASSWORD: {
        LABEL: () => LocalizedString;
        VALIDATION: {
          REQUIRED: () => LocalizedString;
        };
      };
      SUBMIT: () => LocalizedString;
      RESPONSE: {
        SUCCESS: () => LocalizedString;
        FAILED: () => LocalizedString;
      };
    };
  };
  SIGN_OFF: {
    TITLE: () => LocalizedString;
    RESPONSE: {
      SUCCESS: () => LocalizedString;
      FAILED: () => LocalizedString;
    };
  };
  FORGOT_PASSWORD: {
    PAGE_TITLE: () => LocalizedString;
    SIGN_IN: () => LocalizedString;
    FORM: {
      TITLE: () => LocalizedString;
      USERNAME: {
        LABEL: () => LocalizedString;
        VALIDATION: {
          REQUIRED: () => LocalizedString;
        };
      };
      SUBMIT: () => LocalizedString;
      RESPONSE: {
        SUCCESS: () => LocalizedString;
        FAILED: () => LocalizedString;
      };
    };
  };
  NOT_FOUND: {
    PAGE_TITLE: () => LocalizedString;
    MESSAGE: () => LocalizedString;
    BUTTON_MESSAGE: () => LocalizedString;
  };
  DASHBOARD: {
    PAGE_TITLE: () => LocalizedString;
    HEADING: () => LocalizedString;
  };
  USER_PROFILE: {
    PAGE_TITLE: () => LocalizedString;
    HEADING: () => LocalizedString;
  };
  MENU_LIST: {
    PROFILE: () => LocalizedString;
    DASHBOARD: () => LocalizedString;
  };
};

export type Formatters = {};
