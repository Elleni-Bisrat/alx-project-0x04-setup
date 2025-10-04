import { LayoutProps } from "@/interface";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
