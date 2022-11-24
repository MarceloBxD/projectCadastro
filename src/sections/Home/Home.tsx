import { useState, useEffect } from "react";
import {
  Text,
  Flex,
  Input,
  FormControl,
  Button,
  FormHelperText,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import eyeIcon from "../../assets/images/eye.webp";

export const Home = () => {
  const [show, setShow] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isfilled, setIsFilled] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const analyzingIsFilled = () => {
    if (email && password) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  };

  useEffect(() => {
    analyzingIsFilled();
  }, [email, password]);

  return (
    <Flex>
      <Flex
        gap="10px"
        flexDir="column"
        align="center"
        w="350px"
        bgColor="#161712"
        borderRadius="10px"
        height="400px"
      >
        <Text fontWeight="bold" mt="15px" color="#fff" fontSize="20px">
          Seja bem-vindo
        </Text>
        <Text color="#fff" fontWeight="500" fontSize="22px">
          Login
        </Text>
        <FormControl gap="10px" display="flex" flexDir="column" padding="20px">
          <Input
            type="email"
            color="#fff"
            size="sm"
            variant="flushed"
            w="300px"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            color="#fff"
            size="sm"
            variant="flushed"
            w="300px"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
          <FormHelperText>
            Insira dados condizentes com o que está sendo pedido.
          </FormHelperText>
          <Button
            onClick={() => setIsLoading(true)}
            isLoading={isLoading === true ? true : false}
            loadingText="Carregando"
            color="#595FD9"
            borderColor="#595FD9"
            variant="ghost"
            spinnerPlacement="start"
            size="sm"
            disabled={isfilled === true ? false : true}
          >
            Logar
          </Button>
        </FormControl>
        <Text color="#fff">
          Ainda não possui uma conta?
        </Text>
        <Text color="#F3E8EE" textDecoration="underline">
          <Link to="/cadastro">cadastre-se</Link>
        </Text>
      </Flex>
    </Flex>
  );
};
