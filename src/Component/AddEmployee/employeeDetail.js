import React from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const root = {};

function EmployeeDetail({ data , setData}) {
  console.log(data);


  

  return (
    <Box>
        <Typography variant="body2" sx={{p:2}}>({data.length} Record Found)</Typography>
      {data && data.map((item, index) => (
        <Card
        key={index}
          sx={{ height: "50px", p: 2, m: 2, backgroundColor: "darkseagreen", }}
        >
          <Grid container spacing={2}>
            <Grid item sm={3}>
              <Typography>{item?.data?.name || "-"}</Typography>
              <Typography variant="body1">Name</Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography>{item?.data?.gender || "-"}</Typography>
              <Typography variant="body1">Gender</Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography>{item?.data?.designation || "-"}</Typography>
              <Typography variant="body1">Designation</Typography>
            </Grid>
            <Grid item sm={3}>
              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
                sx={{p:"12px"}}
              >
                <Button
                size="small"
                color='inherit'
                >Delete</Button>
              </Stack>
            </Grid>
          </Grid>
        </Card>
      ))}
    </Box>
  );
}

export default EmployeeDetail;
