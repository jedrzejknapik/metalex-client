import type { Params } from "react-router-dom";

import { getSubCategories } from "@api/category";

import { CategoryTypes, SubCategoryData } from "@types";

export type CategoryLoaderProps = SubCategoryData;

interface CategoryLoaderParams {
  params: Params<"categoryId">;
}

export const categoryLoader = async ({ params }: CategoryLoaderParams) => {
  return await getSubCategories(params.categoryId as CategoryTypes);
};
