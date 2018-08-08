class Request {
  constructor(baseUrl = "https://api.jikan.moe") {
    this.baseUrl = baseUrl;
  }

  jsonFetch(path = "/") {
    return fetch(`${this.baseUrl}${path}`).then(response => response.json());
  }

  async getTopMangas() {
    return (await this.jsonFetch("/top/manga")).top;
  }

  async getManga(id) {
    return await this.jsonFetch(`/manga/${id}`);
  }

  async getMangaAndPicture(id) {
    return await this.jsonFetch(`/manga/${id}/pictures`);
  }

  async searchMangas(query, page = 1) {
    return await this.jsonFetch(`/search/manga?q=${query}&page=${page}`);
  }
}

export default new Request();
