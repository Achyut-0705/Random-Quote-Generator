import { makeStyles, ThemeProvider } from "@mui/styles";
import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Item from "./Components/Item/Item";
import theme from "./Theme";
import Author from "./Components/Author/Author";
import { Backdrop, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

const useStyle = makeStyles({
  container: {
    width: "100vw",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    maxHeight: "100%",
    overflowY: "auto",
    margin: "auto",
  },
  author: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // position: "fixed",
    // bottom: "0",
    // left: "0",
    width: "100%",
  },
});

async function getRandomQuote() {
  const url = "https://api.quotable.io/random";
  const result = await fetch(url);
  const data = await result.json();
  return data;
}

async function getQuoteFromAuthor(auth) {
  const url = `https://api.quotable.io/quotes?author=${auth}`;
  const result = await fetch(url);
  const data = await result.json();
  return data.results;
}

function App() {
  const classes = useStyle();

  const [open, setOpen] = useState(false);
  const [list, setList] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(() => {
    const data = {
      content: "",
      author: "",
      tags: [""],
    };
    return data;
  });

  const handleClick = () => {
    setOpen(true);
    const author = quote.author;
    getQuoteFromAuthor(author).then((result) => {
      setList(true);
      setOpen(false);
      setQuotes(result);
      console.log(result);
    });
  };

  const refresh = () => {
    setOpen(true);
    setList(false);
    getRandomQuote().then((val) => {
      setOpen(false);
      setQuote(val);
    });
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <NavBar handleClick={refresh} />
      </Box>
      {!list && (
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
      )}

      {list && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{quote.author}</h1>
          {quotes.map((item) => (
            <Item innerText={item.content} leftHandle={true} />
          ))}
        </Box>
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress />
      </Backdrop>
      <footer className={classes.footer}>Created by Achyut ❤️</footer>
    </ThemeProvider>
  );
}

export default App;
