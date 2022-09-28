const skills = [
  {
    lang: "Java",
    description:
      "Minecraftのサーバー開発、Swingでデスクトップアプリを作成しました。\nSpring Bootも経験あり。オブジェクト指向は相性👍",
    level: 4,
    icon: <JavaIcon />,
  },
  {
    lang: "JavaScript\n(TypeScript)",
    description:
      "React, Vueできます。Node.jsも多少。\nGoogle Apps Scriptはよく使います。",
    level: 5,
    icon: <JavaScriptIcon />,
  },
  {
    lang: "HTML",
    description:
      "多数のウェブサイトを作成し、高校で使用したりしています。\nCSS(Sass)もある程度使えます。",
    level: 5,
    icon: <HTMLIcon />,
  },
  {
    lang: "C#",
    description:
      "WPFでデスクトップアプリを作成しました。\n最近はあまり使用していないです。",
    level: 3,
    icon: <CSharpIcon />,
  },
  {
    lang: "Ruby",
    description: "大規模な開発の経験はないです。",
    level: 2,
    icon: <RubyIcon />,
  },
  {
    lang: "C",
    description: "授業で扱い、それ以降触ってないです。",
    level: 1,
    icon: <CIcon />,
  },
];

function Skill() {
  return (
    <div id="skill" className="min-h-screen bg-white px-2">
      <div className="mx-auto pt-16 max-w-4xl">
        <h2 className="my-4 text-2xl font-bold text-gray-700">Skill</h2>
        <p className="leading-relaxed">
          言語ごとに自分ができるスキルをまとめました。個人で開発をしていることもあり、フロントエンドが主ですが、バックエンドにも興味があります。クラウドサービスを主に使用し、サーバー等は所有する予定はありません。今後はフルスタックエンジニアに進む道を考えているので、AWSにも挑戦していきます。
        </p>
        <div className="my-8 overflow-x-auto shadow">
          <table className="w-full text-left text-sm text-gray-700">
            <tbody>
              {skills.map(({ lang, description, level, icon }) => (
                <tr key={lang} className="whitespace-pre border-b">
                  <th scope="row" className="py-4 px-6">
                    <div className="flex">
                      {icon}
                      <div className="ml-2">{lang}</div>
                    </div>
                  </th>
                  <td className="py-4 px-6">{description}</td>
                  <td className="py-4 px-6">
                    <div className="flex text-yellow-500">
                      {[...Array(level)].map((_value, index) => (
                        <FilledStarIcon key={index} />
                      ))}
                      {[...Array(5 - level)].map((_value, index) => (
                        <StarIcon key={index} />
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="my-8 text-2xl font-bold text-gray-700">
          その他 - Skill
        </h2>
        <p className="text-gray-700 my-8">
          Firebase, Google Apps Script, Vercel, Sass, JQuery, Linux（Ubuntu）,
          Windows, MySQL, Git, Material UI, Bootstrap, Tailwindcss, Chakra,
          React, Next.js, Vue, Discord API, Spigot, Bukkit
        </p>
      </div>
    </div>
  );
}

export default Skill;

function StarIcon() {
  return (
    <svg
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
  );
}

function FilledStarIcon() {
  return (
    <svg
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
  );
}

function JavaIcon() {
  return (
    <svg viewBox="0 0 128 128" className="h-5 w-5">
      <path
        fill="#0074BD"
        d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
      ></path>
      <path
        fill="#EA2D2E"
        d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
      ></path>
      <path
        fill="#0074BD"
        d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
      ></path>
      <path
        fill="#EA2D2E"
        d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"
      ></path>
      <path
        fill="#0074BD"
        d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
      ></path>
    </svg>
  );
}

function JavaScriptIcon() {
  return (
    <svg viewBox="0 0 128 128" className="h-5 w-5">
      <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
      <path
        fill="#323330"
        d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
      ></path>
    </svg>
  );
}

function CSharpIcon() {
  return (
    <svg viewBox="0 0 128 128" className="h-5 w-5">
      <path
        fill="#9B4F96"
        d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
      ></path>
      <path
        fill="#68217A"
        d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
      ></path>
      <path
        fill="#fff"
        d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"
      ></path>
    </svg>
  );
}

function RubyIcon() {
  return (
    <svg viewBox="0 0 128 128" className="h-5 w-5">
      <linearGradient
        id="ruby-original-a"
        gradientUnits="userSpaceOnUse"
        x1="157.08"
        y1="2382.05"
        x2="131.682"
        y2="2426.892"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
      >
        <stop offset="0" stopColor="#FB7655"></stop>
        <stop offset="0" stopColor="#FB7655"></stop>
        <stop offset=".41" stopColor="#E42B1E"></stop>
        <stop offset=".99" stopColor="#900"></stop>
        <stop offset="1" stopColor="#900"></stop>
      </linearGradient>
      <path
        fill="url(#ruby-original-a)"
        d="M97.078 83.214L28.34 124.031l89.003-6.04 6.855-89.745z"
      ></path>
      <linearGradient
        id="ruby-original-b"
        gradientUnits="userSpaceOnUse"
        x1="169.731"
        y1="2419.72"
        x2="136.998"
        y2="2441.685"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
      >
        <stop offset="0" stopColor="#871101"></stop>
        <stop offset="0" stopColor="#871101"></stop>
        <stop offset=".99" stopColor="#911209"></stop>
        <stop offset="1" stopColor="#911209"></stop>
      </linearGradient>
      <path
        fill="url(#ruby-original-b)"
        d="M117.488 117.93l-7.649-52.799-20.837 27.514z"
      ></path>
      <linearGradient
        id="ruby-original-c"
        gradientUnits="userSpaceOnUse"
        x1="143.542"
        y1="2380.69"
        x2="110.81"
        y2="2402.655"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
      >
        <stop offset="0" stopColor="#871101"></stop>
        <stop offset="0" stopColor="#871101"></stop>
        <stop offset=".99" stopColor="#911209"></stop>
        <stop offset="1" stopColor="#911209"></stop>
      </linearGradient>
      <path
        fill="url(#ruby-original-c)"
        d="M117.592 117.93l-56.044-4.399-32.91 10.385z"
      ></path>
      <linearGradient
        id="ruby-original-d"
        gradientUnits="userSpaceOnUse"
        x1="74.817"
        y1="2435.622"
        x2="79.891"
        y2="2402.644"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
      >
        <stop offset="0" stopColor="#fff"></stop>
        <stop offset="0" stopColor="#fff"></stop>
        <stop offset=".23" stopColor="#E57252"></stop>
        <stop offset=".46" stopColor="#DE3B20"></stop>
        <stop offset=".99" stopColor="#A60003"></stop>
        <stop offset="1" stopColor="#A60003"></stop>
      </linearGradient>
      <path
        fill="url(#ruby-original-d)"
        d="M28.717 123.928l14.001-45.867-30.81 6.588z"
      ></path>
      <linearGradient
        id="ruby-original-e"
        gradientUnits="userSpaceOnUse"
        x1="109.719"
        y1="2466.413"
        x2="111.589"
        y2="2432.757"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
      >
        <stop offset="0" stopColor="#fff"></stop>
        <stop offset="0" stopColor="#fff"></stop>
        <stop offset=".23" stopColor="#E4714E"></stop>
        <stop offset=".56" stopColor="#BE1A0D"></stop>
        <stop offset=".99" stopColor="#A80D00"></stop>
        <stop offset="1" stopColor="#A80D00"></stop>
      </linearGradient>
      <path
        fill="url(#ruby-original-e)"
        d="M88.996 92.797l-12.882-50.46-36.866 34.558z"
      ></path>
      <linearGradient
        id="ruby-original-f"
        gradientUnits="userSpaceOnUse"
        x1="140.691"
        y1="2497.523"
        x2="146.289"
        y2="2473.401"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
      >
        <stop offset="0" stopColor="#fff"></stop>
        <stop offset="0" stopColor="#fff"></stop>
        <stop offset=".18" stopColor="#E46342"></stop>
        <stop offset=".4" stopColor="#C82410"></stop>
        <stop offset=".99" stopColor="#A80D00"></stop>
        <stop offset="1" stopColor="#A80D00"></stop>
      </linearGradient>
      <path
        fill="url(#ruby-original-f)"
        d="M121.275 43.047L86.426 14.585l-9.704 31.373z"
      ></path>
      <linearGradient
        id="ruby-original-g"
        gradientUnits="userSpaceOnUse"
        x1="123.6"
        y1="2506.018"
        x2="147.719"
        y2="2518.077"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
      >
        <stop offset="0" stopColor="#fff"></stop>
        <stop offset="0" stopColor="#fff"></stop>
        <stop offset=".54" stopColor="#C81F11"></stop>
        <stop offset=".99" stopColor="#BF0905"></stop>
        <stop offset="1" stopColor="#BF0905"></stop>
      </linearGradient>
      <path
        fill="url(#ruby-original-g)"
        d="M104.978 4.437L84.481 15.764 71.551 4.285z"
      ></path>
      <linearGradient
        id="ruby-original-h"
        gradientUnits="userSpaceOnUse"
        x1="53.674"
        y1="2444.028"
        x2="55.66"
        y2="2424.153"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
      >
        <stop offset="0" stopColor="#fff"></stop>
        <stop offset="0" stopColor="#fff"></stop>
        <stop offset=".31" stopColor="#DE4024"></stop>
        <stop offset=".99" stopColor="#BF190B"></stop>
        <stop offset="1" stopColor="#BF190B"></stop>
      </linearGradient>
      <path
        fill="url(#ruby-original-h)"
        d="M3.802 100.034l8.586-15.659L5.442 65.72z"
      ></path>
      <path
        fill="#fff"
        d="M4.981 65.131l6.987 19.821 30.365-6.812L77 45.922l9.783-31.075L71.38 3.969l-26.19 9.802c-8.252 7.675-24.263 22.86-24.84 23.146-.573.291-10.575 19.195-15.369 28.214z"
      ></path>
      <linearGradient
        id="ruby-original-i"
        gradientUnits="userSpaceOnUse"
        x1="40.026"
        y1="2418.781"
        x2="133.345"
        y2="2514.739"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
      >
        <stop offset="0" stopColor="#BD0012"></stop>
        <stop offset="0" stopColor="#BD0012"></stop>
        <stop offset=".07" stopColor="#fff"></stop>
        <stop offset=".17" stopColor="#fff"></stop>
        <stop offset=".27" stopColor="#C82F1C"></stop>
        <stop offset=".33" stopColor="#820C01"></stop>
        <stop offset=".46" stopColor="#A31601"></stop>
        <stop offset=".72" stopColor="#B31301"></stop>
        <stop offset=".99" stopColor="#E82609"></stop>
        <stop offset="1" stopColor="#E82609"></stop>
      </linearGradient>
      <path
        fill="url(#ruby-original-i)"
        d="M29.519 29.521c17.882-17.73 40.937-28.207 49.785-19.28 8.843 8.926-.534 30.62-18.418 48.345-17.884 17.725-40.653 28.779-49.493 19.852-8.849-8.92.242-31.191 18.126-48.917z"
      ></path>
      <linearGradient
        id="ruby-original-j"
        gradientUnits="userSpaceOnUse"
        x1="111.507"
        y1="2409.102"
        x2="83.398"
        y2="2416.039"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
      >
        <stop offset="0" stopColor="#8C0C01"></stop>
        <stop offset="0" stopColor="#8C0C01"></stop>
        <stop offset=".54" stopColor="#990C00"></stop>
        <stop offset=".99" stopColor="#A80D0E"></stop>
        <stop offset="1" stopColor="#A80D0E"></stop>
      </linearGradient>
      <path
        fill="url(#ruby-original-j)"
        d="M28.717 123.909l13.89-46.012 46.135 14.82c-16.68 15.642-35.233 28.865-60.025 31.192z"
      ></path>
      <linearGradient
        id="ruby-original-k"
        gradientUnits="userSpaceOnUse"
        x1="159.785"
        y1="2442.837"
        x2="134.814"
        y2="2465.217"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
      >
        <stop offset="0" stopColor="#7E110B"></stop>
        <stop offset="0" stopColor="#7E110B"></stop>
        <stop offset=".99" stopColor="#9E0C00"></stop>
        <stop offset="1" stopColor="#9E0C00"></stop>
      </linearGradient>
      <path
        fill="url(#ruby-original-k)"
        d="M77.062 45.831l11.844 46.911c13.934-14.65 26.439-30.401 32.563-49.883l-44.407 2.972z"
      ></path>
      <linearGradient
        id="ruby-original-l"
        gradientUnits="userSpaceOnUse"
        x1="168.959"
        y1="2483.901"
        x2="156.521"
        y2="2497.199"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
      >
        <stop offset="0" stopColor="#79130D"></stop>
        <stop offset="0" stopColor="#79130D"></stop>
        <stop offset=".99" stopColor="#9E120B"></stop>
        <stop offset="1" stopColor="#9E120B"></stop>
      </linearGradient>
      <path
        fill="url(#ruby-original-l)"
        d="M121.348 43.097c4.74-14.305 5.833-34.825-16.517-38.635l-18.339 10.13 34.856 28.505z"
      ></path>
      <path
        fill="#9E1209"
        d="M3.802 99.828c.656 23.608 17.689 23.959 24.945 24.167l-16.759-39.14-8.186 14.973z"
      ></path>
      <radialGradient
        id="ruby-original-m"
        cx="138.703"
        cy="2464.789"
        r="30.601"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#A80D00"></stop>
        <stop offset="0" stopColor="#A80D00"></stop>
        <stop offset=".99" stopColor="#7E0E08"></stop>
        <stop offset="1" stopColor="#7E0E08"></stop>
      </radialGradient>
      <path
        fill="url(#ruby-original-m)"
        d="M77.128 45.904c10.708 6.581 32.286 19.798 32.723 20.041.68.383 9.304-14.542 11.261-22.976l-43.984 2.935z"
      ></path>
      <radialGradient
        id="ruby-original-n"
        cx="96.325"
        cy="2424.465"
        r="40.679"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#A30C00"></stop>
        <stop offset="0" stopColor="#A30C00"></stop>
        <stop offset=".99" stopColor="#800E08"></stop>
        <stop offset="1" stopColor="#800E08"></stop>
      </radialGradient>
      <path
        fill="url(#ruby-original-n)"
        d="M42.589 77.897l18.57 35.828c10.98-5.955 19.579-13.211 27.454-20.983L42.589 77.897z"
      ></path>
      <linearGradient
        id="ruby-original-o"
        gradientUnits="userSpaceOnUse"
        x1="67.509"
        y1="2393.115"
        x2="57.373"
        y2="2427.506"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
      >
        <stop offset="0" stopColor="#8B2114"></stop>
        <stop offset="0" stopColor="#8B2114"></stop>
        <stop offset=".43" stopColor="#9E100A"></stop>
        <stop offset=".99" stopColor="#B3100C"></stop>
        <stop offset="1" stopColor="#B3100C"></stop>
      </linearGradient>
      <path
        fill="url(#ruby-original-o)"
        d="M11.914 84.904l-2.631 31.331c4.964 6.781 11.794 7.371 18.96 6.842-5.184-12.9-15.538-38.696-16.329-38.173z"
      ></path>
      <linearGradient
        id="ruby-original-p"
        gradientUnits="userSpaceOnUse"
        x1="145.272"
        y1="2507.076"
        x2="167.996"
        y2="2497.045"
        gradientTransform="matrix(1 0 0 -1 -47.5 2517)"
      >
        <stop offset="0" stopColor="#B31000"></stop>
        <stop offset="0" stopColor="#B31000"></stop>
        <stop offset=".44" stopColor="#910F08"></stop>
        <stop offset=".99" stopColor="#791C12"></stop>
        <stop offset="1" stopColor="#791C12"></stop>
      </linearGradient>
      <path
        fill="url(#ruby-original-p)"
        d="M86.384 14.67l36.891 5.177c-1.969-8.343-8.015-13.727-18.32-15.41L86.384 14.67z"
      ></path>
    </svg>
  );
}

function CIcon() {
  return (
    <svg viewBox="0 0 128 128" className="h-5 w-5">
      <path
        fill="#659AD3"
        d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
      ></path>
      <path
        fill="#03599C"
        d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
      ></path>
      <path
        fill="#fff"
        d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"
      ></path>
    </svg>
  );
}

function HTMLIcon() {
  return (
    <svg viewBox="0 0 128 128" className="h-5 w-5">
      <path
        fill="#E44D26"
        d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
      ></path>
      <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path>
      <path
        fill="#EBEBEB"
        d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
      ></path>
      <path
        fill="#fff"
        d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
      ></path>
    </svg>
  );
}
