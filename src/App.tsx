import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
        xl: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
        xl: "300px 1fr",
      }}>
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding={10}>
          <GenreList
            onSelectedGenre={(genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={selectPlatform}
          onSelectedPlatform={(platform) =>
            setSelectedPlatform(platform)
          }></PlatformSelector>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
