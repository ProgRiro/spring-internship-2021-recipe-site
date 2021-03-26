import { SetStateAction, useState } from "react";
import imageCompression from "browser-image-compression";
import { useForm } from "react-hook-form";
import { Title } from "@/Presentation/components/atoms";
import { FileHandler } from "@/Presentation/handlers";
import { Colors } from "@/Library";

type fileInputType = {
  image: File[];
};

type ImageUrls = {
  presigned_url: string;
  object_url: string;
};

interface Props {
  setImageFile: React.Dispatch<SetStateAction<File | undefined>>;
  setImageUrls: React.Dispatch<SetStateAction<ImageUrls | undefined>>;
}

export const ImageForm: React.FC<Props> = ({ setImageFile, setImageUrls }) => {
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState<string>();
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const { requestForUploadImage, uploadImage } = FileHandler();

  const onSubmit = async (data: fileInputType) => {
    const { image } = data;
    if (!image[0].name) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("image", image[0]);

    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 1280,
      onProgress: (num: number) => setProgress(num),
      useWebWorker: true,
    };

    try {
      const compressImage = await imageCompression(image[0], options);
      const reader = new FileReader();
      reader.onload = (e) => setImage(String(e.target?.result));
      reader.readAsDataURL(compressImage);
      setImageFile(compressImage);
      const preResponse = await requestForUploadImage();
      await uploadImage({
        uploadUrl: preResponse.presigned_url,
        file: compressImage,
      });
      setImageUrls({
        presigned_url: preResponse.presigned_url,
        object_url: preResponse.object_url,
      });
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="imageForm">
        <Title color="black" fontSize="lg" isCenter>
          画像アップロード
        </Title>
        <input
          name="image"
          type="file"
          accept="image/*"
          ref={register({ required: false })}
          onChange={handleSubmit(onSubmit)}
        />
        {loading ? (
          <div className="loadingBox">
            <div className="bar" />
          </div>
        ) : (
          <img className="image" src={image} alt="" />
        )}
      </div>
      <style jsx>
        {`
          .imageForm {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 30px;
          }
          .image {
            width: 100%;
            margin-top: 20px;
            border-radius: 20px;
            border: solid 1px ${Colors.black};
          }
          .loadingBox {
            position: relative;
            width: 100%;
            height: 20px;
            background-color: ${Colors.white};
            overflow: hidden;
            border-radius: 10px;
            margin-top: 70px;
          }
          .bar {
            position: absolute;
            left: 0;
            top: 0;
            width: ${progress}%;
            height: 20px;
            background-color: ${Colors.green};
          }
        `}
      </style>
    </>
  );
};
