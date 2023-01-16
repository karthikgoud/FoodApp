import { useState } from "react";

const LogButton = (props) => {
  // status is true or false passed as props in parent component
  const { status } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(status);
  return (
    <>
      {/* conditional rendering */}
      {/* {condition === state ? true : false} */}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};

export default LogButton;
