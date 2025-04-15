import { Show, HStack, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";
import socialLinksLg from "./data";
const SocialLinksLg = () => {
  return (
    <Show above="md">
      <HStack spacing={5}>
        {socialLinksLg.map((link) => (
          <Link
            key={link.name}
            className="poppins-light"
            href="#"
            fontSize="sm"
            display="flex"
            alignItems="center"
            gap={2}
          >
            <Icon as={link.icon} /> {link.name}
          </Link>
        ))}
      </HStack>
    </Show>
  );
};

export default SocialLinksLg;
