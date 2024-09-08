import { Box, ChakraProvider, Container, VStack } from '@chakra-ui/react'
import Header from './components/layout/Header'

import './App.css'
import { useState } from 'react'
import StartScreen from './components/layout/Start'
import Footer from './components/layout/Footer'

function App() {
  const [isStarted, setIsStarted] = useState<boolean>(false)

  return (
    <ChakraProvider>
      <Container display={'flex'} flexDir={'column'} flexGrow={1} minHeight={'100%'}>
        {isStarted ? (
          <VStack flexGrow={1} onClick={() => setIsStarted(false)}>
            <Header />
            <Box flexGrow={1}>тело</Box>
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
