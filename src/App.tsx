import './App.css'
import { Routes } from './sections/Routes/Routes'
import { Flex } from '@chakra-ui/react'

function App() {

  return (
    <Flex w='100%' bg="linear-gradient(to right, #fff, #ccc)" justify='center' h='100vh' align='center'>
      <Routes/>
    </Flex>
  )
}

export default App
