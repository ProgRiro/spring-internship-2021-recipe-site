import { createFileRepository } from "@/Infrastructure";
import { UploadImageRequest } from "@/Domain/Repository";

export const FileHandler = () => {
  const reciptClient = createFileRepository();

  const requestForUploadImage = async () =>
    await reciptClient.requestForUploadImage();

  const uploadImage = async (params: UploadImageRequest) =>
    await reciptClient.uploadImage(params.uploadUrl, params.file);

  return {
    requestForUploadImage,
    uploadImage,
  };
};
