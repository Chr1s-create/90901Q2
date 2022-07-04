import { styled } from "stitches.config";
import { margins, paddings } from "./common";

export default styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",

  ...margins,
  ...paddings,

  "&.column": {
    flexDirection: "column",
  },

  "&.justify-end": {
    justifyContent: "end",
  },
  "&.justify-start": {
    justifyContent: "start",
  },

  "&.justify-space-between": {
    justifyContent: "space-between",
  },

  "&.title": {
    justifyContent: "center",
    alignItems: "center",
  },

  "&.grid": {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gap: "$7",
  },

  // using tokens from pre-set stitches
  // p: "$2",
  // m: "$2",
});
