import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0e916f82-036f-468a-a098-52592391d3a8/null/IN-en-20240902-POP_SIGNUP_TWO_WEEKS-perspective_a8d5d4ae-15d5-4414-b272-b12d2fce75cd_large.jpg"
          alt=""
        />
      </div>
      <form className="rounded-lg absolute p-12 w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-85  ">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className=" bg-slate-700 p-4 my-4 w-full rounded-sm"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className=" bg-slate-700 p-4 my-4 w-full rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-slate-700 p-4 my-4 w-full rounded-sm "
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-sm ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="py-4">
          {isSignIn ? (
            <p className="py-4">
              New To Netflix?{" "}
              <span
                className="cursor-pointer text-red-500"
                onClick={toggleForm}
              >
                Sign Up Now?
              </span>
            </p>
          ) : (
            <p className="py-4">
              Already Registered?{" "}
              <span
                className="cursor-pointer text-red-500"
                onClick={toggleForm}
              >
                Sign In.
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
