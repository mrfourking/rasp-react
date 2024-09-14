import { useState } from 'react'
import { DateTime } from 'luxon'
import { Box, ChakraProvider, Container, VStack } from '@chakra-ui/react'

import Header from './components/layout/Header'
import StartScreen from './components/layout/Start'
import Footer from './components/layout/Footer'
import Calendar from './components/Calendar'

import './App.css'

function App() {
  const [isStarted, setIsStarted] = useState<boolean>(false)

  return (
    <ChakraProvider>
      <Container display={'flex'} flexDir={'column'} flexGrow={1} minHeight={'100%'}>
        {isStarted ? (
          <VStack flexGrow={1}>
            <Header />
            <Box width={'100%'} flexGrow={1}>
              <Calendar startDate={DateTime.now()} />
            </Box>
            <Footer />
          </VStack>
        ) : (
          <StartScreen onClick={() => setIsStarted(true)} />
        )}
      </Container>
    </ChakraProvider>
  )
}

export default App
