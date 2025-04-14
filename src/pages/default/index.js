import {
  Box,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Container,
  Link,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const Default = () => {
  return (
    <Box position="relative" h="100vh" w="100vw">
      {/* Vertical Line */}
      <Box
        position="absolute"
        left="50px"
        top="0"
        bottom="0"
        width="1px"
        bg={useColorModeValue("#060809", "#F7F8FA")}
      />

      {/* Content Container */}
      <Container maxW="container.xl" h="full">
        <VStack h="full" align="stretch" justify="space-between" py={8}>
          {/* Top Section */}
          <Box pl={24}>
            <Text
              fontSize="sm"
              
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {/* current year */}
              &copy; {new Date().getFullYear()}
            </Text>
          </Box>

          {/* Middle Section */}
          <Box pl={24}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Text
                fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
                fontWeight="bold"
                letterSpacing="tight"
                lineHeight="1"
                className="poppins-semibold"
              >
                My Portfolio
              </Text>
            </motion.div>
          </Box>

          {/* Bottom Section */}
          <Box pl={24}>
            <HStack spacing={8}>
              <Box>
                <Text
                  fontSize="sm"
                  fontWeight="medium"
                  className="poppins-light"
                >
                  Wilmarx John Cayabyab
                </Text>
                <Text
                  fontSize="xs"
                  className="poppins-light"
                  color={useColorModeValue("gray.600", "gray.400")}
                >
                  IT / Systems Developer
                </Text>
              </Box>
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
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Default;
