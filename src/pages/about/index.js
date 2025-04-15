import {
  Text,
  useColorModeValue,
  VStack,
  Box,
  Container,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import HeroSection from "../../components/heroSection";

// Create a content component for the middle section
const AboutContent = () => {
  // Responsive values
  const headingSize = useBreakpointValue({ base: "2xl", md: "3xl", lg: "3xl" });
  const titleSize = useBreakpointValue({ base: "4xl", md: "6xl", lg: "8xl" });
  const textSize = useBreakpointValue({ base: "sm", md: "md" });
  const spacing = useBreakpointValue({ base: 6, md: 8 });
  const padding = useBreakpointValue({ base: 3, md: 4, lg: 6 });
  const lineWidth = useBreakpointValue({ base: "40px", md: "60px" });
  const lineHeight = useBreakpointValue({ base: "1px", md: "2px" });
  const verticalLineWidth = useBreakpointValue({ base: "3px", md: "4px" });
  const verticalLineLeft = useBreakpointValue({ base: "-15px", md: "-20px" });
  const cardOffset = useBreakpointValue({ base: "3px", md: "4px" });

  return (
    <VStack
      align="flex-start"
      spacing={spacing}
      maxW="2xl"
      w="full"
      px={{ base: 4, md: 0 }}
    >
      <Box position="relative">
        <Text
          mb={0}
          fontSize={headingSize}
          fontWeight="bold"
          letterSpacing="0.1rem"
          lineHeight="1"
          className="poppins"
          color={useColorModeValue("#757575", "#A0A0A0")}
          textTransform="uppercase"
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            bottom: "-10px",
            left: "1",
            width: lineWidth,
            height: lineHeight,
            bg: useColorModeValue("#4f4f4f", "#F7F8FA"),
            opacity: 0.5,
          }}
        >
          <Text as={"span"} color={useColorModeValue("#4f4f4f", "#F7F8FA")}>
            Who
          </Text>{" "}
          I Am
        </Text>
      </Box>

      <Box position="relative" w="full">
        <Text
          fontSize={titleSize}
          fontWeight="bold"
          letterSpacing="tight"
          lineHeight="1"
          className="poppins"
          color={useColorModeValue("#4f4f4f", "#F7F8FA")}
          textTransform="uppercase"
          position="relative"
        >
          About Me
        </Text>
      </Box>

      <Box
        position="relative"
        w="full"
        p={padding}
        borderRadius="lg"
        bg={useColorModeValue(
          "rgba(79, 79, 79, 0.05)",
          "rgba(247, 248, 250, 0.05)"
        )}
        boxShadow="sm"
        _before={{
          content: '""',
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          borderRadius: "lg",
          border: "1px solid",
          borderColor: useColorModeValue(
            "rgba(79, 79, 79, 0.1)",
            "rgba(247, 248, 250, 0.1)"
          ),
          transform: `translate(${cardOffset}, ${cardOffset})`,
          zIndex: "-1",
        }}
        transition="all 0.3s ease"
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "md",
        }}
      >
        <Text
          fontSize={textSize}
          className="poppins"
          opacity={0.95}
          color={useColorModeValue("#060809", "#F7F8FA")}
          mb={1}
          style={{ transform: "translateX(0)" }}
          letterSpacing="0.05rem"
          lineHeight="1.8"
        >
          Hi, I'm Wilmarx — a passionate systems developer with a deep-rooted
          love for technology that goes way back. From a young age, I've always
          been fascinated by how things work behind the scenes, and that
          curiosity naturally led me to the world of development.
          <Box display={{ base: "none", md: "block" }}>
            <br />
          </Box>
          <Text as={"span"} display={{ base: "none", md: "inline-block" }}>
            I currently work full-time in IT, where I help build and maintain
            systems that make everyday operations smoother and more efficient.
            Whether I'm designing backend architecture, writing code, or solving
            tough technical challenges, I find purpose in creating reliable,
            smart solutions.
          </Text>
          <Box display={{ base: "none", md: "block" }}>
            <br />
          </Box>
          <Text as={"span"} display={{ base: "none", md: "inline-block" }}>
            My journey is driven by a desire to keep learning and evolving —
            because in tech, there's always something new to discover.
          </Text>
        </Text>
      </Box>

      <Flex
        w="full"
        justify="flex-end"
        mt={4}
        opacity={0.7}
        transition="opacity 0.3s ease"
        _hover={{ opacity: 1 }}
        display={{ base: "none", md: "flex" }}
      >
        <Text
          fontSize="xs"
          letterSpacing="0.2em"
          textTransform="uppercase"
          color={useColorModeValue("gray.600", "gray.400")}
          className="poppins-light"
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            bottom: "-2px",
            left: "0",
            width: "100%",
            height: "1px",
            bg: useColorModeValue("gray.600", "gray.400"),
            opacity: 0.5,
          }}
        >
          Passionate Developer
        </Text>
      </Flex>

      {/* Mobile version of the tag */}
      <Flex
        w="full"
        justify="center"
        mt={2}
        opacity={0.7}
        transition="opacity 0.3s ease"
        _hover={{ opacity: 1 }}
        display={{ base: "flex", md: "none" }}
      >
        <Text
          fontSize="xs"
          letterSpacing="0.2em"
          textTransform="uppercase"
          color={useColorModeValue("gray.600", "gray.400")}
          className="poppins-light"
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            bottom: "-2px",
            left: "0",
            width: "100%",
            height: "1px",
            bg: useColorModeValue("gray.600", "gray.400"),
            opacity: 0.5,
          }}
        >
          Passionate Developer
        </Text>
      </Flex>
    </VStack>
  );
};

// Create a new component with the HeroSection HOC
const HeroWithContent = HeroSection(AboutContent);

const About = () => {
  return (
    <HeroWithContent
      footerHead="Projects I've "
      footerBody="Worked on"
      footerSub="Click to view"
      navigateTo="/projects"
    />
  );
};

export default About;
