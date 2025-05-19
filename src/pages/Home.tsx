
import { useEffect, useState } from "react";
import { Button, Container, Grid, Input, SearchBox, Title} from "./Home.styles";
import type { Pokemon } from "../types/Pokemon";
import { fetchPokemonByID } from "../services/pokemonApi";
import { PokemonCard } from "../components/PokemonCard";

export function Home(){
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const[search, setSearch] = useState('');

    const handleSearch = async () => {
        const result = await fetchPokemon(search);
        setPokemons(result);
    }

    useEffect(() => {
        fetchPokemon().then(setPokemons)

    }, [])

    return (
        <Container>
            <Title>Catálogo de Pokemons</Title>

            <SearchBox>
                <Input
                    type="text"
                    placeholder="Digite o nome do Pokemon..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button onClick={handleSearch}>Buscar</Button>
            </SearchBox>

            <Grid>
                {pokemons.map((pokemon) => (
                    <PokemonCard 
                        key={pokemon.id} 
                        pokemon={pokemon} 
                    />
                ))}
            </Grid>
        </Container>
    )
}
