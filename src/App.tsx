import './App.css'
import { motion } from 'framer-motion'
import { Routes } from './sections/Routes/Routes'
import { Flex } from '@chakra-ui/react'

function App() {

  return (
    <Flex bgColor='#1D1E18' w='100%' justify='center' h='100vh' align='center'>
      <Routes/>
    </Flex>
  )
}

export default App
