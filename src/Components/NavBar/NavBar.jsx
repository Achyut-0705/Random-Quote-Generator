import * as React from "react";
import AutoRenewIcon from "@mui/icons-material/Autorenew";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar } from "@mui/material";

const useStyles = makeStyles(() => ({
  nav: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "white",
  },
}));

function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <AppBar
      position="sticky"
      sx={{ boxShadow: "none", width: "100vw", margin: "0", padding: "0" }}
    >
      <Toolbar className={classes.nav}>
        <Button
          variant="text"
          style={{ color: "#333333" }}
          size="large"
          endIcon={<AutoRenewIcon />}
          onClick={props.handleClick}
          sx={{ textTransform: "lowercase" }}
        >
          Refresh
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default ButtonAppBar;
