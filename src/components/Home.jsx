import { Flex, Spacer, Image, Box, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { LISTA } from "../constants/paths";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Flex
      w={"100vw"}
      h={"100vh"}
      bgColor={"green"}
      flexDir={"column"}
      alignItems={"center"}
      p={4}
    >
      <Image w={"40vw"} src={"/pokemon-logo.png"} />
      <Flex
        w={"60vw"}
        h={"40vh"}
        // bgColor={"red"}
        my={4}
        justifyContent={"space-evenly"}
        flexDir={"column"}
        alignItems={"center"}
      >
        <Text color={"white"} fontSize={"2rem"} fontWeight={"bold"}>
          Bem Vindo a nossa Pokedex!
        </Text>
        <Text color={"white"} fontSize={"1.8rem"} textAlign={"center"}>
          Este projeto foi feito para demonstrar nosso carinho e prestar nossa
          homenagem a este anime que marcou nossa infância!
        </Text>
        <Button
          fontWeight={"bold"}
          color={"green"}
          onClick={() => {
            navigate(LISTA);
          }}
        >
          Siga para a Lista
        </Button>
      </Flex>
    </Flex>
  );
}
