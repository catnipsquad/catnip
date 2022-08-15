import { Button, Container, Heading, Image, Stack, Text, View } from '@co-design/core'
import { result } from '../data'
import Template from './template'

const Result = ({ answers, onRetry }) => {
  const EI = answers.slice(0, 3).filter((x) => x === 0).length >= 2 ? 'E' : 'I'
  const NS = answers.slice(3, 6).filter((x) => x === 0).length >= 2 ? 'N' : 'S'
  const TF = answers.slice(6, 9).filter((x) => x === 0).length >= 2 ? 'T' : 'F'
  const PJ = answers.slice(9, 12).filter((x) => x === 0).length >= 2 ? 'P' : 'J'

  const mbti = `${EI}${NS}${TF}${PJ}`

  return (
    <Template>
      <Container size="xsmall" co={{ height: '100%', overflowY: 'auto', padding: '32px 16px' }}>
        <Stack spacing={32}>
          <Stack spacing={8}>
            <Heading level={2} strong>{mbti}</Heading>
            <Heading level={3}>당신은 {result[mbti]?.title}</Heading>
          </Stack>
          <Image
            src={`${process.env.PUBLIC_URL}/images/${mbti}.png`}
            height={150}
            fit="contain"
            align="center"
            co={{backgroundColor: 'white'}}
          />
          <Stack>
          <View component="ul" co={{color: 'white', margin: 0, paddingLeft: 16}}>
          {result[mbti]?.contents?.map((r, i) => (
            <View component="li" co={{ marginBottom: 16 }}>
              <Text key={i} block children={r} align="left" color="white" />
            </View>
          ))}
          </View>
          </Stack>
          <Button onClick={onRetry} fullWidth>다시하기</Button>
        </Stack>
      </Container>
    </Template>
  )
}

export default Result
