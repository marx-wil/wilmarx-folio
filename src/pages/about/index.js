import {
  VStack,
  Grid,
  GridItem,
  useColorModeValue,
  Box,
  Text,
  Flex,
  Icon,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaCode,
  FaServer,
  FaCloud,
  FaUser,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";
import HeroSection from "../../components/heroSection";
import TextWithImage from "../../components/TextWithImage";
import dev_avatar from "../../assets/me/myphoto.jpg";
import HeroHeader from "../../components/HeroHeader";
import GSAPModal from "../../components/gsapModal";
import { useState } from "react";

const AboutContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeModal, setActiveModal] = useState(null);

  const textColor = useColorModeValue("gray.600", "gray.400");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorderColor = useColorModeValue("gray.200", "gray.700");
  const skillTextColor = useColorModeValue("gray.800", "gray.200");

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
        "I'm also growing as a systems developer, diving into frontend and backend technologies to craft seamless digital experiences. I'm always eager to learn and adapt — because in tech, there's always something new to explore and improve.",
      display: { base: "none", md: "block" },
    },
  ];

  const interactiveWidgets = [
    {
      id: "frontend",
      icon: FaCode,
      title: "Frontend Wizardry",
      subtitle: "React • Vue • TypeScript",
      color: "blue",
      description:
        "Crafting beautiful, responsive user interfaces with modern frameworks and cutting-edge technologies.",
      details: [
        "React ecosystem mastery with hooks and context",
        "Vue.js component architecture and composition API",
        "TypeScript for type-safe development",
        "Tailwind CSS for rapid UI development",
        "State management with Redux, Vuex, and Zustand",
      ],
    },
    {
      id: "backend",
      icon: FaServer,
      title: "Backend Engineering",
      subtitle: "Node.js • Python • Java",
      color: "green",
      description:
        "Building robust, scalable server-side applications and APIs that power modern web experiences.",
      details: [
        "Node.js with Express and Fastify frameworks",
        "Python with Django and FastAPI",
        "Java Spring Boot applications",
        "RESTful and GraphQL API design",
        "Database design with PostgreSQL and MongoDB",
      ],
    },
    {
      id: "devops",
      icon: FaCloud,
      title: "DevOps Excellence",
      subtitle: "Docker • AWS • CI/CD",
      color: "purple",
      description:
        "Streamlining development workflows and ensuring reliable deployments in cloud environments.",
      details: [
        "Containerization with Docker and Kubernetes",
        "AWS cloud infrastructure management",
        "CI/CD pipeline automation",
        "Linux system administration",
        "Monitoring and logging solutions",
      ],
    },
    {
      id: "experience",
      icon: FaUser,
      title: "Professional Journey",
      subtitle: "5+ Years Experience",
      color: "orange",
      description:
        "A proven track record of delivering high-quality solutions across diverse industries and technologies.",
      details: [
        "Systems development for healthcare sector",
        "E-commerce platform optimization",
        "Financial services application development",
        "Team leadership and project management",
        "Mentoring junior developers",
      ],
    },
    {
      id: "innovation",
      icon: FaRocket,
      title: "Innovation Hub",
      subtitle: "AI • ML • Emerging Tech",
      color: "pink",
      description:
        "Exploring cutting-edge technologies and pushing the boundaries of what's possible in software development.",
      details: [
        "Machine learning integration in web apps",
        "AI-powered automation solutions",
        "Blockchain and Web3 exploration",
        "IoT device integration",
        "Real-time data processing systems",
      ],
    },
    {
      id: "philosophy",
      icon: FaLightbulb,
      title: "Development Philosophy",
      subtitle: "Clean • Efficient • Scalable",
      color: "teal",
      description:
        "My approach to software development focuses on creating maintainable, efficient, and scalable solutions.",
      details: [
        "Clean code principles and best practices",
        "Performance optimization and monitoring",
        "Security-first development approach",
        "User experience and accessibility",
        "Continuous learning and improvement",
      ],
    },
  ];

  const handleWidgetClick = (widgetId) => {
    setActiveModal(widgetId);
    onOpen();
  };

  const getModalContent = () => {
    const widget = interactiveWidgets.find((w) => w.id === activeModal);
    if (!widget) return null;

    return (
      <VStack spacing={6} align="stretch">
        <Box textAlign="center">
          <Box
            w="80px"
            h="80px"
            borderRadius="full"
            bg={`${widget.color}.100`}
            display="flex"
            alignItems="center"
            justifyContent="center"
            mx="auto"
            mb={4}
          >
            <Icon as={widget.icon} boxSize={10} color={`${widget.color}.600`} />
          </Box>
          <Text fontSize="xl" fontWeight="bold" color={skillTextColor} mb={2}>
            {widget.title}
          </Text>
          <Text
            fontSize="lg"
            color={`${widget.color}.600`}
            fontWeight="medium"
            mb={4}
          >
            {widget.subtitle}
          </Text>
          <Text color={textColor} lineHeight="tall" className="poppins-light">
            {widget.description}
          </Text>
        </Box>

        <Box>
          <Text
            fontSize="lg"
            fontWeight="semibold"
            color={skillTextColor}
            mb={4}
          >
            Key Areas:
          </Text>
          <VStack spacing={3} align="stretch">
            {widget.details.map((detail, index) => (
              <Flex key={index} align="center" gap={3}>
                <Box
                  w="2"
                  h="2"
                  borderRadius="full"
                  bg={`${widget.color}.500`}
                  flexShrink={0}
                />
                <Text color={textColor} className="poppins-light">
                  {detail}
                </Text>
              </Flex>
            ))}
          </VStack>
        </Box>
      </VStack>
    );
  };

  return (
    <VStack
      align="stretch"
      spacing={{ base: 6, md: 10 }}
      maxW="6xl"
      w="full"
      px={{ base: 4, md: 0 }}
      position="relative"
    >
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={{ base: 8, md: 16 }}
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
      <Box mt={{ base: 8, md: 12 }}>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="semibold"
          color={textColor}
          mb={8}
          className="poppins"
          textAlign="center"
        >
          Explore My Expertise
        </Text>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{ base: 6, md: 8 }}
          w="full"
        >
          {interactiveWidgets.map((widget) => (
            <GridItem key={widget.id}>
              <Box
                bg={cardBg}
                p={6}
                borderRadius="2xl"
                boxShadow="lg"
                border="1px solid"
                borderColor={cardBorderColor}
                cursor="pointer"
                _hover={{
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: "2xl",
                  borderColor: `${widget.color}.400`,
                  _before: {
                    transform: "scaleX(1)",
                  },
                }}
                transition="all 0.4s ease"
                position="relative"
                overflow="hidden"
                onClick={() => handleWidgetClick(widget.id)}
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  bg: `linear-gradient(90deg, ${widget.color}.400, ${widget.color}.600)`,
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.4s ease",
                }}
              >
                <VStack spacing={4} align="center" textAlign="center">
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    bg={`${widget.color}.100`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    transition="all 0.3s ease"
                    _groupHover={{
                      transform: "scale(1.1) rotate(5deg)",
                    }}
                  >
                    <Icon
                      as={widget.icon}
                      boxSize={8}
                      color={`${widget.color}.600`}
                      transition="all 0.3s ease"
                    />
                  </Box>

                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    color={skillTextColor}
                    className="poppins"
                  >
                    {widget.title}
                  </Text>

                  <Text
                    fontSize="sm"
                    color={`${widget.color}.600`}
                    fontWeight="medium"
                    className="poppins"
                  >
                    {widget.subtitle}
                  </Text>

                  <Button
                    size="sm"
                    variant="outline"
                    colorScheme={widget.color}
                    borderRadius="full"
                    _hover={{
                      transform: "scale(1.05)",
                      boxShadow: "md",
                    }}
                    transition="all 0.2s ease"
                  >
                    Learn More
                  </Button>
                </VStack>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>

      <GSAPModal
        isOpen={isOpen}
        onClose={onClose}
        title={
          activeModal
            ? interactiveWidgets.find((w) => w.id === activeModal)?.title
            : ""
        }
        size="md"
      >
        {getModalContent()}
      </GSAPModal>
    </VStack>
  );
};

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
