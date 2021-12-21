import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import theme from "../../Theme";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingLeft: theme.spacing(3),
    width: "50%",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
}));

// borderLeft:boolean -->  "5px solid #F7DF94" : null --> for left border
// innerText: string  --> inner text to show inside of typography
// bold: boolean -->

export default function Item(props) {
  const classes = useStyles();
  const styles = {
    ...classes,
    borderLeft: props.leftHandle ? "5px solid #F7DF94" : "",
    fontWeight: props.bold ? theme.typography.fontWeightBold : "",
  };
  return (
    <Typography variant="h6" className={classes.wrapper} style={styles} mb={5}>
      {props.innerText}
    </Typography>
  );
}
