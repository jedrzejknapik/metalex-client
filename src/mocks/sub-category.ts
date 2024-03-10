import { v4 as uuidv4 } from "uuid";
import { CategoryTypes, SubCategoryData } from "@types";

export const getSubCategoryData = (
  parentCategory: CategoryTypes
): SubCategoryData | null => {
  if (parentCategory === CategoryTypes.FOTOWOLTAIKA) {
    return FOTOWOLTAIKA_MOCKED_SUBCATEGORIES;
  }
  if (parentCategory === CategoryTypes.BLACHODACHOWKI) {
    return BLACHODACHOWKI_MOCKED_SUBCATEGORIES;
  }
  if (parentCategory === CategoryTypes.GARAZE_I_BLASZAKI) {
    return GARAZE_I_BLASZAKI_MOCKED_SUBCATEGORIES;
  }
  if (parentCategory === CategoryTypes.KLIMATYZACJA) {
    return KLIMATYZACJA_MOCKED_SUBCATEGORIES;
  }

  return null;
};

export const FOTOWOLTAIKA_MOCKED_SUBCATEGORIES: SubCategoryData = {
  parentCaregory: CategoryTypes.FOTOWOLTAIKA,
  title: "Fotowoltaika",
  categories: [
    {
      id: uuidv4(),
      imageRef:
        "https://www.blachymetalex.pl/uploads/products/106/317/a5e27d9343e28e2b3fe645420e996cd7.jpg",
      href: "/new-order/fotowoltaika/instalacje-naziemne",
      name: "Instalacje naziemne",
    },
  ],
};

export const KLIMATYZACJA_MOCKED_SUBCATEGORIES: SubCategoryData = {
  parentCaregory: CategoryTypes.KLIMATYZACJA,
  title: "Klimatyzacja",
  categories: [
    {
      id: uuidv4(),
      imageRef:
        "https://www.blachymetalex.pl/uploads/products/106/317/a5e27d9343e28e2b3fe645420e996cd7.jpg",
      href: "/new-order/fotowoltaika/test",
      name: "TEST",
    },
  ],
};

export const BLACHODACHOWKI_MOCKED_SUBCATEGORIES: SubCategoryData = {
  parentCaregory: CategoryTypes.BLACHODACHOWKI,
  title: "Blachodachówki",
  categories: [
    {
      id: uuidv4(),
      imageRef:
        "https://www.blachymetalex.pl/uploads/products/76/252/94a4c75059e438d5e3bfee472bcddd34.jpg",
      href: "/new-order/blachodachowki/blachodachowka-finska",
      name: "Blachodachówka Fińska",
    },
    {
      id: uuidv4(),
      imageRef:
        "https://www.blachymetalex.pl/uploads/products/79/257/b9e22352f06162ac045f7e30dbcff265.jpg",
      href: "/new-order/blachodachowki/blachodachowka-revers",
      name: "Blachodachówka Revers",
    },
    {
      id: uuidv4(),
      imageRef:
        "https://www.blachymetalex.pl/uploads/products/78/256/38bcc13090cdb46f61e9ba0964e0d65c.jpg",
      href: "/new-order/blachodachowki/blachodachowka-scandia",
      name: "Blachodachówka Scandia",
    },
    {
      id: uuidv4(),
      imageRef:
        "https://www.blachymetalex.pl/uploads/products/77/254/831a40adc233de7812e519b009b03f21.jpg",
      href: "/new-order/blachodachowki/blachodachowka-wiktoria",
      name: "Blachodachówka Wiktoria",
    },
  ],
};

export const GARAZE_I_BLASZAKI_MOCKED_SUBCATEGORIES: SubCategoryData = {
  parentCaregory: CategoryTypes.GARAZE_I_BLASZAKI,
  title: "Garaże i blaszaki",
  categories: [
    {
      id: uuidv4(),
      imageRef:
        "https://www.blachymetalex.pl/uploads/products/95/290/ddfc7fb25bbc7a5a84a29a925a8b8046.jpg",
      href: "/new-order/garaze-i-blaszaki/garaze-i-blaszaki",
      name: "Garaże i blaszaki",
    },
  ],
};
