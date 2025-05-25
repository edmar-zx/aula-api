export interface PokemonType {
  type: {
    name: string;
  };
}

// Usado para cards simples (nome, imagem, tipo)
export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: PokemonType[];
}
export interface PokemonVariation {
  name: string;
  sprite: string;
}

// Resposta completa da API da PokéAPI
export interface PokemonAPIResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    other: any;
    front_default: string;
  };
  types: PokemonType[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  moves: {
    move: {
      name: string;
    };
  }[];
}