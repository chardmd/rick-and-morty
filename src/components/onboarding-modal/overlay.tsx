import React, { memo } from "react";
import { ModalOverlay } from "@chakra-ui/react";

const Overlay = memo(() => (
  <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
));
Overlay.displayName = "Overlay";

export default Overlay;
