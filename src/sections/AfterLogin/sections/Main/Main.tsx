import { Flex, Img } from '@chakra-ui/react'
import ReactImg from '../../../../assets/images/react.png'

export const Main = () => {
  return (
    <Flex w='100%' justify='center'>
        <Img w='500px' objectFit="cover" bgPosition="center" h='500px' src={ReactImg}/>
    </Flex>
  )
}
