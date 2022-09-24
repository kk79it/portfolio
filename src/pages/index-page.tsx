import { useEffect } from "react";
import About from "../components/topics/tooic-about";
import Skill from "../components/topics/topic-skill";
import Top from "../components/topics/topic-top";
import { useReadingTopicSetter } from "../utils/content-observer";

function IndexPage() {
  const setReadingTopic = useReadingTopicSetter();

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      threshold: 0.75,
    };

    const observer = new IntersectionObserver((entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry) => {
          const target = entry.target as HTMLElement;
          setReadingTopic(target.dataset.topic || null);
        });
    }, options);

    const topics = document.querySelectorAll("[data-topic]");

    topics.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      topics.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [setReadingTopic]);

  return (
    <>
      <div id="top" data-topic="top">
        <Top />
      </div>
      <div id="about" data-topic="about">
        <About />
      </div>
      <div id="skill" data-topic="skill">
        <Skill />
      </div>
    </>
  );
}

export default IndexPage;
