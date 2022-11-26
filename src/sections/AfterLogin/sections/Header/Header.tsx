import { Avatar, Flex, Text } from '@chakra-ui/react'
import { useApp } from '../../../../contexts/contextApi'

export const Header = () => {

    const { name }: any = useApp()

  return (
    <Flex w='100%' h='12vh' p='15px' justifyContent='space-between' align='center'>
        <Text fontSize='19px' fontWeight="500">Bem-vindo {name}!</Text>
        <Avatar colorScheme='teal' src=""/>
    </Flex>
  )
}
