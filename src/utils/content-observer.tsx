import { createContext, ReactNode, useContext, useState } from "react";

type ContextType = {
  value: string | null;
  setter: (value: string | null) => void;
};

const Context = createContext<ContextType | null>(null);

function useReadingTopic() {
  const value = useContext(Context);

  if (value === null) {
    throw new Error("不明なエラーが発生しました。");
  }

  return value.value;
}

function useReadingTopicSetter() {
  const value = useContext(Context);
  if (value === null) {
    throw new Error("不明なエラーが発生しました。");
  }

  return value.setter;
}

type Props = {
  children: ReactNode;
};

function ReadingTopicProvider({ children }: Props) {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Context.Provider value={{ value, setter: setValue }}>
      {children}
    </Context.Provider>
  );
}

export { ReadingTopicProvider, useReadingTopic, useReadingTopicSetter };
