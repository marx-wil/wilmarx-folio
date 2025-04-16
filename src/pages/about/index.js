import { VStack, Grid, GridItem } from "@chakra-ui/react";
import HeroSection from "../../components/heroSection";
import TextWithImage from "../../components/TextWithImage";
import dev_avatar from "../../assets/me/myphoto.jpg";
import HeroHeader from "../../components/HeroHeader";

const AboutContent = () => {
  const textContent = [
    {
      content:
        "Hi, I'm Wilmarx — a systems developer and tech enthusiast with a lifelong curiosity for how things work beneath the surface. That fascination with the inner workings of technology led me into the world of IT and systems development, where I get to turn that passion into purposeful work.",
    },
    {
      content:
        "As an IT professional, I help design and maintain systems that keep operations running smoothly and securely. Whether configuring servers, managing backend logic, or troubleshooting issues, I enjoy building tools that are efficient, reliable, and impactful.",
      display: { base: "none", xl: "block" },
    },
    {
      content:
        "I'm also growing as a systems developer, diving into frontend and backend technologies to craft seamless digital experiences. I’m always eager to learn and adapt — because in tech, there’s always something new to explore and improve.",
      display: { base: "none", md: "block" },
    },
  ];

  return (
    <VStack
      align="stretch"
      spacing={{ base: 4, md: 8 }}
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
          <HeroHeader title="About" subtitle="I am, " highlightText="Me" />
        </GridItem>

        <GridItem alignSelf="center" position="relative">
          <TextWithImage
            textContent={textContent}
            imageSrc={dev_avatar}
            footerTag="Passionate Developer"
          />
        </GridItem>
      </Grid>
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
