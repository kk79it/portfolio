import { useReadingTopic } from "../hooks/reading-topic";

function Header() {
  const [readingTopic] = useReadingTopic();

  return (
    <div className="bg-red-400 flex h-16 items-center">{readingTopic}</div>
  );
}

export default Header;
