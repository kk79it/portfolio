import classNames from "classnames";
import styles from "../../styles/topics-home.module.scss";
import ScrollIcon from "../scroll-icon";

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="my-4 text-5xl font-bold tracking-wider text-gray-700">
          K-Lab.
        </h1>
        <p className="my-4 tracking-wider text-gray-700">
          Portfolio & Engineering Skills
        </p>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 p-8 text-gray-700">
        <ScrollIcon />
      </div>
    </div>
  );
}

export default Home;
