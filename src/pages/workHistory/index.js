import { Text, useColorModeValue, VStack } from "@chakra-ui/react";
import HeroSection from "../../components/heroSection";

// Create a content component for the middle section
const WorkHistoryContent = () => {
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
        My Work
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
        History
      </Text>
    </VStack>
  );
};

// Create a new component with the HeroSection HOC
const HeroWithContent = HeroSection(WorkHistoryContent);

const WorkHistory = () => {
  return (
    <HeroWithContent
      footerHead="Would you like to"
      footerBody="Work with me?"
      footerSub="Click to view"
      navigateTo="/contact"
    />
  );
};

export default WorkHistory;
