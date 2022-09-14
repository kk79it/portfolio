import { HTMLAttributes, ReactElement } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  id: string;
  children: ReactElement;
};

function Article({ id, children, className, ...rest }: Props) {
  return (
    <div id={id} className={`${className} flex h-screen px-4`} data-article={true} {...rest}>
      {/* サイドバーを無効化 */}
      {/* <div className="invisible hidden md:block">
        <Sidebar />
      </div> */}
      <div className="grow">{children}</div>
    </div>
  );
}

export default Article;
