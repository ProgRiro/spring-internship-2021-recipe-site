import { Title } from "@/Presentation/components/atoms";
import { DefaultLayout } from "@/Presentation/components/templates";
import { Header, Footer } from "@/Presentation/components/organisms";

export const StarFolderPage: React.FC = ({ children }) => {
  return (
    <>
      <DefaultLayout>
        <Header />
        <Title color="black" fontSize="lg" isCenter>
          ✨ お気に入りレシピ ✨
        </Title>
        {children}
        <Footer />
      </DefaultLayout>
    </>
  );
};
