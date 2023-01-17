import React from "react";
import LogButton from "./LogButton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRduzhKVxL-LUP0DQw-PpcPv7E6NdhS6MwIEOYA2uYhuqAOfHQLTPhlqXFiycmioYwSnBU&usqp=CAU" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>Cart</li>
      </ul>

      {/* conditional rendering */}
      {/* {condition ? true : false} */}

      <LogButton status={false} />
    </div>
  );
};

export default Header;
