const baseUrl = "https://api.jikan.moe";

class Request {
  static jsonFetch(path = "/") {
    return fetch(`${baseUrl}${path}`).then(response => response.json());
  }

  async getTopAnimes() {
    return (await Request.jsonFetch("/top/anime")).top;
  }

  async getTopMangas() {
    return (await Request.jsonFetch("/top/manga")).top;
  }
}

export default new Request();
