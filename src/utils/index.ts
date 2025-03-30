import { DateTime } from "luxon"

/**
 * Generates dates array from start to end date with steps,
 * that control which dates must be included or excluded from array
 * @param start - start date
 * @param end - end date
 * @param includeStep - size of interval that includes dates
 * @param excludeStep - size of interval that excludes dates
 * @return - array of dates
 */
type GetDatesArrayType = (
  start: DateTime,
  end: DateTime,
  includeStep?: number,
  excludeStep?: number,
) => string[]

const getDatesArray: GetDatesArrayType = (start, end, includeStep = 2, excludeStep = 2) => {
  const arr: string[] = []
  let currentIncludeStep = 0
  while (start <= end) {
    if (currentIncludeStep < includeStep) {
      arr.push(start.toFormat("dd.MM.yyyy") as string)
      currentIncludeStep++
      start = start.plus({ day: 1 })
    } else {
      currentIncludeStep = 0
      start = start.plus({ day: excludeStep })
    }
  }
  return arr
}

export { getDatesArray }
