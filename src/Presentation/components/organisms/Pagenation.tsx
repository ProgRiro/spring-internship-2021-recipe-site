import { IconButton, LinkButton } from "@/Presentation/components/molecules";

interface Props {
  prevLink?: string;
  nextLink?: string;
}

export const Pagenation: React.FC<Props> = ({ prevLink, nextLink }) => {
  const getLink = (link?: string) => {
    if (!link) return "/";
    const url = new URL(link);
    return `/${url.search}`;
  };

  return (
    <>
      <div className="pagenation">
        <LinkButton to={getLink(prevLink)} isScroll={!!prevLink}>
          <IconButton
            className="pagenationButton"
            icon="angleLeft"
            color="black"
            bgColor="gray"
            size="lg"
            isDisabled={!prevLink}
          />
        </LinkButton>
        <LinkButton to={getLink(nextLink)} isScroll={!!nextLink}>
          <IconButton
            className="pagenationButton"
            icon="angleRight"
            color="black"
            bgColor="gray"
            size="lg"
            isDisabled={!nextLink}
          />
        </LinkButton>
      </div>
      <style jsx>
        {`
          .pagenation {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
          }
        `}
      </style>
    </>
  );
};
