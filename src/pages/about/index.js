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
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ImageOverlay = ({ isOpen, onClose, imageSrc }) => {
  const overlayRef = useRef(null);
  const imageRef = useRef(null);
  const [countdown, setCountdown] = useState(5);
  const countdownIntervalRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Reset countdown when overlay opens
      setCountdown(5);
      
      // Clear any existing intervals/timeouts
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
      }
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
      
      // Set up countdown interval
      countdownIntervalRef.current = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(countdownIntervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      // Set timeout to close overlay
      closeTimeoutRef.current = setTimeout(() => {
        handleClose();
      }, 5000);
      
      // Animate overlay and image when opening
      gsap.to(overlayRef.current, {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        duration: 0.3,
        ease: "power2.inOut",
      });
      gsap.fromTo(
        imageRef.current,
        {
          scale: 0.5,
          opacity: 0,
          y: 50,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        }
      );
    }
    
    return () => {
      // Clean up intervals and timeouts
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
      }
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  const handleClose = () => {
    // Animate out before closing
    gsap.to(overlayRef.current, {
      backgroundColor: "rgba(0, 0, 0, 0)",
      duration: 0.3,
      ease: "power2.inOut",
    });
    gsap.to(imageRef.current, {
      scale: 0.5,
      opacity: 0,
      y: 50,
      duration: 0.3,
      ease: "power2.in",
      onComplete: onClose,
    });
  };

  if (!isOpen) return null;

  return (
    <Box
      ref={overlayRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      backgroundColor="rgba(0, 0, 0, 0)"
      zIndex={1000}
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={handleClose}
    >
      <Box
        ref={imageRef}
        maxW="90vw"
        maxH="90vh"
        overflow="hidden"
        borderRadius="xl"
        display="flex"
        alignItems="center"
        position="relative"
      >
        <Image
          src={imageSrc}
          alt="Wilmarx"
          objectFit="cover"
          objectPosition="center center"
          maxH="90vh"
          w="auto"
          h="auto"
        />
        
        {/* Countdown overlay */}
        <Flex
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          bg="rgba(0,0,0,0.6)"
          color="white"
          p={3}
          justifyContent="center"
          alignItems="center"
          borderBottomRadius="xl"
          fontSize="md"
          fontWeight="medium"
          className="poppins"
        >
          <Text>Closing in {countdown} seconds</Text>
        </Flex>
      </Box>
    </Box>
  );
};

