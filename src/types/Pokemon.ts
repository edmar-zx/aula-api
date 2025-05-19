
// Interface para a resposta da lista de Pokémon
export interface PokemonListResponse {
  count: number; // Total de Pokémon disponíveis
  next: string | null; // URL para a próxima página de resultados
  previous: string | null; // URL para a página anterior de resultados
  results: NamedAPIResource[]; // Lista de Pokémon com nome e URL
}

// Interface para um recurso nomeado (usado em várias partes da API)
export interface NamedAPIResource {
  name: string; // Nome do Pokémon ou recurso
  url: string; // URL para os detalhes do Pokémon ou recurso
}

// Interface para os detalhes de um Pokémon individual
export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  is_default: boolean;
  abilities: Ability[];
  forms: NamedAPIResource[];
  game_indices: GameIndex[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Move[];
  species: NamedAPIResource;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
}

// Interfaces auxiliares para os detalhes de um Pokémon
export interface Ability {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
}

export interface GameIndex {
  game_index: number;
  version: NamedAPIResource;
}

export interface HeldItem {
  item: NamedAPIResource;
  version_details: VersionDetail[];
}

export interface VersionDetail {
  rarity: number;
  version: NamedAPIResource;
}

export interface Move {
  move: NamedAPIResource;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
}

export interface Sprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other?: Record<string, any>;
  versions?: Record<string, any>;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

export interface Type {
  slot: number;
  type: NamedAPIResource;
}
