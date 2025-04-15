import { Text, useColorModeValue, VStack } from "@chakra-ui/react";
import HeroSection from "../../components/heroSection";

// Create a content component for the middle section
const ContactContent = () => {
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
        Get in Touch
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
        Contact
      </Text>
    </VStack>
  );
};

// Create a new component with the HeroSection HOC
const HeroWithContent = HeroSection(ContactContent);

const Contact = () => {
  return (
    <HeroWithContent
      footerHead="Go back to"
      footerBody="Root of Website"
      footerSub="Click to go back"
      navigateTo="/"
    />
  );
};

export default Contact;
