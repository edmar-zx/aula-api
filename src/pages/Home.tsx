

import { Button, Container, Grid, Input, SearchBox, Title} from "./Home.styles";
import { PokemonCard } from "../components/PokemonCard";
import axios from "axios";
import { useEffect, useState } from "react";
import type { Pokemon } from "../types/Pokemon";

export function Home(){

    const [pokemons , setPokemons] = useState<Pokemon[]>([]); // Define o estado inicial como um array vazio
    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = async() => {
        var endpoints = [];
        for(var i = 1; i < 50; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        }

        console.log(endpoints);
        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    }

    const pokemonFilter = (name: string) => {
        var filteredPokemons = [];

        if(name === ""){
            getPokemons();
        }
        for(var i in pokemons){
            if(pokemons[i].data.name.toLowerCase().includes(name.toLowerCase())){
                filteredPokemons.push(pokemons[i]);
            }
        }
        //console.log(filteredPokemons);
        setPokemons(filteredPokemons);
        
    }
  

    return (
        <Container>
            <Title>Catálogo de Pokemons</Title>

            <SearchBox>
                <Input 
                    type="text"
                    placeholder="Digite o nome do Pokemon..."
                    //value={search}
                    onChange={(e) => pokemonFilter(e.target.value)}
                />
                <Button>Buscar</Button>
            </SearchBox>

            <Grid>
                {pokemons.map((pokemon, key) => (
                   <Grid key={key}>
                        <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
