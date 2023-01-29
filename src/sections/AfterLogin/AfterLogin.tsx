import { Flex } from "@chakra-ui/react";
import { Main } from "../AfterLogin/sections/Main/Main";

export const AfterLogin = () => {
  return (
    <Flex w="100vw" h="100vh" flexDir="column">
      <Main />
    </Flex>
  );
};
