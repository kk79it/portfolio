import { Bars3Icon } from "@heroicons/react/24/outline";
import { menuitems } from "../config";
import { useReadingTopic } from "../utils/content-observer";
import HashLink from "./hash-link";
import TitleIcon from "./title-icon";

function Header() {
  const readingTopic = useReadingTopic();

  return (
    <header className="flex items-center px-4 py-2">
      <div className="m-1 h-8 w-8">
        <TitleIcon />
      </div>
      <div className="ml-2 text-lg">{readingTopic}</div>
      <div className="ml-auto">
        <div className="flex">
          {menuitems.map(({ link, text }) => (
            <HashLink key={link} to={link} className="mr-3">
              <div>{text}</div>
            </HashLink>
          ))}
        </div>
        <div className="rounded border border-gray-400 px-2 py-1 md:hidden">
          <div className="h-8 w-8 text-gray-600">
            <Bars3Icon />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
