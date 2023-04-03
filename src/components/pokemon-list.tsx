import { PokemonInterface } from "@/shared/interfaces/pokemon.interface";
import styles from "./pokemon-list.module.scss";
import Image from "next/image";

interface PokemonListProps {
  pokemonList: PokemonInterface[];
}

export default function PokemonList(props: PokemonListProps) {
  const { pokemonList } = props;
  console.log("pokemonList :>> ", pokemonList);

  return (
    <div className={styles.list}>
      {!!pokemonList?.length &&
        pokemonList.map((pokemon) => {
          const firstType = pokemon.types[0];
          const types = pokemon.types.join(" | ");

          return (
            <div key={pokemon.id} className={styles.wrapper}>
              <div className={styles.card__img}>
                <Image
                  // src={`https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`}
                  // objectFit="contain"
                  // layout="fill"
                  src={pokemon.image}
                  alt={pokemon.name}
                  height={96}
                  width={96}
                />
              </div>
              <div className={styles.card}>
                <div className={styles.card__type_background_wrapper}>
                  <div className={styles.card__type_background}>
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
                    <div>HP: {pokemon.hp}</div>
                    <div>Attack: {pokemon.attack}</div>
                    <div>Defense: {pokemon.defense}</div>
                    <div>Special Attack: {pokemon["special-attack"]}</div>
                    <div>Special Defense: {pokemon["special-defense"]}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
