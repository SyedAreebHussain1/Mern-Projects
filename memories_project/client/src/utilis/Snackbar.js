import React, { useEffect } from "react";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Snackbar from "@mui/material/Snackbar";
import { Grid, Box, Snackbar, Button } from "@material-ui/core";
export default function PositionedSnackbar({ msg }) {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  useEffect(() => {
    handleClick({ vertical: "top", horizontal: "center" });
  }, [msg]);

  const buttons = (
    <React.Fragment>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button>Top-Center</Button>
      </Box>
    </React.Fragment>
  );

  return (
    <Box sx={{ width: 500 }}>
      {/* {buttons} */}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={msg}
        key={vertical + horizontal}
      />
    </Box>
  );
}
