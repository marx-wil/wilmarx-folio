import { Text, VStack, useColorModeValue } from "@chakra-ui/react";

const HeroHeader = ({ title, subtitle, highlightText }) => {
  const titleColor = useColorModeValue("#757575", "#A0A0A0");
  const subtitleColor = useColorModeValue("#4f4f4f", "#F7F8FA");
  const highlightColor = useColorModeValue("blue.500", "blue.300");
  const highlightBgColor = useColorModeValue("blue.100", "blue.900");

  return (
    <VStack align="flex-start" spacing={4}>
      <Text
        mb={0}
        fontSize={{ base: "2xl", md: "3xl", lg: "3xl" }}
        fontWeight="bold"
        letterSpacing="0.1rem"
        lineHeight="1"
        className="poppins"
        color={titleColor}
        textTransform="uppercase"
      >
        {title}
      </Text>
      <Text
        fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
        fontWeight="bold"
        letterSpacing="tight"
        lineHeight="1"
        className="poppins"
        color={subtitleColor}
        textTransform="uppercase"
      >
        {subtitle}
        <Text
          as="span"
          position="relative"
          color={highlightColor}
          _after={{
            content: '""',
            position: "absolute",
            bottom: "10%",
            left: "-2%",
            width: "104%",
            height: "8px",
            bg: highlightBgColor,
            opacity: 0.3,
            zIndex: -1,
          }}
        >
          {highlightText}
        </Text>
      </Text>
    </VStack>
  );
};

export default HeroHeader;
