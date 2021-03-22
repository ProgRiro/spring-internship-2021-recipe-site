import { RestClientInterface } from "./RestClientInterface";

export class MockRestClient implements RestClientInterface {
  async get<ResponseInterface>(path: string) {
    return fetch(path, {
      headers: { "X-Api-Key": "remark-fish-magician" },
    }).then<ResponseInterface>(async (response) => await response.json());
  }
}

export const createRestClient = () => {
  return new MockRestClient();
};
