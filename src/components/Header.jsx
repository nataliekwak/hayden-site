import {
  Button,
  Divider,
  Drawer,
  DrawerContent,
  Navbar,
  NavbarBrand,
  NavbarContent,
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
    <Navbar className="max-h-20 p-2 shadow-sm flex">
      <NavbarBrand className="flex justify-start">
        <Button isIconOnly variant="light" onPress={() => handleOpen()}>
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
          <div className="flex flex-col gap-5 p-4 mt-10">
            <Button
              startContent={<HomeIcon size={32} />}
              size="large"
              variant="light"
              className="flex self-start gap-3 ml-3 font-semibold text-xl"
            >
              Home
            </Button>
            <Divider />
            <Button
              startContent={<WorkIcon size={32} />}
              size="large"
              variant="light"
              className="flex self-start gap-3 ml-3 font-semibold text-xl"
            >
              Portfolio
            </Button>
            <Divider />
            <Button
              startContent={<StickyNote2Icon size={32} />}
              size="large"
              variant="light"
              className="flex self-start gap-3 ml-3 font-semibold text-xl"
            >
              Resume
            </Button>
          </div>
        </DrawerContent>
      </Drawer>

      <NavbarContent className="flex flex-1 justify-center items-center min-w-fit">
        <div className="flex flex-row items-center gap-4">
          <img src={logo} alt="Logo" className="h-10" />
          <h1 className="font-extrabold text-3xl">Hayden Lyle</h1>
        </div>
      </NavbarContent>
      <NavbarContent />
    </Navbar>
  );
};

export default Header;
