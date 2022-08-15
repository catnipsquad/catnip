import { Button, Center, Container, Heading, Image, Stack } from "@co-design/core";
import Template from "./template";

const Main = ({ onStart }) => {
  return (
    <Template animate>
      <Center co={{ width: '100%', height: '100%' }}>
        <Container fluid co={{ width: '100%', padding: 32 }}>
          <Stack align="center">
            <Image src={process.env.PUBLIC_URL + "/landing.png"} width={160} height={160} radius="large" fit="cover" />
            <Heading level={4} strong>당신도 고양ㅇi 7H발ㅈr..?!</Heading>
            <Button onClick={onStart} fullWidth>시작하기</Button>
          </Stack>
        </Container>
      </Center>
    </Template>
  );
};

export default Main;
