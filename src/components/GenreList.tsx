import {
  HStack,
  Image,
  List,
  ListItem,
  Text,
  Spinner,
  Button,
  Link,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface GenreProps {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: GenreProps) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image
              boxSize={9}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}></Image>
            <Button
              onClick={() => onSelectedGenre(genre)}
              fontSize={"large"}
              variant="link">
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
