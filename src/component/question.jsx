import { Button, Center, Container, Heading, Progress, Stack } from '@co-design/core'
import { questions } from '../data'
import Template from './template'

const Question = ({ step, onClickAnswer }) => {
  return (
    step < 12 && (
      <Template>
        <Center co={{width: '100%', height: '100%'}}>
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
                <Button variant="solid" onClick={() => onClickAnswer(0)}>
                  {questions[step].answer[0]}
                </Button>
                <Button variant="solid" onClick={() => onClickAnswer(1)}>
                  {questions[step].answer[1]}
                </Button>
                <Progress co={{ marginTop: '1rem' }} value={(step / 12) * 100} />
              </Stack>
            </Stack>
          </Container>
        </Center>
      </Template>
    )
  )
}

export default Question
