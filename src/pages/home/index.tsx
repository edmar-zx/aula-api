import { ButtonSeeMore, CardWrapper, Container, Grid, SpaceSeeMore, Title } from "./styles";
import { PokemonCard } from "../../components/pokemon-card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {fetchPokemonList, fetchPokemonDetailsList} from "../../services/pokemonApi";
import type { PokemonAPIResponse } from "../../types/Pokemon";
import { Button, Input, Logo, NavBar, SearchBox } from "../../components/navbar/styles";
import { useScrollDirection } from "../../components/navbar";

export function Home() {
  const [allPokemonList, setAllPokemonList] = useState<{ name: string; url: string }[]>([]);
  const [displayPokemons, setDisplayPokemons] = useState<PokemonAPIResponse[]>([]);
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const batchSize = 60; // Quantidade de pokemons que aparecem cada vez que o botão ver mais é apertado

  const navigate = useNavigate();
  const scrollUp = useScrollDirection();

 useEffect(() => {
  async function loadAllPokemonList() {
    try {
      const list = await fetchPokemonList(1302, 0);
      setAllPokemonList(list);
      // Só carregue os primeiros 60 se a lista de exibição estiver vazia
      if (displayPokemons.length === 0) {
        loadMorePokemons(list, 0);
      }
    } catch (error) {
      console.error("Erro ao buscar lista completa:", error);
    }
  }
  loadAllPokemonList();
}, []);

 async function loadMorePokemons(list: { name: string; url: string }[], currentOffset: number) {
  setIsLoadingMore(true);
  try {
    const nextBatch = list.slice(currentOffset, currentOffset + batchSize);
    const urls = nextBatch.map((p) => p.url);
    const detailedPokemons = await fetchPokemonDetailsList(urls);

    setDisplayPokemons((prev) => {
      const existingIds = new Set(prev.map(p => p.id));
      const newPokemons = detailedPokemons.filter(p => !existingIds.has(p.id));
      return [...prev, ...newPokemons];
    });
    setOffset(currentOffset + batchSize);
  } catch (error) {
    console.error("Erro ao carregar mais pokémons:", error);
  } finally {
    setIsLoadingMore(false);
  }
}

const handleSearch = async (name: string) => {
  setSearchTerm(name);

  if (name.trim() === "") {
    // Se já estivermos no estado inicial, não faça nada
    if (offset === batchSize && displayPokemons.length === batchSize) return;

    // Volta para a lista paginada inicial
    setDisplayPokemons([]);
    setOffset(0);
    loadMorePokemons(allPokemonList, 0);
    return;
  }

  // Busca normal
  const filtered = allPokemonList.filter((p) =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );

  const filteredLimited = filtered.slice(0, 40);
  const urls = filteredLimited.map((p) => p.url);
  const detailedFiltered = await fetchPokemonDetailsList(urls);

  setDisplayPokemons(detailedFiltered);
};
  return (
    <>
      <NavBar $scrollUp={scrollUp}>
        <Logo src="../assets/pokeAPI.png" alt="Pokémon logo" />
        <SearchBox>
          <Input
            type="text"
            placeholder="Digite o nome do Pokémon..."
            onChange={(e) => handleSearch(e.target.value)}
            value={searchTerm}
          />
          <Button>Buscar</Button>
        </SearchBox>
      </NavBar>

      <Container>
        <Title>Pokédex</Title>
        <Grid>
          {displayPokemons.map((pokemon) => {
            const imageUrl = pokemon.sprites.front_default || "/assets/imagePokemonNotFound.png";
            
            return (
              <CardWrapper key={pokemon.id} onClick={() => navigate(`/pokemon/${pokemon.id}`)}>
                <PokemonCard
                  name={pokemon.name}
                  image={imageUrl}
                  types={pokemon.types}
                  id={pokemon.id}
                />
              </CardWrapper>
            );
          })}
        </Grid>
        {searchTerm.trim() === "" && offset < allPokemonList.length && (
        <SpaceSeeMore>
          <ButtonSeeMore disabled={isLoadingMore} onClick={() => loadMorePokemons(allPokemonList, offset)}>
            {isLoadingMore ? "Carregando..." : "Ver mais"}
          </ButtonSeeMore>
        </SpaceSeeMore>
        )}
      </Container>
    </>
  );
}