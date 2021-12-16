import { ThemeProvider } from "@mui/styles";
import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Item from "./Components/Item/Item";
import theme from "./Theme";
import { Grid } from "@mui/material";

const text =
  "“The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.”";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        <Grid item>
          <NavBar />
        </Grid>
        <Grid item>
          <Item leftHandle={true} innerText={text} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
