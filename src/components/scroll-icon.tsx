import styles from "../styles/scroll-icon.module.scss";
import topics from "../topics.json";
import HashLink from "./hash-link";

function ScrollIcon() {
  return (
    <HashLink to={topics[1].path}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`h-12 w-12 ${styles.scroll} transition-colors duration-100 hover:text-gray-500`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </HashLink>
  );
}

export default ScrollIcon;
