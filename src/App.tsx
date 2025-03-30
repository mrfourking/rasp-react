import { useState } from "react"
import { DateTime } from "luxon"
import { Box, Container, VStack } from "@chakra-ui/react"

import Header from "@components/layout/Header"
import StartScreen from "@components/layout/Start"
import Footer from "@components/layout/Footer"
import Calendar from "@components/Calendar"
import Filters from "@components/Filters"
import { Provider } from "@components/ui/provider"

import "./App.css"

function App() {
  const [isStarted, setIsStarted] = useState<boolean>(false)

  return (
    <Provider defaultTheme="light">
      <Container display={"flex"} flexDir={"column"} flexGrow={1} minHeight={"100%"}>
        {isStarted ? (
          <VStack flexGrow={1}>
            <Header />
            <Box width={"100%"} flexGrow={1}>
              <Filters />
              <Calendar startDate={DateTime.now()} />
            </Box>
            <Footer />
          </VStack>
        ) : (
          <StartScreen onClick={() => setIsStarted(true)} />
        )}
      </Container>
    </Provider>
  )
}

export default App
