import axios from "axios";

import type { Pokemon} from '../types/Pokemon';

interface PokemonResponse {
    pokemons: Pokemon[] | null;
}

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})


export async function fetchPokemons() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon-species");
        return response.json();
    } catch (error) {
        console.error("Erro ao buscar pokemons:", error);
    }
}

export async function fetchPokemonById(id: string) {
    try {
        const response = await api.get<PokemonResponse>(`/${id}`);
        return response.data.pokemons?.[0] ?? null;
    } catch (error) {
        console.error("Erro ao buscar pokemon:", error);
    }
}