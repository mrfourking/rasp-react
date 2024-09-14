import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { IStartScreenProps } from '../../../types'

const StartScreen = ({ onClick }: IStartScreenProps): JSX.Element => {
  return (
    <Box display={'flex'} flexDir={'column'} flexGrow={1} justifyContent={'center'} alignItems={'center'}>
      <Heading>Генератор смен</Heading>
      <Text> Рассчитайте график рабочих смен онлайн за пару секунд</Text>
      <Button onClick={onClick}>Начать</Button>
    </Box>
  )
}

export default StartScreen
