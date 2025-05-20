import { Link } from "react-router-dom";
import type { Pokemon } from "../types/Pokemon";
import { Card, Title, Image, Info } from "./PokemonCard.styles";

/* interface Props {
    pokemon: Pokemon;
} */

export function PokemonCard({ name, image, types }: Pokemon) {

  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + " / " + types[1].type.name;
    }
    return types[0].type.name;
  }



 return (
      <Card>
        <Link to={`${"id"}`}/> 
        <Image src={image}/>
        <Title>{name}</Title>
        <Info>
          {typeHandler()}
        </Info>
      </Card>
 )
} 