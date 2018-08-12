import { MangaInterface, MangaDetailInterface } from '../models/Manga'

export const transformManga = ({
  url,
  mal_id: id,
  image_url: imageUrl,
  title,
  publishing_start: publicationStartDate,
  score
}): MangaInterface => ({
  id,
  url,
  imageUrl,
  title,
  publicationStartDate,
  score
})

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
}): MangaDetailInterface => ({
  id,
  publicationStartDate,
  title,
  imageUrl,
  url,
  rank,
  score,
  images,
  synopsis,
  genres: genres.map(genre => genre.name),
  authors: authors.map(author => author.name)
})
