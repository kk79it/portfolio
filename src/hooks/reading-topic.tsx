import { createContext, ReactElement, useContext, useState } from "react";

const Context = createContext<ReadingTopic | null>(null);

type Props = {
  children: ReactElement;
};
function ReadingTopicProvider({ children }: Props) {
  const [state, setState] = useState<string | null>(null);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}

function useReadingTopic() {
  const received = useContext(Context);

  if (received === null) {
    throw new Error("ReadingTopicProviderでラップしてください");
  }

  return received;
}

export default ReadingTopicProvider;
export { useReadingTopic };
