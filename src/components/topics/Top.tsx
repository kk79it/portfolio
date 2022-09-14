import { menuitems } from "../../config";
import Article from "../Article";
import HashLink from "../HashLink";

function Top() {
  return (
    <Article id="top" className="bg-cyan-200">
      <div className="relative h-full w-full text-gray-700">
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <div className="font-noto-sans text-5xl">K-Lab.</div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 p-8">
          <HashLink className="cursor-pointer" href={menuitems[1].link}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-12 w-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </HashLink>
        </div>
      </div>
    </Article>
  );
}

export default Top;
