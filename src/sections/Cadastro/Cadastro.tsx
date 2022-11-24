import React, { useState, useEffect } from "react";
import {
  Text,
  Flex,
  Input,
  Button,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Cadastro = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isfilled, setIsFilled] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const analyzingIsFilled = () => {
    if (name && email && password && confirmPassword) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  };

  const sendData = () => {
    alert("Data");
  };

  useEffect(() => {
    analyzingIsFilled();
  }, [name, email, password, confirmPassword]);

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
        <Text mt='15px' color="#FFF" fontWeight="bold" fontSize="22px">
          Cadastro
        </Text>
        <FormControl gap='10px' display='flex' flexDir='column' onSubmit={sendData} padding="20px">
          <Input
            type="text"
            color="#FFF"
            size="sm"
            w="300px"
            variant="flushed"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
          />
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
          <Input
            type="password"
            color="#fff"
            size="sm"
            variant="flushed"
            value={confirmPassword}
            w="300px"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirmar senha"
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
            mt="10px"
            size="sm"
            disabled={isfilled === true ? false : true}
          >
            Cadatrar
          </Button>
        </FormControl>
        <Text mt='-20px' color="#F3E8EE" textDecoration="underline">
          <Link to="/">Fazer Login</Link>
        </Text>
      </Flex>
    </Flex>
  );
};
