import { Show, HStack, Link } from "@chakra-ui/react";

const SocialLinksLg = () => {
  return (
    <Show above="md">
      <HStack spacing={4}>
        <Link className="poppins-light" href="#" fontSize="sm">
          @github
        </Link>
        <Link className="poppins-light" href="#" fontSize="sm">
          @instagram
        </Link>
        <Link className="poppins-light" href="#" fontSize="sm">
          @facebook
        </Link>
        <Link className="poppins-light" href="#" fontSize="sm">
          @linkedin
        </Link>
      </HStack>
    </Show>
  );
};

export default SocialLinksLg;
