import { useEffect } from "react";
import Layout from "../components/layout";
import About from "../components/topics/about";
import Home from "../components/topics/home";
import Skill from "../components/topics/skill";
import { useReadingTopic } from "../hooks/reading-topic";

function IndexPage() {
  const [, setReadingTopic] = useReadingTopic();

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry) => {
          const target = entry.target as HTMLElement;
          setReadingTopic(target.dataset.topic || null);
        });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      threshold: 0.75,
    });

    const topics = document.querySelectorAll("[data-topic");
    topics.forEach((topic) => {
      observer.observe(topic);
    });

    return () => {
      topics.forEach((topic) => {
        observer.unobserve(topic);
      });
    };
  }, []);

  return (
    <Layout>
      <div>
        <Home />
        <About />
        <Skill />
      </div>
    </Layout>
  );
}

export default IndexPage;
