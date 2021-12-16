import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import theme from "../../Theme";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingLeft: theme.spacing(3),
    width: "30%",
  },
}));

// borderLeft:boolean -->  "5px solid #F7DF94" : null --> for left border
// innerText: string  --> inner text to show inside of typography
// bold: boolean -->

export default function Item(props) {
  const classes = useStyles();
  const styles = {
    borderLeft: props.leftHandle ? "5px solid #F7DF94" : "",
    fontWeight: props.bold ? theme.typography.fontWeightBold : "",
  };
  return (
    <Typography variant="h6" className={classes.wrapper} style={styles}>
      {props.innerText}
    </Typography>
  );
}
