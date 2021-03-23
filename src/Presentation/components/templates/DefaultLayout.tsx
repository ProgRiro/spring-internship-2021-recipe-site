interface Props {
  title?: string;
}

export const DefaultLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="container">
      {children}
      <style jsx>{`
        .container {
          width: 326px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};
