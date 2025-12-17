import { useState } from "react";
import { Button, ButtonGroup, Drawer, Stack, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import WorkIcon from "@mui/icons-material/Work";

import logo from "../assets/stick_head.PNG";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", maxHeight: 80, padding: 2 }}
    >
      <Button
        onClick={toggleDrawer(true)}
        sx={{ position: "absolute", left: 16, color: "black" }}
      >
        <MenuIcon fontSize="large" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Stack direction="column" sx={{ width: 250, padding: 2 }}>
          <ButtonGroup
            orientation="vertical"
            aria-label="Site Menu"
            variant="text"
            color="black"
            sx={{ width: "100%" }}
          >
            <Button
              startIcon={<HomeIcon />}
              color="black"
              size="large"
              sx={{ justifyContent: "flex-start" }}
            >
              Home
            </Button>
            <Button
              startIcon={<WorkIcon />}
              color="black"
              size="large"
              sx={{ justifyContent: "flex-start" }}
            >
              Portfolio
            </Button>
            <Button
              startIcon={<StickyNote2Icon />}
              color="black"
              size="large"
              sx={{ justifyContent: "flex-start" }}
            >
              Resume
            </Button>
          </ButtonGroup>
        </Stack>
      </Drawer>
      <img src={logo} alt="Logo" style={{ height: 40, marginRight: 16 }} />
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Hayden Lyle
      </Typography>
    </Stack>
  );
};

export default Header;
