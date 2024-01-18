import { Item } from "@/types/item";
import {
  Box,
  Heading,
  Text,
  Img,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

interface InfoItemProps {
  item: Item;
  openModal: () => void;
}

const InfoItem = ({ item, openModal }: InfoItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Center py={6}>
      <Box
        data-testid="info-item-box"
        w="xs"
        rounded={"sm"}
        my={5}
        mx={[0, 5]}
        overflow={"hidden"}
        bg="white"
        border={"1px"}
        borderColor="black"
        boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 #B794F4")}
        position="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        cursor={isHovered ? "pointer" : "auto"}
        onClick={() => {
          openModal();
        }}
      >
        <Box h={"200px"} borderBottom={"1px"} borderColor="black">
          <Img src={item.image} h="full" w="full" alt={item.name} />
          {isHovered && (
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bg="rgba(0, 0, 0, 0.3)"
              opacity={1}
              transition="opacity 0.3s"
            ></Box>
          )}
        </Box>
        <Box p={4}>
          <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
            {item.name}
          </Heading>
          <Text color={"purple.500"} noOfLines={2}>
            {item.species}
          </Text>
        </Box>
      </Box>
    </Center>
  );
};

export default InfoItem;
