import { DEFAULT_BOX_HEIGHT } from '../../../utils/constants'
import { Box, Heading } from '@chakra-ui/react'

import DateIcon from '../../../assets/images/date.svg'

const Header = (): JSX.Element => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'flex-start'}
      width={'100%'}
      gap={3}
      height={DEFAULT_BOX_HEIGHT}
    >
      <div>
        <img src={DateIcon} alt="Генератор смен" />
      </div>
      <Heading size={'md'}>Генератор смен</Heading>
    </Box>
  )
}

export default Header
