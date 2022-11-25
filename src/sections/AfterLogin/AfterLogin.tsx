import { Avatar, Flex, Text } from "@chakra-ui/react";
import { useApp } from "../../contexts/contextApi";

export const AfterLogin = () => {

  const { name }: any = useApp()

  return (
    <Flex w="100%" h="100%" bgColor="#fff">
      <Flex
        as="header"
        align="center"
        w="100%"
        h="12vh"
        bgImage='linear-gradient(45deg, #000, #fff, #000)'
        justify="space-between"
        padding='15px'
      >
        <Text fontSize="18px" color="#FFF">
          Bem-vindo {name}!
        </Text>
        <Avatar
          src={
            "https://lh3.googleusercontent.com/ogw/AOh-ky2_4TD3Cmj-4JGrLg3qfQd_nOwZS8kAtHRqWmLnmw=s32-c-mo"
          }
        />
      </Flex>
    </Flex>
  );
};
