import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageID } from "../config.js";
import Shimmer from "./Shimmer.js";

const RestaurantMenu = () => {
  const param = useParams();
  const { resid } = param;
  console.log(resid);

  const [restaurantDetails, setRestaurantDetails] = useState(null);

  useEffect(() => {
    getResDetails();
  }, []);

  async function getResDetails() {
    let url =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9698196&lng=77.7499721&restaurantId=" +
      resid +
      "&submitAction=ENTER";

    const data = await fetch(url);
    const json = await data.json();
    // console.log(json?.data?.cards[0]?.card?.card?.info);
    setRestaurantDetails(json?.data?.cards[0]?.card?.card?.info);
  }

  return !restaurantDetails ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <img src={imageID + restaurantDetails.cloudinaryImageId} />
        <h1>id : {restaurantDetails.id}</h1>
        <h2>{restaurantDetails.name}</h2>
        <h2>{restaurantDetails.city}</h2>
        <h2>{restaurantDetails.locality}</h2>
        <h2>{restaurantDetails.areaName}</h2>
        <h2>{restaurantDetails.avgRating}</h2>
        <h2>{restaurantDetails.costForTwoMessage}</h2>
      </div>
    </>
  );
};

export default RestaurantMenu;
