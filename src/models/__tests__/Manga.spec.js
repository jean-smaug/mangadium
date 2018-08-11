import { Manga } from '../Manga'

const fisrtManga = Manga.create({
  id: 43,
  rank: 1,
  score: 9.12,
  url: 'http://one-piece.fr',
  imageUrl: 'http://one-piece.jpg',
  title: 'One Piece',
  publicationStartDate: '13 aout 2016'
})

const secondManga = Manga.create({
  id: 43,
  rank: null,
  score: null,
  url: 'http://one-piece.fr',
  imageUrl: 'http://one-piece.jpg',
  title: 'One Piece',
  publicationStartDate: null
})

describe('<=== Manga ===>', () => {
  it('should create store', () => {
    expect(fisrtManga).toMatchSnapshot()
    expect(secondManga).toMatchSnapshot()
  })
})
