import { PokemonInterface } from "@/shared/interfaces/pokemon.interface";
import styles from "./team.module.scss";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DraggingStyle,
  NotDraggingStyle,
  DropResult,
} from "react-beautiful-dnd";
import Image from "next/image";
import Button from "./ui/button";

interface TeamProps {
  pokemonTeam: PokemonInterface[];
  removeMember: (a: PokemonInterface) => void;
  changeOrder: (a: PokemonInterface[]) => void;
  submitTeam: () => void;
}

export default function Team(props: TeamProps) {
  const { pokemonTeam, removeMember, changeOrder, submitTeam } = props;

  const getItemStyle = (
    isDragging: boolean,
    draggableStyle: DraggingStyle | NotDraggingStyle | undefined
  ) => ({
    padding: 16,
    margin: `0 8px 0 0`,
    ...draggableStyle,
  });

  const reorder = (
    list: PokemonInterface[],
    startIndex: number,
    endIndex: number
  ) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const pokemons = reorder(
      pokemonTeam,
      result.source.index,
      result.destination.index
    );

    changeOrder(pokemons);
  };

  return (
    <div className={styles.main}>
      <div>
        <Button classes="submit" onClick={submitTeam}>
          Submit Team
        </Button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              className={`${styles.droppable} ${
                snapshot.isDraggingOver ? "dragging" : ""
              }`}
              {...provided.droppableProps}
            >
              {!!pokemonTeam?.length &&
                pokemonTeam.map((pokemon, index) => (
                  <div key={pokemon.id} className={styles.wrapper}>
                    <Draggable
                      draggableId={pokemon.id.toString()}
                      index={index}
                      key={pokemon.id}
                    >
                      {(provided, snapshot) => {
                        return (
                          <div>
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              )}
                            >
                              <div className={styles.pokemon}>
                                <Image
                                  src={pokemon.image}
                                  alt={pokemon.name}
                                  height={120}
                                  width={120}
                                />
                                <div className={styles.pokemon__text}>
                                  <span className={styles.pokemon__name}>
                                    {pokemon.name}
                                  </span>
                                  <div className={styles.remove}>
                                    <Button
                                      onClick={() => removeMember(pokemon)}
                                    >
                                      Remove
                                    </Button>
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
                                    src="https://raw.githubusercontent.com/gist/Galadirith/baaf38c7286b568973cc50a50ff57f4d/raw/34d60cae491bc505c212398b94f12705665c12fc/pokeball.svg"
                                    alt={pokemon.name}
                                    height={120}
                                    width={120}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }}
                    </Draggable>
                  </div>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
