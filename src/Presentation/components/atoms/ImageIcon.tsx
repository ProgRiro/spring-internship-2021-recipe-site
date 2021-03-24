export const config = { amp: "hybrid" };

import { useAmp } from "next/amp";
import { Img } from "@/Presentation/components/atoms";

interface Props {
  imageSrc: string;
}

export const ImageIcon: React.FC<Props> = ({ imageSrc }) => {
  const isAmp = useAmp();
  return (
    <div>
      {isAmp ? (
        <amp-img className="img" src={imageSrc} height={35} width={35} />
      ) : (
        <Img className="ImgeIcon" imageSrc={imageSrc} />
      )}
    </div>
  );
};
