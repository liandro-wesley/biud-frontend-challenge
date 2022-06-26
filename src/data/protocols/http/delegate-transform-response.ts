import { HttpResponse, HttpStatusCode } from ".";

class DelegateTransformResponse {
  public validate(httpResponse: HttpResponse) {
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok || HttpStatusCode.created:
        return httpResponse.body;
      default:
        throw new Error(httpResponse.body.message);
    }
  }
}

export default new DelegateTransformResponse();
