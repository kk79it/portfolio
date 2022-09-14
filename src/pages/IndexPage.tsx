import { useEffect } from "react";
import Article from "../components/Article";
import HashLink from "../components/HashLink";
import Top from "../components/topics/Top";
import { menuitems } from "../config";

function IndexPage() {
  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "-50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry) => {
          console.log(entry.target.id);
        });
    }, options);

    const boxes = document.querySelectorAll("[data-article]");

    boxes.forEach((box) => {
      observer.observe(box);
    });
  }, []);

  return (
    <>
      <Top />
      <Article id="about" className="bg-green-200">
        <h1 id="test">Index Page</h1>
      </Article>
      <Article id="articles" className="bg-green-200">
        <h1>Index Page</h1>
      </Article>
    </>
  );
}

export default IndexPage;
