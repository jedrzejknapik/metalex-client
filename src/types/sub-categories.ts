import { CategoryTypes } from "@types";

export interface SubCategory {
  id: string;
  name: string;
  imageRef: string;
  href: string;
}

export type SubCategoryContent = SubCategory & {
  parentCategory: {
    title: string;
    name: CategoryTypes;
  };
};

export interface SubCategoryData {
  title: string;
  parentCaregory: CategoryTypes;
  categories: SubCategory[];
}
