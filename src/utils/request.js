const baseUrl = "https://kitsu.io/api/edge";

const headers = new Headers({
  Accept: "application/vnd.api+json",
  "Content-Type": "application/vnd.api+json"
});

class Request {
  static jsonFetch(path = "/") {
    return fetch(`${baseUrl}${path}`, headers).then(data => data.json());
  }

  getMangas() {
    return Request.jsonFetch("/manga");
  }
}

export default new Request();
