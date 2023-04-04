import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import styles from "./team.module.scss";
import Image from "next/image";
import { PokemonInterface } from "@/shared/interfaces/pokemon.interface";
import Button from "./ui/button";

interface TeamMemberProps {
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
  getItemStyle: Function;
  removeMember: Function;
  pokemon: PokemonInterface;
  pokeballSVG: string;
}

export default function TeamMember(props: TeamMemberProps) {
  const {
    provided,
    getItemStyle,
    pokemon,
    removeMember,
    snapshot,
    pokeballSVG,
  } = props;

  return (
    <div>
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={getItemStyle(provided.draggableProps.style)}
      >
        <div className={styles.pokemon}>
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            height={120}
            width={120}
          />
          <div className={styles.pokemon__text}>
            <span className={styles.pokemon__name}>{pokemon.name}</span>
            <div className={styles.remove}>
              <Button onClick={() => removeMember(pokemon)}>Remove</Button>
            </div>
          </div>
        </div>
        <div
          className={`${styles.background} ${
            snapshot.isDragging ? styles.dragging : ""
          }`}
        >
          <div className={styles.background__img}>
            <Image
              src={pokeballSVG}
              alt={pokemon.name}
              height={120}
              width={120}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
