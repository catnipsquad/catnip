import { Button } from "@co-design/core";

const Main = ({ onStart }) => {
  return (
    <>
      Welcome MBTI Test
      <Button onClick={onStart}>Start</Button>
    </>
  );
};

export default Main;
