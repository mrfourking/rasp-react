import DatePicker from "../form/Datepicker"
import { Collapsible, Text } from "@chakra-ui/react"

const Filters = (): JSX.Element => {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger>
        <Text>Фильтры</Text>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <DatePicker />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

export default Filters
