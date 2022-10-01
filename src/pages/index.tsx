import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/layout";
import About from "../components/topics/about";
import Home from "../components/topics/home";
import Skill from "../components/topics/skill";
import { useReadingTopic } from "../hooks/reading-topic";
import topics from "../topics.json";

const Index: NextPage = () => {
  const [, setReadingTopic] = useReadingTopic();

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry) => {
          setReadingTopic(entry.target.id || null);
        });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      threshold: 0.75,
    });

    const topicElements = topics
      .map(({ path }) => document.getElementById(path))
      .filter<HTMLElement>(
        (element): element is HTMLElement => element !== null
      );

    topicElements.forEach((topic) => {
      observer.observe(topic);
    });

    return () => {
      topicElements.forEach((topic) => {
        observer.unobserve(topic);
      });
    };
  }, [setReadingTopic]);

  return (
    <Layout>
      <div>
        <Head>
          <title>ポートフォリオ - K-Lab.</title>
        </Head>
        <Home />
        <About />
        <Skill />
      </div>
    </Layout>
  );
};

export default Index;
