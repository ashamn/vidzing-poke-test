import { all, call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actions.types";
import * as actions from "./actions";
import axios from "axios";
import {
  Pokemon,
  PokemonApiResponse,
  PokemonInterface,
  PokemonStat,
} from "@/shared/interfaces/pokemon.interface";

function getPokeList() {
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=151", {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function getPokemon(url: string) {
  return axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function* getPokemonListSaga() {
  try {
    // Getting pokemon list
    const pokeListResponse: { data: { results: PokemonApiResponse[] } } =
      yield getPokeList();

    // Getting pokemon information
    const pokeList: [{ data: Pokemon }] = yield all(
      pokeListResponse.data.results?.map((pokemon: PokemonApiResponse) =>
        call(getPokemon, pokemon.url)
      )
    );
    if (pokeList) {
      const pokemonListWithData: PokemonInterface[] = pokeList.map(
        (responseData) => {
          const { data } = responseData;
          const { name, id, sprites, types, stats } = data;
          // Get stats
          const pStats = stats.reduce((acc, stat) => {
            const accStats = {
              ...acc,
              [stat.stat.name]: stat.base_stat,
            };
            return accStats;
          }, {} as Pick<PokemonInterface, "attack" | "defense" | "hp" | "special-attack" | "special-defense">);

          return {
            id: id,
            name: name,
            image: sprites.front_default,
            types: types.map((t) => t.type.name),
            hp: pStats.hp,
            defense: pStats.defense,
            attack: pStats.attack,
            ["special-attack"]: pStats["special-attack"],
            ["special-defense"]: pStats["special-defense"],
          };
        }
      );
      yield put(actions.getPokemonListSuccess(pokemonListWithData));
    } else {
      yield put(actions.getPokemonListFailure("Error getting pokemon details"));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.getPokemonListFailure("Error in pokemon saga"));
  }
}

function* pokemonSaga() {
  yield all([takeLatest(actionTypes.GET_POKEMON_LIST, getPokemonListSaga)]);
}

export default pokemonSaga;
