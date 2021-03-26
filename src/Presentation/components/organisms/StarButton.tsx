import { useState, useMemo } from "react";
import { StarHandler } from "@/Presentation/handlers";
import { IconButton } from "@/Presentation/components/molecules";

interface Props {
  id: number;
}

const StarButton: React.FC<Props> = ({ id }) => {
  const { getIsStar, getStarIdNum, setStarId, deleteStarId } = StarHandler();
  const [isStar, setIsStar] = useState<boolean>(getIsStar(id));

  const starIdNum = useMemo(() => getStarIdNum(), [isStar]);

  const handleClick = () => {
    if (starIdNum >= 10) {
      alert("お気に入り登録できるのは10件までです");
      return;
    }
    if (isStar) deleteStarId(id);
    else setStarId(id);
    setIsStar(!isStar);
  };

  return (
    <>
      {isStar ? (
        <IconButton
          className="starButton"
          icon="star"
          color="yellow"
          bgColor="white"
          size="lg"
          onClick={handleClick}
        />
      ) : (
        <IconButton
          className="starButton"
          icon="star"
          color="gray"
          bgColor="white"
          size="lg"
          onClick={handleClick}
        />
      )}
    </>
  );
};

export default StarButton;
