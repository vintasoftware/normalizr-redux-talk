import { schema } from "normalizr";

const ratingSchema = new schema.Entity('ratings');

const categorySchema = new schema.Entity('categories');

export const mealSchema = new schema.Entity(
  'meals',
  {
    rating: ratingSchema,
    categories: [categorySchema]
  }
);