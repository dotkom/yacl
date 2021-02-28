import React from "react";
import { Container } from "@chakra-ui/layout";
import { Tag, TagCloseButton, TagLabel, TagLeftIcon } from "../";
import { HStack } from "../../layout";
import { AddIcon } from "@chakra-ui/icons";

export default {
  title: "Tag",
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
  component: Tag,
};

export const basic = () => <Tag>Simple Tag</Tag>;

export const multipleSizes = () => (
  <HStack spacing={4}>
    {["sm", "md", "lg"].map((size) => (
      <Tag size={size} key={size} variant="solid" colorScheme="teal">
        Teal
      </Tag>
    ))}
  </HStack>
);

export const withLeftIcon = () => (
  <HStack spacing={4}>
    {["sm", "md", "lg"].map((size) => (
      <Tag size={size} key={size} variant="subtle" colorScheme="blue">
        <TagLeftIcon boxSize="12px" as={AddIcon} />
        <TagLabel>Rock Content</TagLabel>
      </Tag>
    ))}
  </HStack>
);

export const withCloseButton = () => (
  <HStack spacing={4}>
    {["sm", "md", "lg"].map((size) => (
      <Tag
        size={size}
        key={size}
        borderRadius="full"
        variant="solid"
        colorScheme="green"
      >
        <TagLabel>Green</TagLabel>
        <TagCloseButton />
      </Tag>
    ))}
  </HStack>
);

export const withCustomElements = () => (
  <Tag colorScheme="red" borderRadius="full">
    <TagLabel>Maracaípe</TagLabel>
  </Tag>
);
