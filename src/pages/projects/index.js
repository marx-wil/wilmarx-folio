import { VStack, Grid, GridItem } from "@chakra-ui/react";
import HeroSection from "../../components/heroSection";
import TextWithImage from "../../components/TextWithImage";
import dev_avatar from "../../assets/me/myphoto.jpg";
import HeroHeader from "../../components/HeroHeader";
import DentalManagementSystem from "../../assets/projects/dems.jpg";
const ProjectsContent = () => {
  const textContent = [
    {
      content:
        "Project Yggdrasil Genesis is a robust Dental Management System meticulously crafted to optimize the operational workflows of dental clinics. ",
    },
    {
      content:
        "It encompasses a comprehensive suite of features designed to streamline patient management, appointment scheduling, treatment documentation, billing processes, and more.",
      display: { base: "none", xl: "block" },
    },
    {
      content:
        "By leveraging modern technologies and frameworks, this system aims to enhance the efficiency, productivity, and patient care standards within dental practices.",
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
          <HeroHeader title="My Works" subtitle="Pro" highlightText="jects." />
        </GridItem>

        <GridItem alignSelf="center" position="relative">
          <TextWithImage
            textContent={textContent}
            imageSrc={DentalManagementSystem}
            footerTag="Dental Management System"
          />
        </GridItem>
      </Grid>
    </VStack>
  );
};

// Create a new component with the HeroSection HOC
const HeroWithContent = HeroSection(ProjectsContent);

const Projects = () => {
  return (
    <HeroWithContent
      footerHead="A story of "
      footerBody="My Growth"
      footerSub="Click to view"
      navigateTo="/work-history"
    />
  );
};

export default Projects;
