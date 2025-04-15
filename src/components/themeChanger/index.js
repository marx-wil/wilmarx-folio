import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import {SunIcon, MoonIcon} from "@chakra-ui/icons"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ThemeChanger = ({ onThemeChange }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const buttonRef = useRef(null);
  const iconRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(
    colorMode === "light" ? "moon" : "sun"
  );

  // Move all useColorModeValue hooks to the top level
  const buttonBg = useColorModeValue("#060809", "#F7F8FA");
  const buttonColor = useColorModeValue("#F7F8FA", "#060809");
  const hoverBg = useColorModeValue("#F7F8FA", "#060809");
  const hoverColor = useColorModeValue("#060809", "#F7F8FA");

  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Update icon when color mode changes
  useEffect(() => {
    if (isMounted) {
      setCurrentIcon(colorMode === "light" ? "moon" : "sun");
    }
  }, [colorMode, isMounted]);

  const handleThemeChange = () => {
    if (!isMounted) return;

    const tl = gsap.timeline();

    // Create and animate overlay
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100dvh";
    overlay.style.pointerEvents = "none";
    overlay.style.zIndex = "9999";
    overlay.style.backgroundColor =
      colorMode === "light" ? "#060809" : "#F7F8FA";
    overlay.style.transformOrigin = "bottom right";
    document.body.appendChild(overlay);

    // Get button position for ripple effect
    const buttonBounds = buttonRef.current.getBoundingClientRect();
    const rippleX = buttonBounds.right;
    const rippleY = buttonBounds.bottom;

    // Initial icon fade out with rotation
    tl.to(iconRef.current, {
      rotate: 90,
      scale: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
    });

    // Overlay animation
    tl.fromTo(
      overlay,
      {
        clipPath: `circle(0px at ${rippleX}px ${rippleY}px)`,
        opacity: 0.7,
      },
      {
        clipPath: `circle(${Math.hypot(
          window.innerWidth,
          window.innerHeight
        )}px at ${rippleX}px ${rippleY}px)`,
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => {
          toggleColorMode();
          setCurrentIcon(currentIcon === "moon" ? "sun" : "moon");

          // Notify parent layout of theme change
          onThemeChange?.(colorMode === "light" ? "dark" : "light");

          // Fade out overlay
          gsap.to(overlay, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              document.body.removeChild(overlay);
            },
          });

          // Animate new icon with enhanced effects
          const newIconTl = gsap.timeline();
          newIconTl
            .set(iconRef.current, {
              rotate: -90,
              scale: 0,
              opacity: 0,
            })
            .to(iconRef.current, {
              rotate: 0,
              scale: 1,
              opacity: 1,
              duration: 0.4,
              ease: "back.out(1.7)",
            })
            .to(
              buttonRef.current,
              {
                keyframes: [
                  { scale: 1.1, duration: 0.2 },
                  { scale: 1, duration: 0.2 },
                ],
                ease: "power2.inOut",
              },
              "-=0.2"
            );

          // Add sparkle effect
          const sparkle = document.createElement("div");
          sparkle.style.position = "absolute";
          sparkle.style.top = "50%";
          sparkle.style.left = "50%";
          sparkle.style.width = "200px";
          sparkle.style.height = "200px";
          sparkle.style.transform = "translate(-50%, -50%)";
          sparkle.style.background =
            "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)";
          sparkle.style.pointerEvents = "none";
          buttonRef.current.appendChild(sparkle);

          gsap.to(sparkle, {
            opacity: 0,
            scale: 2,
            duration: 0.6,
            ease: "power2.out",
            onComplete: () => sparkle.remove(),
          });
        },
      }
    );

    // Button glow effect
    tl.fromTo(
      buttonRef.current,
      {
        boxShadow: "0 0 0 0px rgba(255, 255, 255, 0.7)",
      },
      {
        boxShadow: "0 0 0 20px rgba(255, 255, 255, 0)",
        duration: 0.8,
        ease: "power2.out",
      },
      0
    );
  };

  // Initial mount animation
  useEffect(() => {
    if (!isMounted) return;

    const mountTl = gsap.timeline();
    mountTl.from(buttonRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: "back.out(1.7)",
      delay: 0.8,
    });

    return () => {
      mountTl.kill();
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <Box position={"fixed"} bottom={5} right={5} zIndex={9999}>
      <IconButton
        ref={buttonRef}
        icon={
          <Box ref={iconRef} style={{ display: "inline-block" }}>
            {currentIcon === "moon" ? <MoonIcon /> : <SunIcon />}
          </Box>
        }
        aria-label="Toggle theme"
        onClick={handleThemeChange}
        size={"lg"}
        rounded={"full"}
        boxShadow={"lg"}
        bg={buttonBg}
        color={buttonColor}
        variant={"solid"}
        _hover={{
          bg: hoverBg,
          color: hoverColor,
          transform: "scale(1.05)",
          transition: "all 0.2s ease-in-out",
        }}
        sx={{
          transition: "background 0.3s ease-in-out, color 0.3s ease-in-out",
        }}
      />
    </Box>
  );
};

export default ThemeChanger;
