import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CompLoader() {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" , p:2}}
    >
      <CircularProgress />
    </Box>
  );
}
