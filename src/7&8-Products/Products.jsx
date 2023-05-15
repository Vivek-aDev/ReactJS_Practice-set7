import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function Products() {
  const [productsData, setProductsData] = useState([]);
  const [sortBy, setSortBy] = useState("reset");

  const getData = async (url) => {
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setProductsData(data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData("https://example.com/api/products");
  }, []);

  const handleSortByPrice = (sort) => {
    setSortBy(sort);
  };

  const getSortedProducts = () => {
    let productsArray = [...productsData];
    if (sortBy === "low") {
      productsArray.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high") {
      productsArray.sort((a, b) => b.price - a.price);
    }
    return productsArray;
  };

  const sortedProducts = getSortedProducts();

  return (
    <div>
      <h2>Products</h2>
      <div>
        Sort By Price:
        <button onClick={() => handleSortByPrice("low")}>Low to High</button>
        <button onClick={() => handleSortByPrice("high")}>High to Low</button>
        <button onClick={() => handleSortByPrice("reset")}>Reset</button>
      </div>
      {sortedProducts.map(({ name, description, price, quantity }) => (
        <div>
          <h2>
            <b>Name: </b>
            {name}
          </h2>
          <p>
            <b>Description</b>
            {description}
          </p>
          <p>
            <b>Price: </b>
            {price}
          </p>
          <p>
            <b>Quantity: </b>
            {quantity}
          </p>
        </div>
      ))}
    </div>
  );
}
