import { number, string } from "prop-types";

export const Manga = {
  id: number.isRequired,
  rank: number.isRequired,
  score: number,
  url: string.isRequired,
  imageUrl: string.isRequired,
  title: string.isRequired,
  publicationStartDate: string.isRequired
};
