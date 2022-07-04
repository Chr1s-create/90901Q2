import { HeroImage } from "styles/components/HeroImage";
import React, { useId } from "react";
import Container from "styles/components/Container";
import { Headline, Paragraph } from "@styles/components/Text";
import { styled } from "stitches.config";

const StyleImage = styled("img", {
  borderRadius: "50%",
  height: "300px",
  width: "300x",
  background: "white",
});

const Hero = () => {
  return (
    <>
      <Container
        css={{
          padding: "$3",
          height: "100vh",
        }}
      >
        <HeroImage />
      </Container>
      <Container
        className="column"
        css={{
          padding: "$3",
        }}
      >
        <StyleImage src={`https://avatars.dicebear.com/api/micah/:cardo.svg`} />
        <Headline data-aos="fade-down" data-aos-duration="1200">
          Cardo Dalisay | Immortal
        </Headline>
        <Paragraph
          data-aos="fade-up"
          ata-aos-duration="1300"
          css={{
            textAlign: "center",
          }}
          className="subtext mb2"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          unde nulla officia sed, porro placeat neque similique. Est, nam quo?
        </Paragraph>
        <Paragraph
          data-aos="fade-up"
          data-aos-duration="1500"
          css={{
            textAlign: "center",
          }}
          className="normalText mb2"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          eveniet quis id praesentium nostrum! Consequuntur natus asperiores,
          debitis cumque cum animi labore esse sint iste culpa, praesentium
          alias dolores cupiditate. Culpa commodi atque dolorum quaerat illum
          quod, porro nesciunt modi!
        </Paragraph>
      </Container>
    </>
  );
};

export default Hero;
