import { useState, useEffect } from "react";
import {
  Text,
  Flex,
  Input,
  FormControl,
  Button,
  FormHelperText,
  Img
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig/firebase";
import passwordIcon from "../../assets/images/eye.webp";

export const Home = () => {
  const [isfilled, setIsFilled] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignIn = (e: any) => {
    e.preventDefault();

    createUserWithEmailAndPassword(email, password);
  };

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
        justify="center"
        align="center"
        w="350px"
        bgColor="#161712"
        borderRadius="10px"
        height="400px"
      >
        <Text fontWeight="bold" color="#fff" fontSize="20px">
          Seja bem-vindo
        </Text>
        <Text color="#fff" fontWeight="500" fontSize="22px">
          Login
        </Text>
        <FormControl gap="10px" padding="20px">
          <form
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            onSubmit={handleSignIn}
          >
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
            <Flex>
              <Input
                type={showPassword === true ? "text" : "password"}
                color="#fff"
                size="sm"
                variant="flushed"
                w="300px"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha"
              />
              <Img cursor='pointer' onClick={() => setShowPassword(!showPassword)} w='25px' objectFit='cover' src={passwordIcon}/>
            </Flex>
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
              variant="ghost"
              spinnerPlacement="start"
              size="sm"
              disabled={isfilled === true ? false : true}
            >
              Logar
            </Button>
          </form>
        </FormControl>
        <Text color="#fff">Ainda não possui uma conta?</Text>
        <Text color="#F3E8EE" textDecoration="underline">
          <Link to="/cadastro">cadastre-se</Link>
        </Text>
      </Flex>
    </Flex>
  );
};
