import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import SideMenu from "../SideMenu";
import { Button } from "@mui/material";
import Modal from '@mui/material/Modal';
import AddTodo from "../AddTodo";

function TopBar() {
  const [openDrawe, setOpenDrawer] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpenDrawer(true);
  };

  const closeDrawer = () => {
    setOpenDrawer(false);
  };

  const handleOpenModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
           School Management
          </Typography>
          <Button
          color="inherit"
          onClick={handleOpenModal}
          >
          Add User
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer open={openDrawe} onClose={closeDrawer}>
        <SideMenu closeDrawer={closeDrawer}/>
      </Drawer>

      <Modal open={open} onClose={closeModal}>
     <AddTodo closeModal={closeModal}/>
      </Modal>
    </Box>
  );
}

export default TopBar;
