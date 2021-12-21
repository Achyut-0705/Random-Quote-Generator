import { makeStyles, ThemeProvider } from "@mui/styles";
import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Item from "./Components/Item/Item";
import theme from "./Theme";
import Author from "./Components/Author/Author";
import { Backdrop, CircularProgress } from "@mui/material";

const useStyle = makeStyles({
  container: {
    width: "100vw",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    overflow: "hidden",
  },
  author: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

async function getRandomQuote() {
  const url = "https://api.quotable.io/random";
  const result = await fetch(url);
  const data = await result.json();
  return data;
}

async function getQuoteFromAuthor(auth) {
  const url = `https://api.quotable.io/quotes?author=Walter+Lippmann`;
  const result = await fetch(url);
  const data = await result.json();
  return data.data;
}

function App() {
  const classes = useStyle();

  const [open, setOpen] = useState(false);
  const [quote, setQuote] = useState(() => {
    const data = {
      content: "",
      author: "",
      tags: [""],
    };
    return data;
  });

  const handleClick = () => {
    getQuoteFromAuthor(quote.author).then((val) => console.log(val));
  };

  const refresh = () => {
    setOpen(true);
    getRandomQuote().then((val) => {
      setOpen(false);
      setQuote(val);
      // console.log(val);
    });
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavBar handleClick={refresh} />
      <div className={classes.container}>
        <Item innerText={quote.content} leftHandle={true} />
        <div className={classes.author}>
          <Author
            handleClick={handleClick}
            authorName={quote.author}
            genre={quote.tags.length > 1 ? quote.tags[1] : quote.tags[0]}
          />
        </div>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress />
      </Backdrop>
    </ThemeProvider>
  );
}

export default App;
