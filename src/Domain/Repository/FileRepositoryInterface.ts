export type UploadImageRequest = {
  uploadUrl: string;
  file: File;
};

export type RequestForUploadImageResponse = {
  presigned_url: string;
  object_url: string;
};

export interface FileRepositoryInterface {
  requestForUploadImage: () => Promise<RequestForUploadImageResponse>;
  uploadImage: (uploadUrl: string, file: File) => Promise<void>;
}
