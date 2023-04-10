import { Flex, Spacer, Image, Box, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { LISTA } from "../../constants/paths";
import { AMARELOPOKEMONLOGO, AZULPOKEMONLOGO } from "../../constants/colors";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Flex
      w={"100vw"}
      h={"100vh"}
      //   bgColor={"green"}
      flexDir={"column"}
      alignItems={"center"}
      p={4}
      bgImage={"/background-home.png"}
    >
      <Image w={"40vw"} src={"/pokemon-logo.png"} />
      <Flex
        w={"60vw"}
        h={"40vh"}
        bgColor={"#ffffff90"}
        my={4}
        justifyContent={"space-evenly"}
        flexDir={"column"}
        alignItems={"center"}
        borderRadius={"20px"}
        border={"4px solid #ffffff50"}
        filter={"blur"}
      >
        <Text color={AZULPOKEMONLOGO} fontSize={"2rem"} fontWeight={"bold"}>
          Bem Vindo a nossa Pokedex!
        </Text>
        <Button
          fontWeight={"bold"}
          height={"8vh"}
          _hover={{
            backgroundColor: AMARELOPOKEMONLOGO,
            color: AZULPOKEMONLOGO,
          }}
          color={AMARELOPOKEMONLOGO}
          bgColor={AZULPOKEMONLOGO}
          onClick={() => {
            navigate(LISTA);
          }}
        >
          Siga para a Lista
        </Button>
        <Text
          color={AZULPOKEMONLOGO}
          fontSize={"1.6rem"}
          textAlign={"center"}
          fontWeight={"bold"}
        >
          Este projeto foi feito para demonstrar nosso carinho e prestar nossa
          homenagem a este anime que marcou nossa infância!
        </Text>
      </Flex>
    </Flex>
  );
}
