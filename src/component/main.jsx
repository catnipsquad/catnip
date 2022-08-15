import { Button } from "@co-design/core";
import { styled } from "@co-design/styled";
import Door from "./door";
import Stars from "./stars";

const Main = ({ onStart }) => {
  return (
    <Background>
      <Stars />
      <Door>
        Welcome MBTI Test
        <Button onClick={onStart}>Start</Button>
      </Door>
    </Background>
  );
};

const Background = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  background: linear-gradient(#000 0%, #1b1e33 100%);
  color: white;

  
`

export default Main;
