import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Box,
  Flex,
  Text,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  Center,
} from "@chakra-ui/react";
import { JOB_TITLE_KEY, USERNAME_KEY } from "@/utils/constants";

const Navigation = () => {
  const router = useRouter();
  const [username, setUsername] = useState(localStorage.getItem(USERNAME_KEY));
  const [jobTitle, setJobTitle] = useState(localStorage.getItem(JOB_TITLE_KEY));

  const handleClearData = () => {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(JOB_TITLE_KEY);
    router.push("/");
  };

  const handleMenuButtonClick = () => {
    const storedUsername = localStorage.getItem(USERNAME_KEY);
    setUsername(storedUsername || "");

    const storedJobTitle = localStorage.getItem(JOB_TITLE_KEY);
    setJobTitle(storedJobTitle || "");
  };

  return (
    <>
      <Box bg={useColorModeValue("purple.300", "purple.400")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Rick and Morty ✨🧪</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Menu>
                <MenuButton
                  data-testid="menu-button"
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                  onClick={handleMenuButtonClick}
                >
                  <Avatar size={"sm"} src={"/da-vinci-avatar.png"} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar size={"2xl"} src={"/da-vinci-avatar.png"} />
                  </Center>
                  <br />
                  <Center>
                    <p>{username}</p>
                  </Center>
                  <Center>
                    <Text color={"purple.200"} fontSize={"sm"}>
                      {jobTitle}
                    </Text>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem onClick={handleClearData} justifyContent={"center"}>
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navigation;
