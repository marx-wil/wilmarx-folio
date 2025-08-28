import { Box, useColorModeValue, IconButton, Text } from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const GSAPModal = ({ isOpen, onClose, children, title, size = "md" }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const closeBtnRef = useRef(null);

  const bgColor = useColorModeValue("white", "gray.800");
  const overlayBg = useColorModeValue(
    "rgba(0, 0, 0, 0.8)",
    "rgba(0, 0, 0, 0.9)"
  );
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.200");
  const closeBtnBg = useColorModeValue("gray.100", "gray.700");
  const scrollThumbBg = useColorModeValue("gray.300", "gray.600");
  const scrollThumbHoverBg = useColorModeValue("gray.400", "gray.500");

  const sizeMap = {
    sm: { w: "90vw", maxW: "400px", h: "auto", maxH: "80vh" },
    md: { w: "90vw", maxW: "700px", h: "auto", maxH: "85vh" },
    lg: { w: "90vw", maxW: "900px", h: "auto", maxH: "90vh" },
    xl: { w: "95vw", maxW: "1200px", h: "auto", maxH: "95vh" },
  };

  const modalSize = sizeMap[size];

  useEffect(() => {
    if (isOpen) {
      const tl = gsap.timeline();

      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set(modalRef.current, {
        scale: 0.8,
        opacity: 0,
        y: 50,
        rotationY: -15,
      });
      gsap.set(contentRef.current, { opacity: 0, y: 20 });
      gsap.set(closeBtnRef.current, { scale: 0, rotation: -180 });

      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      tl.to(
        modalRef.current,
        {
          scale: 1,
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.1"
      );

      tl.to(
        contentRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      );

      tl.to(
        closeBtnRef.current,
        {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );

      gsap.to(modalRef.current, {
        y: "+=5",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    } else if (overlayRef.current && modalRef.current) {
      const tl = gsap.timeline();

      tl.to(closeBtnRef.current, {
        scale: 0,
        rotation: 180,
        duration: 0.2,
        ease: "power2.in",
      });

      tl.to(
        contentRef.current,
        {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.in",
        },
        "-=0.1"
      );

      tl.to(
        modalRef.current,
        {
          scale: 0.8,
          opacity: 0,
          y: 50,
          rotationY: 15,
          duration: 0.4,
          ease: "power2.in",
        },
        "-=0.2"
      );

      tl.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: onClose,
      });
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Box
      ref={overlayRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg={overlayBg}
      zIndex={999999}
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={4}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      cursor="pointer"
    >
      <Box
        ref={modalRef}
        bg={bgColor}
        borderRadius="2xl"
        boxShadow="2xl"
        border="1px solid"
        borderColor={borderColor}
        position="relative"
        overflow="hidden"
        cursor="default"
        onClick={(e) => e.stopPropagation()}
        maxH="90vh"
        display="flex"
        flexDirection="column"
        {...modalSize}
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899)",
          opacity: 0.8,
        }}
      >
        <IconButton
          ref={closeBtnRef}
          icon={<FaTimes />}
          aria-label="Close modal"
          position="absolute"
          top={4}
          right={4}
          size="sm"
          variant="ghost"
          color={textColor}
          _hover={{
            bg: closeBtnBg,
            transform: "scale(1.1)",
          }}
          onClick={onClose}
          zIndex={2}
          transition="all 0.2s ease"
        />

        {title && (
          <Box
            p={6}
            pb={4}
            borderBottom="1px solid"
            borderColor={borderColor}
            flexShrink={0}
          >
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color={textColor}
              className="poppins"
            >
              {title}
            </Text>
          </Box>
        )}

        <Box
          ref={contentRef}
          p={6}
          pt={title ? 4 : 6}
          flex="1"
          overflow="auto"
          minH="0"
          sx={{
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              background: scrollThumbBg,
              borderRadius: "3px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: scrollThumbHoverBg,
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default GSAPModal;
