import {
  Flex,
  Spacer,
  Image,
  Box,
  Text,
  Button,
  SimpleGrid,
  Icon,
  Spinner,
} from "@chakra-ui/react";
import PokemonApi from "../../services/pokemonAPI";
import { useEffect, useState } from "react";
import { CaptionFormater } from "../../helpers/formaters";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

export default function CardPokemon({ text, favorite, favoriteList, remove }) {
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(false);
  async function getInformations() {
    try {
      const response = await PokemonApi.getPokemonInformation(text);
      // console.log("informações", response);
      setInfo(response);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  const isFavorite = favoriteList.some((pokemon) => pokemon === text);

  useEffect(() => {
    getInformations();
  }, [text]);
  return (
    <Flex
      w={"16vw"}
      h={"30vh"}
      bgColor={"#ffffff99"}
      justifyContent={"space-evenly"}
      flexDir={"column"}
      alignItems={"center"}
      borderRadius={"15px"}
      border={"4px solid #ffffff50"}
      filter={"blur"}
    >
      {loading ? (
        <Spinner size="md" color={"red.500"} />
      ) : (
        <Image w={"8vw"} src={info && info.sprites.front_default} />
      )}

      <Text fontWeight={"bold"} mt={1}>
        {CaptionFormater(text)}
      </Text>
      {isFavorite ? (
        <Button
          bgColor={"red"}
          color={"white"}
          onClick={() => {
            remove(text);
          }}
        >
          Remover Favorito
        </Button>
      ) : (
        <Button
          bgColor={"green"}
          color={"white"}
          onClick={() => {
            favorite(text);
          }}
        >
          Adicionar aos Favoritos
        </Button>
      )}
    </Flex>
  );
}
