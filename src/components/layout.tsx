import { ReactElement } from "react";
import Header from "./header";

type Props = {
  children: ReactElement;
};

function Layout({ children }: Props) {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 z-50 w-full">
        <Header />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
