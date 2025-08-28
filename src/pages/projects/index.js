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
  Image,
  Badge,
  HStack,
} from "@chakra-ui/react";
import {
  FaCode,
  FaRocket,
  FaLaptop,
  FaMobile,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";
import HeroSection from "../../components/heroSection";
import TextWithImage from "../../components/TextWithImage";
import DentalManagementSystem from "../../assets/projects/dems.jpg";
import HeroHeader from "../../components/HeroHeader";
import GSAPModal from "../../components/gsapModal";
import { useState } from "react";

const ProjectsContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeModal, setActiveModal] = useState(null);

  const textColor = useColorModeValue("gray.600", "gray.400");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorderColor = useColorModeValue("gray.200", "gray.700");
  const projectTextColor = useColorModeValue("gray.800", "gray.200");

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

  const projectWidgets = [
    {
      id: "dental-system",
      icon: FaDatabase,
      title: "Dental Management System",
      subtitle: "Yggdrasil Genesis",
      status: "Completed",
      color: "blue",
      image: DentalManagementSystem,
      description:
        "A comprehensive dental practice management solution that streamlines patient care, appointments, and billing processes.",
      tech: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
      features: [
        "Patient management and medical history tracking",
        "Appointment scheduling and calendar management",
        "Treatment documentation and progress notes",
        "Billing and insurance processing",
        "Reporting and analytics dashboard",
        "HIPAA compliant security measures",
      ],
      challenges: [
        "Complex workflow automation requirements",
        "Integration with existing dental software",
        "Real-time data synchronization",
        "Performance optimization for large datasets",
      ],
      impact:
        "Reduced appointment scheduling time by 60% and improved patient satisfaction scores by 40%.",
    },
    {
      id: "ecommerce",
      icon: FaLaptop,
      title: "E-Commerce Platform",
      subtitle: "Modern Retail Solution",
      status: "Completed",
      color: "green",
      image:
        "https://via.placeholder.com/400x300/4ade80/ffffff?text=E-Commerce",
      description:
        "A full-featured e-commerce platform built with modern technologies for optimal performance and user experience.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      features: [
        "Product catalog with advanced filtering",
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "Order management and tracking",
        "Admin dashboard and analytics",
        "Mobile-responsive design",
      ],
      challenges: [
        "High-traffic performance optimization",
        "Secure payment processing",
        "Inventory management complexity",
        "Multi-vendor support requirements",
      ],
      impact:
        "Increased conversion rates by 35% and reduced cart abandonment by 25%.",
    },
    {
      id: "task-management",
      icon: FaMobile,
      title: "Task Management App",
      subtitle: "Collaborative Workspace",
      status: "In Progress",
      color: "purple",
      image: "https://via.placeholder.com/400x300/a855f7/ffffff?text=Task+App",
      description:
        "A collaborative task management application with real-time updates and team coordination features.",
      tech: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS", "PWA"],
      features: [
        "Real-time task collaboration",
        "Project and milestone tracking",
        "Team member management",
        "Progress visualization",
        "Mobile app with offline support",
        "Integration with calendar apps",
      ],
      challenges: [
        "Real-time synchronization across devices",
        "Offline functionality implementation",
        "Complex permission system",
        "Performance with large teams",
      ],
      impact:
        "Expected to improve team productivity by 45% and reduce project delays by 30%.",
    },
    {
      id: "ai-platform",
      icon: FaRocket,
      title: "AI Content Platform",
      subtitle: "Next-Gen Creation",
      status: "Planning",
      color: "pink",
      image:
        "https://via.placeholder.com/400x300/ec4899/ffffff?text=AI+Platform",
      description:
        "An AI-powered content creation platform that helps users generate high-quality written content and creative assets.",
      tech: ["Next.js", "Python", "OpenAI API", "PostgreSQL", "Docker"],
      features: [
        "AI-powered content generation",
        "Multiple content types support",
        "Brand voice customization",
        "Collaboration tools",
        "Analytics and insights",
        "API for third-party integration",
      ],
      challenges: [
        "AI model integration and optimization",
        "Content quality assurance",
        "Scalability for high usage",
        "Ethical AI implementation",
      ],
      impact:
        "Projected to reduce content creation time by 70% while maintaining quality standards.",
    },
    {
      id: "iot-dashboard",
      icon: FaCloud,
      title: "IoT Dashboard",
      subtitle: "Smart Device Control",
      status: "Completed",
      color: "teal",
      image:
        "https://via.placeholder.com/400x300/14b8a6/ffffff?text=IoT+Dashboard",
      description:
        "A comprehensive IoT device management dashboard for monitoring and controlling smart home and industrial devices.",
      tech: ["React", "Python", "MQTT", "InfluxDB", "Grafana"],
      features: [
        "Real-time device monitoring",
        "Automated control rules",
        "Data visualization and analytics",
        "Alert and notification system",
        "Device firmware updates",
        "Multi-user access control",
      ],
      challenges: [
        "Real-time data processing",
        "Device protocol compatibility",
        "Security and privacy concerns",
        "Scalability for large deployments",
      ],
      impact:
        "Enabled 24/7 monitoring of 500+ devices with 99.9% uptime reliability.",
    },
    {
      id: "blockchain-app",
      icon: FaCode,
      title: "Blockchain DApp",
      subtitle: "Web3 Innovation",
      status: "In Progress",
      color: "orange",
      image:
        "https://via.placeholder.com/400x300/f97316/ffffff?text=Blockchain",
      description:
        "A decentralized application built on blockchain technology for secure, transparent digital asset management.",
      tech: ["React", "Solidity", "Web3.js", "IPFS", "MetaMask"],
      features: [
        "Smart contract integration",
        "Digital asset management",
        "Decentralized storage",
        "Wallet connectivity",
        "Transaction history",
        "Governance mechanisms",
      ],
      challenges: [
        "Blockchain transaction optimization",
        "Gas fee management",
        "User experience complexity",
        "Security audit requirements",
      ],
      impact:
        "Creating a new paradigm for digital asset ownership and transfer.",
    },
  ];

  const handleWidgetClick = (widgetId) => {
    setActiveModal(widgetId);
    onOpen();
  };

  const getModalContent = () => {
    const project = projectWidgets.find((p) => p.id === activeModal);
    if (!project) return null;

    return (
      <VStack spacing={6} align="stretch">
        <Box textAlign="center">
          <Box
            w="80px"
            h="80px"
            borderRadius="full"
            bg={`${project.color}.100`}
            display="flex"
            alignItems="center"
            justifyContent="center"
            mx="auto"
            mb={4}
          >
            <Icon
              as={project.icon}
              boxSize={10}
              color={`${project.color}.600`}
            />
          </Box>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color={projectTextColor}
            mb={2}
          >
            {project.title}
          </Text>
          <Text
            fontSize="lg"
            color={`${project.color}.600`}
            fontWeight="medium"
            mb={2}
          >
            {project.subtitle}
          </Text>
          <Badge
            colorScheme={
              project.status === "Completed"
                ? "green"
                : project.status === "In Progress"
                ? "blue"
                : "orange"
            }
            variant="subtle"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="sm"
          >
            {project.status}
          </Badge>
        </Box>

        <Box borderRadius="xl" overflow="hidden" boxShadow="lg">
          <Image
            src={project.image}
            alt={project.title}
            w="full"
            h="auto"
            objectFit="cover"
          />
        </Box>

        <Text
          color={textColor}
          lineHeight="tall"
          className="poppins-light"
          fontSize="md"
        >
          {project.description}
        </Text>

        <Box>
          <Text
            fontSize="lg"
            fontWeight="semibold"
            color={projectTextColor}
            mb={3}
          >
            Technology Stack:
          </Text>
          <Flex wrap="wrap" gap={2}>
            {project.tech.map((tech, index) => (
              <Badge
                key={index}
                colorScheme={project.color}
                variant="subtle"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
              >
                {tech}
              </Badge>
            ))}
          </Flex>
        </Box>

        <Box>
          <Text
            fontSize="lg"
            fontWeight="semibold"
            color={projectTextColor}
            mb={3}
          >
            Key Features:
          </Text>
          <VStack spacing={2} align="stretch">
            {project.features.map((feature, index) => (
              <Flex key={index} align="center" gap={3}>
                <Box
                  w="2"
                  h="2"
                  borderRadius="full"
                  bg={`${project.color}.500`}
                  flexShrink={0}
                />
                <Text color={textColor} className="poppins-light" fontSize="sm">
                  {feature}
                </Text>
              </Flex>
            ))}
          </VStack>
        </Box>

        <Grid templateColumns="1fr 1fr" gap={6}>
          <Box>
            <Text
              fontSize="lg"
              fontWeight="semibold"
              color={projectTextColor}
              mb={3}
            >
              Challenges:
            </Text>
            <VStack spacing={2} align="stretch">
              {project.challenges.map((challenge, index) => (
                <Flex key={index} align="center" gap={3}>
                  <Box
                    w="2"
                    h="2"
                    borderRadius="full"
                    bg="orange.500"
                    flexShrink={0}
                  />
                  <Text
                    color={textColor}
                    className="poppins-light"
                    fontSize="sm"
                  >
                    {challenge}
                  </Text>
                </Flex>
              ))}
            </VStack>
          </Box>

          <Box>
            <Text
              fontSize="lg"
              fontWeight="semibold"
              color={projectTextColor}
              mb={3}
            >
              Impact:
            </Text>
            <Text
              color={textColor}
              className="poppins-light"
              fontSize="sm"
              lineHeight="tall"
            >
              {project.impact}
            </Text>
          </Box>
        </Grid>
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

      <Box mt={{ base: 8, md: 12 }}>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="semibold"
          color={textColor}
          mb={8}
          className="poppins"
          textAlign="center"
        >
          Explore My Projects
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
          {projectWidgets.map((project) => (
            <GridItem key={project.id}>
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
                  borderColor: `${project.color}.400`,
                  _before: {
                    transform: "scaleX(1)",
                  },
                }}
                transition="all 0.4s ease"
                position="relative"
                overflow="hidden"
                onClick={() => handleWidgetClick(project.id)}
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  bg: `linear-gradient(90deg, ${project.color}.400, ${project.color}.600)`,
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
                    bg={`${project.color}.100`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    transition="all 0.3s ease"
                  >
                    <Icon
                      as={project.icon}
                      boxSize={8}
                      color={`${project.color}.600`}
                      transition="all 0.3s ease"
                    />
                  </Box>

                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    color={projectTextColor}
                    className="poppins"
                  >
                    {project.title}
                  </Text>

                  <Text
                    fontSize="sm"
                    color={`${project.color}.600`}
                    fontWeight="medium"
                    className="poppins"
                  >
                    {project.subtitle}
                  </Text>

                  <HStack spacing={2}>
                    <Badge
                      colorScheme={
                        project.status === "Completed"
                          ? "green"
                          : project.status === "In Progress"
                          ? "blue"
                          : "orange"
                      }
                      variant="subtle"
                      px={2}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                    >
                      {project.status}
                    </Badge>
                  </HStack>

                  <Button
                    size="sm"
                    variant="outline"
                    colorScheme={project.color}
                    borderRadius="full"
                    _hover={{
                      transform: "scale(1.05)",
                      boxShadow: "md",
                    }}
                    transition="all 0.2s ease"
                  >
                    View Details
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
            ? projectWidgets.find((p) => p.id === activeModal)?.title
            : ""
        }
        size="md"
      >
        {getModalContent()}
      </GSAPModal>
    </VStack>
  );
};

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
