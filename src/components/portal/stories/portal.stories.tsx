import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from "@chakra-ui/react";

import React from "react";

import { Portal, PortalManager } from "../";

export default {
  title: "Portal",
  component: Portal,
};

export const BasicPortal = () => (
  <>
    <p>Welcome</p>
    <Portal>This text has been portaled</Portal>
  </>
);

export const WithMountRef = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <p>Welcome</p>
      <Portal containerRef={ref}>
        <span>This text has been portaled</span>
      </Portal>
      <div id="iframe" ref={ref}>
        Portal Div
      </div>
    </>
  );
};

function Wrapper(props: any) {
  const { offset, color, children } = props;
  return (
    <div
      style={{
        position: "fixed",
        top: offset || "46%",
        left: offset || "46%",
        width: "200px",
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "20px",
        paddingRight: "20px",
        backgroundColor: color,
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}

export const NestedPortals = () => (
  <Portal>
    <Wrapper color="red">Welcome</Wrapper>
    <Portal>
      <Wrapper offset="40%" color="green">
        Welcome
      </Wrapper>
      <Portal>
        <Wrapper offset="30%" color="tomato">
          Welcome
        </Wrapper>
      </Portal>
    </Portal>
  </Portal>
);

export const WithZIndex = () => (
  <PortalManager zIndex={5}>
    <Menu>
      <MenuButton as={Button} variant="outline">
        Hola
      </MenuButton>
      <Portal>
        <MenuList>
          <MenuItem>item1</MenuItem>
          <MenuItem>item2</MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  </PortalManager>
);

export const WithZIndexPopover = () => (
  <PortalManager zIndex={20}>
    <Popover isOpen>
      <PopoverTrigger>
        <p>Popover</p>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverBody>I am a popover</PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  </PortalManager>
);

export const WithZIndexTooltip = () => (
  <PortalManager zIndex={20}>
    <Tooltip isOpen label="I am a tooltip">
      Tooltip
    </Tooltip>
  </PortalManager>
);

export const WithCustomContainer = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <div>
      <Portal containerRef={ref}>
        <div className="baba">
          Welcome man
          <Portal>Testing my powers</Portal>
        </div>
      </Portal>
      <div style={{ background: "red" }} ref={ref} />
    </div>
  );
};
