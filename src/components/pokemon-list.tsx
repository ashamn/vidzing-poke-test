import { PokemonInterface } from "@/shared/interfaces/pokemon.interface";
import styles from "./pokemon-list.module.scss";
import Image from "next/image";

interface PokemonListProps {
  pokemonList: PokemonInterface[];
  pokemonTeam: PokemonInterface[];
  togglePokeSelection: (a: PokemonInterface) => void;
}

export default function PokemonList(props: PokemonListProps) {
  const { pokemonList, pokemonTeam, togglePokeSelection } = props;

  // console.log("pokemonList :>> ", pokemonList);
  console.log("pokemonTeam :>> ", pokemonTeam);

  return (
    <div className={styles.list}>
      {!!pokemonList?.length &&
        pokemonList.map((pokemon) => {
          const firstType = pokemon.types[0];
          const types = pokemon.types.join(" | ");
          const teamClass = pokemonTeam.find((poke) => poke.id === pokemon.id)
            ? styles.team_member
            : "";
          return (
            <div
              key={pokemon.id}
              className={`${styles.wrapper} ${teamClass}`}
              onClick={() => togglePokeSelection(pokemon)}
            >
              <div className={styles.card__img}>
                <Image
                  src={pokemon.image}
                  alt={pokemon.name}
                  height={120}
                  width={120}
                />
              </div>
              <div className={styles.card}>
                <div className={styles.card__type_background_wrapper}>
                  <div className={`${styles.card__type_background}`}>
                    <Image
                      src={`https://duiker101.github.io/pokemon-type-svg-icons/icons/${firstType}.svg`}
                      alt={firstType}
                      height={150}
                      width={150}
                    />
                  </div>
                </div>
                <div className={styles.card__text}>
                  <div className={styles.card__name}>{pokemon.name}</div>
                  <div className={styles.card__types}>{types}</div>
                  <div className={styles.card__stats}>
                    <div>
                      <span>HP</span> {pokemon.hp}
                    </div>
                    <div>
                      <span>Attack</span> {pokemon.attack}
                    </div>
                    <div>
                      <span>Defense</span> {pokemon.defense}
                    </div>
                    <div>
                      <span>Special Attack</span> {pokemon["special-attack"]}
                    </div>
                    <div>
                      <span>Special Defense</span> {pokemon["special-defense"]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
