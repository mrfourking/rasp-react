import { DateTime } from 'luxon'

export interface IStartScreenProps {
  onClick: () => void
}

export interface ICalendarProps {
  startDate: DateTime
}

export interface IMonthProps {
  date: DateTime
  datesArray: string[]
}

export interface IDayCellProps {
  height?: string
  children?: React.ReactNode | string
  selected?:boolean
}
