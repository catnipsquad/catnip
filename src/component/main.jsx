import { Button } from "@co-design/core";
import Template from "./template";

const Main = ({ onStart }) => {
  return (
    <Template animate>
      Welcome MBTI Test
      <Button onClick={onStart}>Start</Button>
    </Template>
  );
};

export default Main;
