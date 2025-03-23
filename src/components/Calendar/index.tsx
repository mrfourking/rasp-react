import { FC, useMemo, useState } from 'react'
import Month from './Month'
import { Box } from '@chakra-ui/react'

import { getDatesArray } from '../../utils'

import { ICalendarProps } from '../../types'

const Calendar: FC<ICalendarProps> = ({ startDate }) => {
  const [monthNumber] = useState<number>(12)

  const endDate = useMemo(() => {
    return startDate.plus({month: monthNumber}).endOf('month')
  }, [startDate, monthNumber])

  const datesArray = useMemo(() => {
    return getDatesArray(startDate, endDate)
  }, [startDate, endDate])

  const generatedMonths = useMemo(() => {
    const months = []
    for (let i = 0; i < monthNumber; i++) {
      months.push(
        <Month
          key={startDate.plus({ month: i }).toFormat('LLLL-yyyy')}
          date={startDate.plus({ month: i })} datesArray={datesArray}
        />
      )
    }

    return months
  }, [monthNumber, datesArray, startDate])

  return <Box width={'100%'}>{generatedMonths}</Box>
}

export default Calendar
