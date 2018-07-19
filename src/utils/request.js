const baseUrl = "https://kitsu.io/api/edge";

const headers = new Headers({
  Accept: "application/vnd.api+json",
  "Content-Type": "application/vnd.api+json"
});

class Request {
  static jsonFetch(path = "/") {
    return fetch(`${baseUrl}${path}`, headers)
      .then(response => response.json())
      .then(({ data }) => data);
  }

  getMangas() {
    return Request.jsonFetch("/manga");
  }

  getCharacters() {
    return Request.jsonFetch("/characters");
  }

  getCharacter(id) {
    return Request.jsonFetch(`/characters/${id}`);
  }
}

export default new Request();
