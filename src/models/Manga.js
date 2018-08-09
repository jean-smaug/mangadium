import { types } from "mobx-state-tree";

export const filterKeys = ({
  image_url: imageUrl,
  mal_id: id,
  publishing_end: endDate,
  publishing_start: startDate,
  rank,
  score,
  title,
  type,
  url,
  synopsis
}) => ({
  id,
  endDate,
  startDate,
  title,
  imageUrl,
  url,
  rank,
  score,
  type,
  synopsis
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
  images: types.optional(types.array(types.string), []),
  synopsis: types.string
});

export default Manga;

const TheModel = types.model({
  id: types.identifierNumber,
  rank: types.number,
  url: types.string,
  imageUrl: types.string,
  title: types.string,
  publicationStartDate: types.string,
  score: types.number
});

const transform = ({
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

// const top = {
//   mal_id: 2,
//   rank: 1,
//   url: "https://myanimelist.net/manga/2/Berserk",
//   image_url:
//     "https://myanimelist.cdn-dena.com/r/100x140/images/manga/1/157931.jpg?s=d26f8d9f883999147ce30092309a73fd",
//   title: "Berserk",
//   type: "Manga",
//   score: 9.31,
//   members: 198510,
//   publishing_start: "Aug 1989",
//   publishing_end: null,
//   volumes: 0
// };

// const detail = {
//   request_hash: "cbd9584b3fffd7c0e3d5748a059c6eeeee1f07d6",
//   request_cached: true,
//   mal_id: 13,
//   link_canonical: "https://myanimelist.net/manga/13/One_Piece",
//   title: "One Piece",
//   title_english: "One Piece",
//   title_synonyms: null,
//   title_japanese: "ONE PIECE",
//   status: "Publishing",
//   image_url: "https://myanimelist.cdn-dena.com/images/manga/3/55539.jpg",
//   type: "Manga",
//   volumes: "Unknown",
//   chapters: "Unknown",
//   publishing: true,
//   published_string: "Jul  22, 1997 to ?",
//   published: {
//     from: "1997-07-22",
//     to: null
//   },
//   rank: 6,
//   score: 9.03,
//   scored_by: 129265,
//   popularity: 3,
//   members: 215138,
//   favorites: 50838,
//   synopsis:
//     'Gol D. Roger, a man referred to as the "Pirate King," is set to be executed by the World Government. But just before his demise, he confirms the existence of a great treasure, One Piece, located somewhere within the vast ocean known as the Grand Line. Announcing that One Piece can be claimed by anyone worthy enough to reach it, the Pirate King is executed and the Great Age of Pirates begins. Twenty-two years later, a young man by the name of Monkey D. Luffy is ready to embark on his own adventure, searching for One Piece and striving to become the new Pirate King. Armed with just a straw hat, a small boat, and an elastic body, he sets out on a fantastic journey to gather his own crew and a worthy ship that will take them across the Grand Line to claim the greatest status on the high seas. [Written by MAL Rewrite]',
//   background:
//     "One Piece is the highest selling manga series of all time, with over 430 million copies in circulation as of 2017. Volume 67 of the series currently holds the record for highest first print run of any manga (including books) of all time in Japan, with 4.05 million in 2012. The series was a finalist for the Tezuka Osamu Cultural Prize three times in a row from 2000 to 2002. In 2012, it won the 41st Japan Cartoonists Association Award Grand Prize, alongside Kimuchi Yokoyama&#039;s Neko Darake.VIZ Media has published One Piece in English under the Shonen Jump imprint since January 2, 2003 and in 3-in-1 omnibus editions since December 1, 2009. VIZ Media released three boxed sets for the manga; the first including the first 23 volumes released on November 5, 2013, the second including volumes 24-46 released on November 4, 2014, and the third including volumes 47-70 released on October 4, 2016. The series has also been published in numerous amounts of languages worldwide including; Korean, Malay, Indonesian, Chinese, Thai, Vietnamese, German, French, Italian, Spanish, Portuguese, Swedish, Danish, Norwegian, Finnish, Polish, and Russian. ",
//     "Side story": [
//       {
//         mal_id: 17152,
//         type: "manga",
//         url: "https://myanimelist.net/manga/17152/One_Piece__Strong_World",
//         title: "One Piece: Strong World"
//       },
//       {
//         mal_id: 14414,
//         type: "manga",
//         url: "https://myanimelist.net/manga/14414/One_Piece_Log_Book_Omake",
//         title: "One Piece Log Book Omake"
//       },
//       {
//         mal_id: 94533,
//         type: "manga",
//         url:
//           "https://myanimelist.net/manga/94533/One_Piece__Taose_Kaizoku_Ganzack",
//         title: "One Piece: Taose! Kaizoku Ganzack"
//       },
//       {
//         mal_id: 94534,
//         type: "manga",
//         url: "https://myanimelist.net/manga/94534/One_Piece__Loguetown-hen",
//         title: "One Piece: Loguetown-hen"
//       }
//     ],
//     "Spin-off": [
//       {
//         mal_id: 52353,
//         type: "manga",
//         url: "https://myanimelist.net/manga/52353/Chopperman",
//         title: "Chopperman"
//       },
//       {
//         mal_id: 23251,
//         type: "manga",
//         url:
//           "https://myanimelist.net/manga/23251/Chopperman__Yuke_Yuke_Minna_no_Chopper-sensei",
//         title: "Chopperman: Yuke Yuke! Minna no Chopper-sensei"
//       },
//       {
//         mal_id: 86972,
//         type: "manga",
//         url: "https://myanimelist.net/manga/86972/One_Piece_Party",
//         title: "One Piece Party"
//       }
//     ],
//     Adaptation: [
//       {
//         mal_id: 21,
//         type: "anime",
//         url: "https://myanimelist.net/anime/21/One_Piece",
//         title: "One Piece"
//       }
//     ]
//   },
//   genre: [
//     {
//       url: "https://myanimelist.net/manga/genre/1/Action",
//       name: "Action"
//     },
//     {
//       url: "https://myanimelist.net/manga/genre/2/Adventure",
//       name: "Adventure"
//     },
//     {
//       url: "https://myanimelist.net/manga/genre/4/Comedy",
//       name: "Comedy"
//     },
//     {
//       url: "https://myanimelist.net/manga/genre/10/Fantasy",
//       name: "Fantasy"
//     },
//     {
//       url: "https://myanimelist.net/manga/genre/27/Shounen",
//       name: "Shounen"
//     },
//     {
//       url: "https://myanimelist.net/manga/genre/31/Super_Power",
//       name: "Super Power"
//     }
//   ],
//   author: [
//     {
//       url: "https://myanimelist.net/people/1881/Eiichiro_Oda",
//       name: "Oda, Eiichiro"
//     }
//   ],
//   serialization: [
//     {
//       url: "https://myanimelist.net/manga/magazine/83/Shounen_Jump_Weekly",
//       name: "Shounen Jump (Weekly)"
//     }
//   ],
//   image: [
//     "https://myanimelist.cdn-dena.com/images/manga/3/55539.jpg",
//     "https://myanimelist.cdn-dena.com/images/manga/2/55543.jpg",
//     "https://myanimelist.cdn-dena.com/images/manga/2/55545.jpg",
//     "https://myanimelist.cdn-dena.com/images/manga/2/55551.jpg",
//     "https://myanimelist.cdn-dena.com/images/manga/1/55553.jpg",
//     "https://myanimelist.cdn-dena.com/images/manga/2/59409.jpg",
//     "https://myanimelist.cdn-dena.com/images/manga/3/88931.jpg",
//     "https://myanimelist.cdn-dena.com/images/manga/2/156515.jpg",
//     "https://myanimelist.cdn-dena.com/images/manga/1/174711.jpg",
//     "https://myanimelist.cdn-dena.com/images/manga/3/192143.jpg",
//     "https://myanimelist.cdn-dena.com/images/manga/1/192144.jpg",
//     "https://myanimelist.cdn-dena.com/images/manga/5/192145.jpg",
//     "https://myanimelist.cdn-dena.com/images/manga/3/193157.jpg",
//     "https://myanimelist.cdn-dena.com/images/manga/3/203012.jpg"
//   ]
// }
