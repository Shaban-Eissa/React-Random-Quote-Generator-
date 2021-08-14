import React, { useState, useEffect } from "react";
import TwitterIcon from "../twitter.svg";
import TumblrIcon from "../tumblr.svg";
const Quotes = () => {
  const [quotes, setQuotes] = useState("title");
  const [author, setAuthor] = useState("");
  const handleClick = () => {
    getQuotes();
  };

  useEffect(() => {
    getQuotes();
  }, []);
  const getQuotes = () => {
    let URL =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];
        setQuotes(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };
  return (
    <div id="quote-box">
      <div id="text">{quotes}</div>
      <div id="author">
        <p>{author}</p>
      </div>
      <div id="buttons">
        <div className="social-media">
          <a href="#" id="twet-quote">
            <span>
              <img src={TwitterIcon} alt=""></img>
            </span>
          </a>
          <a href="#" id="tumlr-quote">
            <span>
              <img src={TumblrIcon} alt=""></img>
            </span>
          </a>
        </div>
        <button onClick={handleClick} id="new-quote">
          New Quote
        </button>
      </div>
    </div>
  );
};

export default Quotes;
