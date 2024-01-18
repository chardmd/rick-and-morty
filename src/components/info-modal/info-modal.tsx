"use client";

import { Item } from "@/types/item";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  Text,
  VStack,
  HStack,
  Badge,
  Divider,
} from "@chakra-ui/react";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  info: Item;
}

const InfoModal = ({ isOpen, onClose, info }: InfoModalProps) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent background="purple.400" borderRadius="md">
        <ModalHeader
          borderBottom="1px solid white"
          color="white"
          fontSize="3xl"
          textAlign="center"
        >
          {info.name}
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody padding={4}>
          <Image
            src={info.image}
            alt={info.name}
            style={{ marginBottom: "20px", width: "100%" }}
          />
          <VStack align="start" spacing={4}>
            <HStack spacing={4}>
              <Badge colorScheme="pink" fontSize="lg">
                {info.species}
              </Badge>
              <Badge colorScheme="green" fontSize="lg">
                {info.status}
              </Badge>
            </HStack>
            <Divider borderColor="white" />
            <Text fontSize="lg" color="white">
              <strong>Origin:</strong> {info.origin?.name || "Unknown"}
            </Text>
            <Text fontSize="lg" color="white">
              <strong>Type:</strong> {info.type || "Unknown"}
            </Text>
            <Text fontSize="lg" color="white">
              <strong>Gender:</strong> {info.gender || "Unknown"}
            </Text>
            <Text fontSize="lg" color="white">
              <strong>Location:</strong> {info.location?.name || "Unknown"}
            </Text>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default InfoModal;
