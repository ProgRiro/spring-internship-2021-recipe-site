import { RestClientInterface } from "./RestClientInterface";

export class RestClient implements RestClientInterface {
  async get<ResponseInterface>(path: string) {
    return await fetch(path, config).then<ResponseInterface>(
      async (response) => await response.json()
    );
  }

  async post<RequestInterface, ResponseInterface>(
    path: string,
    data?: RequestInterface
  ) {
    return await fetch(path, {
      method: "POST",
      body: data ? JSON.stringify(data) : null,
      ...config,
    }).then<ResponseInterface>(async (response) => await response.json());
  }

  async put(path: string, data: File) {
    return await fetch(path, {
      method: "PUT",
      body: data,
      headers: {
        "content-type": "image/jpeg",
      },
    });
  }

  async delete(path: string) {
    return await fetch(path, {
      method: "DELETE",
      headers: {
        "X-Api-Key": process.env.API_KEY as string,
      },
    }).then((responce) => responce.status);
  }
}

const config = {
  headers: {
    "X-Api-Key": process.env.API_KEY as string,
    "content-type": "application/json;charset=UTF-8",
  },
};

export const createRestClient = () => {
  return new RestClient();
};
