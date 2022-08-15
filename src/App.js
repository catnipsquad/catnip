import { CoProvider } from "@co-design/core";
import { useCallback, useState } from "react";
import Main from "./component/main";
import Question from "./component/question";
import Result from "./component/result";
import useSessionStorage from "./hook/useSessionStorage";

function App() {
  const [mode, setMode] = useState("main");
  const [state, setState] = useSessionStorage("STATE", []);
  const handleClickStart = useCallback(() => {
    setMode("");
    setState([]);
  }, [setState]);
  const handleClickAnswer = useCallback(
    (number) => {
      setState((old) => [...old, number]);
    },
    [setState]
  );
  const handleClickRetry = useCallback(() => {
    setMode("main");
    setState([]);
  }, [setState]);

  return (
    <CoProvider
      withNormalizeCSS
      withGlobalStyles
      theme={() => ({
        fontFamily: "GamjaFlower",
      })}
    >
      {mode === "main" ? (
        <Main onStart={handleClickStart} />
      ) : state.length < 12 ? (
        <Question step={state.length} onClickAnswer={handleClickAnswer} />
      ) : (
        <Result answers={state} onRetry={handleClickRetry} />
      )}
    </CoProvider>
  );
}

export default App;
