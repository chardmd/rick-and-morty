import React from "react";
import { Button, Flex } from "@chakra-ui/react";

interface PaginationProps {
  handlePreviousPage: () => void;
  handleNextPage: () => void;
}

const Pagination = ({
  handlePreviousPage,
  handleNextPage,
}: PaginationProps) => {
  return (
    <Flex
      justifyContent="flex-end"
      minWidth="300px"
      maxW="1200px"
      mx="auto"
      marginTop={30}
      paddingRight={5}
    >
      <Button onClick={handlePreviousPage} colorScheme="purple" marginRight={2}>
        Previous
      </Button>
      <Button onClick={handleNextPage} colorScheme="purple">
        Next
      </Button>
    </Flex>
  );
};

export default Pagination;
