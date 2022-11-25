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
import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig/firebase";
import passwordIcon from "../../assets/images/eye.webp";
import { useApp } from "../../contexts/contextApi";

export const Home = () => {

  const {
    isFilled,
    setIsFilled,
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
  }: any = useApp();
  
  const [signInWithEmailAndPassword, user, loading, error] =
  useSignInWithEmailAndPassword(auth);

  const handleSignIn = (e: any) => {
    e.preventDefault();
    
    signInWithEmailAndPassword(email, password);
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
        boxShadow='6px 6px 12px #000'
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
              Insira dados condizentes com o que está sendo pedido.
            </FormHelperText>
            <Button
              type="submit"
              _hover={{backgroundColor: "#ccc"}}
              color="#595FD9"
              backgroundColor='transparent'
              variant="ghost"
              size="sm"
              disabled={isFilled === true ? false : true}
            >
              <Text _hover={{transition:'scale(1.1)'}}>{loading ? "Loading..." : 'Entrar'}</Text>
            </Button>
            {user ? <Text color="#0F0" textAlign='center' fontSize='13px'>Login feito com sucesso!</Text> : <Text></Text>}
            {error ? <Text color="#F00" fontSize='13px' textAlign='center'>Você ainda não possui um cadastro com a gente, tente criar uma conta!</Text> : ""}
          </form>
        </FormControl>
        <Text color="#fff">Ainda não possui uma conta?</Text>
        <Link to="/cadastro"><Text color="#F3E8EE" _hover={{transform: "translate(5px)", transition: "all 1.2s ease"}} textDecoration="underline">cadastre-se</Text></Link>
        
      </Flex>
    </Flex>
  );
};
