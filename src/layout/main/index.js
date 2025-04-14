import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const Layout = (Component) => {
  const DefaultLayout = ({ ...props }) => {
    const { colorMode } = useColorMode();
    return (
      <AnimatePresence mode="wait">
        {/* Handles animations when the theme changes */}
        <motion.div
          key={colorMode} // Ensures re-animation when theme mode changes
          initial={{ opacity: 0, scale: 0.98 }} // Initial state: slightly faded and scaled down
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }} // Exit animation: slight scale-up and fade out
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ minHeight: "100vh" }} 
        >
          <Box
            bg={useColorModeValue("#F7F8FA", "#060809")}
            color={colorMode === "light" ? "black" : "white"}
            minH="100vh"
            width="100vw"
            transition="background 0.4s ease-in-out, color 0.4s ease-in-out"
            overflow={"hidden"}
          >
            
            <Component {...props} /> 
          </Box>
        </motion.div>
      </AnimatePresence>
    );
  };

  return DefaultLayout; // Returns the higher-order component with layout
};

export default Layout;