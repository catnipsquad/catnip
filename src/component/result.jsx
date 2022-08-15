import { Button, Container, Heading, Image } from "@co-design/core";
import Template from "./template";

const Result = ({ answers, onRetry }) => {
  const EI = answers.slice(0, 3).filter((x) => x === 0).length >= 2 ? "E" : "I";
  const NS = answers.slice(3, 6).filter((x) => x === 0).length >= 2 ? "N" : "S";
  const TF = answers.slice(6, 9).filter((x) => x === 0).length >= 2 ? "T" : "F";
  const PJ = answers.slice(9, 12).filter((x) => x === 0).length >= 2 ? "P" : "J";

  const mbti = `${EI}${NS}${TF}${PJ}`;

  return (
    <Template>
      <Container size="xsmall">
        <Heading>{mbti}</Heading>
        <Image src={`/images/${mbti}.png`} width={256} fit="contain" />
        <Button onClick={onRetry}>다시하기</Button>
      </Container>
    </Template>
  );
};

export default Result;
