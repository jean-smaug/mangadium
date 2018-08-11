import { Manga } from "../Manga";

describe("<=== Search ===>", () => {
  let manga = null;

  beforeEach(() => {
    manga = Manga.create({
      id: 43,
      title: "One Piece",
      imageUrl: "http://one-piece.jpg",
      startDate: "13 aout 2016",
      endDate: null,
      url: "http://one-piece.fr",
      rank: 1,
      score: 9.12,
      type: "shonen"
    });
  });

  it("should create store", () => {
    expect(manga).toMatchSnapshot();
  });
});
