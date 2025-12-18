import {
  Button,
  ButtonGroup,
  Drawer,
  DrawerContent,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  useDisclosure,
} from "@heroui/react";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import WorkIcon from "@mui/icons-material/Work";

import logo from "../assets/stick_head.PNG";

const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  return (
    <Navbar className="max-h-20 p-2 shadow-sm">
      <NavbarBrand className="">
        <Button
          isIconOnly
          variant="light"
          onPress={() => handleOpen()}
        >
          <MenuIcon fontSize="large" />
        </Button>
      </NavbarBrand>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="left"
        className="max-w-62.5"
      >
        <DrawerContent>
          <ButtonGroup>
            <Button startIcon={<HomeIcon />} size="large">
              Home
            </Button>
            <Button
              startIcon={<WorkIcon />}
              sx={{ justifyContent: "flex-start" }}
            >
              Portfolio
            </Button>
            <Button
              startIcon={<StickyNote2Icon />}
              sx={{ justifyContent: "flex-start" }}
            >
              Resume
            </Button>
          </ButtonGroup>
        </DrawerContent>
      </Drawer>

      <NavbarContent>
        <NavbarItem>
          <img src={logo} alt="Logo" className="h-10" />
        </NavbarItem>
        <NavbarItem>
          <h1 className="font-extrabold text-3xl">Hayden Lyle</h1>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
