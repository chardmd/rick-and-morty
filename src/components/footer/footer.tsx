import { Box, Flex, chakra, Link } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      as="footer"
      borderTopWidth="1px"
      borderTopColor="gray.200"
      mt="8"
      py="4"
      textAlign="center"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        maxW="2xl"
        mx="auto"
      >
        <chakra.div fontSize="lg" mb="2">
          Repo:{" "}
          <Link
            color="purple.300"
            href="https://github.com/chardmd/rick-and-morty"
            target="_blank"
          >
            https://github.com/chardmd/rick-and-morty
          </Link>
        </chakra.div>{" "}
        <chakra.div fontSize="lg" mb="2">
          Made by{" "}
          <chakra.span color="purple.200" fontWeight="bold"></chakra.span>
          <Link
            color="cyan"
            href="https://chardmd.com"
            fontWeight="bold"
            target="_blank"
          >
            Richard Dimalanta
          </Link>{" "}
          👷
        </chakra.div>
      </Flex>
    </Box>
  );
};

export default Footer;
