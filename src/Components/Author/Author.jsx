import React, { useState } from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import theme from "../../Theme";
import { Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    height: "40px",
    width: "40%",
    padding: theme.spacing(5),
    cursor: "pointer",
    transition: "all 0.3s ease",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#333333",
      color: "#F2F2F2",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  arrow: {
    fontSize: "2rem",
  },
});

function Author(props) {
  const classes = useStyles();
  const [show, setShow] = useState("none");

  const handleEnter = () => {
    setShow("block");
  };

  const handleLeave = () => {
    setShow("none");
  };

  return (
    <Box
      className={classes.root}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={props.handleClick}
    >
      <div className="left">
        <Typography component="div" variant="h5">
          {props.authorName}
        </Typography>
        <Typography
          component="div"
          variant="subtitle2"
          style={{ color: "#828282" }}
        >
          {props.genre}
        </Typography>
      </div>
      <div className={classes.arrow} style={{ display: show }}>
        <ArrowRightAltIcon />
      </div>
    </Box>
  );
}

export default Author;
