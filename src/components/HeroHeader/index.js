import { Text, VStack, useColorModeValue } from "@chakra-ui/react";

const HeroHeader = ({ title, subtitle, highlightText }) => {
  const titleColor = useColorModeValue("gray.500", "gray.400");
  const subtitleColor = useColorModeValue("gray.800", "gray.200");
  const highlightColor = useColorModeValue("blue.600", "blue.400");
  const highlightUnderlineColor = useColorModeValue(
    "blackAlpha.800",
    "whiteAlpha.800"
  );

  return (
    <VStack align="flex-start" spacing={{ base: 3, md: 4, lg: 5 }}>
      <Text
        mb={0}
        fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
        fontWeight="bold"
        letterSpacing="0.15rem"
        lineHeight="1.1"
        className="poppins"
        color={titleColor}
        textTransform="uppercase"
        opacity={0.8}
        _before={{
          content: '""',
          position: "absolute",
          left: "-20px",
          top: "50%",
          width: "12px",
          height: "2px",
          bg: titleColor,
          transform: "translateY(-50%)",
          opacity: 0.6,
        }}
        position="relative"
      >
        {title}
      </Text>
      <Text
        fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "7xl", xl: "8xl" }}
        fontWeight="black"
        letterSpacing="tight"
        lineHeight="0.9"
        className="poppins"
        color={subtitleColor}
        textTransform="uppercase"
        bgGradient={useColorModeValue(
          "linear(to-r, gray.800, gray.600)",
          "linear(to-r, gray.200, gray.400)"
        )}
        bgClip="text"
        _hover={{
          bgGradient: useColorModeValue(
            "linear(to-r, gray.700, gray.500)",
            "linear(to-r, gray.300, gray.500)"
          ),
        }}
        transition="all 0.3s ease"
      >
        {subtitle}
        <Text
          as="span"
          position="relative"
          color={highlightColor}
          bgGradient={useColorModeValue(
            "linear(to-r, blue.600, purple.600)",
            "linear(to-r, blue.400, purple.400)"
          )}
          bgClip="text"
          _after={{
            content: '""',
            position: "absolute",
            bottom: "8%",
            left: "-1%",
            width: "102%",
            height: "12px",
            bg: highlightUnderlineColor,
            opacity: 0.4,
            zIndex: -1,
            borderRadius: "full",
            transform: "skew(-2deg)",
          }}
          _before={{
            content: '""',
            position: "absolute",
            bottom: "8%",
            left: "-1%",
            width: "102%",
            height: "4px",
            bg: highlightColor,
            opacity: 0.8,
            zIndex: -1,
            borderRadius: "full",
            transform: "skew(-2deg)",
          }}
        >
          {highlightText}
        </Text>
      </Text>
    </VStack>
  );
};

export default HeroHeader;
