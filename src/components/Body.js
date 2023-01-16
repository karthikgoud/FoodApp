import Card from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchTxt, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  //create State for storing input value
  const [searchTxt, setSearchTxt] = useState("");

  const [allRestaurant, setAllRestaurant] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    // API call to get data
    console.log("API call");
    getRestaurant();
  }, []);

  // fetch data in API
  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.963372&lng=77.749855&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("initial render");

  // not render component ( early return), API error handleling
  if (!allRestaurant) {
    return null;
  }

  // conditional rendering
  return allRestaurant?.length === 0 ? (
    <>
      <Shimmer />
    </>
  ) : (
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
            const data = filterData(searchTxt, allRestaurant);
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="cards-div">
        {filteredRestaurant?.length === 0 ? (
          <h1>no Search result found</h1>
        ) : (
          filteredRestaurant.map((restaurant) => {
            return <Card {...restaurant.data} key={restaurant.data.id} />;
          })
        )}
      </div>
    </>
  );
};

export default Body;
