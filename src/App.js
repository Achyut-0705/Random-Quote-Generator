import { ThemeProvider } from "@mui/styles";
import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Item from "./Components/Item/Item";
import theme from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Item />;
    </ThemeProvider>
  );
}

export default App;
