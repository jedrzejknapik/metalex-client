import type { BaseTranslation } from '../i18n-types.js';

const pl: BaseTranslation = {
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
    HEADING: 'Panel użytkownika',
  },
  USER_PROFILE: {
    PAGE_TITLE: 'Metalex - Profil użytkownika',
    HEADING: 'Profil użytkownika',
  },
  MENU_LIST: {
    PROFILE: 'Profil',
    DASHBOARD: 'Panel użytkownika',
  },
  ORDER_LIST: {
    HEADING: 'Lista zamówień',
    CREATE_ORDER: 'Stwórz zamówienie',
    HEADERS: {
      ORDER_NR: 'Nr zamówienia',
      CREATED: 'Utworzono',
      CUSTOMER: 'Klient',
      STATUS: 'Status',
      PRICE: 'Cena',
      OPTIONS: 'Opcje',
    },
  },
  STATUSES: {
    FULFILLED: 'Zakończone',
    UNFULFILLED: 'Nie ukończone',
    PENDING: 'W trakcie',
  },
  ORDER: {
    NEW_ORDER: {
      PAGE_TITLE: 'Metalex - Nowe zamówienie',
      HEADING: 'Nowe zamówienie',
      STEPS: {
        CHOOSE_PROFILE: 'Profil',
        FILL_THE_FORM: 'Formularz',
        SUMMARY: 'Podsumowanie',
      },
      CHOOSE_PROFILE: {
        NEXT: 'Przejdź do konfiguracji',
      },
      FILL_THE_FORM: {
        NEXT: 'Przejdź do podsumowania',
        PREVIOUS: 'Powrót do wyboru profilu',
        FIELDS: {
          ORDER_NR: {
            LABEL: 'Numer zamówienia',
            VALIDATION: {
              REQUIRED: 'Numer zamówienia jest obowiązkowy',
            },
          },
          DATE: {
            LABEL: 'Data zamówienia',
            PLACEHOLDER: 'Wybierz datę zamówienia',
            VALIDATION: {
              REQUIRED: 'Data zamówienia jest obowiązkowa',
            },
          },
          CUSTOMER: {
            LABEL: 'Klient',
            VALIDATION: {
              REQUIRED: 'Klient jest obowiązkowy',
            },
          },
          PRICE: {
            LABEL: 'Cena',
            VALIDATION: {
              REQUIRED: 'Cena jest wymagana',
            },
          },
          PRODUCT_QUANTITY: {
            LABEL: 'Ilość produktów',
            VALIDATION: {
              REQUIRED: 'Ilość jest wymanaga',
            },
          },
          POSITIONS: {
            HEADING: 'Pozycje',
            FIELDS: {
              THICKNESS: {
                LABEL: 'Grubość',
                VALIDATION: {
                  REQUIRED: 'Grubość jest wymagana',
                },
              },
              WIDTH: {
                LABEL: 'Szerokość',
                VALIDATION: {
                  REQUIRED: 'Szerokość jest wymagana',
                },
              },
              COLOR: {
                LABEL: 'Kolor',
                VALIDATION: {
                  REQUIRED: 'Kolor jest wymagany',
                },
              },
              MATERIAL: {
                LABEL: 'Materiał',
                VALIDATION: {
                  REQUIRED: 'Materiał jest wymagany',
                },
              },
              ROLL: {
                LABEL: 'Rolka',
                VALIDATION: {
                  REQUIRED: 'Rolka jest wymagana',
                },
              },
              GLOSSY: {
                LABEL: 'Połysk',
              },
              DOUBLE_SIDED: {
                LABEL: 'Z obudwu stron',
              },
              FIRST_CLASS: {
                LABEL: 'Pierwszej klasy',
              },
              SHEETS: {
                HEADING: 'Arkusze',
                FIELDS: {
                  QUANTITY: {
                    LABEL: 'Ilość',
                    VALIDATION: {
                      REQUIRED: 'Ilość jest wymagana',
                    },
                    ADDON_AFTER_MESSAGE: 'sztuk',
                  },
                  METERS: {
                    LABEL: 'Metry',
                    VALIDATION: {
                      REQUIRED: 'Długość jest wymagana',
                    },
                    ADDON_AFTER_MESSAGE: 'metrów',
                  },
                  IS_FOILED: {
                    LABEL: 'Foliowany?',
                  },
                },
              },
            },
          },
        },
      },
      SUMMARY: {
        HEADING: 'Podsumowanie',
        SUBMIT: 'Utwórz zamówienie',
        PREVIOUS: 'Powrót do formularza',
        COMMON_INFORMATION: 'Informacje ogólne',
        FIELDS: {
          CUSTOMER: {
            LABEL: 'Klient:',
          },
          ORDER_NR: {
            LABEL: 'Numer zamówienia:',
          },
          PROFILE: {
            LABEL: 'Typ profilu:',
          },
          DATE: {
            LABEL: 'Data zamówienia:',
          },
          PRICE: {
            LABEL: 'Cena:',
          },
          PRODUCT_QUANTITY: {
            LABEL: 'Ilość produktów:',
          },
          POSITIONS: {
            LABEL: 'Pozycje w zamówieniu:',
            POSITION_NUMBER: 'Pozycja nr {positionNr}',
            FIELDS: {
              COLOR: {
                LABEL: 'Wybrany kolor:',
              },
              DOUBLE_SIDED: {
                LABEL: 'Czy obu stronny:',
              },
              FIRST_CLASS: {
                LABEL: 'Pierwszej klasy: (?)',
              },
              GLOSSY: {
                LABEL: 'Czy z połyskiem:',
              },
              MATERIAL: {
                LABEL: 'Wybrany materiał:',
              },
              ROLL: {
                LABEL: 'Wybrana rolka:',
              },
              THICKNESS: {
                LABEL: 'Grubość:',
              },
              WIDTH: {
                LABEL: 'Szerokość:',
              },
              SHEETS: {
                LABEL: 'Arkusze',
                FIELDS: {
                  FOILED: {
                    LABEL: 'Foliowany:',
                  },
                  METERS: {
                    LABEL: 'Długość:',
                  },
                  QUANTITY: {
                    LABEL: 'Ilość:',
                  },
                },
              },
            },
          },
        },
        RESPONSE: {
          SUCCESS: 'Pomyślnie utworzono zamówienie',
          FAILED: 'Nie udało się stworzyć zamówienia',
        },
      },
    },
    VIEW_ORDER: {
      PAGE_TITLE: 'Metalex - Podgląd zamówienia nr {orderNr}',
      HEADING: 'Podgląd zamówienia nr {orderNr}',
    },
  },
  COMMONS: {
    YES: 'Tak',
    NO: 'Nie',
  },
} satisfies BaseTranslation;

export default pl;
