import { Flex } from "@chakra-ui/react";
import bgImg from "../../../../assets/images/bg.jpg";
import { Form } from "../../../../components/Form";

export const Main = () => {
  return (
    <Flex
      bgImg={`${bgImg}`}
      objectFit="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      w="100%"
      h="100vh"
      justify="center"
      align="center"
    >
      <Form />
    </Flex>
  );
};
