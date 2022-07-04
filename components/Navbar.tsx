import Button from "@styles/components/Button";
import Container from "@styles/components/Container";
import { Paragraph } from "@styles/components/Text";
import React from "react";
import { useTheme } from "next-themes";

type Props = {
  show: boolean;
  setShow: Function;
};

const options = [
  {
    value: "light",
    label: "Default",
    delay: "300",
  },
  {
    value: "navyBlueTheme",
    label: "Midnight Skies",
    delay: "500",
  },
  {
    value: "deepJungleGreen",
    label: "Deep Jungle Green",
    delay: "700",
  },
  {
    value: "tickleMePink",
    label: "Tickle Me Pink",
    delay: "900",
  },
];

const Navbar = ({ show, setShow }: Props) => {
  const { setTheme } = useTheme();

  const handleChangeTheme = (e: any) => {
    setTheme(e.target.name);
  };

  return (
    <Container
      className="pt2 pb2"
      css={{
        position: "sticky",
        top: "0",
        background: "white",
        zIndex: "$5",
      }}
    >
      <Container className="justify-start">
        <Paragraph className="normalText ml2">
          This is for Demo purposes only | 90901 Q2 2022.
        </Paragraph>
      </Container>
      <Container className="justify-end mr8">
        <Paragraph className="mr3">Select Theme</Paragraph>
        {options.map((option) => (
          <Button
            data-aos="zoom-out-down"
            data-aos-delay={option.delay}
            css={{
              marginRight: "$1",
            }}
            className="nav-btn"
            onClick={(e) => handleChangeTheme(e)}
            key={option.value}
            name={option.value}
          >
            {option.label}
          </Button>
        ))}
      </Container>
    </Container>
  );
};

export default Navbar;
