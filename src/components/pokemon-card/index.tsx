import type { Pokemon } from "../../types/Pokemon";
import { Card, Title, Image, Info } from "./styles";

export function PokemonCard({ name, image, types }: Pokemon) {

  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + " / " + types[1].type.name;
    }
    return types[0].type.name;
  }

 return (
      <Card>  
        <Image src={image}/>
        <Title>{name}</Title>
        <Info>
          {typeHandler()}
        </Info>
      </Card>
 )
} 