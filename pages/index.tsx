import Hero from "@components/Hero";
import Navbar from "@components/Navbar";
import Skills from "@components/Skills";
// import SelectPalette from "@components/SelectPalette";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import Section from "@styles/components/Section";
// import { Headline } from "@styles/components/Text";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Container from "styles/components/Container";
import PreviousWork from "./../components/PreviousWork";

const Home: NextPage = () => {
  const [showPalette, setShowPalette] = React.useState(true);

  return (
    <>
      <Head>
        <title>Sign Me Up | Cardo Dalisay</title>
        <meta name="description" content="Cardo Dalisay Immortal Portfolio" />
      </Head>
      <TitleAndMetaTags title="Cardo Dalisay | Immortal Portfolio" />
      <Navbar show={showPalette} setShow={setShowPalette} />
      <Section id="about" color="background">
        <Hero />
      </Section>
      <Section id="skills" color="main">
        <Container className="title column">
          <Skills />
        </Container>
      </Section>
      <Section
        id="previousWork"
        color="prevWorkSection"
        css={{
          height: "100%",
        }}
      >
        <PreviousWork />
      </Section>
    </>
  );
};

export default Home;
