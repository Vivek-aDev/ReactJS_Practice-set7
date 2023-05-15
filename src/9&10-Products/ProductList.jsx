import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function ProductList() {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [input, setInput] = useState("");

  const getData = async (url) => {
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setProducts(data.products);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData("https://example.com/api/products");
  }, []);

  useEffect(() => {
    if (products) {
      let array = [...products];
      array.sort((a, b) => b.rating - a.rating);
      setSortedProducts(array);
    }
  }, [products]);

  const searchHandler = (e) => {
    setInput(e.target.value);
    let inputValue = e.target.value.toLowerCase();
    console.log(inputValue);
    let searchedItems = products.filter(({ name }) =>
      name.toLowerCase().includes(inputValue)
    );
    setSortedProducts(searchedItems);
  };

  return (
    <div>
      <h2>Products</h2>
      <input
        type="text"
        placeholder="color"
        onChange={searchHandler}
        value={input}
      />
      <ul>
        {sortedProducts.map(({ name, price, quantity, rating }) => (
          <li key={rating}>
            <h3>Name: {name}</h3>
            <p>
              <b>Price:</b>
              {price}
            </p>
            <p>
              <b>Quantity:</b>
              {quantity}
            </p>
            <p>
              <b>Rating:</b>
              {rating}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
