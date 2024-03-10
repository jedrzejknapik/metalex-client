import { getCategories } from "@api/category";
import { Category } from "@types";

export interface NewOrderLoaderProps {
  categories: Category[];
}

export const newOrderLoader = async () => {
  const categories = await getCategories();
  return { categories };
};
