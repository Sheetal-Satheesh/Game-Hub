import { Badge } from "@chakra-ui/react";

interface CriticScoreProp {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProp) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="smaller" borderRadius={4} paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
