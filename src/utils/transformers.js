export const transformManga = ({
  mal_id: id,
  url,
  image_url: imageUrl,
  title,
  start_date: publicationStartDate,
  score
}) => ({
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
  url,
  image_url: imageUrl,
  title,
  published: { from: publicationStartDate },
  pictures: images,
  synopsis,
  score,
  genres,
  authors
}) => ({
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

export const transformImages = images => images.map(image => image.small)
