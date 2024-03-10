import { Category, CategoryTypes } from "@types";
import { MOCKED_CATEGORIES } from "@mocks/categories";
import { getSubCategoryData } from "@mocks/sub-category";

export const getCategories = (): Promise<Category[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCKED_CATEGORIES);
    }, 300);
  });
};

export const getSubCategory = (parentCategory: CategoryTypes) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getSubCategoryData(parentCategory));
    }, 300);
  });
};
