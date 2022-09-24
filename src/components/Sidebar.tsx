import { menuitems } from "../config";
import HashLink from "./HashLink";

function Sidebar() {
  return (
    <nav className="flex min-h-screen w-64 items-center pl-16">
      <ul>
        {menuitems.map(({ text, link }) => (
          <HashLink key={link} href={link}>
            <li
              className="my-3 cursor-pointer border-l-8 border-gray-700 
            pl-2 text-lg font-bold text-gray-700 hover:border-l-2"
            >
              {text}
            </li>
          </HashLink>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