const AboutContent = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const textSize = useBreakpointValue({ base: "sm", md: "md" });
  const spacing = useBreakpointValue({ base: 4, md: 8 });
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const hideImageTimeoutRef = useRef(null);
  const countdownIntervalRef = useRef(null);

  const handleToggleImage = () => {
    setShowImage(true);
    setCountdown(5);
    
    // Clear any existing timeout
    if (hideImageTimeoutRef.current) {
      clearTimeout(hideImageTimeoutRef.current);
    }
    
    // Clear any existing countdown interval
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
    }
    
    // Set up countdown interval
    countdownIntervalRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownIntervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    // Set a new timeout to hide the image after 5 seconds
    hideImageTimeoutRef.current = setTimeout(() => {
      setShowImage(false);
    }, 5000);
  };

  const handleImageClick = () => {
    setIsOverlayOpen(true);
  };

  // Clean up timeouts and intervals on component unmount
  useEffect(() => {
    return () => {
      if (hideImageTimeoutRef.current) {
        clearTimeout(hideImageTimeoutRef.current);
      }
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
      }
    };
  }, []);

  // Animate the image sliding up/down when showImage changes
  useEffect(() => {
    if (imageRef.current && textRef.current) {
      if (showImage) {
        // Slide image up to overlay text
        gsap.to(imageRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.inOut",
          zIndex: 2,
        });

        // Fade out text slightly
        gsap.to(textRef.current, {
          opacity: 0.3,
          duration: 0.5,
          ease: "power2.inOut",
        });
      } else {
        // Slide image back down
        gsap.to(imageRef.current, {
          y: "100%",
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          zIndex: 1,
        });

        // Fade in text
        gsap.to(textRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    }
  }, [showImage]);

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
        gap={{ base: 6, md: 12 }}
        w="full"
        alignItems="center"
      >
        <GridItem>
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
              About
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
              I am,&nbsp;
              <Text
                as="span"
                position="relative"
                color={useColorModeValue("blue.500", "blue.300")}
                _after={{
                  content: '""',
                  position: "absolute",
                  bottom: "10%",
                  left: "-2%",
                  width: "104%",
                  height: "8px",
                  bg: useColorModeValue("blue.100", "blue.900"),
                  opacity: 0.3,
                  zIndex: -1,
                }}
              >
                Me
              </Text>
            </Text>
          </VStack>
        </GridItem>

        <GridItem alignSelf="center" position="relative">
          <Box
            position="relative"
            width="100%"
            minHeight={{ base: "250px", md: "350px" }}
            height="auto"
            overflow="hidden"
            mt={{ base: 4, md: 0 }}
          >
            {/* Text content */}
            <Box
              ref={textRef}
              position="relative"
              width="100%"
              height="auto"
              zIndex={1}
            >
              <Box
                bg={useColorModeValue("white", "gray.800")}
                p={{ base: 4, md: 6 }}
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
                <VStack spacing={3} align="stretch">
                  <Text
                    className="poppins-light"
                    fontSize={textSize}
                    color={useColorModeValue("gray.700", "gray.300")}
                    lineHeight="tall"
                  >
                    Hi, I'm Wilmarx — a passionate systems developer with a
                    deep-rooted love for technology that goes way back. From a
                    young age, I've always been fascinated by how things work
                    behind the scenes, and that curiosity naturally led me to
                    the world of development.
                  </Text>

                  <Text
                    className="poppins-light"
                    fontSize={textSize}
                    color={useColorModeValue("gray.700", "gray.300")}
                    display={{ base: "none", xl: "block" }}
                    lineHeight="tall"
                  >
                    I currently work full-time in IT, where I help build and
                    maintain systems that make everyday operations smoother and
                    more efficient. Whether I'm designing backend architecture,
                    writing code, or solving tough technical challenges, I find
                    purpose in creating reliable, smart solutions.
                  </Text>
                  <Text
                    className="poppins-light"
                    fontSize={textSize}
                    color={useColorModeValue("gray.700", "gray.300")}
                    display={{ base: "none", md: "block" }}
                    lineHeight="tall"
                  >
                    My journey is driven by a desire to keep learning and
                    evolving — because in tech, there's always something new to
                    discover.
                  </Text>

                  {/* Photo preview with arrow */}
                  <Box
                    position="relative"
                    mt={2}
                    height="60px"
                    borderRadius="md"
                    overflow="hidden"
                    border="1px solid"
                    borderColor={useColorModeValue("gray.200", "gray.600")}
                    cursor="pointer"
                    onClick={handleToggleImage}
                  >
                    <Image
                      src={dev_avatar}
                      alt="Preview"
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      objectPosition="center"
                    />
                    <Flex
                      position="absolute"
                      top="0"
                      left="0"
                      right="0"
                      bottom="0"
                      bg="rgba(0,0,0,0.3)"
                      alignItems="center"
                      justifyContent="center"
                      opacity={0.7}
                      _hover={{ opacity: 1 }}
                      transition="opacity 0.2s"
                    >
                      <Text
                        color="white"
                        fontWeight="medium"
                        fontSize="sm"
                        display="flex"
                        alignItems="center"
                      >
                        Click to see photo
                        <Box
                          as="span"
                          ml={1}
                          transform="translateY(-2px)"
                          fontSize="lg"
                        >
                          ↑
                        </Box>
                      </Text>
                    </Flex>
                  </Box>
                </VStack>
              </Box>
            </Box>

            {/* Image that slides up */}
            <Box
              ref={imageRef}
              position="absolute"
              width="100%"
              height="100%"
              top="0"
              left="0"
              y="100%"
              opacity={0}
              zIndex={1}
              onClick={(e) => {
                e.stopPropagation();
                handleImageClick();
              }}
            >
              <Box
                position="relative"
                padding={{ base: 2, md: 3 }}
                width="100%"
                height="100%"
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
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              >
                <Image
                  src={dev_avatar}
                  alt="Wilmarx"
                  width="100%"
                  height="auto"
                  maxH={{ base: "300px", md: "500px" }}
                  objectFit="cover"
                  objectPosition="center"
                  borderRadius="xl"
                  transition="all 0.3s ease"
                />
                
                {/* Countdown overlay */}
                {showImage && (
                  <Flex
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    bg="rgba(0,0,0,0.6)"
                    color="white"
                    p={2}
                    justifyContent="center"
                    alignItems="center"
                    borderBottomRadius="xl"
                    fontSize="sm"
                    fontWeight="medium"
                    className="poppins"
                  >
                    <Text>Closing in {countdown} seconds</Text>
                  </Flex>
                )}
              </Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>

      <ImageOverlay
        isOpen={isOverlayOpen}
        onClose={() => setIsOverlayOpen(false)}
        imageSrc={dev_avatar}
      />

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
