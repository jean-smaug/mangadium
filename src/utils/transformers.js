export const transformTopManga = ({
  mal_id: id,
  rank,
  url,
  image_url: imageUrl,
  title,
  publishing_start: publicationStartDate,
  score
}) => ({
  id,
  rank,
  url,
  imageUrl,
  title,
  publicationStartDate,
  score
});
