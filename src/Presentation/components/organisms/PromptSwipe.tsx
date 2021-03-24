import { IconWithText } from "@/Presentation/components/molecules";

export const PromptSwipe = () => {
  return (
    <>
      <div className="promptSwipe">
        <IconWithText icon="angleLeft" iconSize="lg" fontSize="sm">
          前のレシピ
        </IconWithText>
        <span>Swipe</span>
        <IconWithText icon="angleRight" iconSize="lg" fontSize="sm">
          次のレシピ
        </IconWithText>
      </div>
      <style jsx>
        {`
          .promptSwipe {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 90%;
            margin: 20px auto;
          }
        `}
      </style>
    </>
  );
};
