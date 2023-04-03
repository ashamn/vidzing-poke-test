import { selectPokeList } from "@/store/pokemon/selector";
import { useSelector } from "react-redux";
import PokemonList from "../pokemon-list";
import styles from "./main.module.scss";

export default function Main() {
  const pokemonList = useSelector(selectPokeList);

  return (
    <div className={styles.main}>
      <PokemonList pokemonList={pokemonList} />
    </div>
  );
}
