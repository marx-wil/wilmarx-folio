import {
  Box,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Container,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import SocialLinksLg from "../../components/socialLinksLg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaArrowLeft } from "react-icons/fa6";

const HeroSection = (WrappedComponent) => {
  const HeroSectionWithSocialLinks = ({
    footerHead,
    footerBody,
    footerSub,
    navigateTo = "/",
  }) => {
    const nameRef = useRef(null);
    const arrowRef = useRef(null);
    const backBtnRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    // Enhanced color tokens for better consistency
    const textColor = useColorModeValue("gray.600", "gray.400");
    const headingColor = useColorModeValue("gray.800", "gray.200");
    const accentColor = useColorModeValue("blue.600", "blue.400");
    const borderColor = useColorModeValue("gray.200", "gray.700");
    const hoverBg = useColorModeValue("gray.50", "gray.800");

    useEffect(() => {
      const nameElement = nameRef.current;
      const arrowElement = arrowRef.current;
      const backBtn = backBtnRef.current;

      if (!nameElement || !arrowElement || !backBtn) return;

      const timeline = gsap.timeline({ paused: true });
      timeline
        .to(arrowElement, {
          x: 10,
          duration: 0.4,
          ease: "power3.out",
        })
        .to(
          nameElement.querySelectorAll("text"),
          {
            x: 20,
            duration: 0.4,
            ease: "power3.out",
            stagger: 0.05,
          },
          "<"
        );

      const backBtnHover = gsap.to(backBtn, {
        scale: 1.05,
        rotate: -5,
        duration: 0.3,
        paused: true,
        ease: "power2.out",
      });

      const backBtnClick = gsap.timeline({ paused: true });
      backBtnClick
        .to(backBtn, {
          scale: 0.95,
          duration: 0.1,
          ease: "power2.in",
        })
        .to(backBtn, {
          scale: 1,
          duration: 0.2,
          ease: "elastic.out(1, 0.3)",
        });

      const handleHover = () => timeline.play();
      const handleHoverOut = () => timeline.reverse();
      const handleBackHover = () => backBtnHover.play();
      const handleBackHoverOut = () => backBtnHover.reverse();
      const handleBackClick = () => {
        backBtnClick.restart();
        setTimeout(() => navigate(-1), 300);
      };

      nameElement.addEventListener("mouseenter", handleHover);
      nameElement.addEventListener("mouseleave", handleHoverOut);
      backBtn.addEventListener("mouseenter", handleBackHover);
      backBtn.addEventListener("mouseleave", handleBackHoverOut);
      backBtn.addEventListener("click", handleBackClick);

      return () => {
        if (nameElement) {
          nameElement.removeEventListener("mouseenter", handleHover);
          nameElement.removeEventListener("mouseleave", handleHoverOut);
        }
        if (backBtn) {
          backBtn.removeEventListener("mouseenter", handleBackHover);
          backBtn.removeEventListener("mouseleave", handleBackHoverOut);
          backBtn.removeEventListener("click", handleBackClick);
        }
        timeline.kill();
        backBtnHover.kill();
        backBtnClick.kill();
      };
    }, [navigate]);

    return (
      <Box position="relative" h="100dvh" w="100vw" overflow="hidden">
        <Box
          position="absolute"
          left="10vw"
          top="0"
          bottom="0"
          width="1px"
          bg={useColorModeValue("gray.300", "gray.600")}
          _before={{
            content: '""',
            position: "absolute",
            top: "0",
            left: "50%",
            width: "2px",
            height: "20px",
            bg: useColorModeValue("blue.400", "blue.500"),
            transform: "translateX(-50%)",
            borderRadius: "full",
            opacity: 0.6,
          }}
        />

        <Container maxW="container.xl" h="full" position="relative">
          <VStack h="full" align="stretch" justify="space-between" py={8}>
            <Box
              pl={{ base: 8, md: 24 }}
              display="flex"
              alignItems="center"
              gap={3}
              flexShrink={0}
            >
              {location.pathname !== "/" && (
                <IconButton
                  ref={backBtnRef}
                  icon={<FaArrowLeft />}
                  aria-label="Previous page"
                  variant="outline"
                  size="sm"
                  borderRadius="lg"
                  borderColor={borderColor}
                  color={textColor}
                  _hover={{
                    bg: hoverBg,
                    borderColor: accentColor,
                    transform: "translateY(-1px)",
                    boxShadow: "md",
                  }}
                  _active={{
                    transform: "translateY(0px)",
                  }}
                  transition="all 0.2s ease"
                />
              )}
              <Text
                fontSize="sm"
                className="poppins-light"
                color={textColor}
                opacity={0.8}
              >
                &copy; THE MARX STACK {new Date().getFullYear()}
              </Text>
            </Box>

            <Box
              pl={{ base: 8, md: 24 }}
              flex="1"
              overflow="auto"
              minH="0"
              maxH="calc(100vh - 200px)"
              sx={{
                "&::-webkit-scrollbar": { width: "6px" },
                "&::-webkit-scrollbar-track": { background: "transparent" },
                "&::-webkit-scrollbar-thumb": {
                  background: useColorModeValue("gray.300", "gray.600"),
                  borderRadius: "3px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: useColorModeValue("gray.400", "gray.500"),
                },
              }}
            >
              <WrappedComponent />
            </Box>

            <Box
              pl={{ base: 8, md: 24 }}
              flexShrink={0}
              position="sticky"
              bottom={0}
              pt={4}
              borderTop="1px solid"
              borderColor={useColorModeValue("gray.200", "gray.700")}
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "20px",
                background: `linear-gradient(to bottom, transparent, ${useColorModeValue(
                  "gray.50",
                  "gray.900"
                )})`,
                pointerEvents: "none",
              }}
            >
              <HStack spacing={8} justify="space-between">
                <Box
                  position="relative"
                  ref={nameRef}
                  onClick={() => navigate(navigateTo)}
                  cursor="pointer"
                  role="button"
                  aria-label={`Navigate to ${footerBody}`}
                  p={3}
                  borderRadius="xl"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                    borderColor: borderColor,
                  }}
                  _active={{
                    transform: "translateY(0px)",
                  }}
                  transition="all 0.3s ease"
                  border="1px solid"
                  borderColor="transparent"
                >
                  <Text
                    fontSize="sm"
                    fontWeight="light"
                    className="poppins-light"
                    color={textColor}
                    mb={2}
                    style={{ transform: "translateX(0)" }}
                    opacity={0.8}
                  >
                    {footerHead}
                  </Text>
                  <Text
                    fontSize={{ base: "2xl", md: "4xl" }}
                    fontWeight="bold"
                    letterSpacing="wider"
                    className="poppins"
                    color={headingColor}
                    mb={2}
                    style={{ transform: "translateX(0)" }}
                    bgGradient={headingColor}
                  >
                    {footerBody}
                  </Text>
                  <Flex w="full" justify="flex-end">
                    <Text
                      fontSize="xs"
                      letterSpacing="0.2em"
                      textTransform="uppercase"
                      color={textColor}
                      className="poppins-light"
                      style={{ transform: "translateX(0)" }}
                      fontWeight="medium"
                    >
                      {footerSub}
                    </Text>
                  </Flex>
                  <Box
                    position="absolute"
                    right={{ base: "-40px", sm: "-60px", md: "-80px" }}
                    top="50%"
                    transform="translateY(-50%)"
                    w={{ base: "30px", sm: "45px", md: "60px" }}
                    h={{ base: "1.5px", md: "2px" }}
                    bg={textColor}
                    ref={arrowRef}
                    style={{ transform: "translate(0, -50%)" }}
                    borderRadius="full"
                    _before={{
                      content: '""',
                      position: "absolute",
                      right: "-1px",
                      top: "50%",
                      w: { base: "8px", sm: "10px", md: "12px" },
                      h: { base: "1.5px", md: "2px" },
                      bg: textColor,
                      transform: "rotate(45deg)",
                      transformOrigin: "right center",
                      borderRadius: "full",
                    }}
                    _after={{
                      content: '""',
                      position: "absolute",
                      right: "-1px",
                      top: "50%",
                      w: { base: "8px", sm: "10px", md: "12px" },
                      h: { base: "1.5px", md: "2px" },
                      bg: textColor,
                      transform: "rotate(-45deg)",
                      transformOrigin: "right center",
                      borderRadius: "full",
                    }}
                  />
                </Box>
                <SocialLinksLg />
              </HStack>
            </Box>
          </VStack>
        </Container>
      </Box>
    );
  };

  return HeroSectionWithSocialLinks;
};

export default HeroSection;
