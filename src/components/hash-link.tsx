import { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /**
   * リンク先 name
   */
  to: string;
  children: ReactNode;
  keepHistory?: boolean;
};

function HashLink({ children, to, keepHistory, ...rest }: Props) {
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // 要検証
    e.preventDefault();

    const elem = document.getElementById(to.replace("#", ""));

    elem?.scrollIntoView({ behavior: "smooth" });

    if (keepHistory !== true) {
      navigate(to, { replace: false });
    }
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

export default HashLink;
