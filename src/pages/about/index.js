import { VStack, Grid, GridItem } from "@chakra-ui/react";
import HeroSection from "../../components/heroSection";
import TextWithImage from "../../components/TextWithImage";
import dev_avatar from "../../assets/me/myphoto.jpg";
import HeroHeader from "../../components/HeroHeader";

const AboutContent = () => {
  const textContent = [
    {
      content:
        "Hi, I'm Wilmarx — a passionate systems developer with a deep-rooted love for technology that goes way back. From a young age, I've always been fascinated by how things work behind the scenes, and that curiosity naturally led me to the world of development.",
    },
    {
      content:
        "I currently work full-time in IT, where I help build and maintain systems that make everyday operations smoother and more efficient. Whether I'm designing backend architecture, writing code, or solving tough technical challenges, I find purpose in creating reliable, smart solutions.",
      display: { base: "none", xl: "block" },
    },
    {
      content:
        "My journey is driven by a desire to keep learning and evolving — because in tech, there's always something new to discover.",
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
