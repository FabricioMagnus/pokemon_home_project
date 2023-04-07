import {
  Flex,
  Spacer,
  Image,
  Box,
  Text,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import PokemonApi from "../../services/pokemonAPI";
import { useEffect, useState } from "react";
import { CaptionFormater } from "../../helpers/formaters";

export default function CardPokemon({ text }) {
  const [info, setInfo] = useState();
  async function getInformations() {
    try {
      const response = await PokemonApi.getPokemonInformation(text);
      console.log("informações", response);
      setInfo(response);
    } catch (error) {
      console.log("error: ", error);
    }
  }
  useEffect(() => {
    getInformations();
  }, [text]);
  return (
    <Flex
      w={"16vw"}
      h={"20vh"}
      bgColor={"#ffffff99"}
      justifyContent={"space-evenly"}
      flexDir={"column"}
      alignItems={"center"}
      borderRadius={"15px"}
      border={"4px solid #ffffff50"}
      filter={"blur"}
    >
      <Image w={"8vw"} src={info && info.sprites.front_default} />
      <Text fontWeight={"bold"} mt={-3}>
        {CaptionFormater(text)}
      </Text>
    </Flex>
  );
}
