import classNames from "classnames";
import { useReadingTopic } from "../hooks/reading-topic";
import HashLink from "./hash-link";

const items = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "About",
    path: "about",
  },
  {
    name: "Skill",
    path: "skill",
  },
];

function Header() {
  const [readingTopic] = useReadingTopic();

  return (
    <div className="bg-red-400">
      <div className="mx-auto flex h-16 max-w-4xl items-center">
        <div className="text-2xl font-bold tracking-wider text-gray-700">
          K-Lab.
        </div>
        <div className="ml-auto">
          <ul className="flex">
            {items.map(({ name, path }) => (
              <li key={path} className="ml-3">
                <HashLink
                  className={classNames(
                    "font-bold uppercase tracking-wider text-gray-700",
                    {
                      "border-b-2 border-gray-700": path === readingTopic,
                    }
                  )}
                  to={path}
                >
                  {name}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
