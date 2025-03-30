import { useState } from "react"
import { ru } from "date-fns/locale"
import DatePicker, { registerLocale } from "react-datepicker"
import { Input } from "@chakra-ui/react"

registerLocale("ru", ru)

const CustomDatePicker = () => {
  const [startDate, setStartDate] = useState<Date>(new Date())

  return (
    <DatePicker
      locale="ru"
      dateFormat="dd.MM.yyyy"
      selected={startDate}
      onChange={(date: Date | null) => {
        setStartDate(date)
      }}
      customInput={<Input placeholder="Введите дату первой смены" size="sm" />}
    />
  )
}

export default CustomDatePicker
