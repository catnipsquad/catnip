import {
  Button,
  Center,
  Container,
  Heading,
  Progress,
  Stack,
} from '@co-design/core'
import { useCallback } from 'react'
import { useState } from 'react'
import { questions } from '../data'
import Template from './template'

const Question = ({ step, onClickAnswer }) => {
  const [answers, setAnswers] = useState([0, 1])
  const handleClickAnswer = useCallback(
    (i) => {
      setAnswers((step + 1) % 3 === 0 ? [0, 1] : i === 0 ? [1, 0] : [0, 1])
      onClickAnswer(i)
    },
    [onClickAnswer, step]
  )
  return (
    step < 12 && (
      <Template>
        <Center co={{ width: '100%', height: '100%' }}>
          <Container
            fluid
            co={{
              width: '100%',
              height: '100%',
              padding: '2rem',
            }}
          >
            <Stack co={{ height: '100%', justifyContent: 'space-between' }}>
              <Stack>
                <Heading align="left" level={2}>{`Q${step + 1}.`}</Heading>
                <Heading
                  align="left"
                  level={4}
                  strong
                  co={{ wordWrap: 'break-word', wordBreak: 'keep-all' }}
                >
                  {questions[step].title}
                </Heading>
              </Stack>

              <Stack>
                <Button
                  variant="solid"
                  onClick={() => handleClickAnswer(answers[0])}
                >
                  {questions[step].answer[answers[0]]}
                </Button>
                <Button
                  variant="solid"
                  onClick={() => handleClickAnswer(answers[1])}
                >
                  {questions[step].answer[answers[1]]}
                </Button>
                <Progress
                  co={{ marginTop: '1rem' }}
                  value={(step / 12) * 100}
                />
              </Stack>
            </Stack>
          </Container>
        </Center>
      </Template>
    )
  )
}

export default Question
