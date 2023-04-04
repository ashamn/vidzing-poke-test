import { PokemonInterface } from "@/shared/interfaces/pokemon.interface";
import {
  changePokemonTeamOrder,
  togglePokemonTeamMember,
} from "@/store/pokemon/actions";
import { getPokeTeam, selectPokeList } from "@/store/pokemon/selector";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonList from "../pokemon-list";
import Team from "../team";
import styles from "./main.module.scss";

export default function Main() {
  const pokemonList = useSelector(selectPokeList);
  const pokemonTeam = useSelector(getPokeTeam);
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

  return (
    <div className={styles.main}>
      <Team
        pokemonTeam={pokemonTeam}
        removeMember={removeMember}
        changeOrder={changeOrder}
      />
      <PokemonList
        pokemonList={pokemonList}
        pokemonTeam={pokemonTeam}
        togglePokeSelection={togglePokeSelection}
      />
    </div>
  );
}
