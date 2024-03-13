import { CategoryTypes, SubCategory } from "@types";
import { getSubCategoryContent } from "@mocks/sub-category";

export const getSubCategoryData = (
  id: string,
  parentCategory: CategoryTypes
): Promise<SubCategory | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getSubCategoryContent(id, parentCategory));
    }, 300);
  });
};
