import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong!!</h2>
      <h2>
        {error.status} : {error.statusText}
      </h2>
      <p>{error.error.message}</p>
    </div>
  );
};

export default ErrorPage;
