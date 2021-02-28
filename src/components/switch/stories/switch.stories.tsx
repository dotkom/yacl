import { HStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/system";
import React from "react";
import { Switch } from "../";

export default {
  title: "Switch",
  decorators: [
    (story: Function) => (
      <chakra.div maxWidth="lg" mx="auto" mt={6} p={6}>
        {story()}
      </chakra.div>
    ),
  ],
  component: Switch,
};

export const Base = () => <Switch colorScheme="blue" />;

export const Disabled = () => (
  <Switch isDisabled size="md" colorScheme="blue" margin="20px" />
);

export const Readonly = () => (
  <Switch isReadOnly size="md" colorScheme="blue" margin="20px" />
);

export const Invalid = () => (
  <Switch isInvalid size="md" colorScheme="blue" margin="20px" />
);

export const Usage = () => (
  <FormControl display="flex" alignItems="center">
    <FormLabel htmlFor="email-alerts" mb="0">
      Enable email alerts?
    </FormLabel>
    <Switch id="email-alerts" />
  </FormControl>
);

export const Sizes = () => {
  return (
    <HStack>
      <Switch size="sm" colorScheme="green" />
      <Switch size="md" colorScheme="green" />
      <Switch size="lg" colorScheme="green" />
    </HStack>
  );
};

export const Controlled = () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <>
      {checked ? "Checked" : "Unchecked"}
      <Switch
        isChecked={checked}
        colorScheme="blue"
        onChange={(e) => setChecked(e.target.checked)}
      />
    </>
  );
};

export const WithReactHookForm = () => {
  const defaultValues = {
    name: "Hello",
    boolean: true,
    test: true,
  };

  function onSubmit(values) {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <form>
      <input name="name" placeholder="name" />
      {/* <input type="checkbox" name="boolean" ref={register} /> */}
      <Switch name="boolean" />
      <button type="submit">Submit</button>
    </form>
  );
};
