import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header-container">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRduzhKVxL-LUP0DQw-PpcPv7E6NdhS6MwIEOYA2uYhuqAOfHQLTPhlqXFiycmioYwSnBU&usqp=CAU" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const restaurantList = [
  {
    id: 1,
    image:
      "https://b.zmtcdn.com/data/pictures/7/19672427/fab0f327a0193957ee122f8c72c4d2f9_featured_v2.jpg",
    name: "Ironhill Bangalore",
    rating: "4.5",
    place: "Bangalore",
  },
  {
    id: 2,
    image:
      "https://b.zmtcdn.com/data/pictures/0/18621880/995850eced07cd1783fab1b8e25de4ff_featured_v2.jpg",
    name: "Foxtrot",
    rating: "4.4",
    place: "Bangalore",
  },
  {
    id: 3,
    image:
      "https://b.zmtcdn.com/data/pictures/5/57795/ef1898f2ac7b29aabb4e3b80325b9118_featured_v2.jpg",
    name: "Meghana Foods",
    rating: "4.7",
    place: "Bangalore",
  },
  {
    id: 4,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/4/50574/0e9b77dd56dc25acc2d4eb67473af959_featured_v2.jpg",
    name: "KFC",
    rating: "4.5",
    place: "Bangalore",
  },
];

const Card = (props) => {
  //   console.log(props);
  //destructuring
  const { image, name, rating, place } = props.restautant;
  return (
    <div className="card-container">
      <img src={image} />
      <h2>{name}</h2>
      <p>{rating}</p>
      <p>{place}</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="cards-div">
      <Card restautant={restaurantList[0]} />
      <Card restautant={restaurantList[1]} />
      <Card restautant={restaurantList[2]} />
      <Card restautant={restaurantList[3]} />
    </div>
  );
};

const Footer = () => {
  return <h1>footer</h1>;
};
const FoodApp = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FoodApp />);
