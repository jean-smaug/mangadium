import { transformManga, transformMangaDetail } from './transformers'

import { GENRE } from './constants'

class Request {
  constructor (baseUrl = 'https://api.jikan.moe') {
    this.baseUrl = baseUrl
    this.exclusion = encodeURI(
      `genre[]=${GENRE.HENTAI}&genre[]=${GENRE.YURI}&genre[]=${GENRE.YAOI}&genre[]=${
        GENRE.GENDER_BENDER
      }&genre[]=${GENRE.SHOUNEN_AI}&genre[]=${GENRE.SHOUJO_AI}&genre[]=${GENRE.ECCHI}&genre[]=${
        GENRE.DOUJINSHI
      }&genre_exclude=1`
    )
  }

  jsonFetch (path = '/') {
    return fetch(`${this.baseUrl}${path}`).then(response => response.json())
  }

  async getTopMangas () {
    return (await this.jsonFetch('/top/manga')).top.map(transformManga)
  }

  async getMangaAndPictures (id) {
    return transformMangaDetail(await this.jsonFetch(`/manga/${id}/pictures`))
  }

  async searchMangas (query, page = 1) {
    return (await this.jsonFetch(
      `/search/manga?q=${query}&${this.exclusion}&page=${page}`
    )).result.map(transformManga)
  }
}

export default new Request()
