import type { Params } from "react-router-dom";

import { getSubCategoryData } from "@api/sub-category";
import { CategoryTypes, SubCategoryContent } from "@types";

interface SubCategoryLoaderParams {
  params: Params<"subCategoryId" | "categoryId">;
}

export type SubCategoryLoaderProps = SubCategoryContent;

export const subCategoryLoader = async ({
  params,
}: SubCategoryLoaderParams) => {
  return await getSubCategoryData(
    params.subCategoryId as string,
    params.categoryId as CategoryTypes
  );
};
