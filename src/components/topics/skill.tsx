const skills = [
  {
    lang: "Java",
    description:
      "Minecraftのサーバー開発、Swingでデスクトップアプリを作成しました。\nSpring Bootも経験あり。",
    level: 4,
  },
  {
    lang: "JavaScript（TypeScript）",
    description:
      "React, Vueできます。Node.jsも多少。\nGoogle Apps Scriptもよく使います。",
    level: 5,
  },
  {
    lang: "C#",
    description:
      "WPFでデスクトップアプリを作成しました。\n最近はあまり使用していない。",
    level: 3,
  },
  {
    lang: "Ruby",
    description: "大規模な開発の経験はない。",
    level: 2,
  },
  {
    lang: "C",
    description: "授業で扱い、それ以降触ってない。",
    level: 1,
  },
];

function Skill() {
  return (
    <div
      id="skill"
      className="flex min-h-screen items-center justify-center bg-white px-2"
    >
      <div>
        <h2 className="mb-3 text-4xl font-bold tracking-wider text-gray-700">
          言語 - Skill
        </h2>
        <div className="mb-5 shadow">
          <table className="text-left text-sm text-gray-700">
            <tbody>
              {skills.map(({ lang, description, level }) => (
                <tr key={lang} className="border-b">
                  <th scope="row" className="whitespace-nowrap py-4 px-6">
                    {lang}
                  </th>
                  <td className="whitespace-pre-wrap py-4 px-6">
                    {description}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex text-yellow-500">
                      {[...Array(level)].map((_value, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                      {[...Array(5 - level)].map((_value, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="mb-3 text-4xl font-bold tracking-wider text-gray-700">
          その他
        </h2>
        <p>Firebase</p>
      </div>
    </div>
  );
}

export default Skill;
