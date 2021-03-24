import { StarHandler } from "@/Presentation/handlers";
import { IconButton, LinkButton } from "@/Presentation/components/molecules";

const StarFolderButton = () => {
  const { getFormattedStarIds } = StarHandler();

  const getParams = () => {
    const ids = getFormattedStarIds();
    if (ids.length === 0) return "/star";
    const params = new URLSearchParams();
    params.append("id", ids);
    return `/star?${params.toString()}`;
  };

  return (
    <>
      <div className="container">
        <LinkButton to={getParams()}>
          <IconButton
            className="starButton"
            icon="folder"
            color="white"
            bgColor="yellow"
            size="lg"
          />
        </LinkButton>
      </div>
      <style jsx>
        {`
          .container {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 150px;
            width: 100%;
            z-index: 99;
            background: linear-gradient(
              rgba(242, 239, 228, 0) 20%,
              rgba(242, 239, 228, 0.8) 50%,
              rgba(242, 239, 228, 1) 80%
            );
          }
        `}
      </style>
    </>
  );
};

export default StarFolderButton;
