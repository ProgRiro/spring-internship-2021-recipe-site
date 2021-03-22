import { RestClientInterface } from "./RestClientInterface";

export class RestClient implements RestClientInterface {
  async get<ResponseInterface>(path: string) {
    return fetch(path, {
      headers: { "X-Api-Key": process.env.API_KEY as string },
    }).then<ResponseInterface>(async (response) => await response.json());
  }
}

export const createRestClient = () => {
  return new RestClient();
};
