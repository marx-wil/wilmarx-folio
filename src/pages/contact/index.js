import {
  Text,
  useColorModeValue,
  VStack,
  Box,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Icon,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import HeroSection from "../../components/heroSection";
import { useState } from "react";
import GSAPModal from "../../components/gsapModal";
import HeroHeader from "../../components/HeroHeader";

const ContactContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeModal, setActiveModal] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const textColor = useColorModeValue("gray.600", "gray.400");
  const accentColor = useColorModeValue("blue.500", "blue.400");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const cardBg = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("gray.800", "gray.200");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      onClose();
    }, 2000);
  };

  const contactWidgets = [
    {
      id: "contact-form",
      icon: FaPaperPlane,
      title: "Send Message",
      subtitle: "Get in Touch",
      color: "blue",
      description:
        "Ready to start a conversation? Send me a message and I'll get back to you as soon as possible.",
      action: "Open Form",
    },
    {
      id: "email",
      icon: FaEnvelope,
      title: "Email",
      subtitle: "wilmarx@gmail.com",
      color: "green",
      description:
        "Prefer email? Drop me a line directly. I typically respond within 24 hours.",
      action: "Send Email",
      href: "mailto:wilmarx@example.com",
    },
    {
      id: "phone",
      icon: FaPhone,
      title: "Phone",
      subtitle: "+63 963 877 3839",
      color: "purple",
      description:
        "Need to talk? Feel free to call me during business hours. I'm always happy to discuss new opportunities.",
      action: "Call Now",
      href: "tel:+639638773839",
    },
    {
      id: "location",
      icon: FaMapMarkerAlt,
      title: "Location",
      subtitle: "Cabuyao, Povince of Laguna",
      color: "orange",
      description:
        " Based in the Philippines, but open to remote opportunities worldwide.",
      action: "View Map",
      href: "#",
    },
    {
      id: "github",
      icon: FaGithub,
      title: "GitHub",
      subtitle: "marx-wil",
      color: "gray",
      description:
        "Check out my open source contributions and personal projects. Always happy to collaborate!",
      action: "Visit Profile",
      href: "https://github.com/marx-wil",
    },
    {
      id: "linkedin",
      icon: FaLinkedin,
      title: "LinkedIn",
      subtitle: "Professional Network",
      color: "blue",
      description:
        "Connect with me professionally. Let's discuss opportunities and share industry insights.",
      action: "Connect",
      href: "https://linkedin.com/in/wilmarx-cayabyab/",
    },
  ];

  const handleWidgetClick = (widgetId) => {
    setActiveModal(widgetId);
    onOpen();
  };

  const getModalContent = () => {
    const widget = contactWidgets.find((w) => w.id === activeModal);
    if (!widget) return null;

    if (widget.id === "contact-form") {
      return (
        <VStack spacing={6} align="stretch">
          <Box textAlign="center" mb={4}>
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
              <Icon
                as={widget.icon}
                boxSize={10}
                color={`${widget.color}.600`}
              />
            </Box>
            <Text fontSize="xl" fontWeight="bold" color={headingColor} mb={2}>
              {widget.title}
            </Text>
            <Text color={textColor} lineHeight="tall" className="poppins-light">
              {widget.description}
            </Text>
          </Box>

          <form onSubmit={handleSubmit}>
            <VStack spacing={6}>
              <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                gap={4}
                w="full"
              >
                <FormControl isRequired>
                  <FormLabel color={textColor} className="poppins">
                    Name
                  </FormLabel>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    borderRadius="lg"
                    borderColor={borderColor}
                    _focus={{
                      borderColor: accentColor,
                      boxShadow: `0 0 0 1px ${accentColor}`,
                    }}
                    _hover={{
                      borderColor: accentColor,
                    }}
                    transition="all 0.2s ease"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color={textColor} className="poppins">
                    Email
                  </FormLabel>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    borderRadius="lg"
                    borderColor={borderColor}
                    _focus={{
                      borderColor: accentColor,
                      boxShadow: `0 0 0 1px ${accentColor}`,
                    }}
                    _hover={{
                      borderColor: accentColor,
                    }}
                    transition="all 0.2s ease"
                  />
                </FormControl>
              </Grid>

              <FormControl isRequired>
                <FormLabel color={textColor} className="poppins">
                  Subject
                </FormLabel>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  borderRadius="lg"
                  borderColor={borderColor}
                  _focus={{
                    borderColor: accentColor,
                    boxShadow: `0 0 0 1px ${accentColor}`,
                  }}
                  _hover={{
                    borderColor: accentColor,
                  }}
                  transition="all 0.2s ease"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color={textColor} className="poppins">
                  Message
                </FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me more..."
                  rows={6}
                  borderRadius="lg"
                  borderColor={borderColor}
                  resize="vertical"
                  _focus={{
                    borderColor: accentColor,
                    boxShadow: `0 0 0 1px ${accentColor}`,
                  }}
                  _hover={{
                    borderColor: accentColor,
                  }}
                  transition="all 0.2s ease"
                />
              </FormControl>

              <Button
                type="submit"
                isLoading={isSubmitting}
                loadingText="Sending..."
                rightIcon={<FaPaperPlane />}
                colorScheme="blue"
                size="lg"
                w="full"
                borderRadius="lg"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                _active={{
                  transform: "translateY(0px)",
                }}
                transition="all 0.2s ease"
                className="poppins"
                fontWeight="semibold"
              >
                Send Message
              </Button>
            </VStack>
          </form>
        </VStack>
      );
    }

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
          <Text fontSize="2xl" fontWeight="bold" color={headingColor} mb={2}>
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
          <Text
            color={textColor}
            lineHeight="tall"
            className="poppins-light"
            mb={6}
          >
            {widget.description}
          </Text>

          {widget.href && (
            <Button
              as="a"
              href={widget.href}
              target="_blank"
              rel="noopener noreferrer"
              colorScheme={widget.color}
              size="lg"
              leftIcon={<Icon as={widget.icon} />}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              transition="all 0.2s ease"
            >
              {widget.action}
            </Button>
          )}
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
        <HeroHeader
          title="GET IN TOUCH"
          subtitle="Contact&nbsp;"
          highlightText="Me"
        />
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
          Choose Your Preferred Method
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
          {contactWidgets.map((widget) => (
            <GridItem key={widget.id}>
              <Box
                bg={cardBg}
                p={5}
                borderRadius="2xl"
                boxShadow="lg"
                border="1px solid"
                borderColor={borderColor}
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
                <VStack spacing={3} align="center" textAlign="center">
                  <Box
                    w="50px"
                    h="50px"
                    borderRadius="full"
                    bg={`${widget.color}.100`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    transition="all 0.3s ease"
                  >
                    <Icon
                      as={widget.icon}
                      boxSize={6}
                      color={`${widget.color}.600`}
                      transition="all 0.3s ease"
                    />
                  </Box>

                  <Text
                    fontSize="md"
                    fontWeight="bold"
                    color={headingColor}
                    className="poppins"
                  >
                    {widget.title}
                  </Text>

                  <Text
                    fontSize="xs"
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
                    {widget.action}
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
            ? contactWidgets.find((w) => w.id === activeModal)?.title
            : ""
        }
        size="md"
      >
        {getModalContent()}
      </GSAPModal>
    </VStack>
  );
};

const HeroWithContent = HeroSection(ContactContent);

const Contact = () => {
  return (
    <HeroWithContent
      footerHead="Go back to"
      footerBody="Root of Website"
      footerSub="Click to go back"
      navigateTo="/"
    />
  );
};

export default Contact;
