import './App.css'
import { Routes } from './sections/Routes/Routes'
import { Flex } from '@chakra-ui/react'

function App() {

  return (
    <Flex bgImage='linear-gradient(to right, #CCC, #000, #CCC)' w='100%' justify='center' h='100vh' align='center'>
      <Routes/>
    </Flex>
  )
}

export default App
