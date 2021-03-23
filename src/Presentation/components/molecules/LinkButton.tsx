import Link from "next/link";

interface Props {
  to: string;
  isScroll?: boolean;
}

export const LinkButton: React.FC<Props> = ({
  to,
  isScroll = true,
  children,
}) => {
  return (
    <Link href={to} scroll={isScroll}>
      <a rel="noopener">{children}</a>
    </Link>
  );
};
