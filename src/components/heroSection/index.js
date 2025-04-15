import {
  Box,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Container,
  Flex,
} from "@chakra-ui/react";
import Nav from "../../components/navigation";
import SocialLinksLg from "../../components/socialLinksLg";
const HeroSectionWithSocialLinks = () => {
  return (
    <Box position="relative" h="100dvh" w="100vw">
      {/* Vertical line */}
      <Box
        position="absolute"
        left="10vw"
        top="0"
        bottom="0"
        width="1px"
        bg={useColorModeValue("#4F4F4F", "#F7F8FA")}
      />
      {/* Navigation */}
      <Nav />

      {/* Main Content */}
      <Container maxW="container.xl" h="full">
        <VStack h="full" align="stretch" justify="space-between" py={8}>
          {/* Top Section */}
          <Box pl={{ base: 8, md: 24 }}>
            <Text
              fontSize="sm"
              className="poppins-light"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              &copy; {new Date().getFullYear()}
            </Text>
          </Box>

          {/* Middle Section */}
          <Box pl={{ base: 8, md: 24 }}>
            <Text
              fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
              fontWeight="bold"
              letterSpacing="tight"
              lineHeight="1"
              className="poppins"
              color={useColorModeValue("#4f4f4f", "#F7F8FA")}
            >
              My Portfolio
            </Text>
          </Box>

          {/* Bottom Section */}
          <Box pl={{ base: 8, md: 24 }}>
            <HStack spacing={8} justify="space-between">
              <Box position="relative">
                <Text
                  fontSize="sm"
                  fontWeight="light"
                  className="poppins-light"
                  color={useColorModeValue("#060809", "#F7F8FA")}
                  mb={1}
                >
                  Cayabyab
                </Text>
                <Text
                  fontSize={{ base: "2xl", md: "4xl" }}
                  fontWeight="bold"
                  letterSpacing="wider"
                  className="poppins"
                  color={useColorModeValue("#4F4F4F", "#D0D0D0")}
                  mb={1}
                >
                  Wilmarx John
                </Text>
                <Flex w="full" justify="flex-end">
                  <Text
                    fontSize="xs"
                    letterSpacing="0.2em"
                    textTransform="uppercase"
                    color={useColorModeValue("gray.600", "gray.400")}
                    className="poppins-light"
                  >
                    IT / Systems Developer
                  </Text>
                </Flex>
                <Box
                  position="absolute"
                  right={{ base: "-40px", sm: "-60px", md: "-80px" }}
                  top="50%"
                  transform="translateY(-50%)"
                  w={{ base: "30px", sm: "45px", md: "60px" }}
                  h={{ base: "1.5px", md: "2px" }}
                  bg={useColorModeValue("#060809", "#F7F8FA")}
                >
                  <Box
                    position="absolute"
                    right="-1px"
                    top="50%"
                    w={{ base: "8px", sm: "10px", md: "12px" }}
                    h={{ base: "1.5px", md: "2px" }}
                    bg={useColorModeValue("#060809", "#F7F8FA")}
                    transform="rotate(45deg)"
                    transformOrigin="right center"
                  />
                  <Box
                    position="absolute"
                    right="-1px"
                    top="50%"
                    w={{ base: "8px", sm: "10px", md: "12px" }}
                    h={{ base: "1.5px", md: "2px" }}
                    bg={useColorModeValue("#060809", "#F7F8FA")}
                    transform="rotate(-45deg)"
                    transformOrigin="right center"
                  />
                </Box>
              </Box>
              {/* Social Links - Only visible on desktop */}
              <SocialLinksLg />
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default HeroSectionWithSocialLinks;
