import { Box, SimpleGrid } from "@chakra-ui/react"
import { FC, useMemo } from "react"

import DayCell from "./DayCell"

import { IMonthProps } from "@src/types"

const Month: FC<IMonthProps> = ({ date, datesArray }) => {
  const generatedDays = useMemo(() => {
    const days = []
    let currentDate = date.startOf("month")
    const endDate = date.endOf("month")
    const startWeekday = currentDate.weekday
    const endWeekDay = endDate.weekday

    for (let i = 0; i < startWeekday - 1; i++) {
      days.push(<DayCell key={`${currentDate.toFormat("LL")}-start-${i}`} />)
    }

    while (currentDate < endDate) {
      days.push(
        <DayCell
          key={currentDate.toFormat("dd.MM.yyyy")}
          selected={datesArray.includes(currentDate.toFormat("dd.MM.yyyy"))}
        >
          {currentDate.toFormat("dd")}
        </DayCell>,
      )

      currentDate = currentDate.plus({ day: 1 })
    }

    for (let i = endWeekDay; i < 7; i++) {
      days.push(<DayCell key={`${currentDate.toFormat("LL")}-end-${i}`} />)
    }

    return days
  }, [date, datesArray])

  return (
    <Box width={"100%"} marginBottom="40px">
      <Box>{date.toFormat("LLLL yyyy")}</Box>
      <SimpleGrid columns={7}>
        <DayCell height="24px">Пн</DayCell>
        <DayCell height="24px">Вт</DayCell>
        <DayCell height="24px">Ср</DayCell>
        <DayCell height="24px">Чт</DayCell>
        <DayCell height="24px">Пт</DayCell>
        <DayCell height="24px">Сб</DayCell>
        <DayCell height="24px">Вс</DayCell>
      </SimpleGrid>
      <SimpleGrid columns={7}>{generatedDays}</SimpleGrid>
    </Box>
  )
}

export default Month
