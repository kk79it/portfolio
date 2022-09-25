import classNames from "classnames";
import styles from "../../styles/topics-about.module.scss";

function About() {
  return (
    <div
      id="about"
      className={classNames(
        "flex min-h-screen items-center justify-center bg-gray-200",
        styles.bg
      )}
    >
      <div className="max-w-2xl px-4">
        <h2 className="mb-3 text-4xl font-bold tracking-wider text-gray-700">
          About me
        </h2>
        <p>
          千葉県の高校生エンジニア。独学でJavaを学び、Minecraftのサーバー開発を行なった。
          <br />
          Webアプリの開発にも興味を持ち、通う高校で使用するアプリを複数開発した。
        </p>
      </div>
    </div>
  );
}

export default About;
