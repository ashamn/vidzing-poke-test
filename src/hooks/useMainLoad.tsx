import {
  getPokeTeam,
  getSearchList,
  getSearchTerm,
  selectPokeList,
} from "@/store/pokemon/selector";
import { useDispatch, useSelector } from "react-redux";

export default function useMainLoad() {
  const pokemonList = useSelector(selectPokeList);
  const pokemonTeam = useSelector(getPokeTeam);
  const pokemonSearchList = useSelector(getSearchList);
  const pokemonSearchTerm = useSelector(getSearchTerm);
  const dispatch = useDispatch();

  return {
    pokemonList,
    pokemonTeam,
    pokemonSearchList,
    pokemonSearchTerm,
    dispatch,
  };
}
