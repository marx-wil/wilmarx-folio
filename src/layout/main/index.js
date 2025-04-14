import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import ThemeChanger from "../../components/themeChanger";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Layout = (Component) => {
  const DefaultLayout = ({ ...props }) => {
    const { colorMode } = useColorMode();
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const layoutTimeline = useRef(null);
    
    // Move color mode values outside of the callback
    const bgColor = useColorModeValue("#F7F8FA", "#060809");
    const textColor = colorMode === "light" ? "black" : "white";
    const gradientLight = "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0) 100%)";
    const gradientDark = "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0) 100%)";
    const backgroundImage = useColorModeValue(gradientLight, gradientDark);

    // Initialize GSAP timeline
    useEffect(() => {
      layoutTimeline.current = gsap.timeline();
    }, []);

    // Initial mount animation
    useEffect(() => {
      const tl = gsap.timeline();
      
      tl.from(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut"
      })
      .from(contentRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.4");

      // Add subtle background texture animation
      gsap.to(containerRef.current, {
        backgroundPosition: '100% 100%',
        duration: 20,
        repeat: -1,
        ease: "none",
        yoyo: true
      });
    }, []);

    // Theme change animation
    useEffect(() => {
      if (layoutTimeline.current) {
        layoutTimeline.current.clear();
        
        layoutTimeline.current
          .to(contentRef.current, {
            y: -20,
            opacity: 0,
            duration: 0.4,
            ease: "power2.in"
          })
          .to(containerRef.current, {
            backgroundColor: bgColor,
            color: textColor,
            duration: 0.6,
            ease: "power2.inOut"
          })
          .to(contentRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
          }, "-=0.3");
      }
    }, [colorMode, bgColor, textColor]);

    return (
      <Box
        ref={containerRef}
        bg={bgColor}
        color={textColor}
        minH="100vh"
        minW="100vw"
        maxH="100vh"
        maxW="100vw"
        width="100vw"
        overflow={"hidden"}
        position="relative"
        sx={{
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage,
            backgroundSize: "200% 200%",
            pointerEvents: "none",
            zIndex: 0
          }
        }}
      >
        <Box
          ref={contentRef}
          position="relative"
          zIndex={1}
          height="100%"
        >
          <Component {...props} />
        </Box>
        <ThemeChanger onThemeChange={(mode) => {
          // Additional theme-specific animations can be added here
          gsap.to(containerRef.current, {
            background: mode === 'light' ? gradientLight : gradientDark,
            duration: 0.6,
            ease: "power2.inOut"
          });
        }} />
      </Box>
    );
  };

  return DefaultLayout;
};

export default Layout;
