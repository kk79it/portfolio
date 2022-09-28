import { ReactElement } from "react";
import Footer from "./footer";
import Header from "./header";
import SubMenu from "./SubMenu";

type Props = {
  children: ReactElement;
};

function Layout({ children }: Props) {
  return (
    <div className="relative">
      <div className="fixed bottom-0 right-0 z-50 pr-8 pb-8">
        <SubMenu />
      </div>
      <div className="fixed top-0 left-0 z-50 w-full">
        <Header />
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
