import { DEFAULT_BOX_HEIGHT } from '../../../utils/constants'
import { Box } from '@chakra-ui/react'

import DateIcon from '../../../assets/images/date.svg'

const Header = (): JSX.Element => {
  return (
    <Box height={DEFAULT_BOX_HEIGHT}>
      <div>
        <img src={DateIcon} alt="Генератор смен" />
      </div>
      <h1>Генератор смен</h1>
    </Box>
  )
}

export default Header
