import { Link } from "react-router-dom";
import type { Pokemon } from "../types/Pokemon";
import { Card, Title, Image } from "./PokemonCard.styles";

interface Props {
    pokemon: Pokemon;
}
// TAVA POKEMON.ID NO LINK
export function PokemonCard({ pokemon }: Props){
 return (
      <Card>
        <Link to={`/pokemon/${pokemon.id}`}/> 
        <Image
                src={pokemon.sprites.front_default ?? "default-image-url.png"}
        />
        <Title>{pokemon.name}</Title>
      </Card>
 )
}