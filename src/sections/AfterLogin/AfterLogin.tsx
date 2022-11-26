import { Flex } from '@chakra-ui/react'
import { Header } from '../AfterLogin/sections/Header/Header'
import { Main } from '../AfterLogin/sections/Main/Main'

export const AfterLogin = () => {
  return (
    <Flex bg="linear-gradient(to left, #f00, #fff)" w='100vw' h='100vh' flexDir='column'>
        <Header/>
        <Main/>
    </Flex>
  )
}
