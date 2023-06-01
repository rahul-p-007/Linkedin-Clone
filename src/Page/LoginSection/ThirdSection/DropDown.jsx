import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Portal,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function DropDown() {
  return (
    <div>
      <Menu>
        <MenuButton>Choose a topic to learn more</MenuButton>
        <Portal>
          <MenuList>
            <MenuItem>Menu 1</MenuItem>
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File</MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </div>
  );
}

export default DropDown;
