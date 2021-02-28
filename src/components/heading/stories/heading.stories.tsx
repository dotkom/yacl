import React from "react";
import { Container, Stack } from "@chakra-ui/layout";
import { Heading } from "../";

export default {
  title: "Heading",
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
  component: Heading,
};

export const basic = () => (
  <Stack spacing={3}>
    <Heading fontSize="6xl">(6xl) Online Text</Heading>
    <Heading fontSize="5xl">(5xl) Online Text</Heading>
    <Heading fontSize="4xl">(4xl) Online Text</Heading>
    <Heading fontSize="3xl">(3xl) Online Text</Heading>
    <Heading fontSize="2xl">(2xl) Online Text</Heading>
    <Heading fontSize="xl">(xl) Online Text</Heading>
    <Heading fontSize="lg">(lg) Online Text</Heading>
    <Heading fontSize="md">(md) Online Text</Heading>
    <Heading fontSize="sm">(sm) Online Text</Heading>
    <Heading fontSize="xs">(xs) Online Text</Heading>
  </Stack>
);

export const truncated = () => (
  <Heading fontSize="md" isTruncated>
    Lorem ipsum is placeholder text commonly used in the graphic, print, and
    publishing industries for previewing layouts and visual mockups.
  </Heading>
);

export const styled = () => (
  <Stack spacing={2}>
    <Heading color="blue.500" fontSize="30px">
      Custom font-size and color
    </Heading>
    <Heading as="i">Italic</Heading>
    <Heading as="u">Underline</Heading>
    <Heading as="b">Bold</Heading>
    <Heading as="abbr">I18N</Heading>
    <Heading as="cite">Citation</Heading>
    <Heading as="del">Deleted</Heading>
    <Heading as="em">Emphasis</Heading>
    <Heading as="ins">Inserted</Heading>
    <Heading as="kbd">Ctrl + C</Heading>
    <Heading as="mark">Highlighted</Heading>
    <Heading as="s">Strikethrough</Heading>
    <Heading as="samp">Sample</Heading>
    <Heading as="sub">sub</Heading>
    <Heading as="sup">sup</Heading>
  </Stack>
);
