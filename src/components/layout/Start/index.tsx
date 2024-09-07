import { Button, Container, Heading, Text } from '@chakra-ui/react'
import { IStartScreenProps } from '../../../types'

const StartScreen = ({ onClick }: IStartScreenProps): JSX.Element => {
  return (
    <Container display={'flex'} flexDir={'column'} flexGrow={1} justifyContent={'center'} alignItems={'center'}>
      <Heading>Генератор смен</Heading>
      <Text> Рассчитайте график рабочих смен онлайн за пару секунд</Text>
      <Button onClick={onClick}>Начать</Button>
    </Container>
  )
}

export default StartScreen
