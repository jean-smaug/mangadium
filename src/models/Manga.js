import { types, flow, applySnapshot } from "mobx-state-tree";

export const filterKeys = ({
  image_url: imageUrl,
  mal_id: id,
  publishing_end: endDate,
  publishing_start: startDate,
  rank,
  score,
  title,
  type,
  url
}) => ({
  id,
  endDate,
  startDate,
  title,
  imageUrl,
  url,
  rank,
  score,
  type
});

const Manga = types.model({
  id: types.number,
  title: types.string,
  imageUrl: types.string,
  startDate: types.string,
  endDate: types.maybeNull(types.string),
  url: types.string,
  rank: types.number,
  score: types.maybeNull(types.number),
  type: types.string,
  images: types.optional(types.array(types.string), [])
});

export default Manga;
