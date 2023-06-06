import { Box, transform } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React, { useState } from "react";

const BDiv = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        width="2rem"
        height="0.25rem"
        borderRadius="10px"
        transformOrigin="1px"
        transition="all 0.3s linear"
        backgroundColor={open ? "#fff" : "#fff"}
        css={css`
          &:nth-child(1) {
            transform: ${open ? "rotate(45deg)" : "rotate(0)"};
          }

          &:nth-child(2) {
            transform: ${open ? "translateX(100%)" : "translateX(0)"};
            opacity: ${open ? 0 : 1};
          }

          &:nth-child(3) {
            transform: ${open ? "rotate(-45deg)" : "rotate(0)"};
          }
        `}
      />
    </>
  );
};

export default BDiv;
