import { styled } from "stitches.config";

export default styled("button", {
  cursor: "pointer",
  background: "$button",
  color: "$buttonText",
  fontSize: "$2",
  border: "none",
  p: "$1",
  borderRadius: "3px",

  "&:hover": {
    boxShadow: "5px 6px 15px -3px rgba(71,71,71,0.58)",
    transition: "0.3s",
  },

  "&.clear": {
    background: "white",
    fontSize: "$2",
  },

  "&.nav-btn": {
    cursor: "pointer",
    background: "$button",
    color: "$buttonText",
    fontSize: "$2",
  },
});
