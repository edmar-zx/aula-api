import axios from "axios";

import type { Pokemon} from '../types/Pokemon';

interface PokemonResponse {
    pokemons: Pokemon[] | null;
}

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})


export async function fetchPokemons(search = '') {
    try {
        const response = await api.get<PokemonResponse>(`?search=${search}`);
        return response.data.pokemons ?? [];
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