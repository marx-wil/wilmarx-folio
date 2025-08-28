import { Show, HStack, Link, Icon, useColorModeValue } from "@chakra-ui/react";
import socialLinksLg from "./data";

const SocialLinksLg = () => {
  const linkColor = useColorModeValue("gray.600", "gray.400");
  const hoverColor = useColorModeValue("blue.600", "blue.400");
  const hoverBg = useColorModeValue("blue.50", "blue.900");

  return (
    <Show above="md">
      <HStack spacing={6}>
        {socialLinksLg.map((link) => (
          <Link
            key={link.name}
            className="poppins-light"
            href={link.link}
            fontSize="sm"
            display="flex"
            alignItems="center"
            target="_blank"
            rel="noopener noreferrer"
            gap={3}
            color={linkColor}
            p={2}
            borderRadius="lg"
            _hover={{
              color: hoverColor,
              bg: hoverBg,
              transform: "translateY(-2px)",
              boxShadow: "md",
              _before: {
                width: "100%",
              },
            }}
            _active={{
              transform: "translateY(0px)",
            }}
            transition="all 0.3s ease"
            fontWeight="medium"
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              bottom: "0",
              left: "50%",
              width: "0",
              height: "2px",
              bg: hoverColor,
              transform: "translateX(-50%)",
              transition: "width 0.3s ease",
            }}
          >
            <Icon
              as={link.icon}
              boxSize={5}
              _groupHover={{
                transform: "scale(1.1)",
              }}
              transition="transform 0.2s ease"
            />
            {link.name}
          </Link>
        ))}
      </HStack>
    </Show>
  );
};

export default SocialLinksLg;
