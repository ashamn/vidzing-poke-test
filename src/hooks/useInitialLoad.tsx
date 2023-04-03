import { getPokemonList } from "@/store/pokemon/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useInitialLoad() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonList());
  }, [dispatch]);
}
