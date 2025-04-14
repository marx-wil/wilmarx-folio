import { Box, IconButton, useColorModeValue, VStack, HStack, Link, useColorMode } from "@chakra-ui/react";
import { FaBars, FaTimes, FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode } = useColorMode();
  const overlayRef = useRef(null);
  const menuRef = useRef(null);
  const linksRef = useRef(null);
  const tl = useRef(null);

  // Theme-aware colors
  const textColor = useColorModeValue("black", "white");
  const overlayBg = useColorModeValue("rgba(6, 8, 9, 0.98)", "rgba(247, 248, 250, 0.98)");
  const overlayTextColor = useColorModeValue("white", "black");
  const iconHoverColor = useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(0, 0, 0, 0.8)");

  useEffect(() => {
    // Initialize timeline
    tl.current = gsap.timeline({ paused: true });
    
    // Setup the animation
    tl.current
      .to(overlayRef.current, {
        clipPath: 'circle(150% at 95% 5%)',
        duration: 0.8,
        ease: "power3.inOut"
      })
      .to(linksRef.current.children, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.4,
        ease: "back.out(1.7)"
      }, "-=0.4");

    // Initial state
    gsap.set(overlayRef.current, {
      clipPath: 'circle(0% at 95% 5%)'
    });
    gsap.set(linksRef.current.children, {
      y: 50,
      opacity: 0
    });
  }, []);

  // Update overlay when theme changes
  useEffect(() => {
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        backgroundColor: overlayBg,
        duration: 0.4,
        ease: "power2.inOut"
      });
    }
  }, [colorMode, overlayBg]);

  const toggleMenu = () => {
    if (!isOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Button */}
      <Box position="fixed" top={4} right={4} zIndex={1001}>
        <IconButton
          ref={menuRef}
          icon={isOpen ? <FaTimes /> : <FaBars />}
          variant="ghost"
          size="lg"
          onClick={toggleMenu}
          display={{ base: "flex", md: "none" }}
          color={isOpen ? overlayTextColor : textColor}
          _hover={{ bg: "transparent" }}
          transition="color 0.3s ease"
        />
      </Box>

      {/* Overlay Menu */}
      <Box
        ref={overlayRef}
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg={overlayBg}
        display={{ base: "block", md: "none" }}
        zIndex={1000}
        visibility={isOpen ? "visible" : "hidden"}
        transition="background-color 0.4s ease"
      >
        <VStack
          ref={linksRef}
          h="100dvh"
          justify="center"
          spacing={8}
          color={overlayTextColor}
        >
          <HStack spacing={8}>
            <Link 
              href="#" 
              fontSize="xl"
              _hover={{ color: iconHoverColor }}
              transition="color 0.2s ease"
            >
              <FaGithub size={30} />
            </Link>
            <Link 
              href="#" 
              fontSize="xl"
              _hover={{ color: iconHoverColor }}
              transition="color 0.2s ease"
            >
              <FaInstagram size={30} />
            </Link>
            <Link 
              href="#" 
              fontSize="xl"
              _hover={{ color: iconHoverColor }}
              transition="color 0.2s ease"
            >
              <FaFacebook size={30} />
            </Link>
            <Link 
              href="#" 
              fontSize="xl"
              _hover={{ color: iconHoverColor }}
              transition="color 0.2s ease"
            >
              <FaLinkedin size={30} />
            </Link>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default Nav; 