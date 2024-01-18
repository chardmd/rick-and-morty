"use client";

import { useState, useLayoutEffect, useCallback } from "react";
import { redirect } from "next/navigation";
import { JOB_TITLE_KEY, USERNAME_KEY } from "@/utils/constants";
import Navigation from "@/components/navigation";
import { Spinner, Flex } from "@chakra-ui/react";
import InfoModal from "@/components/info-modal";
import { Item } from "@/types/item";
import UserDetails from "@/components/user-details/user-details";
import Footer from "@/components/footer";
import CHARACTERS_QUERY from "@/graphql/characters-query";
import { useQuery } from "@apollo/client";
import Pagination from "@/components/pagination";
import Listing from "@/components/listing/listing";

export default function Info() {
  const [validCredentials, setValidCredentials] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<Item | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error } = useQuery(CHARACTERS_QUERY, {
    variables: { page: currentPage },
  });

  useLayoutEffect(() => {
    const credentials =
      localStorage.getItem(USERNAME_KEY) || localStorage.getItem(JOB_TITLE_KEY);

    if (!credentials) {
      setValidCredentials(false);
      redirect("/");
    } else {
      setValidCredentials(true);
    }
  }, []);

  const handleInfoItemClick = (item: Item) => {
    setSelectedInfo(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedInfo(null);
    setIsModalOpen(false);
  };

  const handleNextPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1);
  }, []);

  const handlePreviousPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }, [currentPage]);

  if (!validCredentials) {
    return (
      <Flex alignItems="center" justifyContent="center" minHeight="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="purple.500"
          size="xl"
        />
      </Flex>
    );
  }

  return (
    <>
      <Navigation />
      <UserDetails />
      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
      <Listing
        data={data}
        isLoading={loading}
        error={error}
        handleInfoItemClick={handleInfoItemClick}
      />
      {selectedInfo && (
        <InfoModal
          isOpen={isModalOpen}
          onClose={closeModal}
          info={selectedInfo}
        />
      )}
      <Footer />
    </>
  );
}
