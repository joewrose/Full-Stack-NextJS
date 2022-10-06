import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// Resets the CSS to be the same in every browser
import "reset-css";

// Importing better colours and removing shadows from buttons
const theme = extendTheme({
  colors: {
    gray: {
      100: "#F5f5f5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  component: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

const MyApp = ({ Component, pageProps }) => {
  <ChakraProvider theme={theme}>
    return <Component {...pageProps} />;
  </ChakraProvider>;
};

export default MyApp;
