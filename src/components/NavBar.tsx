import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo}></Image>
      <Text>Navbar</Text>
    </HStack>
  );
};

export default NavBar;
