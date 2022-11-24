import React, { useState, useEffect } from "react";
import {
  Text,
  Flex,
  Input,
  Button,
  FormControl,
  FormHelperText,
  FormErrorMessage
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from "../../firebaseConfig/firebase";

export const Cadastro = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isfilled, setIsFilled] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isDisable, setIsDisable] = useState<boolean>(true)

  const analyzingIsFilled = () => {
    if (name && email && password && confirmPassword) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  };

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth)

  const handleCadaster = (e: any) => {
    e.preventDefault();

    createUserWithEmailAndPassword(email, password)
  }

  const analyzingPasswordIsEqual = () => {
    if(password === confirmPassword){
        console.log("As senhas são iguais")
    }
    else{
        console.log("As senhão não batem!")
    }
  }

  useEffect(() => {
    analyzingIsFilled();
    if(password && confirmPassword){
        analyzingPasswordIsEqual();
        if(password === confirmPassword){
            setIsDisable(false)
        }
        else{
            setIsDisable(true)
        }
    }
  }, [name, email, password, confirmPassword]);

  return (
    <Flex>
      <Flex
        justify='center'
        gap="10px"
        flexDir="column"
        align="center"
        w="350px"
        bgColor="#161712"
        borderRadius="10px"
        height="400px"
      >
        <Text color="#FFF" fontWeight="bold" fontSize="22px">
          Cadastro
        </Text>
        <FormControl display='flex' flexDir='column' padding="20px">
            <form onSubmit={handleCadaster} style={{gap:'12px', display: "flex", flexDirection: "column", justifyContent: "center"}}>
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
          {password !== confirmPassword ? (<FormErrorMessage>As senhas não batem!</FormErrorMessage>) : ''}
          <FormHelperText>
            Insira dados condizentes com o que está sendo pedido.
          </FormHelperText>
          <Button
            type="submit"
            onClick={() => setIsLoading(true)}
            isLoading={isLoading === true ? true : false}
            loadingText="Carregando"
            color="#595FD9"
            borderColor="#595FD9"
            opacity={isDisable === true ? '0.1' : '1'}
            variant="ghost"
            spinnerPlacement="start"
            mt="10px"
            size="sm"
            disabled={isDisable === true ? true : false}
          >
            Cadatrar
          </Button>
          </form>
        </FormControl>
        <Text fontSize='14px' mt='-20px' color="#F3E8EE" textDecoration="underline">
          <Link to="/">Fazer Login</Link>
        </Text>
      </Flex>
    </Flex>
  );
};
