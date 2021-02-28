import React from "react";
import { Container } from "@chakra-ui/layout";
import { Input, HStack, RadioGroup, Radio, Select } from "@chakra-ui/react";
import { FormControl, FormLabel, FormHelperText } from "../";

export default {
  title: "Form Control",
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => (
  <FormControl id="email">
    <FormLabel>Email address</FormLabel>
    <Input type="email" placeholder="email@example.com" />
    <FormHelperText>We'll never share your email.</FormHelperText>
  </FormControl>
);

export const withRadio = () => (
  <FormControl as="fieldset">
    <FormLabel as="legend">Favorite dish</FormLabel>
    <RadioGroup defaultValue="chili">
      <HStack spacing="24px">
        <Radio value="chili" style={{ borderColor: "rgb(226, 232, 240)" }}>
          Chili con carne
        </Radio>
        <Radio value="Nagato" style={{ borderColor: "rgb(226, 232, 240)" }}>
          Lasagne
        </Radio>
        <Radio value="Itachi" style={{ borderColor: "rgb(226, 232, 240)" }}>
          Pasta carbonara
        </Radio>
        <Radio value="taco" style={{ borderColor: "rgb(226, 232, 240)" }}>
          Taco
        </Radio>
      </HStack>
    </RadioGroup>
    <FormHelperText>Damn good food</FormHelperText>
  </FormControl>
);

export const withRequiredInput = () => (
  <FormControl id="first-name" isRequired>
    <FormLabel>First name</FormLabel>
    <Input placeholder="First name" />
  </FormControl>
);

export const withSelect = () => (
  <FormControl id="country">
    <FormLabel>Country</FormLabel>
    <Select placeholder="Select country">
      <option>United Arab Emirates</option>
      <option>Nigeria</option>
    </Select>
  </FormControl>
);
