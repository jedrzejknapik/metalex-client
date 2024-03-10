export enum CategoryTypes {
  GARAZE_I_BLASZAKI = "garaze-i-blaszaki",
  BLACHODACHOWKI = "blachodachowki",
  KLIMATYZACJA = "klimatyzacja",
  FOTOWOLTAIKA = "fotowoltaika",
}

export interface Category {
  id: CategoryTypes;
  name: string;
  imageRef: string;
  href: string;
}
