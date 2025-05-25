import { useEffect, useState } from "react"; 
import { Link, useParams } from "react-router-dom";
import { fetchPokemonById, fetchPokemonVariations } from "../../services/pokemonApi";
import { Box, IconPokemonDetails, InfoBox, MoveCard, MovesGrid, MoveTitle, StatBar, StatFill, VariationBox, VariationItem } from "./styles";
import { Container, Title } from "../home/styles";
import { Logo, NavBar, LogoLink } from "../../components/navbar/styles";
import { useScrollDirection } from "../../components/navbar";
import type { PokemonAPIResponse, PokemonVariation } from "../../types/Pokemon";

export const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState<PokemonAPIResponse | null>(null);
  const [variations, setVariations] = useState<PokemonVariation[]>([]);
  const [loading, setLoading] = useState(true);

  const scrollUp = useScrollDirection();

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchPokemonById(id);
        setPokemonData(data);

        const variationData = await fetchPokemonVariations(id)
        setVariations(variationData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]); 

  if (loading) return <div>Carregando...</div>;
  if (!pokemonData) return <div>Pokémon não encontrado.</div>;

  return (
    <>
      <NavBar $scrollUp={scrollUp}>
        <LogoLink to="/">
          <Logo src="/assets/pokeAPI.png" alt="Pokémon logo" /> {/* fazer quando clicar no icone voltar para home */}
        </LogoLink>
      </NavBar>

      <Container>
        <Title>{pokemonData.name} (#{pokemonData.id})</Title>
        <Box>
          {pokemonData.sprites.front_default ? (
            <IconPokemonDetails src={pokemonData.sprites.front_default}/>
          ) : (
            <>
              <IconPokemonDetails src="/assets/imagePokemonNotFound.png"/>
              <p>Imagem do Pokemon não disponível</p>
            </>
          )}
        </Box>
        <InfoBox>
          <p><strong>Altura:</strong> {pokemonData.height / 10} m</p>
          <p><strong>Peso:</strong> {pokemonData.weight / 10} kg</p>
          <p><strong>Tipo(s):</strong> {pokemonData.types.map((t: any) => t.type.name).join(" / ")}</p>
          <p><strong>Habilidades:</strong> {pokemonData.abilities.map((a: any) => a.ability.name).join(", ")}</p>

          <h3>Stats</h3>
          {pokemonData.stats.map((stat: any) => (
            <div key={stat.stat.name}>
              <p>{stat.stat.name}: {stat.base_stat}</p>
              <StatBar>
                <StatFill width={stat.base_stat} />
              </StatBar>
            </div>
          ))}
        </InfoBox>

        <InfoBox>
          <h3>Ataques</h3>
          {pokemonData.moves.length > 0 ? (
            <MovesGrid>
              {pokemonData.moves.map((move: any, index: number) => (
                <MoveCard key={index}>
                  <MoveTitle>
                    {move.move.name.replace(/-/g, ' ')}
                  </MoveTitle>  
                </MoveCard>
              ))}
            </MovesGrid>
          ) : (
            <p>Nenhum ataque encontrado.</p>
          )}
        </InfoBox>

        <InfoBox>
          <h3>Variações</h3>
          {variations.length > 1 ? (
            <VariationBox>
              {variations.map((v) => (
                <Link key={v.name} to={`/pokemon/${v.name}`}  style={{ textDecoration: "none", color: "inherit" }}>
                  <VariationItem>
                    <img
                      src={v.sprite || "/assets/imagePokemonNotFound.png"}
                      alt={v.name}
                      width={80}
                    />
                    <p>{v.name}</p>
                  </VariationItem>
                </Link>
              ))}
            </VariationBox>
          ) : (
            <p>Nenhuma variação encontrada.</p>
          )}
        </InfoBox>
      </Container>
    </>
  );
};
