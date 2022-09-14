import { AnchorHTMLAttributes, MouseEvent } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /**
   * リンク先
   * 「#」をつけてください
   */
  href: string;
};

function HashLink({ href, ...rest }: Props) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // 要検証
    e.preventDefault();

    const elem = document.getElementById(href.replace("#", ""));

    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return <a onClick={handleClick} {...rest}></a>;
}

export default HashLink;
