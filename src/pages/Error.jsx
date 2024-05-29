import React from "react";
import { Link, useRouteError } from "react-router-dom";
function Error() {
  const error = useRouteError();

  if (error.status == 404) {
    return (
      <div className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page Note Fount
          </h1>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary">
              Go back home{" "}
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
  }
  return (
    <div className="grid min-h-[100vh] place-items-center px-8">
      <h4 className="text-center text-bold text-4xl">there was a error</h4>
    </div>
  );
}

export default Error;
