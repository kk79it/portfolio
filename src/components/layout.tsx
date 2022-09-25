import { ReactElement } from "react";
import Header from "./header";

type Props = {
  children: ReactElement;
};

function Layout({ children }: Props) {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full">
        <Header />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
