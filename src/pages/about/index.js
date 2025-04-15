import {
  Text,
  useColorModeValue,
  VStack,
  Box,
  Image,
  Flex,
  useBreakpointValue,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import HeroSection from "../../components/heroSection";
import dev_avatar from "../../assets/me/myphoto.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const AboutContent = () => {
  // Responsive values
  const titleSize = useBreakpointValue({ base: "4xl", md: "4xl", lg: "6xl" });
  const textSize = useBreakpointValue({ base: "sm", md: "md" });
  const spacing = useBreakpointValue({ base: 6, md: 8 });
  
  const imageRef = useRef(null);

  const playSwingAnimation = () => {
    const imageContainer = imageRef.current;
    gsap.fromTo(imageContainer,
      { 
        rotation: 2,
        transformOrigin: "top center" 
      },
      {
        rotation: 0,
        duration: 2,
        ease: "elastic.out(1, 0.3)",
        transformOrigin: "top center"
      }
    );
  };

  useEffect(() => {
    playSwingAnimation();
  }, []);

  return (
    <VStack
      align="stretch"
      spacing={spacing}
      maxW="5xl"
      w="full"
      px={{ base: 4, md: 0 }}
      position="relative"
    >
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={24}
        w="full"
        alignItems="center"
      >
        <GridItem>
          <Text
            fontSize="sm"
            fontWeight="medium"
            color={useColorModeValue("gray.500", "gray.400")}
            letterSpacing="wider"
            textTransform="uppercase"
            mb={2}
          >
            Who I am
          </Text>

          <Text
            fontSize={titleSize}
            fontWeight="bold"
            lineHeight="1"
            className="poppins"
            color={useColorModeValue("#1A202C", "#F7F8FA")}
            mb={6}
          >
            About
            <Text
              as="span"
              color={useColorModeValue("blue.500", "blue.300")}
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                bottom: "15%",
                left: "-2%",
                width: "104%",
                height: "8px",
                bg: useColorModeValue("blue.100", "blue.900"),
                opacity: 0.3,
                zIndex: -1,
              }}
            >
              {" "}
              Me
            </Text>
          </Text>

          <Box
            bg={useColorModeValue("white", "gray.800")}
            p={6}
            borderRadius="xl"
            boxShadow="lg"
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              borderRadius: "xl",
              border: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              opacity: 0.5,
            }}
          >
            <VStack spacing={4} align="stretch">
              <Text
                className="poppins-light"
                fontSize={textSize}
                color={useColorModeValue("gray.700", "gray.300")}
                lineHeight="tall"
              >
                Hi, I'm Wilmarx — a passionate systems developer with a
                deep-rooted love for technology that goes way back. From a young
                age, I've always been fascinated by how things work behind the
                scenes, and that curiosity naturally led me to the world of
                development.
              </Text>

              {/* <Text
                fontSize={textSize}
                className="poppins-light"
                color={useColorModeValue("gray.700", "gray.300")}
                lineHeight="tall"
                display={{ base: "none", "3xl": "inline-block" }}
              >
                I currently work full-time in IT, where I help build and maintain
                systems that make everyday operations smoother and more efficient.
                Whether I'm designing backend architecture, writing code, or solving
                tough technical challenges, I find purpose in creating reliable,
                smart solutions.
              </Text> */}

              <Text
                className="poppins-light"
                fontSize={textSize}
                color={useColorModeValue("gray.700", "gray.300")}
                lineHeight="tall"
                display={{ base: "none", md: "inline-block" }}
              >
                My journey is driven by a desire to keep learning and evolving —
                because in tech, there's always something new to discover.
              </Text>
            </VStack>
          </Box>
        </GridItem>

        {/* Right column - Image with minimal design */}
        <GridItem display={{ base: "none", md: "block" }} alignSelf="center" position="relative">
          <Box
            ref={imageRef}
            position="relative"
            padding="3"
            cursor="pointer"
            onMouseEnter={playSwingAnimation}
            onClick={playSwingAnimation}
            _before={{
              content: '""',
              position: "absolute",
              inset: "0",
              borderRadius: "2xl",
              padding: "1px",
              background: useColorModeValue(
                "linear-gradient(135deg, #63B3ED44, #4299E122)",
                "linear-gradient(135deg, #63B3ED22, #4299E111)"
              ),
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          >
            <Image 
              src={dev_avatar} 
              alt="Wilmarx" 
              width="100%"
              height="auto"
              maxH="500px"
              objectFit="cover"
              borderRadius="xl"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-4px)",
              }}
            />
          </Box>
        </GridItem>
      </Grid>

      {/* Footer tag */}
      <Flex justify="flex-end" mt={4}>
        <Box
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            top: "50%",
            right: "100%",
            width: "30px",
            height: "1px",
            bg: useColorModeValue("gray.300", "gray.600"),
            marginRight: "10px",
          }}
        >
          <Text
            fontSize="xs"
            letterSpacing="0.2em"
            textTransform="uppercase"
            color={useColorModeValue("gray.600", "gray.400")}
            className="poppins-light"
          >
            Passionate Developer
          </Text>
        </Box>
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
