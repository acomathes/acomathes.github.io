import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

interface Category {
  category: string;
  tagName: string;
}

const Category = (posts: CollectionEntry<"blog">[]) => {
  const categories: Category[] = posts
    .filter(postFilter)
    .flatMap(post => post.data.categories)
    .map(category => ({ category: slugifyStr(category), tagName: category }))
    .filter(
      (value, index, self) =>
        self.findIndex(category => category.category === value.category) === index
    )
    .sort((tagA, tagB) => tagA.category.localeCompare(tagB.category));
  return categories;
};

export default Category;
