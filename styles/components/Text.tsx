import { styled } from "stitches.config";
import { margins, paddings } from "./common";

export const Headline = styled("h1", {
  color: "$tertiary",
  fontSize: "$5",
  fontWeight: "bolder",
  marginTop: "$2",
  marginBottom: "$2",
});

export const Paragraph = styled("p", {
  color: "$paragraph",

  ...margins,
  ...paddings,

  "&.subtext": {
    fontSize: "$2",
    fontWeight: "bold",
  },

  "&.normalText": {
    fontSize: "$2",
    fontWeight: "normal",
  },

  "&.bold": {
    fontWeight: "bold",
  },

  "&.smallText": {
    fontSize: "$1",
    fontWeight: "normal",
  },

  "&.action": {
    cursor: "pointer",
  },
});
