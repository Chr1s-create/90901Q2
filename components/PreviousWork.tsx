import React from "react";
import Container from "@styles/components/Container";
import Card from "@styles/components/Card";
import { Headline, Paragraph } from "@styles/components/Text";
import { styled } from "stitches.config";

const StyledImage = styled("img", {
  borderRadius: "50%",
  height: "100px",
  width: "100px",
  background: "$prevWorkBg",
});

const avatars = [
  {
    name: "largs",
  },
  {
    name: "paulo",
  },
  {
    name: "milfren",
  },
  {
    name: "asong",
  },
  {
    name: "deepak",
  },
];

const PreviousWork = () => {
  return (
    <Container
      css={{
        flexDirection: "column",
        flexWrap: "wrap",
        height: "100%",
      }}
    >
      <Container>
        <Headline as={"h4"} className="m1 p2">
          Testimonials
        </Headline>
      </Container>

      <Container>
        {avatars.map((avatar) => (
          <Card key={avatar.name}>
            <StyledImage
              src={`https://avatars.dicebear.com/api/micah/:${avatar.name}.svg`}
            />
            <Headline
              css={{
                fontSize: "$4",
                color: "$cardHeading",
              }}
            >
              Lorem, ipsum.
            </Headline>
            <Paragraph
              css={{
                color: "$cardText",
              }}
              className="subtext mb2"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Paragraph>
            <Paragraph
              css={{
                color: "$cardText",
              }}
              className="normalText"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet id
              minima rerum ex aut itaque voluptates, provident pariatur? Id,
              fuga?
            </Paragraph>
          </Card>
        ))}
      </Container>
    </Container>
  );
};

export default PreviousWork;
