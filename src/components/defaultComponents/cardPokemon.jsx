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

  const pokemonTypesAndColors = [
    {
      type: "Normal",
      color: "#A8A878",
      fontColor: "#000000",
      bgColor: "#74756B",
    },
    {
      type: "Fire",
      color: "#F08030",
      fontColor: "#FFFFFF",
      bgColor: "#9B1E1E",
    },
    {
      type: "Water",
      color: "#6890F0",
      fontColor: "#FFFFFF",
      bgColor: "#3A5683",
    },
    {
      type: "Grass",
      color: "#78C850",
      fontColor: "#FFFFFF",
      bgColor: "#4E8234",
    },
    {
      type: "Electric",
      color: "#F8D030",
      fontColor: "#000000",
      bgColor: "#A1871F",
    },
    { type: "Ice", color: "#98D8D8", fontColor: "#000000", bgColor: "#4C8DAF" },
    {
      type: "Fighting",
      color: "#C03028",
      fontColor: "#FFFFFF",
      bgColor: "#722F1F",
    },
    {
      type: "Poison",
      color: "#A040A0",
      fontColor: "#FFFFFF",
      bgColor: "#603F83",
    },
    {
      type: "Ground",
      color: "#E0C068",
      fontColor: "#000000",
      bgColor: "#927D44",
    },
    {
      type: "Flying",
      color: "#A890F0",
      fontColor: "#FFFFFF",
      bgColor: "#6D5E9C",
    },
    {
      type: "Psychic",
      color: "#F85888",
      fontColor: "#FFFFFF",
      bgColor: "#9C2954",
    },
    { type: "Bug", color: "#A8B820", fontColor: "#FFFFFF", bgColor: "#6D7815" },
    {
      type: "Rock",
      color: "#B8A038",
      fontColor: "#FFFFFF",
      bgColor: "#78561A",
    },
    {
      type: "Ghost",
      color: "#705898",
      fontColor: "#FFFFFF",
      bgColor: "#493963",
    },
    {
      type: "Dragon",
      color: "#7038F8",
      fontColor: "#FFFFFF",
      bgColor: "#4924A1",
    },
    {
      type: "Dark",
      color: "#705848",
      fontColor: "#FFFFFF",
      bgColor: "#49392F",
    },
    {
      type: "Steel",
      color: "#B8B8D0",
      fontColor: "#000000",
      bgColor: "#6D6D7E",
    },
    {
      type: "Fairy",
      color: "#EE99AC",
      fontColor: "#000000",
      bgColor: "#9B6470",
    },
  ];

  const pokemonType = info && info.types[0].type.name;

  // console.log("pokemonType", pokemonType);

  const pokemonTypeColor =
    pokemonType &&
    pokemonTypesAndColors.filter(
      (type) => type.type.toLowerCase() == pokemonType
    )[0].color;

  async function getColorForBackground(type) {
    const color =
      pokemonType &&
      pokemonTypesAndColors.filter((type) => type.type.toLowerCase() == type)[0]
        .color;

    return color;
  }

  const fontColor =
    pokemonType &&
    pokemonTypesAndColors.filter(
      (type) => type.type.toLowerCase() == pokemonType
    )[0].fontColor;

  const bgColor =
    pokemonType &&
    pokemonTypesAndColors.filter(
      (type) => type.type.toLowerCase() == pokemonType
    )[0].bgColor;

  // console.log("pokemonTypeColor", pokemonTypeColor);

  async function getInformations() {
    try {
      const response = await PokemonApi.getPokemonInformation(text);
      console.log("informações", response);
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
      h={"40vh"}
      bgColor={bgColor ? `${bgColor}90` : "#ffffff80"}
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
        <Image
          w={"8vw"}
          src={info && info.sprites.front_default}
          loading="lazy"
        />
      )}

      <Text fontWeight={"bold"} mt={1}>
        {CaptionFormater(text)}
      </Text>
      <Flex w={"100%"} justifyContent={"space-evenly"}>
        {info &&
          info.types.map((i) => {
            return (
              <Flex
                w={"40%"}
                border={"1px solid blue"}
                justifyContent={"center"}
                borderRadius={"6px"}
                bgColor={pokemonTypeColor ? pokemonTypeColor : "black"}
                color={fontColor ? fontColor : "white"}
              >
                <Text fontWeight={"bold"}>{CaptionFormater(i.type.name)}</Text>
              </Flex>
            );
          })}
      </Flex>
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
