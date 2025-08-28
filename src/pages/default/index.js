import { Text, useColorModeValue, VStack } from "@chakra-ui/react";
import HeroSection from "../../components/heroSection";
import { useEffect, useRef } from "react";
import gsap from "gsap";

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
        typingText.textContent = currentWord.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typingSpeed = 50;
      } else {
        typingText.textContent = currentWord.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && currentCharIndex === currentWord.length) {
        typingSpeed = 1500;
        isDeleting = true;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        typingSpeed = 500;
      }

      setTimeout(type, typingSpeed);
    };

    type();

    gsap.to(cursor, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });

    return () => {};
  }, []);

  return (
    <VStack align="flex-start" spacing={4} justify="center" h="full">
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
        <span
          ref={cursorRef}
          style={{
            display: "inline-block",
            width: "8px",
            height: "1em",
            backgroundColor: useColorModeValue("#4f4f4f", "#F7F8FA"),
            marginLeft: "4px",
          }}
        ></span>
      </Text>
    </VStack>
  );
};

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
