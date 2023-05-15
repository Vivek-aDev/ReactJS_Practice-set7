import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function RandomQuote() {
  const [quoteData, setQuoteData] = useState([]);

  const getData = async () => {
    try {
      const { content, author } = await fakeFetch();
      setQuoteData({ content, author });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const { content, author } = quoteData;

  return (
    <div>
      <h2>Random Quotes</h2>
      <p>"{content}"</p>
      <p>- {author}</p>
      <button onClick={getData}>New Quote</button>
    </div>
  );
}
