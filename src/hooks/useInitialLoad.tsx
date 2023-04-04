import { getPokemonList } from "@/store/pokemon/actions";
import { selectPokeList } from "@/store/pokemon/selector";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useInitialLoad() {
  const dispatch = useDispatch();
  const pokemonList = useSelector(selectPokeList);

  useEffect(() => {
    if (!pokemonList.length) {
      dispatch(getPokemonList());
    }
  }, [dispatch, pokemonList]);
}
