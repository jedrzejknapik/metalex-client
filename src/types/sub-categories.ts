import { CategoryTypes } from "@types";

export interface SubCategory {
  id: string;
  name: string;
  imageRef: string;
  href: string;
}

export interface SubCategoryData {
  title: string;
  parentCaregory: CategoryTypes;
  categories: SubCategory[];
}
