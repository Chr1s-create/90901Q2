import { createStitches, createTheme } from "@stitches/react";

const pixelValues = {
  1: "8px",
  2: "16px",
  3: "24px",
  4: "32px",
  5: "40px",
  6: "48px",
  7: "56px",
  8: "64px",
};

export const { styled, css, globalCss, reset, getCssText, config, theme } =
  createStitches({
    theme: {
      colors: {
        background: "#fffffe",
        primary: "#ffd803",
        button: "#ffd803",
        headline: "#272343",
        buttonText: "#272343",
        paragraph: "#2d334a",
        stroke: "#272343",
        secondary: "#e3f6f5",
        main: "#fffffe",
        tertiary: "#bae8e8",
        highlight: "#ffd803",
        prevWorkBg: "#e3f6f5",
        cardBg: "#fffffe",
        cardHeading: "#272343",
        cardText: "#2d334a",
      },
      fonts: {
        untitled: "Untitled Sans, apple-system, sans-serif",
        mono: "Söhne Mono, menlo, monospace",
      },
      space: pixelValues,
      sizes: pixelValues,
      fontSizes: pixelValues,
      zIndices: {
        1: "100",
        2: "200",
        3: "300",
        4: "400",
        5: "999",
      },
      media: {
        sm: "(min-width: 640px)",
        md: "(min-width: 768px)",
        lg: "(min-width: 1024px)",
      },
    },

    utils: {
      // *paddings
      pt: (value: string) => ({ paddingTop: value }),
      pr: (value: string) => ({ paddingRight: value }),
      pb: (value: string) => ({ paddingBottom: value }),
      pl: (value: string) => ({ paddingLeft: value }),

      px: (value: string) => ({ paddingRight: value, paddingLeft: value }),
      py: (value: string) => ({ paddingTop: value, paddingBottom: value }),

      p: (value: string) => ({ padding: value }),

      // *margins
      mt: (value: string) => ({ marginTop: value }),
      mr: (value: string) => ({ marginRight: value }),
      mb: (value: string) => ({ marginBottom: value }),
      ml: (value: string) => ({ marginLeft: value }),

      mX: (value: string) => ({ marginRight: value, marginLeft: value }),
      my: (value: string) => ({ marginTop: value, marginBottom: value }),

      m: (value: string) => ({ margin: value }),

      // *width and height
      w: (value: string) => ({ width: value }),
      h: (value: string) => ({ height: value }),
    },
  });

export const GlobalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  html: {
    overflowX: "hidden",
    overflowY: "auto",
  },
  body: {
    fontFamily: "$untitled",
    maxWidth: "1366px",
    margin: "auto",
  },
});

// themes
// export const yellowTheme = createTheme({
//   colors: {
//     background: "#fffffe",
//     button: "#ffd803",
//     headline: "#272343",
//     buttonText: "#272343",
//     paragraph: "#2d334a",
//     stroke: "#272343",
//     secondary: "#e3f6f5",
//     main: "#fffffe",
//     tertiary: "#bae8e8",
//     highlight: "#ffd803",
//   },
// });

export const navyBlueTheme = createTheme({
  colors: {
    background: "#232946",
    primary: "#eebbc3",
    button: "#eebbc3",
    headline: "#fffffe",
    buttonText: "#232946",
    paragraph: "#b8c1ec",
    stroke: "#121629",
    secondary: "#fffffe",
    main: "#b8c1ec",
    tertiary: "#b8c1ec",
    highlight: "#b8c1ec",
    prevWorkBg: "#d4d8f0",
    cardBg: "#fffffe",
    cardHeading: "#232946",
    cardText: "#232946",
  },
});

export const deepJungleGreen = createTheme({
  colors: {
    background: "#004643",
    primary: "#f9bc60",
    button: "#f9bc60",
    headline: "#fffffe",
    buttonText: "#001e1d",
    paragraph: "#abd1c6",
    stroke: "#001e1d",
    secondary: "#abd1c6",
    main: "#e8e4e6",
    tertiary: "#e16162",
    highlight: "#f9bc60",
    prevWorkBg: "#abd1c6",
    cardBg: "#004643",
    cardHeading: "#fffffe",
    cardText: "#abd1c6",
  },
});

export const tickleMePink = createTheme({
  colors: {
    background: "#fef6e4",
    primary: "#f582ae",
    button: "#f582ae",
    headline: "#001858",
    buttonText: "#001858",
    paragraph: "#172c66",
    stroke: "#001858",
    secondary: "#8bd3dd",
    main: "#f3d2c1",
    tertiary: "#f582ae",
    highlight: "#fef6e4",
    prevWorkBg: "#fffffe",
    cardBg: "#d9d4e7",
    cardHeading: "#0e172c",
    cardText: "#0e172c",
  },
});
