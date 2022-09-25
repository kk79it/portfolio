import { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /**
   * リンク先 name
   */
  to: string;
  children: ReactNode;
};

function HashLink({ children, to, ...rest }: Props) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // 要検証
    e.preventDefault();

    const elem = document.getElementById(to);

    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a href={"#" + to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

export default HashLink;
