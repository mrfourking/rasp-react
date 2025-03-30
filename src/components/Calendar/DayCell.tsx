import { FC } from "react"
import { Center } from "@chakra-ui/react"

import { IDayCellProps } from "@src/types"

const DayCell: FC<IDayCellProps> = ({ height = "50px", children, selected = false }) => {
  return (
    <Center
      border="1px solid black"
      height={height}
      marginRight="-1px"
      marginBottom="-1px"
      backgroundColor={selected ? "#ff0000" : "#ffffff"}
    >
      {children}
    </Center>
  )
}

export default DayCell
