import { DefaultLayout } from "@/Presentation/components/templates";
import { Header, Footer } from "@/Presentation/components/organisms";

export const PosterViewPage: React.FC = ({ children }) => {
  return (
    <>
      <DefaultLayout>
        <Header />
        {children}
        <Footer />
      </DefaultLayout>
    </>
  );
};
