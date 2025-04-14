import { Box, IconButton, useColorModeValue, VStack, HStack, Link } from "@chakra-ui/react";
import { FaBars, FaTimes, FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);
  const menuRef = useRef(null);
  const linksRef = useRef(null);
  const tl = useRef(null);

  // Move color mode values outside JSX
  const buttonColor = useColorModeValue("black", "white");
  const overlayBg = useColorModeValue("#060809", "#F7F8FA");
  const overlayTextColor = useColorModeValue("white", "black");``

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
          color={isOpen ? "white" : buttonColor}
          _hover={{ bg: "transparent" }}
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
      >
        <VStack
          ref={linksRef}
          h="100dvh"
          justify="center"
          spacing={8}
          color={overlayTextColor}
        >
          <HStack spacing={8}>
            <Link href="#" fontSize="xl">
              <FaGithub size={30} />
            </Link>
            <Link href="#" fontSize="xl">
              <FaInstagram size={30} />
            </Link>
            <Link href="#" fontSize="xl">
              <FaFacebook size={30} />
            </Link>
            <Link href="#" fontSize="xl">
              <FaLinkedin size={30} />
            </Link>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default Nav; 