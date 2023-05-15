import { WeatherCard } from "./1-Weather/WeatherCard";
import { User } from "./2-User/User";
import { Movies } from "./3-Movies/Movies";
import { UsersByCompany } from "./4-UsersByCompany/UsersByCompany";
import { RandomQuote } from "./5-RandomQuote/RandomQuote";
import { MoviesByGenre } from "./6-MoviesByGenre/MoviesByGenre";
import { Products } from "./7&8-Products/Products";
import { ProductList } from "./9&10-Products/ProductList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>ReactJS Practice Question Set 7</h1>
      <hr />
      <WeatherCard />
      <hr />
      <User />
      <hr />
      <Movies />
      <hr />
      <UsersByCompany />
      <hr />
      <RandomQuote />
      <hr />
      <MoviesByGenre />
      <hr />
      <Products />
      <hr />
      <ProductList />
    </div>
  );
}
