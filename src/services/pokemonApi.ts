import axios from "axios";
import type { PokemonAPIResponse } from "../types/Pokemon";

// Busca a lista de nomes + URLs dos pokémons com paginação
export async function fetchPokemonList(limit: number = 0, offset: number = 0): Promise<{ name: string; url: string }[]> {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  return response.data.results; // array de { name, url }
}

// Busca os detalhes de um único Pokémon (por ID ou nome)
export async function fetchPokemonById(id: string | number): Promise<PokemonAPIResponse> {
  const response = await axios.get<PokemonAPIResponse>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.data;
}

// Busca os detalhes completos de uma lista de pokémons a partir da lista de URLs
export async function fetchPokemonDetailsList(urls: string[]): Promise<PokemonAPIResponse[]> {
  const responses = await Promise.all(urls.map((url) => axios.get<PokemonAPIResponse>(url)));
  return responses.map((res) => res.data);
}

// Busca as variações de um Pokémon a partir do endpoint species
export async function fetchPokemonVariations(idOrName: string | number): Promise<{ name: string; sprite: string }[]> {
  try {
    // 1. Primeiro faz o fetch do Pokémon (variação ou não)
    const pokemonRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
    const speciesUrl = pokemonRes.data.species.url; // pega a URL da espécie base

    // 2. Busca a espécie base com base naquela URL
    const speciesRes = await axios.get(speciesUrl);
    const varietyList = speciesRes.data.varieties;

    // 3. Busca cada variação da espécie
    const variationData = await Promise.all(
      varietyList.map(async (v: any) => {
        const res = await axios.get(v.pokemon.url);
        return {
          name: res.data.name,
          sprite: res.data.sprites.front_default,
        };
      })
    );
    return variationData;
  } catch (error) {
    console.error("Erro ao buscar variações:", error);
    return [];
  }
}