import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Image,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import Overlay from "./overlay";
import { JOB_TITLE_KEY, USERNAME_KEY } from "@/utils/constants";
import { useRouter } from "next/navigation";

const OnboardingModal = () => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const initialRef = useRef<HTMLInputElement | null>(null);
  const jobTitleRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const handleNext = useCallback(() => {
    if (step === 1 && username.trim() !== "") {
      setStep(2);
    } else if (step === 2 && jobTitle.trim() !== "") {
      localStorage.setItem(USERNAME_KEY, username);
      localStorage.setItem(JOB_TITLE_KEY, jobTitle);
      onClose();
      router.push("/info");
    }
  }, [step, username, jobTitle, onClose, router]);

  const handleBack = useCallback(() => {
    if (step === 2) {
      setStep(1);
    }
  }, [step, setStep]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" && event.keyCode === 13) {
        event.preventDefault();
        handleNext();
      }
    },
    [handleNext]
  );

  useEffect(() => {
    if (step === 2 && jobTitleRef.current) {
      jobTitleRef.current.focus();
    }
  }, [step]);

  return (
    <Modal
      isCentered
      closeOnOverlayClick={false}
      initialFocusRef={initialRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Overlay />
      <ModalContent
        borderRadius="md"
        p={4}
        textAlign="center"
        position="relative"
      >
        <Image
          src="/da-vinci.png"
          alt="Leo Da Vinci"
          borderRadius="md"
          minHeight={250}
          mb={4}
        />
        <ModalHeader fontSize="xl">Welcome, Lets get started!</ModalHeader>
        <ModalBody pb={6}>
          {step === 1 && (
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                ref={initialRef}
                placeholder="leonardothegreat12"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKeyDown}
                focusBorderColor="purple.300"
              />
            </FormControl>
          )}
          {step === 2 && (
            <FormControl>
              <FormLabel>Job Title</FormLabel>
              <Input
                ref={jobTitleRef}
                placeholder="Wizard of OZ"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                onKeyDown={handleKeyDown}
                focusBorderColor="purple.300"
              />
            </FormControl>
          )}
        </ModalBody>
        <ModalFooter>
          {step === 2 && (
            <Button variant="outline" mr={3} onClick={handleBack} tabIndex={1}>
              Back
            </Button>
          )}
          <Button
            colorScheme="purple"
            isDisabled={
              (step === 1 && username.trim() === "") ||
              (step === 2 && jobTitle.trim() === "")
            }
            onClick={handleNext}
            tabIndex={0}
          >
            {step === 1 ? "Next" : "Save"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OnboardingModal;
