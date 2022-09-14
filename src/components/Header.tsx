import { Bars3Icon } from "@heroicons/react/24/outline";
import TitleIcon from "./TitleIcon";

function Header() {
  return (
    <header className="flex items-center px-4 py-2">
      <div className="m-1 h-8 w-8">
        <TitleIcon />
      </div>
      <div className="ml-2 text-lg">テストタイトル</div>
      <div className="ml-auto rounded border border-gray-400 px-2 py-1">
        <div className="h-8 w-8 text-gray-600">
          <Bars3Icon />
        </div>
      </div>
    </header>
  );
}

export default Header;
