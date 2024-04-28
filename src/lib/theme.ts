/* eslint-disable @typescript-eslint/ban-ts-comment */

//@ts-nocheck
import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/rubik';
const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    body: "'Rubik', sans-serif",
    heading: "'Rubik', sans-serif",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.900" : "gray.100",
        color: props.colorMode === "dark" ? "white" : "gray.900",
      },
    }),
  },

  // TypeScript and Vercel style buttons
  components: {
    Button: {
      // Base style
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "md",
      },
    
      // Styles for different variants
      variants: {
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "vercel.500" : "blue.500",
          color: "white",
          _hover: {
            bg: props.colorMode === "dark" ? "vercel.600" : "blue.600",
          },
        }),
        outline: (props) => ({
          border: "2px",
          borderColor: props.colorMode === "dark" ? "vercel.500" : "blue.500",
          color: props.colorMode === "dark" ? "vercel.500" : "blue.500",
          _hover: {
            bg: props.colorMode === "dark" ? "vercel.600" : "blue.600",
            color: "white",
          },
        }),
      },
    },
  },
});

export default theme;
