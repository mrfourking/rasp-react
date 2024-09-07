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
      <>
        {isStarted ? (
          <Container>
            <VStack onClick={() => setIsStarted(false)}>
              <Header />
              <Box>тело</Box>
              <Box>
                <Footer />
              </Box>
            </VStack>
          </Container>
        ) : (
          <StartScreen onClick={() => setIsStarted(true)} />
        )}
      </>
    </ChakraProvider>
  )
}

export default App
