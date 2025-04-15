import { Text, useColorModeValue, VStack } from "@chakra-ui/react";
import HeroSection from "../../components/heroSection";

// Create a content component for the middle section
const ProjectContent = () => {
  return (
    <VStack align="flex-start" spacing={4}>
      <Text
        mb={0}
        fontSize={{ base: "2xl", md: "3xl", lg: "3xl" }}
        fontWeight="bold"
        letterSpacing="0.1rem"
        lineHeight="1"
        className="poppins"
        color={useColorModeValue("#757575", "#A0A0A0")}
        textTransform="uppercase"
      >
        My Works
      </Text>
      <Text
        fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
        fontWeight="bold"
        letterSpacing="tight"
        lineHeight="1"
        className="poppins"
        color={useColorModeValue("#4f4f4f", "#F7F8FA")}
        textTransform="uppercase"
      >
        Projects
      </Text>
    </VStack>
  );
};

// Create a new component with the HeroSection HOC
const HeroWithContent = HeroSection(ProjectContent);

const Projects = () => {
  return (
    <HeroWithContent
      footerHead="A story about"
      footerBody="My Growth"
      footerSub="Click to view"
      navigateTo="/work-history"
    />
  );
};

export default Projects;
