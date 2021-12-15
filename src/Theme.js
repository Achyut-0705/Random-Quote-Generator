import { orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
  },
  status: {
    danger: orange[500],
  },
});

export default theme;
