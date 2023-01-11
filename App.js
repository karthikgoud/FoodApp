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

const Card = () => {
  return (
    <div className="card-container">
      <img src="https://b.zmtcdn.com/data/pictures/7/19672427/fab0f327a0193957ee122f8c72c4d2f9_featured_v2.jpg" />
      <h2>Ironhill Bangalore</h2>
      <p>4.5</p>
      <p>Marathahalli,Bangalore</p>
    </div>
  );
};

const Body = () => {
  return (
    <>
      <Card />
    </>
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
