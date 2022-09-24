import styles from "../../styles/topics-about.module.scss";

function About() {
  return (
    <div
      className={`${styles.bg_jigsaw} flex min-h-screen items-center justify-center`}
    >
      <div className="max-w-2xl">
        <h2 className="my-3 text-4xl font-bold tracking-wider text-gray-700">
          Profile
        </h2>
        <p>
          千葉県の高校生です。小学生の頃からパソコンに興味を持ち、Javaを使ってMinecraftのサーバーを作成した。中学生ではJavaを本格的に学習し、Swingでデスクトップアプリを作成した。高校に入学してからは学校で使用するウェブアプリケーションを複数作成し、生徒や先生方に使用してもらっている。
        </p>
      </div>
    </div>
  );
}

export default About;
