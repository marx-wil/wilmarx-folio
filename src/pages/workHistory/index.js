import {
  Text,
  useColorModeValue,
  VStack,
  Box,
  Grid,
  GridItem,
  Flex,
  Icon,
  Button,
  useDisclosure,
  Badge,
  HStack,
} from "@chakra-ui/react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaUsers,
  FaRocket,
  FaGraduationCap,
} from "react-icons/fa";
import HeroSection from "../../components/heroSection";
import HeroHeader from "../../components/HeroHeader";
import GSAPModal from "../../components/gsapModal";
import { useState } from "react";

const WorkHistoryContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeModal, setActiveModal] = useState(null);

  const textColor = useColorModeValue("gray.600", "gray.400");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorderColor = useColorModeValue("gray.200", "gray.700");
  const headingColor = useColorModeValue("gray.800", "gray.200");

  const jobWidgets = [
    {
      id: "senior-developer",
      icon: FaCode,
      title: "Senior Systems Developer",
      company: "TechCorp Solutions",
      duration: "2023 - Present",
      status: "Current",
      color: "blue",
      description:
        "Leading development of enterprise-level systems and mentoring junior developers.",
      responsibilities: [
        "Architect and develop scalable system solutions",
        "Lead technical design and code reviews",
        "Mentor junior developers and conduct training sessions",
        "Collaborate with cross-functional teams on system integration",
        "Optimize system performance and implement best practices",
      ],
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Docker",
        "AWS",
        "TypeScript",
      ],
      achievements: [
        "Reduced system downtime by 40% through improved monitoring",
        "Led team of 5 developers to deliver 3 major projects on time",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
      ],
    },
    {
      id: "full-stack-developer",
      icon: FaServer,
      title: "Full Stack Developer",
      company: "Digital Innovations Inc",
      duration: "2021 - 2023",
      status: "Completed",
      color: "green",
      description:
        "Developed full-stack web applications and maintained existing systems.",
      responsibilities: [
        "Built responsive web applications using modern frameworks",
        "Developed RESTful APIs and database schemas",
        "Collaborated with designers and product managers",
        "Implemented automated testing and deployment processes",
        "Provided technical support and bug fixes",
      ],
      technologies: ["Vue.js", "Python", "MongoDB", "Express", "Git", "Jest"],
      achievements: [
        "Delivered 8 client projects with 95% client satisfaction",
        "Improved application performance by 35%",
        "Reduced bug reports by 50% through better testing",
      ],
    },
    {
      id: "systems-analyst",
      icon: FaDatabase,
      title: "Systems Analyst",
      company: "DataFlow Systems",
      duration: "2019 - 2021",
      status: "Completed",
      color: "purple",
      description:
        "Analyzed business requirements and designed system solutions.",
      responsibilities: [
        "Gathered and analyzed business requirements",
        "Designed system architecture and data models",
        "Created technical specifications and documentation",
        "Coordinated with stakeholders and development teams",
        "Conducted system testing and quality assurance",
      ],
      technologies: ["SQL", "UML", "Visio", "JIRA", "Confluence", "Python"],
      achievements: [
        "Streamlined 5 business processes saving 20 hours per week",
        "Reduced system errors by 30% through better design",
        "Improved user adoption rates by 45%",
      ],
    },
    {
      id: "junior-developer",
      icon: FaRocket,
      title: "Junior Developer",
      company: "StartUp Ventures",
      duration: "2018 - 2019",
      status: "Completed",
      color: "orange",
      description:
        "Started career developing web applications and learning modern technologies.",
      responsibilities: [
        "Developed frontend components and user interfaces",
        "Assisted with backend development and API integration",
        "Participated in code reviews and team meetings",
        "Fixed bugs and implemented feature requests",
        "Learned new technologies and best practices",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"],
      achievements: [
        "Contributed to 3 successful product launches",
        "Completed 15+ online courses and certifications",
        "Received 'Most Improved Developer' award",
      ],
    },
    {
      id: "intern",
      icon: FaGraduationCap,
      title: "Software Development Intern",
      company: "TechStart Academy",
      duration: "2017 - 2018",
      status: "Completed",
      color: "teal",
      description:
        "Gained hands-on experience in software development and team collaboration.",
      responsibilities: [
        "Assisted senior developers with coding tasks",
        "Participated in agile development processes",
        "Learned version control and collaboration tools",
        "Attended team meetings and training sessions",
        "Completed assigned development tasks",
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "Eclipse", "Maven", "Git"],
      achievements: [
        "Successfully completed 6-month internship program",
        "Developed 2 small applications independently",
        "Received positive feedback from team members",
      ],
    },
    {
      id: "freelance",
      icon: FaUsers,
      title: "Freelance Developer",
      company: "Various Clients",
      duration: "2017 - Present",
      status: "Ongoing",
      color: "pink",
      description:
        "Working with diverse clients on various projects and technologies.",
      responsibilities: [
        "Develop custom web applications and websites",
        "Provide technical consulting and solutions",
        "Manage project timelines and client communications",
        "Maintain and update existing applications",
        "Provide ongoing support and maintenance",
      ],
      technologies: [
        "React",
        "Vue.js",
        "Node.js",
        "Python",
        "WordPress",
        "Shopify",
      ],
      achievements: [
        "Completed 25+ freelance projects successfully",
        "Maintained 95% client satisfaction rate",
        "Built long-term relationships with 8 recurring clients",
      ],
    },
  ];

  const handleWidgetClick = (widgetId) => {
    setActiveModal(widgetId);
    onOpen();
  };

  const getModalContent = () => {
    const job = jobWidgets.find((j) => j.id === activeModal);
    if (!job) return null;

    return (
      <VStack spacing={6} align="stretch">
        <Box textAlign="center">
          <Box
            w="80px"
            h="80px"
            borderRadius="full"
            bg={`${job.color}.100`}
            display="flex"
            alignItems="center"
            justifyContent="center"
            mx="auto"
            mb={4}
          >
            <Icon as={job.icon} boxSize={10} color={`${job.color}.600`} />
          </Box>
          <Text fontSize="2xl" fontWeight="bold" color={headingColor} mb={2}>
            {job.title}
          </Text>
          <Text
            fontSize="lg"
            color={`${job.color}.600`}
            fontWeight="medium"
            mb={2}
          >
            {job.company}
          </Text>
          <HStack spacing={3} justify="center">
            <Badge
              colorScheme={
                job.status === "Current"
                  ? "green"
                  : job.status === "Ongoing"
                  ? "blue"
                  : "gray"
              }
              variant="subtle"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="sm"
            >
              {job.status}
            </Badge>
            <Text fontSize="sm" color={textColor}>
              {job.duration}
            </Text>
          </HStack>
        </Box>

        <Text
          color={textColor}
          lineHeight="tall"
          className="poppins-light"
          fontSize="md"
        >
          {job.description}
        </Text>

        <Box>
          <Text fontSize="lg" fontWeight="semibold" color={headingColor} mb={3}>
            Key Responsibilities:
          </Text>
          <VStack spacing={2} align="stretch">
            {job.responsibilities.map((responsibility, index) => (
              <Flex key={index} align="center" gap={3}>
                <Box
                  w="2"
                  h="2"
                  borderRadius="full"
                  bg={`${job.color}.500`}
                  flexShrink={0}
                />
                <Text color={textColor} className="poppins-light" fontSize="sm">
                  {responsibility}
                </Text>
              </Flex>
            ))}
          </VStack>
        </Box>

        <Box>
          <Text fontSize="lg" fontWeight="semibold" color={headingColor} mb={3}>
            Technologies Used:
          </Text>
          <Flex wrap="wrap" gap={2}>
            {job.technologies.map((tech, index) => (
              <Badge
                key={index}
                colorScheme={job.color}
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
          <Text fontSize="lg" fontWeight="semibold" color={headingColor} mb={3}>
            Key Achievements:
          </Text>
          <VStack spacing={2} align="stretch">
            {job.achievements.map((achievement, index) => (
              <Flex key={index} align="center" gap={3}>
                <Box
                  w="2"
                  h="2"
                  borderRadius="full"
                  bg="green.500"
                  flexShrink={0}
                />
                <Text color={textColor} className="poppins-light" fontSize="sm">
                  {achievement}
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
      spacing={{ base: 6, md: 8 }}
      maxW="6xl"
      w="full"
      pb={8}
    >
      <VStack align="flex-start" spacing={4}>
        <HeroHeader title="My Work" subtitle="Hi" highlightText="story" />
      </VStack>

      <Box>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="semibold"
          color={textColor}
          mb={6}
          className="poppins"
          textAlign="center"
        >
          Explore My Professional Journey
        </Text>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{ base: 4, md: 6 }}
          w="full"
        >
          {jobWidgets.map((job) => (
            <GridItem key={job.id}>
              <Box
                bg={cardBg}
                p={5}
                borderRadius="2xl"
                boxShadow="lg"
                border="1px solid"
                borderColor={cardBorderColor}
                cursor="pointer"
                _hover={{
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: "2xl",
                  borderColor: `${job.color}.400`,
                  _before: {
                    transform: "scaleX(1)",
                  },
                }}
                transition="all 0.4s ease"
                position="relative"
                overflow="hidden"
                onClick={() => handleWidgetClick(job.id)}
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  bg: `linear-gradient(90deg, ${job.color}.400, ${job.color}.600)`,
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.4s ease",
                }}
              >
                <VStack spacing={3} align="center" textAlign="center">
                  <Box
                    w="50px"
                    h="50px"
                    borderRadius="full"
                    bg={`${job.color}.100`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    transition="all 0.3s ease"
                  >
                    <Icon
                      as={job.icon}
                      boxSize={6}
                      color={`${job.color}.600`}
                      transition="all 0.3s ease"
                    />
                  </Box>

                  <Text
                    fontSize="md"
                    fontWeight="bold"
                    color={headingColor}
                    className="poppins"
                  >
                    {job.title}
                  </Text>

                  <Text
                    fontSize="xs"
                    color={`${job.color}.600`}
                    fontWeight="medium"
                    className="poppins"
                  >
                    {job.company}
                  </Text>

                  <HStack spacing={2}>
                    <Badge
                      colorScheme={
                        job.status === "Current"
                          ? "green"
                          : job.status === "Ongoing"
                          ? "blue"
                          : "gray"
                      }
                      variant="subtle"
                      px={2}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                    >
                      {job.status}
                    </Badge>
                  </HStack>

                  <Button
                    size="sm"
                    variant="outline"
                    colorScheme={job.color}
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
          activeModal ? jobWidgets.find((j) => j.id === activeModal)?.title : ""
        }
        size="md"
      >
        {getModalContent()}
      </GSAPModal>
    </VStack>
  );
};

const HeroWithContent = HeroSection(WorkHistoryContent);

const WorkHistory = () => {
  return (
    <HeroWithContent
      footerHead="Would you like to"
      footerBody="Work with me?"
      footerSub="Click to view"
      navigateTo="/contact"
    />
  );
};

export default WorkHistory;
