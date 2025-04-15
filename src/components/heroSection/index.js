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

    useEffect(() => {
      const nameElement = nameRef.current;
      const arrowElement = arrowRef.current;
      const backBtn = backBtnRef.current;

      if (!nameElement || !arrowElement || !backBtn) return;

      // Original timeline for forward navigation
      const timeline = gsap.timeline({ paused: true });
      timeline
        .to(arrowElement, {
          x: 10,
          duration: 0.3,
          ease: "power2.out",
        })
        .to(
          nameElement.querySelectorAll("text"),
          {
            x: 20,
            duration: 0.3,
            ease: "power2.out",
            stagger: 0.05,
          },
          "<"
        );

      // Back button hover animation
      const backBtnHover = gsap.to(backBtn, {
        scale: 1.1,
        rotate: -10,
        duration: 0.3,
        paused: true,
        ease: "power2.out"
      });

      // Click animation
      const backBtnClick = gsap.timeline({ paused: true });
      backBtnClick
        .to(backBtn, {
          scale: 0.9,
          duration: 0.1,
          ease: "power2.in"
        })
        .to(backBtn, {
          scale: 1,
          duration: 0.2,
          ease: "elastic.out(1, 0.3)"
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

        {/* Main Content */}
        <Container maxW="container.xl" h="full">
          <VStack h="full" align="stretch" justify="space-between" py={8}>
            {/* Top Section */}
            <Box
              pl={{ base: 8, md: 24 }}
              display="flex"
              alignItems="center"
              gap={2}
            >
              {location.pathname !== "/" && (
                <IconButton
                  ref={backBtnRef}
                  icon={<FaArrowLeft />}
                  aria-label="Previous page"
                  variant="outline"
                  size="sm"
                />
              )}
              <Text
                fontSize="sm"
                className="poppins-light"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                &copy; {new Date().getFullYear()}
              </Text>
            </Box>

            {/* Middle Section - Now using the wrapped component */}
            <Box pl={{ base: 8, md: 24 }}>
              <WrappedComponent />
            </Box>

            {/* Bottom Section */}
            <Box pl={{ base: 8, md: 24 }}>
              <HStack spacing={8} justify="space-between">
                <Box
                  position="relative"
                  ref={nameRef}
                  onClick={() => navigate(navigateTo)}
                  cursor="pointer"
                  role="button"
                  aria-label={`Navigate to ${footerBody}`}
                  _hover={{
                    opacity: 0.9,
                  }}
                  transition="opacity 0.2s ease"
                >
                  <Text
                    fontSize="sm"
                    fontWeight="light"
                    className="poppins-light"
                    color={useColorModeValue("#060809", "#F7F8FA")}
                    mb={1}
                    style={{ transform: "translateX(0)" }}
                  >
                    {footerHead}
                  </Text>
                  <Text
                    fontSize={{ base: "2xl", md: "4xl" }}
                    fontWeight="bold"
                    letterSpacing="wider"
                    className="poppins"
                    color={useColorModeValue("#4F4F4F", "#D0D0D0")}
                    mb={1}
                    style={{ transform: "translateX(0)" }}
                  >
                    {footerBody}
                  </Text>
                  <Flex w="full" justify="flex-end">
                    <Text
                      fontSize="xs"
                      letterSpacing="0.2em"
                      textTransform="uppercase"
                      color={useColorModeValue("gray.600", "gray.400")}
                      className="poppins-light"
                      style={{ transform: "translateX(0)" }}
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
                    bg={useColorModeValue("#060809", "#F7F8FA")}
                    ref={arrowRef}
                    style={{ transform: "translate(0, -50%)" }}
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

  return HeroSectionWithSocialLinks;
};

export default HeroSection;
