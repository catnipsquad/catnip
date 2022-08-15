import { Button, Container, Heading, Progress, Stack } from '@co-design/core'
import { questions } from '../data'
import './question.css'

const Question = ({ step, onClickAnswer }) => {
  return (
    step < 12 && (
      <Container className="question-container">
        <Container
          size="xsmall"
          co={{
            border: '1px solid #444',
            padding: '2rem',
            width: '600px',
            height: '360px',
          }}
        >
          <Stack co={{ height: '40%', marginBottom: '2rem' }}>
            <Heading align="left" level={2}>{`Q${step + 1}.`}</Heading>
            <Heading
              align="center"
              level={4}
              strong
              // co={{ marginBottom: '1rem' }}
            >
              {questions[step].title}
            </Heading>
          </Stack>

          <Stack co={{ height: '60%' }}>
            <Button variant="solid" onClick={() => onClickAnswer(0)}>
              {questions[step].answer[0]}
            </Button>
            <Button variant="solid" onClick={() => onClickAnswer(1)}>
              {questions[step].answer[1]}
            </Button>
            <Progress co={{ marginTop: '1rem' }} value={(step / 12) * 100} />
          </Stack>
        </Container>
      </Container>
    )
  )
}

export default Question
