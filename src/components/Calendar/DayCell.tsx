import { Box } from '@chakra-ui/react'

import { IDayCellProps } from '../../types'

const DayCell = ({ height = '50px', children }: IDayCellProps): JSX.Element => {
  return (
    <Box border="1px" height={height} marginRight="-1px" marginBottom="-1px">
      {children}
    </Box>
  )
}

export default DayCell
