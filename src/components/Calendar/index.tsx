import { useMemo, useState } from 'react'
import Month from './Month'
import { Box } from '@chakra-ui/react'
import { ICalendarProps } from '../../types'

const Calendar = ({ startDate }: ICalendarProps): JSX.Element => {
  const [monthNumber] = useState<number>(12)

  const generatedMonthes = useMemo(() => {
    const months = []
    for (let i = 0; i < monthNumber; i++) {
      months.push(<Month date={startDate.plus({ month: i })} />)
    }

    return months
  }, [monthNumber])

  return <Box width={'100%'}>{generatedMonthes}</Box>
}

export default Calendar
