import * as React from "react";
// import Box from '@mui/material/Box';
import AutoRenewIcon from "@mui/icons-material/Autorenew";
import Button from "@mui/material/Button";
// import { makeStyles } from '@mui/styles';
import { makeStyles } from "@mui/styles";
// import { styled } from "@mui/system";
import { AppBar, Toolbar } from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles(() => ({
  nav: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "white",
  },
}));

export default function ButtonAppBar() {
  const handleClick = () => {
    console.log("refresh");
  };

  const classes = useStyles();

  return (
    <AppBar position="sticky" sx={{ boxShadow: "none", width: "100vw" }}>
      <Toolbar className={classes.nav}>
        {/* hello */}
        <Button
          variant="text"
          style={{ color: "#333333" }}
          size="large"
          endIcon={<AutoRenewIcon />}
          onClick={handleClick}
          sx={{ textTransform: "lowercase" }}
        >
          Refresh
        </Button>
      </Toolbar>
    </AppBar>
  );
}
