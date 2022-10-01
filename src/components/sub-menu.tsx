import classNames from "classnames";
import { useEffect, useState } from "react";

function SubMenu() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => {
      setVisible(window.scrollY !== 0);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [setVisible]);

  const scrollTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollTop}
      className={classNames(
        "m-2 cursor-pointer rounded-full p-4 text-gray-700 hover:bg-white/40 hover:shadow-md",
        { hidden: !visible }
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </div>
  );
}

export default SubMenu;
