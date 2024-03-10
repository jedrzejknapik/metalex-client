import type { Params } from "react-router-dom";

import { getSubCategory } from "@api/category";

import { CategoryTypes, SubCategoryData } from "@types";

export type CategoryLoaderProps = SubCategoryData;

interface CategoryLoaderParams {
  params: Params<"categoryId">;
}

export const categoryLoader = async ({ params }: CategoryLoaderParams) => {
  return await getSubCategory(params.categoryId as CategoryTypes);
};
