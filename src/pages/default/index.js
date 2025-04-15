import {
  Box,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Container,
  Link,
  Show,
  Flex,
} from "@chakra-ui/react";
import Nav from "../../components/navigation";

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
                  fontSize={{ base: "3xl", md: "4xl" }}
                  fontWeight="medium"
                  letterSpacing="wider"
                  className="poppins"
                  color={useColorModeValue("#060809", "#F7F8FA")}
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
                  right="-80px"
                  top="50%"
                  transform="translateY(-50%)"
                  w="60px"
                  h="2px"
                  bg={useColorModeValue("#060809", "#F7F8FA")}
                >
                  <Box
                    position="absolute"
                    right="-1px"
                    top="50%"
                    w="12px"
                    h="2px"
                    bg={useColorModeValue("#060809", "#F7F8FA")}
                    transform="rotate(45deg)"
                    transformOrigin="right center"
                  />
                  <Box
                    position="absolute"
                    right="-1px"
                    top="50%"
                    w="12px"
                    h="2px"
                    bg={useColorModeValue("#060809", "#F7F8FA")}
                    transform="rotate(-45deg)"
                    transformOrigin="right center"
                  />
                </Box>
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
