import Image from "next/image";
import React from "react";
import Container from "styles/components/Container";
import { Headline } from "@styles/components/Text";

const skillIcons = [
  {
    src: "/css.png",
    delay: "300",
  },
  {
    src: "/docker.png",
    delay: "800",
  },
  {
    src: "/github.png",
    delay: "600",
  },
  {
    src: "/go-lang.png",
    delay: "100",
  },
  {
    src: "/html-5.png",
    delay: "100",
  },
  {
    src: "/javascript.png",
    delay: "200",
  },
  {
    src: "/nodejs.png",
    delay: "900",
  },
  {
    src: "/react.png",
    delay: "1200",
  },
  {
    src: "/typescript.png",
    delay: "100",
  },
  {
    src: "/visual-basic.png",
    delay: "700",
  },
];

const Skills = () => {
  return (
    <>
      <Headline as={"h4"} className="m1 p2">
        Skills
      </Headline>
      <Container
        className="grid"
        css={{
          alignItems: "start",
          marginTop: "$2",
        }}
      >
        {skillIcons.map((icon, index) => (
          <Image
            data-aos="zoom-in-up"
            data-aos-delay={icon.delay}
            key={index}
            src={icon.src}
            height="150px"
            width="150px"
            alt="skill_icons"
          />
        ))}
      </Container>
    </>
  );
};

export default Skills;
