import { useEffect, useState } from "react";
import {
  Text,
  Flex,
  Input,
  Button,
  FormControl,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig/firebase";
import { useApp } from "../../contexts/contextApi";

export const Cadastro = () => {
  const {
    setIsFilled,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    isDisable,
    setIsDisable,
  }: any = useApp();

  const analyzingIsFilled = () => {
    if (name && email && password && confirmPassword) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  };

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleCadaster = (e: any) => {
    e.preventDefault();

    createUserWithEmailAndPassword(email, password);
    setName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  };


  const analyzingPasswordIsEqual = () => {
    if (password === confirmPassword) {
      console.log("As senhas são iguais");
    } else {
      console.log("As senhão não batem!");
    }
  };

  useEffect(() => {
    analyzingIsFilled();
    if (password && confirmPassword) {
      analyzingPasswordIsEqual();
      if (password === confirmPassword) {
        setIsDisable(false);
      } else {
        setIsDisable(true);
      }
    }
  }, [name, email, password, confirmPassword]);

  return (
    <Flex>
      <Flex
        justify="center"
        gap="10px"
        flexDir="column"
        align="center"
        w="350px"
        bgColor="#161712"
        boxShadow='6px 6px 12px #000'
        borderRadius="10px"
        height="400px"
      >
        <Text mt='10px' mb='10px' color="#FFF" fontWeight="bold" fontSize="22px">
          Cadastro
        </Text>
        <FormControl display="flex" flexDir="column" padding="20px">
          <form
            onSubmit={handleCadaster}
            style={{
              gap: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop:'-30px',
            }}
          >
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
            {password !== confirmPassword ? (
              <FormErrorMessage>As senhas não batem!</FormErrorMessage>
            ) : (
              ""
            )}
            <FormHelperText>
              Insira dados condizentes com o que está sendo pedido.
            </FormHelperText>
            <Button
              type="submit"
              color="#595FD9"
              opacity={isDisable === true ? "0.1" : "1"}
              _hover={{backgroundColor: "#ccc"}}
              backgroundColor='transparent'
              variant="ghost"
              mt="10px"
              size="sm"
              disabled={isDisable === true ? true : false}
            >
              {loading ? "Loading..." : 'Finalizar Cadastro'}
            </Button>
            {user ? <Text color="#0F0" fontSize='13px' textAlign='center'>Cadastro feito com sucesso!</Text> : ""}
            {error ? <Text color="#F00" textAlign='center' fontSize='13px'>Erro ao tentar cadastrar!</Text> : ""}
          </form>
        </FormControl>
        <Text
          fontSize="14px"
          mt='-20px'
          color="#F3E8EE"
          textDecoration="underline"
        >
          <Link to="/"><Text color="#F3E8EE" _hover={{transform: "translate(5px)", transition: "all 1.2s ease"}}>Fazer Login</Text></Link>
        </Text>
      </Flex>
    </Flex>
  );
};
