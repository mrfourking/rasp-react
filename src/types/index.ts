import { DateTime } from "luxon"

export interface IStartScreenProps {
  onClick: () => void
}

export interface ICalendarProps {
    startDate: DateTime
}

export interface IMonthProps {
    date: DateTime
}

export interface IDayCellProps {
  height?: string
  children: React.ReactNode | string
}
