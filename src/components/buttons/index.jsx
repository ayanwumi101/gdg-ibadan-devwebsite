import { Box } from "@chakra-ui/react";
import { FC } from "react";

// interface iButtonProps {
//   btnText: string;
//   handleClick?: () => void;
//   background?: string;
//   color?: string;
//   marginTop?: string;
//   marginBottom?: string;
//   width?: string;
//   height?: string;
//   fontSize?: string;
//   lineHeight?: string;
//   fontWeight?: string;
//   padding?: string;
//   icon?: JSX.Element;
// }

const Buttons = () => ({
  btnText,
  handleClick,
  background,
  color,
  marginTop,
  marginBottom,
  width,
  height,
  fontSize,
  lineHeight,
  fontWeight,
  padding,
  icon,
}) => {
  return (
    
      <Box
        onClick={handleClick}
        color={"#FFF"}
        bg={"#E05D2F"}
        style={{
          backgroundColor: background,
          color: color,
          marginTop: marginTop,
          marginBottom: marginBottom,
          width: width,
          height: height,
          fontSize: fontSize,
          lineHeight: lineHeight,
          fontWeight: fontWeight,
          padding: padding,
        }}
        as="button"
        borderRadius="12px"
        p="13px 32px 13px 32px"
        fontSize="16px"
        fontWeight="500"
        lineHeight="20px"
      >
        {btnText}
      </Box>
    
  );
};

export default Buttons;
