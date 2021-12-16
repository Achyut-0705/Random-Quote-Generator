import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
  },
  typography: {
    fontFamily: "'Raleway', 'sans-serif'",
  },
  button: {
    textTransform: "none",
  },
});

export default theme;
