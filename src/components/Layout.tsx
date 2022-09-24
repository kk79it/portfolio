import { ReactElement } from "react";
import Header from "./Header";

type Props = {
  children: ReactElement;
};

function Layout({ children }: Props) {
  return (
    <div className="min-h-screen">
      {/* サイドバーを無効化 */}
      {/* <div className="fixed top-0 left-0 z-50 w-full bg-white/75 md:hidden"> */}
      <div className="fixed top-0 left-0 z-50 w-full bg-white/75">
        <Header />
      </div>
      {/* サイドバーを無効化 */}
      {/* <div className="fixed top-0 left-0 hidden bg-white/75 md:block">
        <Sidebar />
      </div> */}
      {children}
    </div>
  );
}

export default Layout;
