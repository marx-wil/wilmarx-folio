import {
  Box,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Container,
  Link,
  Show,
  Hide,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";

const Default = () => {
  return (
    <Box position="relative" h="100dvh" w="100vw">
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
              className="poppins-light"
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
                color={useColorModeValue("#4F4F4F", "#F7F8FA")}
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
                color={useColorModeValue("#060809", "#4F4F4F")}
                >
                  Wilmarx John Cayabyab
                </Text>
                <Text
                  fontSize="xs"
                  className="poppins-light"
                color={useColorModeValue("#4F4F4F", "#F7F8FA")}
                >
                  IT / Systems Developer
                </Text>
              </Box>
              <HStack spacing={4}>
                {/* GitHub */}
                <Show above="md">
                  <Link className="poppins-light" href="#" fontSize="sm">
                    @github
                  </Link>
                </Show>
                <Hide above="md">
                  <Link href="#" display="flex" alignItems="center">
                    <FaGithub size={20} />
                  </Link>
                </Hide>

                {/* Instagram */}
                <Show above="md">
                  <Link className="poppins-light" href="#" fontSize="sm">
                    @instagram
                  </Link>
                </Show>
                <Hide above="md">
                  <Link href="#" display="flex" alignItems="center">
                    <FaInstagram size={20} />
                  </Link>
                </Hide>

                {/* Facebook */}
                <Show above="md">
                  <Link className="poppins-light" href="#" fontSize="sm">
                    @facebook
                  </Link>
                </Show>
                <Hide above="md">
                  <Link href="#" display="flex" alignItems="center">
                    <FaFacebook size={20} />
                  </Link>
                </Hide>

                {/* LinkedIn */}
                <Show above="md">
                  <Link className="poppins-light" href="#" fontSize="sm">
                    @linkedin
                  </Link>
                </Show>
                <Hide above="md">
                  <Link href="#" display="flex" alignItems="center">
                    <FaLinkedin size={20} />
                  </Link>
                </Hide>
              </HStack>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Default;
