export const NotFound = () => {
  return (
    <>
      <main className="container">
        <p>レシピが見つかりませんでした</p>
      </main>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 60vh;
        }
      `}</style>
    </>
  );
};
