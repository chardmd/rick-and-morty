import { useState, useEffect } from "react";
import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  Badge,
  useColorModeValue,
  Editable,
  EditablePreview,
  EditableInput,
} from "@chakra-ui/react";
import { JOB_TITLE_KEY, USERNAME_KEY } from "@/utils/constants";

interface StatsCardProps {
  title: string;
  stat: string;
  onStatChange: (newStat: string) => void;
  localStorageKey: string;
}

function StatsCard(props: StatsCardProps) {
  const { title, stat, onStatChange, localStorageKey } = props;

  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("purple.300", "purple.300")}
      rounded={"lg"}
      position="relative"
    >
      <Badge
        top={{ base: 2, md: 4 }}
        left={2}
        px={2}
        backgroundColor="purple.400"
        marginBottom={3}
      >
        {title}
      </Badge>
      <Editable
        textAlign="center"
        defaultValue={stat}
        cursor={"pointer"}
        _hover={{
          cursor: "pointer",
        }}
        onSubmit={(newValue) => {
          onStatChange(newValue);
          localStorage.setItem(localStorageKey, newValue);
        }}
      >
        <EditablePreview
          fontSize={"2xl"}
          fontWeight={"medium"}
          width={"100%"}
          _hover={{
            borderColor: "transparent",
            cursor: "pointer",
            backgroundColor: useColorModeValue("purple.500", "purple.500"),
          }}
        />
        <EditableInput
          fontSize={"2xl"}
          fontWeight={"medium"}
          _hover={{
            borderColor: "transparent",
          }}
        />
      </Editable>
    </Stat>
  );
}

const UserDetails = () => {
  const [username, setUsername] = useState(
    localStorage.getItem(USERNAME_KEY) || ""
  );
  const [jobTitle, setJobTitle] = useState(
    localStorage.getItem(JOB_TITLE_KEY) || ""
  );

  useEffect(() => {
    localStorage.setItem(USERNAME_KEY, username);
  }, [username]);

  useEffect(() => {
    localStorage.setItem(JOB_TITLE_KEY, jobTitle);
  }, [jobTitle]);

  return (
    <Box maxW="7xl" mx="auto" pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign="center" fontSize="4xl" fontWeight="bold" mb={5}>
        The Rick and Morty Show
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title="Username"
          stat={username}
          onStatChange={setUsername}
          localStorageKey={USERNAME_KEY}
        />
        <StatsCard
          title="Job Title"
          stat={jobTitle}
          onStatChange={setJobTitle}
          localStorageKey={JOB_TITLE_KEY}
        />
      </SimpleGrid>
    </Box>
  );
};

export default UserDetails;
