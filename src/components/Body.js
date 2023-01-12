import Card from "./Card";
import { restaurantList } from "../../config";
import { useState } from "react";

function filterData(searchTxt, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.name.includes(searchTxt)
  );
  return filterData;
}

const Body = () => {
  //create State for storing input value
  const [searchTxt, setSearchTxt] = useState("");

  //state for restaurant list for filter
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <>
      <div className="search-container">
        <input
          className="search-txt"
          type="text"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            return setSearchTxt(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchTxt, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="cards-div">
        {/* For each restaurant returns a card inside cards-div */}
        {restaurants.map((restaurant) => {
          return <Card {...restaurant} key={restaurant.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
