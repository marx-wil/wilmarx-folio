import {
  Text,
  useColorModeValue,
  VStack,
  Box,
  Image,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
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
      setCountdown(5);

      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
      }
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }

      countdownIntervalRef.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownIntervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      closeTimeoutRef.current = setTimeout(() => {
        handleClose();
      }, 5000);

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
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
      }
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
    // eslint-disable-next-line
  }, [isOpen]);

  const handleClose = () => {
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
          alt="Image"
          objectFit="cover"
          objectPosition="center center"
          maxH="90vh"
          w="auto"
          h="auto"
        />

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

const TextWithImage = ({
  textContent,
  imageSrc,
  footerTag,
  maxWidth = "5xl",
  spacing = { base: 4, md: 8 },
  padding = { base: 4, md: 0 },
}) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const textSize = useBreakpointValue({ base: "sm", md: "md" });
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const hideImageTimeoutRef = useRef(null);
  const countdownIntervalRef = useRef(null);

  // Move all useColorModeValue calls to the top level
  const textColor = useColorModeValue("gray.700", "gray.300");
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const previewBorderColor = useColorModeValue("gray.200", "gray.600");
  const footerLineColor = useColorModeValue("gray.300", "gray.600");
  const footerTextColor = useColorModeValue("gray.600", "gray.400");
  const gradientLight = useColorModeValue(
    "linear-gradient(135deg, #63B3ED44, #4299E122)",
    "linear-gradient(135deg, #63B3ED22, #4299E111)"
  );

  const handleToggleImage = () => {
    setShowImage(true);
    setCountdown(5);

    if (hideImageTimeoutRef.current) {
      clearTimeout(hideImageTimeoutRef.current);
    }

    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
    }

    countdownIntervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownIntervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    hideImageTimeoutRef.current = setTimeout(() => {
      setShowImage(false);
    }, 5000);
  };

  const handleImageClick = () => {
    setIsOverlayOpen(true);
  };

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

  useEffect(() => {
    if (imageRef.current && textRef.current) {
      if (showImage) {
        gsap.to(imageRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.inOut",
          zIndex: 2,
        });

        gsap.to(textRef.current, {
          opacity: 0.3,
          duration: 0.5,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(imageRef.current, {
          y: "100%",
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          zIndex: 1,
        });

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
      maxW={maxWidth}
      w="full"
      px={padding}
      position="relative"
    >
      <Box
        position="relative"
        width="100%"
        minHeight={{ base: "250px", md: "350px" }}
        height="auto"
        overflow="hidden"
      >
        <Box
          ref={textRef}
          position="relative"
          width="100%"
          height="auto"
          zIndex={1}
        >
          <Box
            bg={bgColor}
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
              borderColor: borderColor,
              opacity: 0.5,
            }}
          >
            <VStack spacing={3} align="stretch">
              {textContent.map((text, index) => (
                <Text
                  key={index}
                  className="poppins-light"
                  fontSize={textSize}
                  color={textColor}
                  display={text.display || "block"}
                  lineHeight="tall"
                >
                  {text.content}
                </Text>
              ))}

              <Box
                position="relative"
                mt={2}
                height="60px"
                borderRadius="md"
                overflow="hidden"
                border="1px solid"
                borderColor={previewBorderColor}
                cursor="pointer"
                onClick={handleToggleImage}
              >
                <Image
                  src={imageSrc}
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
              background: gradientLight,
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          >
            <Image
              src={imageSrc}
              alt="Full size"
              width="100%"
              height="auto"
              maxH={{ base: "300px", md: "500px" }}
              objectFit="cover"
              objectPosition="center"
              borderRadius="xl"
              transition="all 0.3s ease"
            />

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

      <ImageOverlay
        isOpen={isOverlayOpen}
        onClose={() => setIsOverlayOpen(false)}
        imageSrc={imageSrc}
      />

      {footerTag && (
        <Flex justify="flex-end" mt={2}>
          <Box
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: "50%",
              right: "100%",
              width: "30px",
              height: "1px",
              bg: footerLineColor,
              marginRight: "10px",
            }}
          >
            <Text
              fontSize="xs"
              letterSpacing="0.2em"
              textTransform="uppercase"
              color={footerTextColor}
              className="poppins-light"
            >
              {footerTag}
            </Text>
          </Box>
        </Flex>
      )}
    </VStack>
  );
};

export default TextWithImage;
