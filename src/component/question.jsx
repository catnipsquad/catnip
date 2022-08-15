import { Button, Container, Heading, Progress, Stack } from '@co-design/core'
import { questions } from '../data'

const Question = ({ step, onClickAnswer }) => {
  return (
    step < 12 && (
      <Container size="xsmall" co={{ border: '1px solid #444' }}>
        <Heading align="center">{questions[step].title}</Heading>

        <Stack>
          <Button variant="text" onClick={() => onClickAnswer(0)}>
            {questions[step].answer[0]}
          </Button>
          <Button variant="text" onClick={() => onClickAnswer(1)}>
            {questions[step].answer[1]}
          </Button>
        </Stack>
        <Progress co={{ margin: '20px' }} value={(step / 12) * 100} />
      </Container>
    )
  )
}

export default Question
