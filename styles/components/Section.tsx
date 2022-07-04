import { styled } from "stitches.config";

export default styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
  width: "100%",

  // ~ change to dynamic depends on the theme | will use variants for this one

  variants: {
    color: {
      primary: {
        backgroundColor: "$primary",
      },
      secondary: {
        backgroundColor: "$secondary",
      },
      tertiary: {
        backgroundColor: "$tertiary",
      },
      background: {
        backgroundColor: "$background",
      },
      main: {
        backgroundColor: "$main",
      },
      prevWorkSection: {
        backgroundColor: "$prevWorkBg",
      },
    },
  },
});
