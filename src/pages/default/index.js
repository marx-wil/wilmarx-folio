import {
  Box,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Container,
  Link,
  Show,
} from "@chakra-ui/react";
import Nav from "../../components/Nav";

const Default = () => {
  return (
    <Box position="relative" h="100dvh" w="100vw">
      {/* Vertical line */}
      <Box
        position="absolute"
        left="50px"
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
          <Box pl={24}>
            <Text
              fontSize="sm"
              className="poppins-light"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              &copy; {new Date().getFullYear()}
            </Text>
          </Box>

          {/* Middle Section */}
          <Box pl={24}>
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
          <Box pl={24}>
            <HStack spacing={8}>
              <Box>
                <Text
                  fontSize="sm"
                  fontWeight="medium"
                  className="poppins"
                  color={useColorModeValue("#060809", "#F7F8FA")}
                >
                  Wilmarx John Cayabyab
                </Text>
                <Text
                  fontSize="xs"
                  color={useColorModeValue("gray.600", "gray.400")}
                  className="poppins-light"
                >
                  IT / Systems Developer
                </Text>
              </Box>
              {/* Social Links - Only visible on desktop */}
              <Show above="md">
                <HStack spacing={4}>
                  <Link className="poppins-light" href="#" fontSize="sm">
                    @github
                  </Link>
                  <Link className="poppins-light" href="#" fontSize="sm">
                    @instagram
                  </Link>
                  <Link className="poppins-light" href="#" fontSize="sm">
                    @facebook
                  </Link>
                  <Link className="poppins-light" href="#" fontSize="sm">
                    @linkedin
                  </Link>
                </HStack>
              </Show>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Default;
