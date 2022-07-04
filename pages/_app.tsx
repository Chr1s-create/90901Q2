import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import {
  GlobalStyles,
  navyBlueTheme,
  deepJungleGreen,
  tickleMePink,
} from "stitches.config";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // & call Global to apply global css
  GlobalStyles();

  React.useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: "light",
        navyBlueTheme: navyBlueTheme.className,
        deepJungleGreen: deepJungleGreen.className,
        tickleMePink: tickleMePink.className,
      }}
    >
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
