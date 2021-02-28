import React from "react";
import { Container, Stack } from "@chakra-ui/layout";
import { Text } from "../";

export default {
  title: "Text",
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
  component: Text,
};

export const basic = () => (
  <Stack spacing={3}>
    <Text fontSize="6xl">(6xl) Online Text</Text>
    <Text fontSize="5xl">(5xl) Online Text</Text>
    <Text fontSize="4xl">(4xl) Online Text</Text>
    <Text fontSize="3xl">(3xl) Online Text</Text>
    <Text fontSize="2xl">(2xl) Online Text</Text>
    <Text fontSize="xl">(xl) Online Text</Text>
    <Text fontSize="lg">(lg) Online Text</Text>
    <Text fontSize="md">(md) Online Text</Text>
    <Text fontSize="sm">(sm) Online Text</Text>
    <Text fontSize="xs">(xs) Online Text</Text>
  </Stack>
);

export const truncated = () => (
  <Text fontSize="md" isTruncated>
    Lorem ipsum is placeholder text commonly used in the graphic, print, and
    publishing industries for previewing layouts and visual mockups.
  </Text>
);

export const styled = () => (
  <Stack spacing={2}>
    <Text color="blue.500" fontSize="30px">
      Custom font-size and color
    </Text>
    <Text as="i">Italic</Text>
    <Text as="u">Underline</Text>
    <Text as="b">Bold</Text>
    <Text as="abbr">I18N</Text>
    <Text as="cite">Citation</Text>
    <Text as="del">Deleted</Text>
    <Text as="em">Emphasis</Text>
    <Text as="ins">Inserted</Text>
    <Text as="kbd">Ctrl + C</Text>
    <Text as="mark">Highlighted</Text>
    <Text as="s">Strikethrough</Text>
    <Text as="samp">Sample</Text>
    <Text as="sub">sub</Text>
    <Text as="sup">sup</Text>
  </Stack>
);
