import { ReactElement } from "react";
import Header from "./header";

type Props = {
  children: ReactElement;
};

function Layout({ children }: Props) {
  return (
    <div className="min-h-screen">
      {/* サイドバーを無効化 */}
      {/* <div className="fixed top-0 left-0 z-50 w-full bg-white/75 md:hidden"> */}
      <div className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-white/75 to-white/50">
        <div className="mx-auto max-w-5xl">
          <Header />
        </div>
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
