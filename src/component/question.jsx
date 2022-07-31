import { Button, Container, Heading, Stack, Text, View } from "@co-design/core";
import { useCallback, useEffect } from "react";
import { questions } from "../data";
import useSessionStorage from "../hook/useSessionStorage";

const Question = ({ step, onClickAnswer }) => {
  return (
    step < 12 && (
      <Container size="xsmall" co={{ border: "1px solid #444" }}>
        <Heading align="center">{questions[step].title}</Heading>

        <Stack>
          <Button variant="text" onClick={() => onClickAnswer(0)}>
            {questions[step].answer[0]}
          </Button>
          <Button variant="text" onClick={() => onClickAnswer(1)}>
            {questions[step].answer[1]}
          </Button>
        </Stack>
      </Container>
    )
  );
};

export default Question;
