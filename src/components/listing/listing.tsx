import React from "react";
import { SimpleGrid, Spinner, Box, Flex } from "@chakra-ui/react";
import { Item } from "@/types/item";
import InfoItem from "../info-item";

interface ListingProps {
  data: { characters?: { results: Item[] } };
  handleInfoItemClick: (item: Item) => void;
  isLoading?: boolean;
  error?: Error | undefined;
}

const Listing = ({
  data,
  handleInfoItemClick,
  isLoading,
  error,
}: ListingProps) => {
  if (error) {
    return (
      <Flex alignItems="center" justifyContent="center" minHeight="100vh">
        <p>
          Sorry, there was an error loading the data. Please try again later.
        </p>
      </Flex>
    );
  }

  return (
    <>
      {isLoading ? (
        <Box textAlign="center" py={4} minHeight="100vh">
          <Spinner size="lg" />
        </Box>
      ) : (
        <SimpleGrid
          columns={{ base: 2, md: 3, lg: 4 }}
          spacing={2}
          p={1}
          minWidth="300px"
          minHeight={"100vh"}
          maxW="1200px"
          mx="auto"
        >
          {data?.characters?.results.map((item: Item) => (
            <InfoItem
              key={item.id}
              item={item}
              openModal={() => handleInfoItemClick(item)}
            />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default Listing;
