import { transformManga, transformMangaDetail, transformImages } from './transformers'

// import { GENRE } from './constants'

class Request {
  constructor (baseUrl = 'https://api.jikan.moe/v3') {
    this.baseUrl = baseUrl
    this.exclusion = `genre=12&genre_exclude=0`
    // this.exclusion = `genres[]=${GENRE.HENTAI}&genres[]=${GENRE.YURI}&genres[]=${
    //   GENRE.YAOI
    // }&genres[]=${GENRE.SHOUNEN_AI}&genres[]=${GENRE.SHOUJO_AI}&genres[]=${GENRE.ECCHI}&genres[]=${
    //   GENRE.DOUJINSHI
    // }&genre_exclude=1`
  }

  jsonFetch (path = '/') {
    return fetch(`${this.baseUrl}${path}`).then(response => response.json())
  }

  async getTopMangas () {
    return (await this.jsonFetch('/top/manga')).top.map(transformManga)
  }

  async getManga (id) {
    return transformMangaDetail(await this.jsonFetch(`/manga/${id}`))
  }

  async getMangaPictures (id) {
    return transformImages((await this.jsonFetch(`/manga/${id}/pictures`)).pictures)
  }

  async searchMangas (query) {
    return (await this.jsonFetch(`/search/manga?q=${query}&${this.exclusion}`)).results.map(
      transformManga
    )
  }
}

export default new Request()
