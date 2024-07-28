import React, { useState } from "react";
import { border, Box, height, Stack } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Drawer from "@mui/material/Drawer";
import NewEmployee from "./newEmployee";
import EmployeeDetail from "./employeeDetail";

const root = {
  minHeight: "92vh",
  margin: "20px",
};

function Employee() {
  const [data, setData] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpen = () => {
    setOpenDrawer(true);
  };

  const handleClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Box sx={{ ...root }}>
      <Grid container spacing={1}>
        <Grid item sm={12}>
          <Stack
            direction="row"
            alignItems="flex-end"
            justifyContent="flex-end"
          >
            <Button
              onClick={handleOpen}
              startIcon={<AddIcon />}
              variant="contained"
              size="small"
            >
              Add New Employee
            </Button>
          </Stack>
        </Grid>
        <Grid item sm={12}>
          <EmployeeDetail data={data} setData={setData} />
        </Grid>
      </Grid>
      <Drawer open={openDrawer} onClose={handleClose} anchor="right">
        <NewEmployee handleClose={handleClose} data={data} setData={setData} />
      </Drawer>
    </Box>
  );
}

export default Employee;
