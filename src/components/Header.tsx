import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { menuitems } from "../config";
import { useReadingTopic } from "../utils/content-observer";
import HashLink from "./hash-link";
import TitleIcon from "./title-icon";

function Header() {
  const readingTopic = useReadingTopic();

  return (
    <header className="flex h-14 items-center px-4 py-2">
      <div className="m-1 h-8 w-8">
        <TitleIcon />
      </div>
      <div className="ml-2 text-xl">K-Lab.</div>
      <div className="ml-auto tracking-wider">
        <div className="flex">
          {menuitems.map(({ hash, text, path }) => (
            <HashLink key={hash} to={hash} className="mr-3">
              <div className={classNames({ underline: readingTopic === path })}>
                {text}
              </div>
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
