import { createRestClient } from "./utils";
import {
  FileRepositoryInterface,
  RequestForUploadImageResponse,
} from "@/Domain/Repository";

export class FileRepository implements FileRepositoryInterface {
  private readonly restClient;
  constructor() {
    this.restClient = createRestClient();
  }

  public async requestForUploadImage() {
    const response = await this.restClient.post<
      null,
      RequestForUploadImageResponse
    >("https://internship-recipe-api.ckpd.co/image_urls");
    return response;
  }

  public async uploadImage(uploadUrl: string, file: File) {
    await this.restClient.put(uploadUrl, file);
  }
}

export const createFileRepository = () => {
  return new FileRepository();
};
