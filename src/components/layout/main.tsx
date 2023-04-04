import { PokemonInterface } from "@/shared/interfaces/pokemon.interface";
import {
  changePokemonTeamOrder,
  clearPokemonTeam,
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
import { toast } from "react-toastify";

export default function Main() {
  const pokemonList = useSelector(selectPokeList);
  const pokemonTeam = useSelector(getPokeTeam);
  const pokemonSearchList = useSelector(getSearchList);
  const pokemonSearchTerm = useSelector(getSearchTerm);
  const dispatch = useDispatch();

  // Team

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

  const submitTeam = useCallback(async () => {
    const resp = await fetch("/api/team", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokemonTeam),
    });
    const response = await resp.json();
    if (response) {
      toast.success("Success!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      dispatch(clearPokemonTeam());
    }
  }, [pokemonTeam, dispatch]);

  // Search

  const setSearch = useCallback(
    (searchTerm: string) => {
      dispatch(searchPokemon(searchTerm));
    },
    [dispatch]
  );

  return (
    <div className={styles.main}>
      {!!pokemonTeam?.length && (
        <Team
          pokemonTeam={pokemonTeam}
          removeMember={removeMember}
          changeOrder={changeOrder}
          submitTeam={submitTeam}
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
