import React from "react";
import AutoRenewIcon from "@mui/icons-material/Autorenew";
import Button from "@mui/material/Button";

function RefreshButton(props) {
  return (
      <Button 
      variant="outlined" 
      endIcon={<AutoRenewIcon />} 
      onClick={props.handleClick}>
        {props.text}
      </Button>
  );
}

export default RefreshButton;
