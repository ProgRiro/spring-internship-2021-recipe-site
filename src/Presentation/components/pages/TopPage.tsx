import { DefaultLayout } from "@/Presentation/components/templates";
import { Header, Footer } from "@/Presentation/components/organisms";

export const TopPage: React.FC = ({ children }) => {
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
