import { DefaultLayout } from "@/Presentation/components/templates";
import { Header, Footer } from "@/Presentation/components/organisms";

const TopPage: React.FC = ({ children }) => {
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

export default TopPage;
