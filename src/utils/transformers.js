import { convertSpecialCharsToText } from "./string";

export const transformManga = ({
  mal_id: id,
  url,
  image_url: imageUrl,
  title,
  publishing_start: publicationStartDate,
  score
}) => ({
  id,
  url,
  imageUrl,
  title,
  publicationStartDate,
  score
});

export const transformMangaDetail = ({
  mal_id: id,
  rank,
  link_canonical: url,
  image_url: imageUrl,
  title,
  published: { from: publicationStartDate },
  image: images,
  synopsis,
  score,
  genre: genres,
  author: authors
}) => ({
  id,
  publicationStartDate,
  title,
  imageUrl,
  url,
  rank,
  score,
  images,
  synopsis: convertSpecialCharsToText(synopsis),
  genres: genres.map(genre => genre.name),
  authors: authors.map(author => author.name)
});
