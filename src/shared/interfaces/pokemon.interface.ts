import { fetchStatus } from "@/shared/types/fetch-status.type";

export interface PokemonInterface {
  id: number;
  name: string;
  image: string;
  types: string[];
  hp: number;
  attack: number;
  defense: number;
  ["special-attack"]: number;
  ["special-defense"]: number;
  // Include more information here
}

export interface PokemonStateInterface {
  pokemonList: PokemonInterface[];
  pokemonTeam: PokemonInterface[];
  pokemonSearchList: PokemonInterface[];
  pokemonSearchTerm: string;
  fetchStatus: fetchStatus;
  error: string;
}

export interface PokemonApiResponse {
  name: string;
  url: string;
}

// More interfaces here https://github.com/mudkipme/pokeapi-v2-typescript/blob/master/index.d.ts
interface PokemonSprites {
  /** The default depiction of this Pokémon from the front in battle. */
  front_default: string;
  /** The shiny depiction of this Pokémon from the front in battle. */
  front_shiny: string;
  /** The female depiction of this Pokémon from the front in battle. */
  front_female: string;
  /** The shiny female depiction of this Pokémon from the front in battle. */
  front_shiny_female: string;
  /** The default depiction of this Pokémon from the back in battle. */
  back_default: string;
  /** The shiny depiction of this Pokémon from the back in battle. */
  back_shiny: string;
  /** The female depiction of this Pokémon from the back in battle. */
  back_female: string;
  /** The shiny female depiction of this Pokémon from the back in battle. */
  back_shiny_female: string;
}

/** Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon.  Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail. */
export interface Pokemon {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The base experience gained for defeating this Pokémon. */
  base_experience: number;
  /** The height of this Pokémon in decimetres. */
  height: number;
  /** Set for exactly one Pokémon used as the default for each species. */
  is_default: boolean;
  /** Order for sorting. Almost national order, except families are grouped together. */
  order: number;
  /** The weight of this Pokémon in hectograms. */
  weight: number;
  /** A list of abilities this Pokémon could potentially have. */
  abilities: [];
  /** A list of forms this Pokémon can take on. */
  forms: [];
  /** A list of game indices relevent to Pokémon item by generation. */
  game_indices: [];
  /** A list of items this Pokémon may be holding when encountered. */
  held_items: [];
  /** A link to a list of location areas, as well as encounter details pertaining to specific versions. */
  location_area_encounters: string;
  /** A list of moves along with learn methods and level details pertaining to specific version groups. */
  moves: [];
  /** A set of sprites used to depict this Pokémon in the game. A visual representation of the various sprites can be found at <a href='https://github.com/PokeAPI/sprites#sprites'>PokeAPI/sprites</a> */
  sprites: PokemonSprites;
  /** The species this Pokémon belongs to. */
  species: string;
  /** A list of base stat values for this Pokémon. */
  stats: PokemonStat[];
  /** A list of details showing types this Pokémon has. */
  types: PokemonType[];
}

export interface PokemonType {
  /** The order the Pokémon's types are listed in. */
  slot: number;
  /** The type the referenced Pokémon has. */
  type: NamedAPIResource;
}

export interface PokemonStat {
  /** The stat the Pokémon has. */
  stat: NamedAPIResource;
  /** The effort points (EV) the Pokémon has in the stat. */
  effort: number;
  /** The base value of the stat. */
  base_stat: number;
}

interface NamedAPIResource {
  name: string;
  url: string;
}
