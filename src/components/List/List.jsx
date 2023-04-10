import {
  Flex,
  Spacer,
  Image,
  Box,
  Text,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { HOME } from "../../constants/paths";
import { AMARELOPOKEMONLOGO, AZULPOKEMONLOGO } from "../../constants/colors";
import PokemonApi from "../../services/pokemonAPI";
import { useEffect, useState } from "react";
import CardPokemon from "../defaultComponents/cardPokemon";
import { useSelector, useDispatch } from "react-redux";
import useLocalStorage from "../../helpers/useLocalStorage";

export default function List() {
  const navigate = useNavigate();
  // const pokemonList = useSelector((state) => state.pokemonList);
  const favoritos = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const [lista, setLista] = useState();

  const [favorites, setFavorites] = useLocalStorage("favoritos", favoritos);

  useEffect(() => {
    setFavorites(favoritos);
  }, [favoritos]);

  async function getPokemonList() {
    try {
      const response = await PokemonApi.getPokemons();
      // console.log("pokemons", response);
      setLista(response.results);
    } catch (error) {
      console.log("error: ", error);
    }
  }
  function handleAddFavorite(pokemon) {
    dispatch({ type: "ADD_FAVORITE", payload: pokemon });
  }

  function removeFavorite(pokemon) {
    dispatch({ type: "REMOVE_FAVORITE", payload: pokemon });
  }

  useEffect(() => {
    getPokemonList();
  }, []);

  // console.log("favoritos", favoritos);
  return (
    <Flex
      w={"100vw"}
      h={"100vh"}
      bgColor={"#d2d2d2"}
      flexDir={"column"}
      alignItems={"center"}
      // bgImage={"/background-lista.png"}
      bgSize={"cover"}
      overflowY={"scroll"}
    >
      <Flex
        w={"100%"}
        h={"12vh"}
        bgColor={"#ffffff50"}
        justifyContent={"space-evenly"}
        flexDir={"row"}
        alignItems={"center"}
        borderRadius={"0 0 20px 20px"}
        border={"4px solid #ffffff50"}
        filter={"blur"}
      >
        <Text color={AZULPOKEMONLOGO} fontSize={"2rem"} fontWeight={"bold"}>
          Pokedex
        </Text>
        <Button
          fontWeight={"bold"}
          height={"6vh"}
          _hover={{
            backgroundColor: AMARELOPOKEMONLOGO,
            color: AZULPOKEMONLOGO,
          }}
          my={2}
          color={AMARELOPOKEMONLOGO}
          bgColor={AZULPOKEMONLOGO}
          onClick={() => {
            navigate(HOME);
          }}
        >
          Voltar a Home
        </Button>
      </Flex>
      <SimpleGrid columns={{ sm: 1, md: 3, lg: 5 }} spacing={10} my={6} px={8}>
        {lista &&
          lista.map((item, index) => {
            return (
              <CardPokemon
                text={item.name}
                favorite={handleAddFavorite}
                favoriteList={favoritos}
                remove={removeFavorite}
                key={index}
              />
            );
          })}
      </SimpleGrid>
    </Flex>
  );
}
