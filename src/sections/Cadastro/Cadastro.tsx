import { useEffect } from "react";
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

    if (error) {
      console.log("Erro " + error.code);
    }
  };

  const analyzingPasswordIsEqual = () => {
    if (password === confirmPassword) {
      return "";
    } else {
      return (
        <FormErrorMessage fontSize="13px" textAlign="center" color="#F00">
          As senhas precisam ser iguais!
        </FormErrorMessage>
      );
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
        bgColor="#DDD"
        boxShadow="6px 6px 12px #000"
        borderRadius="10px"
        height="400px"
      >
        <Text
          mt="10px"
          mb="10px"
          color="#595FD9"
          fontWeight="bold"
          fontSize="22px"
        >
          Cadastre-se
        </Text>
        <FormControl display="flex" flexDir="column" padding="20px">
          <form
            onSubmit={handleCadaster}
            style={{
              gap: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "-30px",
            }}
          >
            <Input
              type="text"
              color="#000"
              size="sm"
              w="300px"
              variant="flushed"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
              placeholder="Nome"
            />
            <Input
              type="email"
              color="#000"
              size="sm"
              variant="flushed"
              w="300px"
              value={email}
              placeholder="Email"
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              color="#000"
              size="sm"
              variant="flushed"
              w="300px"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              placeholder="Senha"
            />
            <Input
              type="password"
              color="#000"
              size="sm"
              variant="flushed"
              value={confirmPassword}
              w="300px"
              onChange={(e: any) => setConfirmPassword(e.target.value)}
              placeholder="Confirmar senha"
            />
            <FormHelperText>
              Insira dados condizentes com o que está sendo pedido.
            </FormHelperText>
            <Button
              type="submit"
              isLoading={loading ? true : false}
              loadingText="submiting..."
              color="#595FD9"
              opacity={isDisable === true ? "0.1" : "1"}
              _hover={{ backgroundColor: "#ccc" }}
              backgroundColor="transparent"
              variant="ghost"
              mt="10px"
              size="sm"
              disabled={isDisable === true ? true : false}
            >
              {loading ? "Loading..." : "Finalizar Cadastro"}
            </Button>
            {user ? (
              <Text color="#0F0" fontSize="13px" textAlign="center">
                Cadastro feito com sucesso!
              </Text>
            ) : (
              ""
            )}
            {error?.code === "auth/weak-password" ? (
              <Text color="#F00" textAlign="center" fontSize="13px">
                A senha precisa ter no mínimo 6 caracteres!
              </Text>
            ) : (
              ""
            )}
          </form>
        </FormControl>
        <Text
          fontSize="14px"
          mt="-20px"
          color="#F3E8EE"
          textDecoration="underline"
        >
          <Link to="/">
            <Text
              color="#000"
              textDecoration="underline"
              _hover={{
                transform: "translate(5px)",
                transition: "all 1.2s ease",
              }}
            >
              Fazer Login
            </Text>
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
};
