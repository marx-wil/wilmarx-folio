import {
  Box,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import ThemeChanger from "../../components/themeChanger";
import Nav from "../../components/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Layout = (Component) => {
  const DefaultLayout = ({ ...props }) => {
    const { colorMode } = useColorMode();
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const layoutTimeline = useRef(null);
    const waveRef1 = useRef(null);
    const waveRef2 = useRef(null);
    const waveRef3 = useRef(null);
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);
    const [ripples] = useState([]);

    const bgColor = useColorModeValue("#F7F8FA", "#060809");
    const textColor = colorMode === "light" ? "black" : "white";
    const cursorColor = useColorModeValue(
      "rgba(79, 79, 79, 0.3)",
      "rgba(247, 248, 250, 0.3)"
    );
    const cursorDotColor = useColorModeValue(
      "rgba(79, 79, 79, 0.8)",
      "rgba(247, 248, 250, 0.8)"
    );
    const rippleColor = useColorModeValue(
      "rgba(79, 79, 79, 0.15)",
      "rgba(247, 248, 250, 0.15)"
    );
    const waveColor1 = useColorModeValue(
      "rgba(79, 79, 79, 0.045)",
      "rgba(247, 248, 250, 0.015)"
    );
    const waveColor2 = useColorModeValue(
      "rgba(79, 79, 79, 0.035)",
      "rgba(247, 248, 250, 0.012)"
    );
    const waveColor3 = useColorModeValue(
      "rgba(79, 79, 79, 0.025)",
      "rgba(247, 248, 250, 0.009)"
    );
    const gradientLight =
      "radial-gradient(circle at 50% 50%, rgba(79, 79, 79, 0.02), rgba(79, 79, 79, 0) 100%)";
    const gradientDark =
      "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.008), rgba(255, 255, 255, 0) 100%)";
    const backgroundImage = useColorModeValue(gradientLight, gradientDark);

    const waveSize = useBreakpointValue({
      base: "min(150vw, 150vh)", // Larger on mobile
      sm: "min(130vw, 130vh)", // Slightly smaller on small tablets
      md: "min(140vw, 140vh)", // Increased size for desktop
      lg: "min(130vw, 130vh)", // Slightly smaller for large screens
    });
    const waveScale = useBreakpointValue({
      base: "1.5", // Larger scale on mobile
      sm: "1.4",
      md: "1.35", // Slightly increased scale for desktop
      lg: "1.3",
    });

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
        ease: "power2.inOut",
      })
        .from(
          contentRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          [waveRef1.current, waveRef2.current, waveRef3.current],
          {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.6"
        );

      // Add subtle wave animations with different timings
      gsap.to(waveRef1.current, {
        y: "+=15",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(waveRef2.current, {
        y: "+=25",
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(waveRef3.current, {
        y: "+=35",
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
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
            ease: "power2.in",
          })
          .to(containerRef.current, {
            backgroundColor: bgColor,
            color: textColor,
            duration: 0.6,
            ease: "power2.inOut",
          })
          .to(
            [waveRef1.current, waveRef2.current, waveRef3.current],
            {
              fill: [waveColor1, waveColor2, waveColor3],
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.inOut",
            },
            "-=0.6"
          )
          .to(
            contentRef.current,
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
            },
            "-=0.3"
          );
      }
    }, [colorMode, bgColor, textColor, waveColor1, waveColor2, waveColor3]);

    // Add mouse movement effect
    useEffect(() => {
      let mouseX = 0;
      let mouseY = 0;
      let cursorX = 0;
      let cursorY = 0;
      let dotX = 0;
      let dotY = 0;

      const onMouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };

      const updateCursor = () => {
        // Smooth lerp for main cursor
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;

        // Faster lerp for dot cursor
        dotX += (mouseX - dotX) * 0.35;
        dotY += (mouseY - dotY) * 0.35;

        if (cursorRef.current && cursorDotRef.current) {
          gsap.set(cursorRef.current, {
            x: cursorX,
            y: cursorY,
            xPercent: -50,
            yPercent: -50,
          });

          gsap.set(cursorDotRef.current, {
            x: dotX,
            y: dotY,
            xPercent: -50,
            yPercent: -50,
          });
        }

        requestAnimationFrame(updateCursor);
      };

      window.addEventListener("mousemove", onMouseMove);
      updateCursor();

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
      };
    }, []);

    // Add ripple effect

    useEffect(() => {
      const handleClick = () => {
        // Ripple animation for waves
        const tl = gsap.timeline();

        // Animate each wave with a staggered ripple effect
        tl.to([waveRef1.current, waveRef2.current, waveRef3.current], {
          scale: "+=0.05",
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.1,
        }).to([waveRef1.current, waveRef2.current, waveRef3.current], {
          scale: "-=0.05",
          duration: 1,
          ease: "elastic.out(1, 0.3)",
          stagger: 0.1,
        });

        // Animate cursor on click
        if (cursorRef.current && cursorDotRef.current) {
          gsap.to(cursorRef.current, {
            scale: 0.85,
            duration: 0.15,
            ease: "power2.out",
            yoyo: true,
            repeat: 1,
          });

          gsap.to(cursorDotRef.current, {
            scale: 0.5,
            duration: 0.15,
            ease: "power2.out",
            yoyo: true,
            repeat: 1,
          });
        }
      };

      window.addEventListener("click", handleClick);
      return () => window.removeEventListener("click", handleClick);
    }, []);

    return (
      <Box
        ref={containerRef}
        bg={bgColor}
        color={textColor}
        minH="100dvh"
        minW="100vw"
        maxH="100dvh"
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
            zIndex: 0,
          },
          cursor: "none", // Hide default cursor
          "& a, & button": {
            cursor: "none", // Hide cursor on interactive elements
          },
        }}
      >
        {/* Ripple Effects */}
        {ripples.map((ripple) => (
          <Box
            key={ripple.id}
            id={`ripple-${ripple.id}`}
            position="fixed"
            top={0}
            left={0}
            width="60px"
            height="60px"
            borderRadius="full"
            bg={rippleColor}
            style={{
              transform: `translate(${ripple.x - 30}px, ${ripple.y - 30}px)`,
              pointerEvents: "none",
              zIndex: 9998,
            }}
          />
        ))}

        {/* Custom Cursor */}
        <Box
          ref={cursorRef}
          position="fixed"
          width="40px"
          height="40px"
          borderRadius="full"
          border="1px solid"
          borderColor={cursorColor}
          pointerEvents="none"
          zIndex={9999}
          style={{
            transformOrigin: "center",
          }}
        />
        <Box
          ref={cursorDotRef}
          position="fixed"
          width="8px"
          height="8px"
          borderRadius="full"
          bg={cursorDotColor}
          pointerEvents="none"
          zIndex={9999}
          style={{
            transformOrigin: "center",
          }}
        />
        {/* Layered Wavy Circle Background */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width={waveSize}
          height={waveSize}
          zIndex={0}
          pointerEvents="none"
          overflow="visible"
        >
          {/* Layer 1 - Largest wave */}
          <svg
            ref={waveRef1}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
              aspectRatio: "1/1",
            }}
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M500,150 C677,150 850,323 850,500 C850,677 677,850 500,850 C323,850 150,677 150,500 C150,323 323,150 500,150 Z"
              fill={waveColor1}
              style={{
                transformOrigin: "center",
                transform: `scale(${waveScale})`,
              }}
            >
              <animate
                attributeName="d"
                dur="20s"
                repeatCount="indefinite"
                values="
                  M500,150 C677,150 850,323 850,500 C850,677 677,850 500,850 C323,850 150,677 150,500 C150,323 323,150 500,150 Z;
                  M500,175 C665,175 825,335 825,500 C825,665 665,825 500,825 C335,825 175,665 175,500 C175,335 335,175 500,175 Z;
                  M500,150 C677,150 850,323 850,500 C850,677 677,850 500,850 C323,850 150,677 150,500 C150,323 323,150 500,150 Z"
              />
            </path>
          </svg>

          {/* Layer 2 - Medium wave */}
          <svg
            ref={waveRef2}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "96%",
              height: "96%",
            }}
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M500,200 C650,200 800,350 800,500 C800,650 650,800 500,800 C350,800 200,650 200,500 C200,350 350,200 500,200 Z"
              fill={waveColor2}
              style={{
                transformOrigin: "center",
                transform: `scale(${Number(waveScale) * 0.96})`,
              }}
            >
              <animate
                attributeName="d"
                dur="18s"
                repeatCount="indefinite"
                values="
                  M500,200 C650,200 800,350 800,500 C800,650 650,800 500,800 C350,800 200,650 200,500 C200,350 350,200 500,200 Z;
                  M500,225 C638,225 775,362 775,500 C775,638 638,775 500,775 C362,775 225,638 225,500 C225,362 362,225 500,225 Z;
                  M500,200 C650,200 800,350 800,500 C800,650 650,800 500,800 C350,800 200,650 200,500 C200,350 350,200 500,200 Z"
              />
            </path>
          </svg>

          {/* Layer 3 - Smallest wave */}
          <svg
            ref={waveRef3}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "92%",
              height: "92%",
            }}
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M500,250 C625,250 750,375 750,500 C750,625 625,750 500,750 C375,750 250,625 250,500 C250,375 375,250 500,250 Z"
              fill={waveColor3}
              style={{
                transformOrigin: "center",
                transform: `scale(${Number(waveScale) * 0.92})`,
              }}
            >
              <animate
                attributeName="d"
                dur="15s"
                repeatCount="indefinite"
                values="
                  M500,250 C625,250 750,375 750,500 C750,625 625,750 500,750 C375,750 250,625 250,500 C250,375 375,250 500,250 Z;
                  M500,275 C612,275 725,388 725,500 C725,612 612,725 500,725 C388,725 275,612 275,500 C275,388 388,275 500,275 Z;
                  M500,250 C625,250 750,375 750,500 C750,625 625,750 500,750 C375,750 250,625 250,500 C250,375 375,250 500,250 Z"
              />
            </path>
          </svg>
        </Box>

        <Box ref={contentRef} position="relative" zIndex={1} height="100dvh">
          <Nav />
          <Component {...props} />
        </Box>

        <ThemeChanger
          onThemeChange={(mode) => {
            // Additional theme-specific animations can be added here
            gsap.to(containerRef.current, {
              background: mode === "light" ? gradientLight : gradientDark,
              duration: 0.6,
              ease: "power2.inOut",
            });
          }}
        />
      </Box>
    );
  };

  return DefaultLayout;
};

export default Layout;
