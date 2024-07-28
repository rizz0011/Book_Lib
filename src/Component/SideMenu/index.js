import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Grid, IconButton, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import TableRowsIcon from '@mui/icons-material/TableRows';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import PortraitIcon from '@mui/icons-material/Portrait';
import { Stack } from "@mui/system";

function SideMenu({closeDrawer}) {
  const history = useHistory();

  const handleTable = () => {
    console.log('you are clicked')
    history.push('/tableView');
    closeDrawer()
  }

  const handleBookDetails =  () => {
    history.push('/bookList');
    closeDrawer()
  }

  const handleEmployee =  () => {
    history.push('/employee');
    closeDrawer()
  }

  const backToHome = () => {
    history.push('/')
    closeDrawer()
  }

  return (
    <Box sx={{ width: 230 }}>
      <Stack direction='row' spacing={2}>
      <IconButton onClick={backToHome}>
            <ArrowCircleLeftIcon/>
          </IconButton>
          <Typography
            sx={{ p: 1, fontWeight: 500, fontSize: 20 }}
          >
            Menu Item
          </Typography>
      </Stack>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleTable}>
            <ListItemIcon><TableRowsIcon/></ListItemIcon>
            <ListItemText primary={"Table View"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleBookDetails} >
            <ListItemIcon><AccountBoxIcon/></ListItemIcon>
            <ListItemText primary={"User Details"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleEmployee} >
            <ListItemIcon><PortraitIcon/></ListItemIcon>
            <ListItemText primary={"Employee"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default SideMenu;
