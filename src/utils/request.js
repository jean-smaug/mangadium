const baseUrl = "https://kitsu.io/api/edge";
const applicationId = "7159d405";
const applicationKey = "c6bb47a8b0aa60259fd708347d693164";

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

  get() {
    return fetch(
      `https://api.edamam.com/search?app_id=${applicationId}&app_key=${applicationKey}&q=chicken&from=0&to=3&calories=591-722&health=alcohol-free`
    )
      .then(response => response.json())
      .then(data => data.hits);
  }
}

export default new Request();
