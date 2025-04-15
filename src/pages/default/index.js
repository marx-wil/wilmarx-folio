import { Text, useColorModeValue, VStack } from "@chakra-ui/react";
import HeroSection from "../../components/heroSection";
import { useEffect, useRef } from "react";
import gsap from "gsap";

// Create a content component for the middle section
const HeroContent = () => {
  const typingTextRef = useRef(null);
  const cursorRef = useRef(null);
  
  useEffect(() => {
    const typingText = typingTextRef.current;
    const cursor = cursorRef.current;
    
    if (!typingText || !cursor) return;
    
    const words = ["developer.", "designer.", "technologist."];
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        // Remove a character
        typingText.textContent = currentWord.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typingSpeed = 50; // Faster when deleting
      } else {
        // Add a character
        typingText.textContent = currentWord.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        typingSpeed = 100; // Normal speed when typing
      }
      
      // If word is complete
      if (!isDeleting && currentCharIndex === currentWord.length) {
        // Pause at the end of typing
        typingSpeed = 1500;
        isDeleting = true;
      } 
      // If word is deleted
      else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        typingSpeed = 500; // Pause before starting to type the next word
      }
      
      setTimeout(type, typingSpeed);
    };
    
    // Start the typing animation
    type();
    
    // Cursor blinking animation
    gsap.to(cursor, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "none"
    });
    
    return () => {
      // Clean up if needed
    };
  }, []);
  
  return (
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
        opacity={0.9}
      >
        Wilmarx John
      </Text>
      <Text
        fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
        fontWeight="bold"
        letterSpacing="tight"
        lineHeight="1"
        className="poppins"
        color={useColorModeValue("#4f4f4f", "#F7F8FA")}
        textTransform="uppercase"
        display="flex"
        alignItems="center"
        wordBreak="break-word"
      >
        <span ref={typingTextRef}></span>
        <span ref={cursorRef} style={{ display: "inline-block", width: "8px", height: "1em", backgroundColor: useColorModeValue("#4f4f4f", "#F7F8FA"), marginLeft: "4px" }}></span>
      </Text>
    </VStack>
  );
};

// Create a new component with the HeroSection HOC
const HeroWithContent = HeroSection(HeroContent);

const Default = () => {
  return (
    <HeroWithContent
      footerHead="Learn more"
      footerBody="About me"
      footerSub="Click to view"
      navigateTo="/about"
    />
  );
};

export default Default;
