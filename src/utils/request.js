const baseUrl = "https://api.jikan.moe";

class Request {
  static jsonFetch(path = "/") {
    return fetch(`${baseUrl}${path}`).then(response => response.json());
  }

  async getTopMangas() {
    return (await Request.jsonFetch("/top/manga")).top;
  }

  async getManga(id) {
    return await Request.jsonFetch(`/manga/${id}`);
  }

  async searchMangas(query, page = 1) {
    return await Request.jsonFetch(`/search/manga?q=${query}&page=${page}`);
  }
}

export default new Request();
