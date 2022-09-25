import styles from "../../styles/skill.module.scss";

function Articles() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="min-w-2xl">
        <h2 className="text-4xl font-bold tracking-wider text-gray-700">
          Skill
        </h2>
        <div className={styles.skill}>
          <div>
            <h3>Web制作</h3>
            <div>
              <h4>Next.js, React（TypeScript）</h4>
              <p>
                高校の文化祭のサイトなどをNext.jsで作成しました
                <br />
                他にも簡単なツールなどをReactで作成
                <br />
                Firebaseと連携してリアルタイムで交流できるゲームも作りました
              </p>
            </div>
            <div>
              <h4>Vue.js, Google Apps Script（TypeScript）</h4>
              <p>学校で利用する健康観察フォームを作成しました</p>
            </div>
          </div>
          <div>
            <h3>デスクトップアプリ制作</h3>
            <div>
              <h4>Swing（Java）</h4>
              <p>ファイルコピーの補助ソフトを作成しました</p>
            </div>
            <div>
              <h4>Electron（TypeScript）</h4>
            </div>
          </div>
          <div>
            <h3>その他</h3>
            <div>
              <h4>C#</h4>
              <p>WPFでデスクトップアプリを作成</p>
            </div>
            <div>
              <h4>Ruby, C</h4>
              <p>アプリ等の作成はありませんが、基本的な文法は</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
