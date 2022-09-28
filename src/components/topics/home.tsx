import classNames from "classnames";
import styles from "../../styles/topics-home.module.scss";

function Home() {
  return (
    <div
      id="home"
      className={classNames(
        "relative min-h-screen from-sky-200 to-teal-500",
        styles.background
      )}
    >
      <div className={classNames("h-16 bg-white")}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-5xl font-bold tracking-wider text-gray-700">
          K-Lab.
        </h1>
      </div>
    </div>
  );
}

export default Home;
