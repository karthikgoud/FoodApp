import LogButton from "./LogButton";

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

      {/* conditional rendering */}
      {/* {condition ? true : false} */}

      <LogButton status={true} />
    </div>
  );
};

export default Header;
