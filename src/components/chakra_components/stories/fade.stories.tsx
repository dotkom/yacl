import { useBoolean } from '@chakra-ui/hooks';
import * as React from 'react';
import { Fade } from '@chakra-ui/react';

export default {
  title: 'Chakra/Transition / Fade',
};

const Component = (props: any) => {
  const [open, { toggle }] = useBoolean(false);
  return (
    <>
      <button onClick={toggle}>Toggle Slide</button>
      <Fade
        in={open}
        style={{
          maxWidth: 400,
          background: 'red',
          padding: 30,
        }}
        {...props}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Fade>
    </>
  );
};

export const Basic = () => <Component />;
