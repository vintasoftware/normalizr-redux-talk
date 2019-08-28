import { schema } from "normalizr";

export const ratingSchema = new schema.Entity('ratings');

export const mealSchema = new schema.Entity(
  'meals',
  {
    rating: ratingSchema
  }
);