import { useEffect } from "react";
import {
  Text,
  Flex,
  Input,
  FormControl,
  Button,
  FormHelperText,
  Img,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig/firebase";
import passwordIcon from "../../assets/images/eye.webp";
import { useApp } from "../../contexts/contextApi";

export const Home = () => {
  const navigate = useNavigate();

  const {
    isFilled,
    setIsFilled,
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    userValid,
    setUserValid,
  }: any = useApp();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSignIn = (e: any) => {
    e.preventDefault();

    signInWithEmailAndPassword(email, password);

    if (userValid) {
      navigate("/AfterLogin");
    }
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
        boxShadow="6px 6px 12px #000"
        borderRadius="10px"
        height="400px"
      >
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
              <Img
                cursor="pointer"
                onClick={() => setShowPassword(!showPassword)}
                w="25px"
                objectFit="cover"
                src={passwordIcon}
              />
            </Flex>
            <FormHelperText>
              Insira dados condizentes com o que est?? sendo pedido.
            </FormHelperText>
            <Button
              type="submit"
              _hover={{ backgroundColor: "#ccc" }}
              spinnerPlacement="start"
              color="#595FD9"
              backgroundColor="transparent"
              variant="ghost"
              size="sm"
              disabled={isFilled === true ? false : true}
            >
              <Text _hover={{ transition: "scale(1.1)" }}>
                {loading ? "Loading..." : "Entrar"}
              </Text>
            </Button>
            {user ? setUserValid(true) : setUserValid(false)}
            {error?.code === "auth/wrong-password" ? (
              <Text textAlign="center" fontSize="13px" color="#F00">
                Senha incorreta!
              </Text>
            ) : (
              ""
            )}
            {error?.code === "auth/too-many-requests" ? (
              <Text textAlign="center" fontSize="13px" color="#F00">
                Conta temporariamente desativada devido a quantidade de erros
                envolvendo a senha. Voc?? pode resolver isso facilmente trocando
                sua senha.
              </Text>
            ) : (
              ""
            )}
            {error?.code === "auth/user-not-found" ? (
              <Text textAlign="center" fontSize="13px" color="#F00">
                Esse usu??rio n??o pertence ao nosso banco de dados, crie uma
                conta!
              </Text>
            ) : (
              ""
            )}
          </form>
        </FormControl>
        <Text color="#fff">Ainda n??o possui uma conta?</Text>
        <Link to="/cadastro">
          <Text
            color="#F3E8EE"
            _hover={{
              transform: "translate(5px)",
              transition: "all 1.2s ease",
            }}
            textDecoration="underline"
          >
            cadastre-se
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};
