export interface RestClientInterface {
  get: <ResponseInterface>(path: string) => Promise<ResponseInterface>;
}
