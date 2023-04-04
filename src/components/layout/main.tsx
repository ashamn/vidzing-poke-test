import { PokemonInterface } from "@/shared/interfaces/pokemon.interface";
import {
  changePokemonTeamOrder,
  searchPokemon,
  togglePokemonTeamMember,
} from "@/store/pokemon/actions";
import {
  getPokeTeam,
  getSearchList,
  getSearchTerm,
  selectPokeList,
} from "@/store/pokemon/selector";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonList from "../pokemon-list";
import Search from "../search";
import Team from "../team";
import styles from "./main.module.scss";

export default function Main() {
  const pokemonList = useSelector(selectPokeList);
  const pokemonTeam = useSelector(getPokeTeam);
  const pokemonSearchList = useSelector(getSearchList);
  const pokemonSearchTerm = useSelector(getSearchTerm);
  const dispatch = useDispatch();

  const togglePokeSelection = useCallback(
    (pokemon: PokemonInterface) => {
      dispatch(togglePokemonTeamMember(pokemon));
    },
    [dispatch]
  );

  const removeMember = useCallback(
    (pokemon: PokemonInterface) => {
      dispatch(togglePokemonTeamMember(pokemon));
    },
    [dispatch]
  );

  const changeOrder = useCallback(
    (orderPayload: PokemonInterface[]) => {
      dispatch(changePokemonTeamOrder(orderPayload));
    },
    [dispatch]
  );

  const setSearch = useCallback(
    (searchTerm: string) => {
      dispatch(searchPokemon(searchTerm));
    },
    [dispatch]
  );
  console.log("pokemonSearchTerm :>> ", !!pokemonSearchTerm);
  console.log("pokemonSearchList :>> ", pokemonSearchList);
  return (
    <div className={styles.main}>
      {!!pokemonTeam?.length && (
        <Team
          pokemonTeam={pokemonTeam}
          removeMember={removeMember}
          changeOrder={changeOrder}
        />
      )}
      <Search setSearch={setSearch} />
      <PokemonList
        pokemonList={!!pokemonSearchTerm ? pokemonSearchList : pokemonList}
        pokemonTeam={pokemonTeam}
        togglePokeSelection={togglePokeSelection}
      />
    </div>
  );
}
