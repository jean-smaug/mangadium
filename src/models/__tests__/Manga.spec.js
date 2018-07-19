import { Manga } from "../Manga";

describe("<=== Manga ===>", () => {
  let manga = null;

  beforeEach(() => {
    manga = Manga.create({
      title: "One Piece",
      mangaType: { foo: "shonen" }
    });
  });

  it("should create store", () => {
    expect(manga).toMatchSnapshot();
  });
});
